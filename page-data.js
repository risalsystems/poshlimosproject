// ── Per-page metadata ──────────────────────────────────────────────────────────
// Consumed by vite.config.js to inject EJS locals into each HTML entry point.
// Keys match the HTML filename stem (e.g. "airport-transfers" for airport-transfers.html).

const pageData = {
  index: {
    title: "Posh Limousines of Atlanta | Premium Black SUV Chauffeur Service",
    description:
      "Experience premium luxury travel with Posh Limousines of Atlanta. Professional chauffeur services featuring Lincoln Navigators, Chevy Suburbans, and Tahoes for Airport Transfers, Weddings, Corporate Events, Safe Driver transport, and Casual Outings. Fully licensed and insured.",
    keywords:
      "limousine service atlanta, black SUV service atlanta, airport pickup atlanta, luxury chauffeur atlanta, private driver buckhead, wedding transportation atlanta, corporate limo service, lincoln navigator chauffeur, chevy suburban chauffeur atlanta",
    canonical: "https://www.atlantaposhlimos.com",
    ogTitle: "Posh Limousines of Atlanta | Premium Black SUV Chauffeur Service",
    ogDescription:
      "Sleek black executive SUVs and professional chauffeurs in Atlanta. Catering to airport, wedding, corporate, and hourly charters. Fully licensed & insured.",
    ogImage: "assets/hero_atlanta.png",
    heroImage: "assets/hero_atlanta.png",
    navPage: "home",
    calendlyType: "home",
    isHomePage: true,
    pageSchema: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Posh Limousines of Atlanta",
      "url": "https://www.atlantaposhlimos.com",
    },
  },

  "airport-transfers": {
    title: "Airport Transfers — Arrivals & Departures | Posh Limousines of Atlanta",
    description:
      "Premium black SUV airport transfer service in Atlanta. Arrivals and departures from Hartsfield-Jackson (ATL) and private aviation terminals. Real-time flight tracking, flat-rate fares, and Meet & Greet available.",
    canonical: "https://www.atlantaposhlimos.com/airport-transfers",
    ogTitle: "Airport Transfers | Arrivals & Departures | Posh Limousines of Atlanta",
    ogDescription:
      "Luxury black SUV transfers to and from ATL Airport and private jet terminals. Flat-rate fares, real-time flight tracking, and Meet & Greet service.",
    ogImage: "assets/service_airport.png",
    heroImage: "assets/service_airport.png",
    navPage: "services",
    calendlyType: "airport",
    isHomePage: false,
    pageSchema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Airport Pickup & Transfer Service",
        "description":
          "Premium black SUV airport pickup and drop-off service in Atlanta. Real-time flight tracking, up to 60 minutes complimentary wait time, and optional Meet & Greet inside the terminal. Serving Hartsfield-Jackson (ATL) and private aviation terminals.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Posh Limousines of Atlanta",
          "url": "https://www.atlantaposhlimos.com",
        },
        "areaServed": "Atlanta Metropolitan Area",
        "offers": {
          "@type": "Offer",
          "price": "115",
          "priceCurrency": "USD",
          "description": "Starting price for one-way airport transfer to/from ATL",
        },
        "url": "https://www.atlantaposhlimos.com/airport-transfers",
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.atlantaposhlimos.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Airport Transfers",
            "item": "https://www.atlantaposhlimos.com/airport-transfers",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you service Hartsfield-Jackson Atlanta International Airport (ATL)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We provide luxury black SUV pickup and drop-off service for all commercial concourses at Hartsfield-Jackson Atlanta International Airport (ATL), including domestic and international terminals. We also service private aviation FBOs and regional executive airports across the Metro Atlanta area.",
            },
          },
          {
            "@type": "Question",
            "name": "How much does an airport pickup in Atlanta cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Airport transfers start at $115 for a one-way flat-rate pickup or drop-off to/from Hartsfield-Jackson (ATL). Pricing may vary based on destination distance and time of day. Contact us for a customized quote for your specific route.",
            },
          },
          {
            "@type": "Question",
            "name": "What happens if my flight is delayed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We monitor your flight in real time. If your flight is delayed or arrives early, your chauffeur adjusts accordingly — there is no need to call us. We include up to 45 minutes of complimentary wait time after your scheduled arrival for domestic flights, and 60 minutes for international arrivals.",
            },
          },
          {
            "@type": "Question",
            "name": "Do you offer Meet & Greet service inside the terminal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our Meet & Greet upgrade places your chauffeur inside the terminal at baggage claim, holding a personalized name sign. They will assist with your luggage and escort you directly to the waiting vehicle. This service is available for an additional fee — mention it when booking.",
            },
          },
          {
            "@type": "Question",
            "name": "How far in advance should I book an airport transfer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We recommend booking at least 24 hours in advance to guarantee vehicle availability. For early morning flights (before 6 AM) or during peak travel periods, booking 48–72 hours ahead is strongly advised. Same-day bookings may be available — contact us directly to check.",
            },
          },
        ],
      },
    ],
  },

  "casual-events": {
    title: "Casual Events, Concerts & Sporting Events | Posh Limousines of Atlanta",
    description:
      "Premium black SUV transportation for Atlanta concerts, sporting events, and The Masters in Augusta. Skip the parking and traffic with Posh Limousines of Atlanta. Starting at $120/hr.",
    canonical: "https://www.atlantaposhlimos.com/casual-events",
    ogTitle: "Casual Events, Concerts & Sporting Events | Posh Limousines of Atlanta",
    ogDescription:
      "Arrive at Mercedes-Benz Stadium, State Farm Arena, Truist Park, or Augusta National for The Masters in a premium Lincoln Navigator, Chevy Suburban, or Tahoe.",
    ogImage: "assets/service_casual.png",
    heroImage: "assets/service_casual.png",
    navPage: "services",
    calendlyType: "casual",
    isHomePage: false,
    pageSchema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Casual Events & Night Out Transportation",
        "description":
          "Premium black SUV transportation for Atlanta concerts, sporting events, and nights out. Dedicated hourly charter with multi-stop flexibility. Serving Mercedes-Benz Stadium, State Farm Arena, Truist Park, Augusta National Golf Club (The Masters), Midtown, Buckhead, and beyond.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Posh Limousines of Atlanta",
          "url": "https://www.atlantaposhlimos.com",
        },
        "areaServed": "Atlanta Metropolitan Area",
        "offers": {
          "@type": "Offer",
          "price": "120",
          "priceCurrency": "USD",
          "description": "Starting hourly rate for casual event transportation",
        },
        "url": "https://www.atlantaposhlimos.com/casual-events",
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.atlantaposhlimos.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Casual Events",
            "item": "https://www.atlantaposhlimos.com/casual-events",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you provide transportation to Atlanta sporting events?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We provide premium black SUV transportation to and from Atlanta's major sporting venues, including Mercedes-Benz Stadium (Falcons, Atlanta United), State Farm Arena (Hawks), Truist Park (Braves), and Piedmont Park events. Skip the parking nightmare and arrive in style.",
            },
          },
          {
            "@type": "Question",
            "name": "Can you take a group out for a night in Midtown or Buckhead?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Our black SUVs seat up to 7 passengers, making them ideal for group nights out in Midtown, Buckhead, or Downtown Atlanta. We handle all the routing between venues so your group can focus on the evening without worrying about parking or rideshare wait times.",
            },
          },
          {
            "@type": "Question",
            "name": "What is the hourly rate for casual event transportation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Casual event transportation starts at $120 per hour with a minimum booking window. This covers multi-stop evenings, concert runs, and event transportation within the Metro Atlanta area. Contact us for a full quote based on your itinerary.",
            },
          },
          {
            "@type": "Question",
            "name": "Do you do concert pickups and drop-offs in Atlanta?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We handle concert transportation to all major Atlanta venues including State Farm Arena, Ameris Bank Amphitheatre, and Coca-Cola Roxy. Our chauffeur will coordinate a pickup time post-show and meet you at a designated exit point to avoid the crowd rush.",
            },
          },
          {
            "@type": "Question",
            "name": "Can I make multiple stops during a casual event booking?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our hourly casual event service is designed for multi-stop evenings. Whether you are hitting two or three venues across Atlanta or doing a restaurant-to-event run, your chauffeur stays with your group for the full booking window and handles all routing between stops.",
            },
          },
        ],
      },
    ],
  },

  "corporate-events": {
    title: "Executive Corporate Events & Roadshows | Posh Limousines of Atlanta",
    description:
      "Premium executive black SUV transportation for corporate events, business travel, and roadshows in Atlanta. Reliable and professional chauffeur services. Starting at $135/hr.",
    canonical: "https://www.atlantaposhlimos.com/corporate-events",
    ogTitle: "Executive Corporate Events & Roadshows | Posh Limousines of Atlanta",
    ogDescription:
      "Tailored executive transport for Atlanta businesses. Clean Lincoln Navigators, Chevy Suburbans, and Tahoes with professional chauffeurs.",
    ogImage: "assets/service_corporate.png",
    heroImage: "assets/service_corporate.png",
    navPage: "services",
    calendlyType: "corporate",
    isHomePage: false,
    pageSchema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Corporate Events & Executive Transportation",
        "description":
          "Premium executive black SUV transportation for corporate events, business meetings, roadshows, and conferences in Atlanta. Tailored corporate accounts available. Serving Buckhead, Midtown, and Downtown Atlanta business corridors.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Posh Limousines of Atlanta",
          "url": "https://www.atlantaposhlimos.com",
        },
        "areaServed": "Atlanta Metropolitan Area",
        "offers": {
          "@type": "Offer",
          "price": "135",
          "priceCurrency": "USD",
          "description": "Starting hourly rate for corporate event transportation",
        },
        "url": "https://www.atlantaposhlimos.com/corporate-events",
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.atlantaposhlimos.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Corporate Events",
            "item": "https://www.atlantaposhlimos.com/corporate-events",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you provide executive transportation for corporate clients in Atlanta?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We specialize in executive ground transportation for corporate clients across Atlanta, including Buckhead, Midtown, and Downtown business corridors. Our service is trusted for business meetings, client entertainment, conference shuttles, and roadshow logistics.",
            },
          },
          {
            "@type": "Question",
            "name": "What is the hourly rate for corporate event transportation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Corporate event transportation starts at $135 per hour. We offer flexible packages for single executives, client groups, and multi-vehicle corporate events. Corporate billing accounts are available for companies with recurring transportation needs — contact us to set up an account.",
            },
          },
          {
            "@type": "Question",
            "name": "Do you offer corporate account billing for recurring bookings?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We offer tailored corporate accounts for businesses that require regular executive transportation. This simplifies billing, guarantees vehicle priority, and allows your team to book directly without going through a consumer booking flow each time. Contact us to discuss a corporate agreement.",
            },
          },
          {
            "@type": "Question",
            "name": "Can you handle transportation for a full conference or multi-day business event?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We coordinate ground logistics for multi-day corporate events and conferences in Atlanta. This includes airport arrivals and departures, hotel-to-venue shuttles, and executive transfers throughout the event duration. We work directly with event coordinators to ensure all ground transportation runs on schedule.",
            },
          },
          {
            "@type": "Question",
            "name": "How do you ensure discretion and professionalism for executive clients?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Every chauffeur at Posh Limousines is personally vetted, background-checked, and trained in executive client etiquette — including discretion, punctuality, and professional dress code. Conversations remain confidential, and our chauffeurs maintain a calm, composed presence at all times.",
            },
          },
        ],
      },
    ],
  },

  "formal-celebrations": {
    title: "Formal Celebrations, Weddings & Proms | Posh Limousines of Atlanta",
    description:
      "Luxury black SUV transportation for Atlanta weddings, proms, and anniversaries. Arrive in style in a Lincoln Navigator, Chevy Suburban, or Tahoe. Rates starting at $150/hr.",
    canonical: "https://www.atlantaposhlimos.com/formal-celebrations",
    ogTitle: "Formal Celebrations, Weddings & Proms | Posh Limousines of Atlanta",
    ogDescription:
      "Turn your special day into a luxury experience. Red carpet service and professional chauffeurs in Atlanta.",
    ogImage: "assets/service_formal.png",
    heroImage: "assets/service_formal.png",
    navPage: "services",
    calendlyType: "formal",
    isHomePage: false,
    pageSchema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Formal Celebrations & Wedding Transportation",
        "description":
          "Luxury black SUV transportation for Atlanta weddings, proms, and anniversary celebrations. Red carpet rollout, chilled amenities, and professional chauffeurs in executive attire. 3-hour minimum booking.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Posh Limousines of Atlanta",
          "url": "https://www.atlantaposhlimos.com",
        },
        "areaServed": "Atlanta Metropolitan Area",
        "offers": {
          "@type": "Offer",
          "price": "150",
          "priceCurrency": "USD",
          "description": "Starting hourly rate for formal celebration transportation",
        },
        "url": "https://www.atlantaposhlimos.com/formal-celebrations",
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.atlantaposhlimos.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Formal Celebrations",
            "item": "https://www.atlantaposhlimos.com/formal-celebrations",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you provide wedding transportation in Atlanta?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We provide luxury black SUV wedding transportation across Atlanta and the surrounding Metro area. Our vehicles are immaculately presented and our chauffeurs are dressed in executive suit attire. We coordinate timing with your event schedule to ensure seamless arrivals and departures.",
            },
          },
          {
            "@type": "Question",
            "name": "What is the rate for formal celebration transportation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Formal celebration packages start at $150 per hour with a minimum booking window. Pricing varies based on event duration, number of vehicles, and any custom requests such as decorations or special amenities. Contact us for a personalized quote for your event.",
            },
          },
          {
            "@type": "Question",
            "name": "Do you provide prom limo service in Atlanta?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We offer premium black SUV transportation for prom night in Atlanta. Our vehicles seat up to 7 passengers comfortably, making them ideal for small groups. We recommend booking prom transportation several weeks in advance as availability fills quickly during spring prom season.",
            },
          },
          {
            "@type": "Question",
            "name": "Can the vehicle be decorated for our event?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Light tasteful decorations — such as ribbon, floral accents, or custom signage — can be arranged with advance notice. Please discuss your decoration preferences at the time of booking so we can accommodate your vision while keeping the vehicle in pristine condition.",
            },
          },
          {
            "@type": "Question",
            "name": "How early should I book for a wedding or formal event?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For weddings and large formal events, we strongly recommend booking 4–8 weeks in advance, especially for spring and fall weekends when demand is highest. Early booking ensures your preferred vehicle is reserved and allows time to coordinate all event timing details with your chauffeur.",
            },
          },
        ],
      },
    ],
  },

  "safe-driver-pickup": {
    title: "Safe Driver & Long-Distance Pickup | Posh Limousines of Atlanta",
    description:
      "Safe driver pickups and long-distance luxury chauffeur services in Atlanta. Travel securely in a Lincoln Navigator, Chevy Suburban, or Tahoe. Rates starting at $180.",
    canonical: "https://www.atlantaposhlimos.com/safe-driver-pickup",
    ogTitle: "Safe Driver & Long-Distance Pickup | Posh Limousines of Atlanta",
    ogDescription:
      "Travel long distance or book a designated chauffeur when you need reliable, safe luxury transport in Atlanta.",
    ogImage: "assets/service_safedriver.png",
    heroImage: "assets/service_safedriver.png",
    navPage: "services",
    calendlyType: "safe-driver",
    isHomePage: false,
    pageSchema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Safe Driver & Long-Distance Pickup Service",
        "description":
          "Designated safe driver and long-distance luxury chauffeur service in Atlanta. Background-vetted drivers, commercially insured vehicles, and door-to-door escort. Interstate routes to Savannah, Charlotte, Nashville, and Birmingham available.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Posh Limousines of Atlanta",
          "url": "https://www.atlantaposhlimos.com",
        },
        "areaServed": "Atlanta Metropolitan Area",
        "offers": {
          "@type": "Offer",
          "price": "180",
          "priceCurrency": "USD",
          "description": "Starting flat rate for safe driver pickup service",
        },
        "url": "https://www.atlantaposhlimos.com/safe-driver-pickup",
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.atlantaposhlimos.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Safe Driver Pickup",
            "item": "https://www.atlantaposhlimos.com/safe-driver-pickup",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a safe driver pickup service?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A safe driver pickup is a designated driver service where a professional chauffeur picks you up — typically after a night out, social event, or when you simply prefer not to drive. Instead of rideshare, you travel in a premium black SUV with a vetted, licensed chauffeur who knows Atlanta's roads and traffic patterns.",
            },
          },
          {
            "@type": "Question",
            "name": "How much does a safe driver pickup cost in Atlanta?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Safe driver pickup service starts at $180. The final price depends on distance, time of night, and whether it is a round-trip or multi-stop arrangement. Contact us with your specific pickup and drop-off details for an accurate quote.",
            },
          },
          {
            "@type": "Question",
            "name": "Can I use this service for long-distance trips from Atlanta?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our safe driver service covers long-distance routes as well — including trips from Atlanta to destinations like Savannah, Charlotte, or Birmingham. Our SUVs' spacious, quiet cabins make them ideal for comfortable long-haul travel. Contact us to book a long-distance route.",
            },
          },
          {
            "@type": "Question",
            "name": "Is this service available late at night or on weekends?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We offer late-night and weekend pickups to accommodate nights out, events, and celebrations across Atlanta. We recommend booking in advance for Friday and Saturday evenings as these are our highest-demand time slots.",
            },
          },
          {
            "@type": "Question",
            "name": "How is this different from Uber or Lyft?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unlike rideshare platforms, our chauffeurs are background-checked, professionally trained, and personally vetted. You ride in a late-model premium SUV — not a personal vehicle. There is no surge pricing, no uncertainty about who is picking you up, and our chauffeur has expert knowledge of Atlanta traffic routes that no algorithm can replicate.",
            },
          },
        ],
      },
    ],
  },

  "signature-accounts": {
    title: "Signature Accounts | Recurring Chauffeur Service | Posh Limousines of Atlanta",
    description:
      "Posh Limousines of Atlanta's Signature Account program is designed for weekly, bi-monthly, and monthly recurring clients — including annual Masters badge holders. Enjoy priority scheduling, consistent chauffeur assignment, locked-in rates, and automatic Posh Preferred rewards eligibility.",
    canonical: "https://www.atlantaposhlimos.com/signature-accounts",
    ogTitle: "Signature Accounts | Posh Limousines of Atlanta",
    ogDescription:
      "Dedicated recurring chauffeur service for loyal Atlanta clients. Priority scheduling, preferred driver consistency, simplified billing, and Posh Preferred rewards.",
    ogImage: "assets/service_corporate.png",
    heroImage: "assets/service_corporate.png",
    navPage: "services",
    calendlyType: "signature",
    isHomePage: false,
    pageSchema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Signature Accounts — Recurring Chauffeur Service",
        "description":
          "Dedicated recurring transportation service for weekly, bi-monthly, and monthly clients of Posh Limousines of Atlanta. Priority dispatch, preferred chauffeur assignment, locked-in rates, and consolidated billing.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Posh Limousines of Atlanta",
          "url": "https://www.atlantaposhlimos.com",
        },
        "areaServed": "Atlanta Metropolitan Area",
        "url": "https://www.atlantaposhlimos.com/signature-accounts",
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.atlantaposhlimos.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Signature Accounts",
            "item": "https://www.atlantaposhlimos.com/signature-accounts",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a Signature Account at Posh Limousines of Atlanta?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A Signature Account is a recurring transportation arrangement for clients who need Posh Limousines on a regular basis — weekly, bi-monthly, or monthly. Your routes, preferences, and billing details are kept on file, and your rides are prioritized in our dispatch schedule.",
            },
          },
          {
            "@type": "Question",
            "name": "How often do I need to ride to qualify for a Signature Account?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "There is no strict minimum. Signature Accounts are open to any client who rides on a predictable recurring schedule, whether that's twice a week or once a month. Contact us and we'll tailor an arrangement to your schedule.",
            },
          },
          {
            "@type": "Question",
            "name": "Are Signature Account clients eligible for Posh Preferred referral rewards?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Signature Account clients are automatically enrolled in our Posh Preferred referral rewards program. For every 10 single trips — or 5 round trips — you refer to Posh Limousines, you receive a 25% discount on your next booking.",
            },
          },
          {
            "@type": "Question",
            "name": "How does billing work for a Signature Account?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Signature Account clients can choose between weekly or monthly invoicing. Accepted payment methods include Cash, Venmo, Zelle, and major credit cards (a small processing fee applies to card payments).",
            },
          },
          {
            "@type": "Question",
            "name": "Can I have the same chauffeur assigned for every ride?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We do our best to assign a consistent preferred chauffeur to Signature Account clients. All chauffeurs are vetted, trained, and briefed on your preferences — so the experience remains seamless regardless of who is behind the wheel.",
            },
          },
        ],
      },
    ],
  },

  "posh-preferred": {
    title: "Posh Preferred | Referral Rewards Program | Posh Limousines of Atlanta",
    description:
      "Posh Preferred is an exclusive referral rewards program by Posh Limousines of Atlanta. Refer 10 trips (or 5 round trips) and earn 25% off your next booking. Automatically available to all Signature Account clients.",
    canonical: "https://www.atlantaposhlimos.com/posh-preferred",
    ogTitle: "Posh Preferred | Referral Rewards | Posh Limousines of Atlanta",
    ogDescription:
      "Earn 25% off for every 10 trips (or 5 round trips) you refer to Posh Limousines of Atlanta. Exclusive rewards for our most loyal clients.",
    ogImage: "assets/hero_atlanta.png",
    heroImage: "assets/hero_atlanta.png",
    navPage: "services",
    calendlyType: "signature",
    isHomePage: false,
    pageSchema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Posh Preferred — Referral Rewards Program",
        "description":
          "Exclusive referral rewards program for loyal Posh Limousines of Atlanta clients. Earn a 25% discount on your next booking for every 10 single trips (or 5 round trips) referred. Open to all active Signature Account holders.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Posh Limousines of Atlanta",
          "url": "https://www.atlantaposhlimos.com",
        },
        "url": "https://www.atlantaposhlimos.com/posh-preferred",
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.atlantaposhlimos.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Posh Preferred",
            "item": "https://www.atlantaposhlimos.com/posh-preferred",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I join the Posh Preferred referral rewards program?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "All active Signature Account clients are automatically enrolled in Posh Preferred. If you are not yet a Signature Account client, opening one is the first step. You can also contact us directly — if your booking history qualifies you, we will invite you to join.",
            },
          },
          {
            "@type": "Question",
            "name": "How many referrals do I need for the Posh Preferred discount?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You earn a 25% discount on your next booking for every 10 single trips (or 5 round trips) completed by clients you refer to Posh Limousines of Atlanta. Simply ask your referral to mention your name when they book.",
            },
          },
          {
            "@type": "Question",
            "name": "Is there a limit to how many Posh Preferred discounts I can earn?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. There is no cap on the number of Posh Preferred discounts you can earn. For every additional 10 single trips (or 5 round trips) you refer, you earn another 25% discount on a future booking.",
            },
          },
          {
            "@type": "Question",
            "name": "Can the Posh Preferred discount be applied to any service?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The 25% Posh Preferred discount can be applied to any single booking — airport pickup, corporate event, formal celebration, casual outing, or safe driver pickup. It cannot be combined with other active promotions.",
            },
          },
        ],
      },
    ],
  },

  about: {
    title: "About Us | Posh Limousines of Atlanta",
    description:
      "Learn about Posh Limousines of Atlanta's service standard, chauffeur vetting process, confidentiality commitment, and coverage area. Premium black SUV transportation built on reliability and discretion.",
    canonical: "https://www.atlantaposhlimos.com/about",
    ogTitle: "About Posh Limousines of Atlanta | Our Standard. Our Promise.",
    ogDescription:
      "97% on-time arrival. Vetted chauffeurs. Absolute discretion. Learn what sets Posh Limousines of Atlanta apart from rideshare and standard car services.",
    ogImage: "assets/hero_atlanta.png",
    heroImage: "assets/hero_atlanta.png",
    navPage: "about",
    calendlyType: "home",
    isHomePage: false,
    pageSchema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Posh Limousines of Atlanta",
      "description":
        "Posh Limousines of Atlanta's service standard, chauffeur vetting process, confidentiality practices, and Metro Atlanta coverage area.",
      "url": "https://www.atlantaposhlimos.com/about",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Posh Limousines of Atlanta",
        "url": "https://www.atlantaposhlimos.com",
      },
    },
  },

  tos: {
    title: "Terms of Service | Posh Limousines of Atlanta",
    description:
      "Read the Terms of Service for Posh Limousines of Atlanta. Understand our booking policies, cancellation terms, passenger conduct guidelines, and liability limitations.",
    canonical: "https://www.atlantaposhlimos.com/tos",
    ogTitle: "Terms of Service | Posh Limousines of Atlanta",
    ogDescription:
      "Terms and conditions governing the use of Posh Limousines of Atlanta's premium chauffeur services.",
    ogImage: "assets/hero_atlanta.png",
    heroImage: "assets/hero_atlanta.png",
    navPage: "",
    isHomePage: false,
    pageSchema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Terms of Service",
        "description":
          "Terms and conditions governing the use of Posh Limousines of Atlanta's premium chauffeur services, including booking policies, cancellation terms, and liability limitations.",
        "url": "https://www.atlantaposhlimos.com/tos",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Posh Limousines of Atlanta",
          "url": "https://www.atlantaposhlimos.com",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.atlantaposhlimos.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Terms of Service",
            "item": "https://www.atlantaposhlimos.com/tos",
          },
        ],
      },
    ],
  },

  "privacy-policy": {
    title: "Privacy Policy | Posh Limousines of Atlanta",
    description:
      "Learn how Posh Limousines of Atlanta collects, uses, and protects your personal information. Read our full Privacy Policy here.",
    canonical: "https://www.atlantaposhlimos.com/privacy-policy",
    ogTitle: "Privacy Policy | Posh Limousines of Atlanta",
    ogDescription:
      "Posh Limousines of Atlanta's Privacy Policy - how we handle and protect your data.",
    ogImage: "assets/hero_atlanta.png",
    heroImage: "assets/hero_atlanta.png",
    navPage: "",
    isHomePage: false,
    pageSchema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Privacy Policy",
        "description":
          "Posh Limousines of Atlanta's Privacy Policy explaining how personal information is collected, used, shared, and protected.",
        "url": "https://www.atlantaposhlimos.com/privacy-policy",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Posh Limousines of Atlanta",
          "url": "https://www.atlantaposhlimos.com",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.atlantaposhlimos.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Privacy Policy",
            "item": "https://www.atlantaposhlimos.com/privacy-policy",
          },
        ],
      },
    ],
  },
  
  rates: {
    title: "Rates & Fare Estimator | Posh Limousines of Atlanta",
    description:
      "Calculate your luxury trip cost instantly with our online fare estimator. Transparent black SUV chauffeur pricing in Atlanta for airport transfers, corporate travel, and special events.",
    canonical: "https://www.atlantaposhlimos.com/rates",
    ogTitle: "Rates & Fare Estimator | Posh Limousines of Atlanta",
    ogDescription:
      "Instant fare estimation for luxury black SUV transportation in Atlanta. No surge pricing, no surprises.",
    ogImage: "assets/hero_atlanta.png",
    heroImage: "assets/hero_atlanta.png",
    navPage: "rates",
    calendlyType: "rates",
    isHomePage: false,
    pageSchema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Rates & Fare Estimator",
        "description": "Calculate your luxury trip cost instantly with our online fare estimator.",
        "url": "https://www.atlantaposhlimos.com/rates",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Posh Limousines of Atlanta",
          "url": "https://www.atlantaposhlimos.com",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.atlantaposhlimos.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Rates",
            "item": "https://www.atlantaposhlimos.com/rates",
          },
        ],
      },
    ],
  },
};

export default pageData;
