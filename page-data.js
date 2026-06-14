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
  },
};

export default pageData;
