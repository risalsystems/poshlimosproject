// Pricing formula lives here — not shipped to the browser.
const BASE      = 40;
const RATE      = 3.13;
const STOP_FEE  = 20;
const LATE_FEE  = 30;  // before 6 am

function peachRate(time) {
  const [h, m] = time.split(':').map(Number);
  const mins   = h * 60 + m;
  if (mins >= 360 && mins < 600)  return { rate: 20, label: '6 am – 10 am peak',  offPeak: false };
  if (mins >= 600 && mins < 900)  return { rate: 15, label: '10 am – 3 pm',        offPeak: false };
  if (mins >= 900 && mins < 1080) return { rate: 20, label: '3 pm – 6 pm peak',    offPeak: false };
  return { rate: 10, label: 'off-peak', offPeak: true };
}

function isValidTime(t) {
  return typeof t === 'string' && /^\d{2}:\d{2}$/.test(t);
}

const ALLOWED_ORIGINS = [
  'https://www.atlantaposhlimos.com',
  'https://atlantaposhlimos.com',
];

function corsHeaders(event) {
  const origin = event.headers?.origin ?? '';
  return {
    'Content-Type':                'application/json',
    'Access-Control-Allow-Origin': ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
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
    miles      = 0,
    time       = '09:00',
    usePeach   = false,
    stops      = 0,
    stopMiles  = 0,
    useGrat    = true,
    gratPct    = 20,
    isCustom   = false,
    customGrat = 0,
  } = body;

  // Basic input validation
  const safeMiles     = Math.max(0, Math.min(500,  parseFloat(miles)     || 0));
  const safeStops     = Math.max(0, Math.min(20,   parseInt(stops)       || 0));
  const safeStopMiles = Math.max(0, Math.min(200,  parseFloat(stopMiles) || 0));
  const safeCustom    = Math.max(0, Math.min(1000, parseFloat(customGrat)|| 0));
  const safeGratPct   = [15, 20, 25].includes(Number(gratPct)) ? Number(gratPct) : 20;
  const safeTime      = isValidTime(time) ? time : '09:00';

  const pp   = peachRate(safeTime);
  const late = parseInt(safeTime.split(':')[0]) < 6;

  const subtotal =
    BASE
    + safeMiles     * RATE
    + (late        ? LATE_FEE      : 0)
    + (usePeach    ? pp.rate       : 0)
    + safeStops    * STOP_FEE
    + safeStopMiles * RATE;

  let grat = 0;
  if (useGrat) {
    grat = isCustom ? safeCustom : subtotal * safeGratPct / 100;
  }

  const total = subtotal + grat;

  return {
    statusCode: 200,
    headers: corsHeaders(event),
    body: JSON.stringify({
      low:          Math.round(total * 0.95),
      high:         Math.round(total * 1.10),
      peachLabel:   pp.label,
      peachOffPeak: pp.offPeak,
    }),
  };
};
