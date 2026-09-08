import rockwoolBlanket from "@/assets/product-rockwool-blanket.jpg";
import rockwoolPipe from "@/assets/product-rockwool-pipe.jpg";
import rockwoolSlab from "@/assets/product-rockwool-slab.jpg";
import glassWool from "@/assets/product-glass-wool.jpg";
import glassWoolPipe from "@/assets/product-glass-wool-pipe.jpg";
import ceramicWool from "@/assets/product-ceramic-wool.jpg";
import puPipe from "@/assets/product-pu-pipe.jpg";
import thermapore from "@/assets/product-thermapore.jpg";
import ceramicWoolBoard from "@/assets/product-ceramic-board.jpg";
import puPipeSections from "@/assets/product-pu-pipe-sections.jpg";
import canvasCloth from "@/assets/product-canvas-cloth.jpg";
import aluminiumTape from "@/assets/product-aluminium-tape.jpg";
import ssStripCoil from "@/assets/product-ss-strip-coil.jpg";
import bandingBuckles from "@/assets/product-banding-buckles.jpg";
import frpCableTray from "@/assets/product-frp-cable-tray.jpg";

export type ProductCategory =
  | "Thermal Insulation"
  | "Piping Solutions"
  | "Hardware & Accessories";

export const productCategories: ProductCategory[] = [
  "Thermal Insulation",
  "Piping Solutions",
  "Hardware & Accessories",
];

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductVariant {
  name: string;
  slug: string;
  summary: string;
  image?: string;
  specs: ProductSpec[];
  applications: string[];
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  categories: ProductCategory[];
  overview: string;
  image: string;
  /** Fallback path for imagery to be supplied later. */
  placeholder: string;
  variants: ProductVariant[];
}

export const products: Product[] = [
  {
    slug: "rockwool",
    name: "Rockwool",
    tagline: "High-temperature mineral wool",
    categories: ["Thermal Insulation", "Piping Solutions"],
    overview:
      "Stone wool insulation with excellent thermal performance, fire protection and acoustic damping. Manufactured to ASTM C592 Class 1 & 2 and BS 3958: Part 3: 1985, it is the workhorse insulation for boilers, hot piping, vessels and ducting.",
    image: rockwoolBlanket,
    placeholder: "/images/products/rockwool.jpg",
    variants: [
      {
        name: "Rockwool Blankets",
        slug: "rockwool-blankets",
        summary:
          "The most temperature-resistant blanket in the Rockwool range, with wire mesh facing on both sides for maximum vibration resistance. Excellent thermal insulation with valuable fire protection, and it reduces noise emitted from pipes and vessels when wrapped around.",
        image: rockwoolBlanket,
        specs: [
          { label: "Standards", value: "ASTM C592 Class 1 & 2, BS 3958: Part 3: 1985" },
          { label: "Dimension", value: "Roll size 1 × 3 m or 1 × 5 m" },
          { label: "Thickness", value: "50 mm to 120 mm" },
          { label: "Density", value: "50 kg/m³ to 120 kg/m³" },
          { label: "Facing", value: "Galvanised wire mesh, both sides" },
        ],
        applications: [
          "Boiler and vessel lagging",
          "Hot piping and steam lines",
          "Duct insulation",
          "Acoustic and vibration damping",
          "Fire protection wrapping",
        ],
      },
      {
        name: "Rockwool Pre-Formed Pipe Covers",
        slug: "rockwool-pipe-covers",
        summary:
          "Industrial pre-formed sectional pipe covers for high-temperature pipework, supplied ready to fit around standard pipe sizes.",
        image: rockwoolPipe,
        specs: [
          { label: "Thickness", value: "25 mm to 100 mm" },
          { label: "Density", value: "110 – 140 kg/m³" },
          { label: "Temperature", value: "+100 °C to +750 °C" },
          { label: "Pipe Size", value: "NPS ½\" to 12\"" },
          { label: "Length", value: "1 metre" },
          { label: "Packaging", value: "Cartons and shrink-wrap polyethylene" },
        ],
        applications: [
          "Steam and condensate lines",
          "Hot-water and process piping",
          "Refinery and power plant pipework",
          "Furnace and boiler house piping",
        ],
      },
      {
        name: "Rockwool Slabs",
        slug: "rockwool-slabs",
        summary:
          "Rigid stone wool slabs for flat surfaces, walls, tanks and equipment casings where higher mechanical strength is required.",
        image: rockwoolSlab,
        specs: [
          { label: "Thickness", value: "25 mm to 100 mm" },
          { label: "Density", value: "60 – 150 kg/m³" },
          { label: "Temperature", value: "Up to +750 °C" },
          { label: "Form", value: "Rigid slab / board" },
        ],
        applications: [
          "Tank and vessel insulation",
          "Flat panel and wall insulation",
          "Furnace backup insulation",
          "Acoustic partitions",
        ],
      },
    ],
  },
  {
    slug: "glass-wool",
    name: "Glass Wool",
    tagline: "Foil-faced thermal & acoustic wool",
    categories: ["Thermal Insulation", "Piping Solutions"],
    overview:
      "Lightweight non-combustible glass wool with reinforced aluminium foil vapour barrier, used across HVAC ductwork, roofs, walls, ceilings and chilled or hot-water piping.",
    image: glassWool,
    placeholder: "/images/products/glass-wool.jpg",
    variants: [
      {
        name: "Aluminium Foil Faced Blanket / Roll",
        slug: "glass-wool-blanket",
        summary:
          "Foil-faced glass wool roll offering low thermal conductivity, a built-in vapour barrier and a clean reflective silver finish.",
        image: glassWool,
        specs: [
          { label: "Density", value: "24 – 32 kg/m³" },
          { label: "Thickness", value: "25 mm, 50 mm" },
          { label: "Thermal Conductivity", value: "≤ 0.038 W/m·K" },
          { label: "Facing", value: "Reinforced aluminium foil vapour barrier" },
          { label: "Width", value: "1200 mm" },
          { label: "Form", value: "Roll" },
          { label: "Fire Performance", value: "Non-combustible glass wool core" },
          { label: "Colour", value: "Silver aluminium foil" },
        ],
        applications: [
          "HVAC duct insulation",
          "Roof insulation",
          "Wall and ceiling insulation",
          "Acoustic lining",
        ],
      },
      {
        name: "Glass Wool Pipe Covers",
        slug: "glass-wool-pipe-covers",
        summary:
          "Pre-formed fibreglass sections for thermal and acoustic insulation of pipes, available in multiple densities, thicknesses and internal diameters, with optional aluminium foil facing for improved vapour and moisture resistance.",
        image: glassWoolPipe,
        specs: [
          { label: "Density", value: "24 – 64 kg/m³" },
          { label: "Thickness", value: "25 mm to 50 mm" },
          { label: "Thermal Conductivity", value: "≤ 0.038 W/m·K" },
          { label: "Facing", value: "Plain or aluminium foil faced" },
          { label: "Form", value: "Pre-formed sectional pipe cover" },
        ],
        applications: [
          "HVAC piping",
          "Chilled-water lines",
          "Hot-water lines",
          "Industrial piping systems",
        ],
      },
    ],
  },
  {
    slug: "ceramic-wool",
    name: "Ceramic Wool",
    tagline: "Refractory-grade high-temperature wool",
    categories: ["Thermal Insulation"],
    overview:
      "Ceramic fibre wool for extreme-temperature service in furnaces, kilns, boilers and refractory backup insulation, supplied in 1260 °C and 1425 °C grades.",
    image: ceramicWool,
    placeholder: "/images/products/ceramic-wool.jpg",
    variants: [
      {
        name: "Ceramic Wool Blanket",
        slug: "ceramic-wool-blanket",
        summary:
          "Available in 1260 °C grade for general industrial high-temperature insulation and 1425 °C grade for higher-temperature applications. 96 kg/m³ is used where good insulation and flexibility are required; 128 kg/m³ offers better mechanical stability and insulation performance.",
        image: ceramicWool,
        specs: [
          { label: "Grades", value: "1260 °C and 1425 °C" },
          { label: "Densities", value: "96 kg/m³ and 128 kg/m³" },
          { label: "Form", value: "Blanket / roll" },
          { label: "Thickness", value: "13 mm, 25 mm, 50 mm" },
          { label: "Colour", value: "White" },
        ],
        applications: [
          "Furnaces, ovens and kilns",
          "Boilers and chimneys",
          "Hot pipes and expansion joints",
          "Heat-treatment equipment",
          "Refractory backup insulation",
        ],
      },
      {
        name: "Ceramic Fibre Boards",
        slug: "ceramic-fibre-boards",
        summary:
          "Rigid ceramic fibre boards for high-temperature lining, backup insulation and thermal barriers where a firm, machinable board is required.",
        image: ceramicWoolBoard,
        specs: [
          { label: "Grades", value: "1260 °C and 1425 °C" },
          { label: "Form", value: "Rigid board" },
          { label: "Thickness", value: "As per requirement" },
          { label: "Colour", value: "White" },
        ],
        applications: [
          "Furnace and kiln linings",
          "Refractory backup insulation",
          "Thermal barriers and heat shields",
          "Boiler and heater insulation",
        ],
      },
    ],
  },
  {
    slug: "polyurethane",
    name: "Polyurethane (PU/PUR)",
    tagline: "Rigid closed-cell cold insulation",
    categories: ["Thermal Insulation", "Piping Solutions"],
    overview:
      "High-quality PU/PUR pipe insulation manufactured from rigid closed-cell polyurethane foam, providing excellent thermal insulation with low thermal conductivity and high resistance to moisture. Supplied in pre-formed sectional lengths and finished with reinforced aluminium foil vapour-barrier facing.",
    image: puPipe,
    placeholder: "/images/products/polyurethane.jpg",
    variants: [
      {
        name: "PU/PUR Pre-Formed Pipe Sections",
        slug: "pu-pipe-sections",
        summary:
          "The aluminium foil facing provides a reflective outer surface and acts as a vapour barrier. For chilled-water and refrigeration applications, all longitudinal and circumferential joints should be carefully sealed to prevent moisture penetration and condensation.",
        image: puPipeSections,
        specs: [
          { label: "Material", value: "Rigid closed-cell polyurethane foam" },
          { label: "Form", value: "Pre-formed sectional lengths" },
          { label: "Facing", value: "Reinforced aluminium foil vapour barrier" },
          { label: "Pipe Size", value: "Available in various pipe diameters" },
          { label: "Thickness", value: "As per project requirement" },
          { label: "Moisture Resistance", value: "Excellent — closed cell structure" },
        ],
        applications: [
          "HVAC chilled-water piping",
          "Air-conditioning systems",
          "Refrigeration pipelines",
          "Cold-water lines",
          "Hot-water pipelines",
          "Industrial process piping",
          "Cold-storage systems",
          "Pre-insulated pipe systems",
        ],
      },
    ],
  },
  {
    slug: "thermapore",
    name: "Thermapore (EPS)",
    tagline: "Expanded polystyrene insulation",
    categories: ["Thermal Insulation", "Piping Solutions"],
    overview:
      "Thermapore EPS insulation is lightweight, rigid expanded-polystyrene providing effective heat resistance for building, HVAC, roofing, flooring and temperature-controlled applications. Available in multiple densities and thicknesses with customised dimensions.",
    image: thermapore,
    placeholder: "/images/products/thermapore.jpg",
    variants: [
      {
        name: "Thermapore EPS Insulation Sheets",
        slug: "thermapore-sheets",
        image: thermapore,
        summary:
          "Lightweight, easy to cut and install, low moisture absorption and cost-effective — suitable for large-area insulation in multiple densities and thicknesses.",
        specs: [
          { label: "Material", value: "Expanded Polystyrene (EPS)" },
          { label: "10 – 20 mm", value: "Light thermal insulation" },
          { label: "25 – 30 mm", value: "General wall / ceiling insulation" },
          { label: "40 – 50 mm", value: "Building thermal insulation" },
          { label: "75 – 100 mm", value: "Higher thermal resistance" },
          { label: "100 mm +", value: "Specialised / high-performance applications" },
        ],
        applications: [
          "Building wall insulation",
          "Roof and ceiling insulation",
          "Cold rooms and temperature-controlled areas",
          "HVAC applications",
          "Floor insulation and under-concrete systems",
          "Sandwich panels",
          "Packaging and protection",
        ],
      },
      {
        name: "Thermapore Pre-Formed Pipe Covers",
        slug: "thermapore-pipe-covers",
        summary:
          "Lightweight, pre-formed Thermapore pipe covers providing economical thermal insulation and easy installation.",
        specs: [
          { label: "Material", value: "Expanded Polystyrene (EPS) / Thermapore" },
          { label: "Type", value: "Pre-formed pipe cover / sectional" },
          { label: "Density", value: "15 – 30 kg/m³" },
          { label: "Thickness", value: "20 – 100 mm" },
          { label: "Pipe Size", value: "15 – 500 mm OD, as required" },
          { label: "Thermal Conductivity", value: "Approx. 0.035 – 0.040 W/m·K" },
          { label: "Temperature Range", value: "Approx. −50 °C to +75 °C" },
          { label: "Finish", value: "Aluminium foil / PVC covering available" },
          { label: "Packaging", value: "Plastic wrapping / cartons" },
        ],
        applications: [
          "Hot and cold water piping",
          "HVAC pipe insulation",
          "Chilled-water lines",
          "Thermal pipe insulation",
        ],
      },
    ],
  },
  {
    slug: "canvas-cloth",
    name: "Canvas Cloth",
    tagline: "Duct finishing & joint reinforcement",
    categories: ["Hardware & Accessories"],
    overview:
      "Heavy-duty canvas cloth designed for HVAC duct insulation, providing reinforcement, surface protection and a neat finished appearance over insulated ductwork.",
    image: canvasCloth,
    placeholder: "/images/products/canvas-cloth.jpg",
    variants: [
      {
        name: "Duct Canvas Cloth",
        slug: "duct-canvas-cloth",
        summary:
          "Heavy-duty woven cotton canvas applied with suitable duct adhesive over rock wool and glass wool duct insulation.",
        image: canvasCloth,
        specs: [
          { label: "Material", value: "Cotton canvas / duct canvas cloth" },
          { label: "Type", value: "Heavy-duty woven fabric" },
          { label: "Fabric Weight", value: "Approx. 250 – 500 GSM" },
          { label: "Width", value: "Typically 1.0 – 1.5 m" },
          { label: "Thickness", value: "Approx. 0.3 – 0.6 mm" },
          { label: "Finish", value: "Plain / woven, suitable for adhesive application" },
          { label: "Colour", value: "Natural / White" },
          { label: "Packaging", value: "Rolls" },
        ],
        applications: [
          "Covering fibreglass / glass wool duct insulation",
          "Covering rock wool insulation",
          "Reinforcing duct insulation joints and seams",
          "Durable protective outer layer",
          "HVAC air-conditioning and ventilation ductwork",
          "Commercial and industrial duct insulation",
        ],
      },
    ],
  },
  {
    slug: "aluminium-tape",
    name: "Aluminium Tape",
    tagline: "Vapour-tight foil sealing",
    categories: ["Hardware & Accessories"],
    overview:
      "High-quality aluminium foil tape designed for sealing, joining and protecting insulation materials, providing a durable moisture-resistant and vapour-tight finish.",
    image: aluminiumTape,
    placeholder: "/images/products/aluminium-tape.jpg",
    variants: [
      {
        name: "Aluminium Foil Adhesive Tape",
        slug: "aluminium-foil-tape",
        summary:
          "Soft annealed aluminium foil with pressure-sensitive adhesive, giving strong adhesion to clean, dry insulation surfaces.",
        image: aluminiumTape,
        specs: [
          { label: "Material", value: "Soft / annealed aluminium foil" },
          { label: "Adhesive", value: "Pressure-sensitive acrylic / rubber" },
          { label: "Thickness", value: "0.05 – 0.10 mm typical" },
          { label: "Width", value: "25, 50, 75, 100 mm or as required" },
          { label: "Length", value: "18 m / 25 m / 50 m / 100 m rolls" },
          { label: "Temperature Resistance", value: "Approx. −20 °C to +120 °C" },
          { label: "Finish", value: "Smooth, reflective silver" },
          { label: "Moisture Resistance", value: "Excellent" },
          { label: "Packaging", value: "Individual rolls / cartons" },
        ],
        applications: [
          "Sealing PU/PUR pipe insulation",
          "Sealing Thermapore / EPS insulation",
          "Joining foil-faced glass wool",
          "Sealing HVAC duct insulation",
          "Vapour-barrier sealing",
          "Repairing and reinforcing insulation joints",
        ],
      },
    ],
  },
  {
    slug: "stainless-steel-banding",
    name: "Stainless Steel Strip Coil & Banding Buckles",
    tagline: "Industrial strapping hardware",
    categories: ["Hardware & Accessories"],
    overview:
      "High-quality stainless steel strip coil, slit to required widths and supplied in continuous coils, together with matching one-piece banding buckles for pipe and duct strapping.",
    image: ssStripCoil,
    placeholder: "/images/products/stainless-steel-banding.jpg",
    variants: [
      {
        name: "Stainless Steel Strip Coil",
        slug: "ss-strip-coil",
        summary:
          "Corrosion-resistant strip coil for insulation banding, cladding support and general industrial strapping.",
        image: ssStripCoil,
        specs: [
          { label: "Material", value: "Stainless Steel" },
          { label: "Grades", value: "SS 304 / SS 316 / SS 201" },
          { label: "Form", value: "Strip coil / roll" },
          { label: "Width", value: "10 – 25 mm (or as required)" },
          { label: "Thickness", value: "0.25 – 1.00 mm" },
          { label: "Surface Finish", value: "2B / BA / Polished" },
          { label: "Coil ID", value: "Typically 300 – 500 mm" },
          { label: "Packaging", value: "Coil with protective wrapping" },
        ],
        applications: [
          "PU/PUR pipe insulation banding",
          "Thermapore pipe covers",
          "Glass wool and rock wool insulation fixing",
          "HVAC duct insulation",
          "Pipe cladding and support",
          "Industrial insulation strapping",
        ],
      },
      {
        name: "Stainless Steel Banding Buckles",
        slug: "ss-banding-buckles",
        summary:
          "One-piece formed snap-on / wing-type buckles installed by hand or banding tool, with excellent corrosion resistance.",
        image: bandingBuckles,
        specs: [
          { label: "Product", value: "Stainless steel banding buckle / clip" },
          { label: "Common Grade", value: "SS 304 (SS 316 optional)" },
          { label: "Type", value: "Snap-on / wing-type buckle" },
          { label: "Compatible Strip Width", value: "10, 12, 15, 19, 20, 25 mm" },
          { label: "Material Thickness", value: "Approx. 0.5 – 1.0 mm" },
          { label: "Surface Finish", value: "Bright / Polished / Mill finish" },
          { label: "Installation", value: "Hand or banding tool" },
          { label: "Packaging", value: "Bulk packed in cartons / boxes" },
          { label: "Customisation", value: "Size, width and thickness as required" },
        ],
        applications: [
          "PU/PUR pipe insulation fixing",
          "Thermapore pipe cover securing",
          "Glass wool and rock wool insulation fixing",
          "Aluminium cladding on pipes and ducts",
          "HVAC and industrial pipe insulation",
        ],
      },
    ],
  },
  {
    slug: "frp-cable-tray",
    name: "FRP Cable Tray",
    tagline: "Non-conductive cable management",
    categories: ["Hardware & Accessories"],
    overview:
      "FRP (Fibre Reinforced Plastic) cable tray is a lightweight, corrosion-resistant cable management system suitable for industrial, chemical, marine, outdoor and electrical installations.",
    image: frpCableTray,
    placeholder: "/images/products/frp-cable-tray.jpg",
    variants: [
      {
        name: "FRP / GRP Cable Tray",
        slug: "frp-grp-cable-tray",
        summary:
          "Available as perforated, ladder, solid bottom and covered trays, with covers, bends and accessories supplied to suit.",
        image: frpCableTray,
        specs: [
          { label: "Material", value: "Fibre Reinforced Plastic (FRP/GRP)" },
          { label: "Resin", value: "Polyester / Vinyl Ester" },
          { label: "Type", value: "Perforated / Solid bottom / Ladder / Covered" },
          { label: "Standard Length", value: "2.0 m / 3.0 m / 4.0 m or as required" },
          { label: "Width", value: "50 – 1000 mm, as required" },
          { label: "Height", value: "25 – 150 mm, as required" },
          { label: "Thickness", value: "Approx. 3 – 8 mm depending on size / load" },
          { label: "Colour", value: "Grey / White / Green / Custom" },
          { label: "Temperature Resistance", value: "Typically up to 80 – 120 °C depending on resin" },
          { label: "Electrical Property", value: "Non-conductive / electrically insulating" },
          { label: "Corrosion & Water Resistance", value: "Excellent" },
          { label: "UV Resistance", value: "UV-resistant grades available" },
          { label: "Fire Performance", value: "Fire-retardant grades available" },
          { label: "Load Capacity", value: "Depends on tray size, thickness and support span" },
          { label: "Accessories", value: "Covers, bends, tees, reducers and supports" },
        ],
        applications: [
          "Industrial and process plants",
          "Chemical and fertiliser plants",
          "Marine and coastal installations",
          "Outdoor and corrosive environments",
          "Electrical cable routing",
        ],
      },
    ],
  },
];

export function findProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
