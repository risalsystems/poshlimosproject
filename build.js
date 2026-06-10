const ejs = require("ejs");
const fs = require("fs");
const path = require("path");

const PAGES_DIR = path.join(__dirname, "views", "pages");
const OUTPUT_DIR = path.join(__dirname, "public");

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const pageData = {
  "index.ejs": {
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
  "about.ejs": {
    title: "About Us | Posh Limousines of Atlanta",
    description:
      "Learn about Posh Limousines of Atlanta — Atlanta's premier black SUV chauffeur service for corporate executives, formal celebrations, and luxury travel.",
    ogTitle: "About Us | Posh Limousines of Atlanta",
    ogDescription:
      "Discover the team behind Atlanta's most trusted black SUV chauffeur service.",
    ogImage: "assets/hero_atlanta.png",
    navPage: "about",
    isHomePage: false,
  },
  "airport-pickups.ejs": {
    title: "Airport Pickups & Transfers | Posh Limousines of Atlanta",
    description:
      "Premium airport chauffeur and black SUV pickup services in Atlanta. Travel to and from Hartsfield-Jackson (ATL) or private aviation terminals in comfort. Starting at $115.",
    ogTitle: "Airport Pickups & Transfers | Posh Limousines of Atlanta",
    ogDescription:
      "Luxury black SUV transfers for ATL Airport and private jet terminals. Flight monitoring and Meet & Greet services.",
    ogImage: "assets/service_airport.png",
    navPage: "services",
    isHomePage: false,
  },
  "casual-events.ejs": {
    title:
      "Casual Events, Concerts & Sporting Events | Posh Limousines of Atlanta",
    description:
      "Premium black SUV transportation for Atlanta concerts, sporting events, and nights out. Skip the parking lines with Posh Limousines of Atlanta. Starting at $120/hr.",
    ogTitle:
      "Casual Events, Concerts & Sporting Events | Posh Limousines of Atlanta",
    ogDescription:
      "Arrive at Mercedes-Benz Stadium, State Farm Arena, or Truist Park in a premium Cadillac Escalade or Lincoln Navigator.",
    ogImage: "assets/service_casual.png",
    navPage: "services",
    isHomePage: false,
  },
  "corporate-events.ejs": {
    title:
      "Executive Corporate Events & Roadshows | Posh Limousines of Atlanta",
    description:
      "Premium executive black SUV transportation for corporate events, business travel, and roadshows in Atlanta. Reliable and professional chauffeur services. Starting at $135/hr.",
    ogTitle:
      "Executive Corporate Events & Roadshows | Posh Limousines of Atlanta",
    ogDescription:
      "Tailored executive transport for Atlanta businesses. Clean Cadillac Escalades and professional chauffeurs.",
    ogImage: "assets/service_corporate.png",
    navPage: "services",
    isHomePage: false,
  },
  "formal-celebrations.ejs": {
    title: "Formal Celebrations, Weddings & Proms | Posh Limousines of Atlanta",
    description:
      "Luxury black SUV transportation for Atlanta weddings, proms, and anniversaries. Arrive in style in a Cadillac Escalade or Lincoln Navigator. Rates starting at $150/hr.",
    ogTitle:
      "Formal Celebrations, Weddings & Proms | Posh Limousines of Atlanta",
    ogDescription:
      "Turn your special day into a luxury experience. Red carpet service and professional chauffeurs in Atlanta.",
    ogImage: "assets/service_formal.png",
    navPage: "services",
    isHomePage: false,
  },
  "safe-driver-pickup.ejs": {
    title: "Safe Driver & Long-Distance Pickup | Posh Limousines of Atlanta",
    description:
      "Safe driver pickups and long-distance luxury chauffeur services in Atlanta. Travel securely in a black Cadillac Escalade or Lincoln Navigator. Rates starting at $180.",
    ogTitle: "Safe Driver & Long-Distance Pickup | Posh Limousines of Atlanta",
    ogDescription:
      "Travel long distance or book a designated chauffeur when you need reliable, safe luxury transport in Atlanta.",
    ogImage: "assets/service_safedriver.png",
    navPage: "services",
    isHomePage: false,
  },
  "tos.ejs": {
    title: "Terms of Service | Posh Limousines of Atlanta",
    description:
      "Read the Terms of Service for Posh Limousines of Atlanta. Understand our booking policies, cancellation terms, passenger conduct guidelines, and liability limitations.",
    ogTitle: "Terms of Service | Posh Limousines of Atlanta",
    ogDescription:
      "Terms and conditions governing the use of Posh Limousines of Atlanta's premium chauffeur services.",
    ogImage: "assets/hero_atlanta.png",
    canonical: "https://www.atlantaposhlimos.com/tos",
    navPage: "",
    isHomePage: false,
  },
  "privacy-policy.ejs": {
    title: "Privacy Policy | Posh Limousines of Atlanta",
    description:
      "Learn how Posh Limousines of Atlanta collects, uses, and protects your personal information. Read our full Privacy Policy here.",
    ogTitle: "Privacy Policy | Posh Limousines of Atlanta",
    ogDescription:
      "Posh Limousines of Atlanta's Privacy Policy — how we handle and protect your data.",
    ogImage: "assets/hero_atlanta.png",
    canonical: "https://www.atlantaposhlimos.com/privacy-policy",
    navPage: "",
    isHomePage: false,
  },
};

async function build() {
  try {
    const files = fs
      .readdirSync(PAGES_DIR)
      .filter((file) => file.endsWith(".ejs"));

    for (const file of files) {
      const data = pageData[file] ?? {};
      const html = await ejs.renderFile(path.join(PAGES_DIR, file), data);
      const outFile = file.replace(".ejs", ".html");
      fs.writeFileSync(path.join(OUTPUT_DIR, outFile), html);
      console.log(`\x1b[32m✔\x1b[0m  ${file} → public/${outFile}`);
    }

    // Copy static assets
    const assetsToCopy = ["style.css", "script.js", "assets"];
    for (const asset of assetsToCopy) {
      const srcPath = path.join(__dirname, asset);
      const destPath = path.join(OUTPUT_DIR, asset);
      if (fs.existsSync(srcPath)) {
        fs.cpSync(srcPath, destPath, { recursive: true });
        console.log(`\x1b[34mℹ\x1b[0m  Copied ${asset} → public/${asset}`);
      }
    }

    console.log("\n\x1b[32mBuild completed successfully!\x1b[0m");
  } catch (error) {
    console.error("\x1b[31mBuild failed:\x1b[0m", error);
    process.exit(1);
  }
}

build();
