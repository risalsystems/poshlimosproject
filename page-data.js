// ── Per-page metadata ──────────────────────────────────────────────────────────
// Consumed by vite.config.js to inject EJS locals into each HTML entry point.
// Keys match the HTML filename stem (e.g. "airport-pickups" for airport-pickups.html).

const pageData = {
  index: {
    title: "Posh Limousines of Atlanta | Premium Black SUV Chauffeur Service",
    description:
      "Experience premium luxury travel with Posh Limousines of Atlanta. Professional chauffeur services featuring black Cadillac Escalades and Lincoln Navigators for Airport Pickups, Weddings, Corporate Events, Safe Driver transport, and Casual Outings. Fully licensed and insured.",
    keywords:
      "limousine service atlanta, black SUV service atlanta, airport pickup atlanta, luxury chauffeur atlanta, private driver buckhead, wedding transportation atlanta, corporate limo service, cadillac escalade service, lincoln navigator chauffeur",
    canonical: "https://www.poshlimosatlanta.com",
    ogTitle: "Posh Limousines of Atlanta | Premium Black SUV Chauffeur Service",
    ogDescription:
      "Sleek black executive SUVs and professional chauffeurs in Atlanta. Catering to airport, wedding, corporate, and hourly charters. Fully licensed & insured.",
    ogImage: "assets/hero_atlanta.png",
    navPage: "home",
    isHomePage: true,
    pageSchema: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Posh Limousines of Atlanta",
      "url": "https://www.poshlimosatlanta.com",
    },
  },

  "airport-pickups": {
    title: "Airport Pickups & Transfers | Posh Limousines of Atlanta",
    description:
      "Premium airport chauffeur and black SUV pickup services in Atlanta. Travel to and from Hartsfield-Jackson (ATL) or private aviation terminals in comfort. Starting at $115.",
    canonical: "https://www.poshlimosatlanta.com/airport-pickups",
    ogTitle: "Airport Pickups & Transfers | Posh Limousines of Atlanta",
    ogDescription:
      "Luxury black SUV transfers for ATL Airport and private jet terminals. Flight monitoring and Meet & Greet services.",
    ogImage: "assets/service_airport.png",
    navPage: "services",
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
          "url": "https://www.poshlimosatlanta.com",
        },
        "areaServed": "Atlanta Metropolitan Area",
        "offers": {
          "@type": "Offer",
          "price": "115",
          "priceCurrency": "USD",
          "description": "Starting price for one-way airport transfer to/from ATL",
        },
        "url": "https://www.poshlimosatlanta.com/airport-pickups",
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.poshlimosatlanta.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Airport Pickups",
            "item": "https://www.poshlimosatlanta.com/airport-pickups",
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
      "Premium black SUV transportation for Atlanta concerts, sporting events, and nights out. Skip the parking lines with Posh Limousines of Atlanta. Starting at $120/hr.",
    canonical: "https://www.poshlimosatlanta.com/casual-events",
    ogTitle: "Casual Events, Concerts & Sporting Events | Posh Limousines of Atlanta",
    ogDescription:
      "Arrive at Mercedes-Benz Stadium, State Farm Arena, or Truist Park in a premium Cadillac Escalade or Lincoln Navigator.",
    ogImage: "assets/service_casual.png",
    navPage: "services",
    isHomePage: false,
    pageSchema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Casual Events & Night Out Transportation",
        "description":
          "Premium black SUV transportation for Atlanta concerts, sporting events, and nights out. Dedicated hourly charter with multi-stop flexibility. Serving Mercedes-Benz Stadium, State Farm Arena, Truist Park, Midtown, Buckhead, and beyond.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Posh Limousines of Atlanta",
          "url": "https://www.poshlimosatlanta.com",
        },
        "areaServed": "Atlanta Metropolitan Area",
        "offers": {
          "@type": "Offer",
          "price": "120",
          "priceCurrency": "USD",
          "description": "Starting hourly rate for casual event transportation",
        },
        "url": "https://www.poshlimosatlanta.com/casual-events",
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.poshlimosatlanta.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Casual Events",
            "item": "https://www.poshlimosatlanta.com/casual-events",
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
    canonical: "https://www.poshlimosatlanta.com/corporate-events",
    ogTitle: "Executive Corporate Events & Roadshows | Posh Limousines of Atlanta",
    ogDescription:
      "Tailored executive transport for Atlanta businesses. Clean Cadillac Escalades and professional chauffeurs.",
    ogImage: "assets/service_corporate.png",
    navPage: "services",
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
          "url": "https://www.poshlimosatlanta.com",
        },
        "areaServed": "Atlanta Metropolitan Area",
        "offers": {
          "@type": "Offer",
          "price": "135",
          "priceCurrency": "USD",
          "description": "Starting hourly rate for corporate event transportation",
        },
        "url": "https://www.poshlimosatlanta.com/corporate-events",
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.poshlimosatlanta.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Corporate Events",
            "item": "https://www.poshlimosatlanta.com/corporate-events",
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
      "Luxury black SUV transportation for Atlanta weddings, proms, and anniversaries. Arrive in style in a Cadillac Escalade or Lincoln Navigator. Rates starting at $150/hr.",
    canonical: "https://www.poshlimosatlanta.com/formal-celebrations",
    ogTitle: "Formal Celebrations, Weddings & Proms | Posh Limousines of Atlanta",
    ogDescription:
      "Turn your special day into a luxury experience. Red carpet service and professional chauffeurs in Atlanta.",
    ogImage: "assets/service_formal.png",
    navPage: "services",
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
          "url": "https://www.poshlimosatlanta.com",
        },
        "areaServed": "Atlanta Metropolitan Area",
        "offers": {
          "@type": "Offer",
          "price": "150",
          "priceCurrency": "USD",
          "description": "Starting hourly rate for formal celebration transportation",
        },
        "url": "https://www.poshlimosatlanta.com/formal-celebrations",
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.poshlimosatlanta.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Formal Celebrations",
            "item": "https://www.poshlimosatlanta.com/formal-celebrations",
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
      "Safe driver pickups and long-distance luxury chauffeur services in Atlanta. Travel securely in a black Cadillac Escalade or Lincoln Navigator. Rates starting at $180.",
    canonical: "https://www.poshlimosatlanta.com/safe-driver-pickup",
    ogTitle: "Safe Driver & Long-Distance Pickup | Posh Limousines of Atlanta",
    ogDescription:
      "Travel long distance or book a designated chauffeur when you need reliable, safe luxury transport in Atlanta.",
    ogImage: "assets/service_safedriver.png",
    navPage: "services",
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
          "url": "https://www.poshlimosatlanta.com",
        },
        "areaServed": "Atlanta Metropolitan Area",
        "offers": {
          "@type": "Offer",
          "price": "180",
          "priceCurrency": "USD",
          "description": "Starting flat rate for safe driver pickup service",
        },
        "url": "https://www.poshlimosatlanta.com/safe-driver-pickup",
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.poshlimosatlanta.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Safe Driver Pickup",
            "item": "https://www.poshlimosatlanta.com/safe-driver-pickup",
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
              "text": "Yes. Our safe driver service covers long-distance routes as well — including trips from Atlanta to destinations like Savannah, Charlotte, or Birmingham. The Lincoln Navigator's spacious, quiet cabin makes it ideal for comfortable long-haul travel. Contact us to book a long-distance route.",
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

  tos: {
    title: "Terms of Service | Posh Limousines of Atlanta",
    description:
      "Read the Terms of Service for Posh Limousines of Atlanta. Understand our booking policies, cancellation terms, passenger conduct guidelines, and liability limitations.",
    canonical: "https://www.poshlimosatlanta.com/tos",
    ogTitle: "Terms of Service | Posh Limousines of Atlanta",
    ogDescription:
      "Terms and conditions governing the use of Posh Limousines of Atlanta's premium chauffeur services.",
    ogImage: "assets/hero_atlanta.png",
    navPage: "",
    isHomePage: false,
    pageSchema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Terms of Service",
        "description":
          "Terms and conditions governing the use of Posh Limousines of Atlanta's premium chauffeur services, including booking policies, cancellation terms, and liability limitations.",
        "url": "https://www.poshlimosatlanta.com/tos",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Posh Limousines of Atlanta",
          "url": "https://www.poshlimosatlanta.com",
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
            "item": "https://www.poshlimosatlanta.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Terms of Service",
            "item": "https://www.poshlimosatlanta.com/tos",
          },
        ],
      },
    ],
  },

  "privacy-policy": {
    title: "Privacy Policy | Posh Limousines of Atlanta",
    description:
      "Learn how Posh Limousines of Atlanta collects, uses, and protects your personal information. Read our full Privacy Policy here.",
    canonical: "https://www.poshlimosatlanta.com/privacy-policy",
    ogTitle: "Privacy Policy | Posh Limousines of Atlanta",
    ogDescription:
      "Posh Limousines of Atlanta's Privacy Policy - how we handle and protect your data.",
    ogImage: "assets/hero_atlanta.png",
    navPage: "",
    isHomePage: false,
    pageSchema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Privacy Policy",
        "description":
          "Posh Limousines of Atlanta's Privacy Policy explaining how personal information is collected, used, shared, and protected.",
        "url": "https://www.poshlimosatlanta.com/privacy-policy",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Posh Limousines of Atlanta",
          "url": "https://www.poshlimosatlanta.com",
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
            "item": "https://www.poshlimosatlanta.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Privacy Policy",
            "item": "https://www.poshlimosatlanta.com/privacy-policy",
          },
        ],
      },
    ],
  },
};

export default pageData;
