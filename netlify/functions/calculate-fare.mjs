// Pricing constants
const BASE         = 40;
const RATE         = 3.13;
const STOP_FEE     = 20;
const LATE_FEE     = 30;
const MEET_GREET   = 25;
const FREE_STOP_MI = 2;

// HOT lane rate — picks the highest rate window the trip overlaps.
function hotLaneRate(startTime, durationMins) {
  const [h, m]   = startTime.split(':').map(Number);
  const startMin = h * 60 + m;
  const endMin   = startMin + Math.max(0, durationMins | 0);

  const windows = [
    { start: 360,  end: 600,  rate: 20, label: '6am–10am peak' },
    { start: 600,  end: 900,  rate: 15, label: '10am–3pm' },
    { start: 900,  end: 1080, rate: 20, label: '3pm–6pm peak' },
  ];

  let best = { rate: 10, label: 'off-peak', offPeak: true };
  for (const w of windows) {
    if (startMin < w.end && endMin > w.start && w.rate > best.rate) {
      best = { rate: w.rate, label: w.label, offPeak: false };
    }
  }
  return best;
}

function isValidTime(t) {
  return typeof t === 'string' && /^\d{2}:\d{2}$/.test(t);
}

function getMockLegs(pickup, dropoff, stops) {
  // If there are N stops, there are N + 1 legs.
  const legCount = stops.length + 1;
  const mockLegs = [];
  for (let i = 0; i < legCount; i++) {
    // Return ~12.5 miles (20116.8 meters) and 22 minutes (1320 seconds) per leg for development testing
    mockLegs.push({
      distance: { value: 20116.8, text: '12.5 mi' },
      duration: { value: 1320, text: '22 mins' }
    });
  }
  return mockLegs;
}

async function getDirections(pickup, dropoff, stops, optimize = false) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY ?? '';
  if (!apiKey) {
    console.warn("No Google Maps API key provided. Using mock legs.");
    return getMockLegs(pickup, dropoff, stops);
  }

  let routesError = null;
  let directionsError = null;

  // 1. Try the new Google Routes API first (standard for new projects)
  try {
    const url = 'https://routes.googleapis.com/directions/v2:computeRoutes';
    const requestBody = {
      origin: { address: pickup },
      destination: { address: dropoff },
      travelMode: 'DRIVE'
    };
    if (stops.length) {
      requestBody.intermediates = stops.map(stop => ({ address: stop }));
      if (optimize) {
        requestBody.optimizeWaypointOrder = true;
      }
    }

    const fieldMask = optimize 
      ? 'routes.legs.distanceMeters,routes.legs.duration,routes.optimizedIntermediateWaypointIndex'
      : 'routes.legs.distanceMeters,routes.legs.duration';

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': fieldMask
      },
      body: JSON.stringify(requestBody)
    });

    if (res.ok) {
      const data = await res.json();
      if (data.routes && data.routes[0] && data.routes[0].legs) {
        return data.routes[0].legs.map(leg => {
          const meters = leg.distanceMeters ?? 0;
          const secs = leg.duration ? parseInt(leg.duration) : 0;
          return {
            distance: { value: meters, text: `${(meters / 1609.34).toFixed(1)} mi` },
            duration: { value: secs, text: `${Math.ceil(secs / 60)} mins` }
          };
        });
      }
    } else {
      const data = await res.json().catch(() => ({}));
      routesError = data.error?.message || `HTTP ${res.status}`;
      console.warn("New Routes API failed. Error:", routesError);
    }
  } catch (error) {
    routesError = error.message;
    console.warn("Error calling new Routes API:", error);
  }

  // 2. Fallback to legacy Directions API
  const params = new URLSearchParams({
    origin:      pickup,
    destination: dropoff,
    mode:        'driving',
    units:       'imperial',
    key:         apiKey,
  });
  if (stops.length) {
    const prefix = optimize ? 'optimize:true|' : '';
    params.set('waypoints', prefix + stops.join('|'));
  }

  try {
    const res = await fetch(`https://maps.googleapis.com/maps/api/directions/json?${params}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (data.status !== 'OK') {
      directionsError = data.error_message || data.status;
      console.warn("Legacy Google Maps Directions API status is not OK:", data.status, directionsError);
    } else {
      return data.routes[0].legs;
    }
  } catch (error) {
    directionsError = error.message;
    console.error("Error fetching directions from legacy Google Maps API:", error);
  }

  // If both failed and we had a key, throw the errors instead of silent fallback to mock legs
  throw new Error(
    `Google Maps API Error:\n` +
    `- Routes API: ${routesError || 'Unknown error'}\n` +
    `- Directions API: ${directionsError || 'Unknown error'}`
  );
}

const ALLOWED_ORIGINS = [
  'https://www.atlantaposhlimos.com',
  'https://atlantaposhlimos.com',
];

function corsHeaders(event) {
  const origin = event.headers?.origin ?? '';
  return {
    'Content-Type':                 'application/json',
    'Access-Control-Allow-Origin':  ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

export const handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: corsHeaders(event), body: '' };
  }
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let body;
  try {
    body = JSON.parse(event.body ?? '{}');
  } catch {
    return { statusCode: 400, body: 'Invalid JSON' };
  }

  const {
    // Address-based routing (preferred)
    pickup  = '',
    dropoff = '',
    stops   = [],
    // Shared fields
    time             = '09:00',
    useHotLane       = body.usePeach ?? false,
    useMeetGreet     = false,
    // Legacy fields — kept for backward compatibility
    miles            = 0,
    tripDurationMins = 0,
    paidStops        = 0,
    stopMiles        = 0,
  } = body;

  let safeMiles, safeDuration, safePaid, legInfo;

  if (pickup && dropoff) {
    const cleanStops = (Array.isArray(stops) ? stops : []).filter(Boolean);
    let legs;
    let stopDirectLegs = [];

    try {
      // 1. Get the actual optimized driven route (best sequence of stops)
      legs = await getDirections(pickup, dropoff, cleanStops, true);

      // 2. Measure direct routes from pickup to each stop in parallel (no optimization)
      if (cleanStops.length > 0) {
        const promises = cleanStops.map(stop => getDirections(pickup, stop, [], false));
        const results = await Promise.all(promises);
        stopDirectLegs = results.map(res => res[0]); // each returns 1 leg
      }
    } catch (err) {
      console.error("Error in getDirections:", err);
      return {
        statusCode: 502,
        headers: corsHeaders(event),
        body: JSON.stringify({ error: err.message }),
      };
    }

    let totalMeters = 0, totalSecs = 0;
    for (const leg of legs) {
      totalMeters += leg.distance.value;
      totalSecs   += leg.duration.value;
    }
    safeMiles    = totalMeters / 1609.34;
    safeDuration = Math.ceil(totalSecs / 60);

    // Each stop is measured directly from the starting point
    let hasUsedFreeStop = false;
    legInfo = [];

    for (let i = 0; i < cleanStops.length; i++) {
      const directLeg = stopDirectLegs[i] || legs[i];
      const mi = directLeg.distance.value / 1609.34;
      const durationMins = Math.ceil(directLeg.duration.value / 60);

      let isFree = false;
      if (mi <= FREE_STOP_MI && !hasUsedFreeStop) {
        isFree = true;
        hasUsedFreeStop = true;
      }

      legInfo.push({
        isFree,
        mi:          +mi.toFixed(2),
        durationMins: durationMins,
      });
    }

    // The final destination leg is measured sequentially from the last stop
    const finalLeg = legs[legs.length - 1];
    if (finalLeg) {
      const finalMi = finalLeg.distance.value / 1609.34;
      legInfo.push({
        isFree:      false,
        mi:          +finalMi.toFixed(2),
        durationMins: Math.ceil(finalLeg.duration.value / 60),
      });
    }

    // Only legs corresponding to stops count toward additional stop fees
    safePaid = legInfo.slice(0, cleanStops.length).filter(l => !l.isFree).length;

  } else {
    // Legacy path: caller computed distance themselves
    safeMiles    = Math.max(0, Math.min(500, parseFloat(miles)          || 0));
    safeDuration = Math.max(0, Math.min(600, parseInt(tripDurationMins) || 0));
    safePaid     = Math.max(0, Math.min(5,   parseInt(paidStops)        || 0));
    legInfo      = null;
  }

  const safeTime = isValidTime(time) ? time : '09:00';
  const hl   = hotLaneRate(safeTime, safeDuration);
  const late = parseInt(safeTime.split(':')[0]) < 6;

  const lineItems = [];

  lineItems.push({ desc: 'Base fare', amount: BASE });

  const mileageAmt = +(safeMiles * RATE).toFixed(2);
  lineItems.push({ desc: `Distance (${safeMiles.toFixed(1)} mi × $${RATE}/mi)`, amount: mileageAmt });

  // Legacy stopMiles path
  const safeStopMiles = Math.max(0, Math.min(200, parseFloat(stopMiles) || 0));
  if (safeStopMiles > 0) {
    lineItems.push({
      desc:   `Stop routing (${safeStopMiles.toFixed(1)} mi × $${RATE}/mi)`,
      amount: +(safeStopMiles * RATE).toFixed(2),
    });
  }

  if (safePaid > 0) {
    lineItems.push({
      desc:   `Additional stop${safePaid > 1 ? 's' : ''} (${safePaid} × $${STOP_FEE})`,
      amount: safePaid * STOP_FEE,
    });
  }

  if (late) {
    lineItems.push({ desc: 'Late-night fee (before 6am)', amount: LATE_FEE });
  }

  if (useHotLane) {
    lineItems.push({ desc: `HOT Lane pass — ${hl.label}`, amount: hl.rate });
  }

  if (useMeetGreet) {
    lineItems.push({ desc: 'Meet & Greet — airport terminal service', amount: MEET_GREET });
  }

  const subtotal = lineItems.reduce((s, l) => s + l.amount, 0);

  return {
    statusCode: 200,
    headers:    corsHeaders(event),
    body: JSON.stringify({
      lineItems,
      subtotal:         +subtotal.toFixed(2),
      low:              Math.round(subtotal * 0.95),
      high:             Math.round(subtotal * 1.10),
      hotLabel:         hl.label,
      hotOffPeak:       hl.offPeak,
      peachLabel:       hl.label,
      peachOffPeak:     hl.offPeak,
      // Routing summary for the UI
      totalMiles:       +safeMiles.toFixed(2),
      tripDurationMins: safeDuration,
      legs:             legInfo,
    }),
  };
};
