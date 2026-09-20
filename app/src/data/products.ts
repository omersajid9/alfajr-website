export type Product = {
  name: string;
  grade: string;
  range: string;
  specs: { label: string; value: string }[];
  applications: string[];
  supply: string;
};

export type ProductLine = {
  id: string;
  index: string;
  business: string;
  tagline: string;
  description: string;
  products: Product[];
};

export const productLines: ProductLine[] = [
  {
    id: 'olefins-polymers',
    index: '01',
    business: 'Olefins & Polymers',
    tagline: 'Global-grade polymers, stocked in Pakistan',
    description:
      'HDPE, LDPE, LLDPE and polypropylene — the polymers Pakistani converters build pipe, film and packaging from — landed with the certificates and technical data sheets your quality team will ask for.',
    products: [
      {
        name: 'High-Density Polyethylene',
        grade: 'HDPE',
        range: 'Blow moulding, injection moulding, film, pipe & rotational grades',
        specs: [
          { label: 'Density', value: '0.941 – 0.965 g/cm³' },
          { label: 'Melt Flow Rate (190°C / 2.16 kg)', value: '0.05 – 55 g/10 min' },
          { label: 'Tensile Strength at Yield', value: '22 – 31 MPa' },
          { label: 'Forms', value: 'Pellets, 25 kg bags / octabins / bulk' },
        ],
        applications: ['Pressure & PE pipe', 'Bottles and jerrycans', 'Caps & closures', 'Crates and industrial containers', 'Geomembranes'],
        supply: '25 kg bags on shrink-wrapped pallets, octabins, or bulk silo tankers',
      },
      {
        name: 'Low & Linear Low-Density Polyethylene',
        grade: 'LDPE / LLDPE',
        range: 'Film, lamination, extrusion coating & moulding grades',
        specs: [
          { label: 'Density', value: '0.915 – 0.935 g/cm³' },
          { label: 'Melt Flow Rate (190°C / 2.16 kg)', value: '0.2 – 50 g/10 min' },
          { label: 'Clarity / Gloss', value: 'High-clarity film grades available' },
          { label: 'Forms', value: 'Pellets, 25 kg bags / bulk' },
        ],
        applications: ['Flexible packaging film', 'Shrink & stretch film', 'Agricultural film', 'Lamination & coating', 'Wire & cable jacketing'],
        supply: '25 kg bags, octabins, bulk deliveries to converter silos',
      },
      {
        name: 'Polypropylene',
        grade: 'PP — Homo / Impact / Random Copolymer',
        range: 'Homopolymer, impact and random copolymer grades for raffia, moulding and fibre.',
        specs: [
          { label: 'Density', value: '0.90 – 0.91 g/cm³' },
          { label: 'Melt Flow Rate (230°C / 2.16 kg)', value: '0.3 – 100+ g/10 min' },
          { label: 'Flexural Modulus', value: '1,000 – 1,900 MPa' },
          { label: 'Forms', value: 'Pellets, 25 kg bags / octabins' },
        ],
        applications: ['Woven sacks & raffia', 'Houseware & furniture', 'Automotive components', 'Rigid packaging & caps', 'Fibre & nonwovens'],
        supply: '25 kg bags, octabins and bulk; dedicated grades for raffia and fibre lines',
      },
      {
        name: 'Base Olefins & Aromatics',
        grade: 'Ethylene · Propylene · Butadiene · Benzene',
        range: 'Polymer-grade and chemical-grade streams from world-scale steam crackers',
        specs: [
          { label: 'Ethylene purity', value: 'Polymer grade ≥ 99.9%' },
          { label: 'Propylene', value: 'Polymer & chemical grade' },
          { label: 'Butadiene', value: '≥ 99.5% for synthetic rubber' },
          { label: 'Benzene', value: 'Nitration / extraction grades' },
        ],
        applications: ['Polyethylene & PET', 'PVC & construction', 'Synthetic rubber & tyres', 'Detergents & lubricants'],
        supply: 'Contract-based bulk supply for downstream chemical producers',
      },
    ],
  },
  {
    id: 'phenol',
    index: '02',
    business: 'Phenol & Acetone',
    tagline: 'World-scale aromatics, delivered locally',
    description:
      'Phenol, acetone, cumene and AMS — the aromatics chain behind resins, nylons and acrylics — supplied with the purity specs and safety documentation your process needs to stay compliant.',
    products: [
      {
        name: 'Phenol',
        grade: 'Phenol — molten & flake',
        range: 'High-purity synthetic phenol for resin and caprolactam chains',
        specs: [
          { label: 'Purity', value: '≥ 99.9 wt%' },
          { label: 'Freezing Point', value: '≥ 40.6 °C' },
          { label: 'Water Content', value: '≤ 0.05 wt%' },
          { label: 'Forms', value: 'Molten bulk / flakes in bags' },
        ],
        applications: ['Bisphenol-A for polycarbonate & epoxy', 'Phenolic resins for plywood & laminates', 'Caprolactam for nylon', 'Agrochemical intermediates'],
        supply: 'Heated ISO tanks and lined bulk tankers; flake in 25 kg bags',
      },
      {
        name: 'Acetone',
        grade: 'Acetone — solvent & chemical grade',
        range: 'Low-impurity acetone for solvents, MMA and BPA chains',
        specs: [
          { label: 'Purity', value: '≥ 99.5 wt%' },
          { label: 'Specific Gravity (20/20°C)', value: '0.790 – 0.793' },
          { label: 'Water Content', value: '≤ 0.3 wt%' },
          { label: 'Boiling Range', value: '55.5 – 57.5 °C' },
        ],
        applications: ['Paints, coatings & printing inks', 'MMA / PMMA acrylics', 'Pharmaceutical processing', 'Adhesives & cleaning'],
        supply: 'Drums, IBCs and bulk ISO tank containers',
      },
      {
        name: 'Cumene & Alpha-Methylstyrene',
        grade: 'Cumene · AMS',
        range: 'Cumene-process intermediates.',
        specs: [
          { label: 'Cumene Purity', value: '≥ 99.9 wt%' },
          { label: 'AMS Purity', value: '≥ 99.5 wt%' },
          { label: 'Colour (APHA)', value: '≤ 10' },
          { label: 'Forms', value: 'Bulk liquid' },
        ],
        applications: ['Phenol/acetone co-production', 'ABS & specialty resins', 'Plasticisers', 'Coatings & waxes'],
        supply: 'Bulk parcels and ISO tanks for industrial consumers',
      },
    ],
  },
  {
    id: 'nitriles',
    index: '03',
    business: 'Nitriles',
    tagline: 'The nitrile supply your process depends on',
    description:
      'Acrylonitrile for ABS, fibre and carbon-fibre precursor manufacturing, plus laboratory-grade acetonitrile for pharma and analytical work — handled with the temperature control and purity assurance these materials demand.',
    products: [
      {
        name: 'Acrylonitrile',
        grade: 'ACN — fibre & resin grade',
        range: 'High-stability monomer for polymerisation chains',
        specs: [
          { label: 'Purity', value: '≥ 99.5 wt%' },
          { label: 'Appearance', value: 'Clear, colourless liquid' },
          { label: 'Inhibitor (MEHQ)', value: '35 – 45 ppm' },
          { label: 'Forms', value: 'Bulk liquid / ISO tank' },
        ],
        applications: ['ABS & SAN engineering plastics', 'Acrylic & modacrylic fibre', 'Carbon fibre precursor', 'Nitrile rubber (NBR) & gloves'],
        supply: 'Dedicated ISO tank fleet with temperature-controlled handling',
      },
      {
        name: 'Acetonitrile',
        grade: 'ACN — HPLC & industrial grade',
        range: 'Ultra-pure solvent',
        specs: [
          { label: 'Purity (GC)', value: '≥ 99.9%' },
          { label: 'UV Absorbance', value: 'HPLC gradient grade available' },
          { label: 'Water (KF)', value: '≤ 0.02%' },
          { label: 'Forms', value: 'Drums / IBC / bulk' },
        ],
        applications: ['Pharmaceutical synthesis', 'HPLC & analytical labs', 'Battery electrolytes', 'Specialty extraction'],
        supply: '200 L drums, IBCs and bulk; full CoA & regulatory dossiers',
      },
    ],
  },
  {
    id: 'oxide',
    index: '04',
    business: 'Oxide & Glycols',
    tagline: 'Glycol chemistry, supplied at scale',
    description:
      "MEG, ethanolamines and glycol ethers for PET resin, coolants, surfactants and agrochemical formulation — stocked so a delay upcountry doesn't become your production's problem.",
    products: [
      {
        name: 'Monoethylene Glycol',
        grade: 'MEG — fibre & antifreeze grade',
        range: 'High-purity glycol for polyester and coolant formulations',
        specs: [
          { label: 'Purity', value: '≥ 99.8 wt%' },
          { label: 'Diethylene Glycol', value: '≤ 0.05 wt%' },
          { label: 'Colour (Pt-Co)', value: '≤ 5' },
          { label: 'Forms', value: 'Bulk / ISO tank / drums' },
        ],
        applications: ['PET resin, fibre & film', 'Automotive antifreeze & coolants', 'Heat-transfer fluids', 'De-icing fluids'],
        supply: 'Bulk tankers, ISO tanks and 230 kg drums',
      },
      {
        name: 'Ethanolamines',
        grade: 'MEA · DEA · TEA',
        range: 'Full mono-, di- and tri-ethanolamine range',
        specs: [
          { label: 'Purity', value: '≥ 99.0 wt% (grade dependent)' },
          { label: 'Colour (APHA)', value: '≤ 15' },
          { label: 'Water', value: '≤ 0.2 wt%' },
          { label: 'Forms', value: 'Drums / IBC / bulk' },
        ],
        applications: ['Gas treating & sweetening', 'Detergents & personal care', 'Cement grinding aids', 'Agrochemical formulations'],
        supply: '225 kg drums, IBCs and bulk road tankers',
      },
      {
        name: 'Glycol Ethers & Esters',
        grade: 'E- & P-series solvents',
        range: 'Butyl glycol and related oxygenated solvents for coatings',
        specs: [
          { label: 'Purity', value: '≥ 99.0 wt%' },
          { label: 'Boiling Range', value: 'Product specific' },
          { label: 'Colour (Pt-Co)', value: '≤ 10' },
          { label: 'Forms', value: 'Drums / IBC / bulk' },
        ],
        applications: ['Architectural & industrial coatings', 'Printing inks', 'Industrial cleaners', 'Electronics solvents'],
        supply: '190 kg drums, IBCs, bulk ISO tanks',
      },
    ],
  },
  {
    id: 'oligomers',
    index: '05',
    business: 'Oligomers',
    tagline: 'Performance hydrocarbons for demanding formulations',
    description:
      'PAO, linear alpha olefins and polyisobutene for synthetic lubricants, drilling fluids and detergent formulation — drawn from flexible, world-scale units and delivered in the viscosity grade your formulation calls for.',
    products: [
      {
        name: 'Polyalphaolefins',
        grade: 'PAO — low & high viscosity',
        range: 'Full viscosity ladder',
        specs: [
          { label: 'Viscosity (100 °C)', value: '2 – 100+ cSt grades' },
          { label: 'Viscosity Index', value: 'Up to 140+' },
          { label: 'Pour Point', value: 'Down to −60 °C' },
          { label: 'Forms', value: 'Bulk / drums / IBC' },
        ],
        applications: ['Synthetic engine oils', 'Industrial gear & hydraulic oils', 'Compressor lubricants', 'Greases'],
        supply: 'Flexi-tanks, ISO tanks, drums and IBCs',
      },
      {
        name: 'Linear Alpha Olefins',
        grade: 'LAO — C4 to C30+ cuts',
        range: 'Broad carbon-number distribution from flexible LAO units',
        specs: [
          { label: 'Cuts', value: '1-butene to C30+' },
          { label: 'Alpha Olefin Content', value: 'High-purity cuts available' },
          { label: 'Appearance', value: 'Clear liquids / waxes' },
          { label: 'Forms', value: 'Bulk liquid' },
        ],
        applications: ['PE co-monomers (LLDPE/HDPE)', 'Synthetic lubricant feedstock', 'Surfactants & detergents', 'Oilfield & drilling fluids'],
        supply: 'Bulk parcels and ISO tanks',
      },
      {
        name: 'Polyisobutene',
        grade: 'PIB — conventional & HR-PIB',
        range: 'Molecular-weight range from liquids to rubbery solids',
        specs: [
          { label: 'Molecular Weight (Mn)', value: '350 – 6,000+' },
          { label: 'Appearance', value: 'Water-white to pale' },
          { label: 'Forms', value: 'Drums / bulk heated' },
          { label: 'Reactivity', value: 'HR grades for dispersants' },
        ],
        applications: ['Fuel & lubricant additives', 'Sealants & adhesives', 'Cable compounds', 'Chewing-gum base & cling film'],
        supply: 'Heated bulk, drums and IBCs',
      },
    ],
  },
  {
    id: 'solvents',
    index: '06',
    business: 'Solvents',
    tagline: 'Everyday essentials, quality-checked on arrival',
    description:
      'Isopropyl alcohol, MEK and related solvents for coatings, printing, pharma and agrochemical use — imported, warehoused and QC-tested before a single drum reaches your site.',
    products: [
      {
        name: 'Isopropyl Alcohol',
        grade: 'IPA — technical & pharma grade',
        range: 'High-purity alcohol for pharma, coatings and cleaning',
        specs: [
          { label: 'Purity', value: '≥ 99.8 wt%' },
          { label: 'Water', value: '≤ 0.1 wt%' },
          { label: 'Acidity (as acetic acid)', value: '≤ 0.002 wt%' },
          { label: 'Forms', value: 'Drums / IBC / ISO tank' },
        ],
        applications: ['Pharmaceutical & sanitiser', 'Coatings & inks', 'Electronics cleaning', 'Chemical synthesis'],
        supply: '160 kg drums, IBCs and ISO tanks',
      },
      {
        name: 'Methyl Ethyl Ketone',
        grade: 'MEK — solvent grade',
        range: 'Fast-evaporating ketone for high-solids systems',
        specs: [
          { label: 'Purity', value: '≥ 99.5 wt%' },
          { label: 'Boiling Point', value: '79.6 °C' },
          { label: 'Water', value: '≤ 0.05 wt%' },
          { label: 'Forms', value: 'Drums / bulk' },
        ],
        applications: ['PVC & PU coatings', 'Adhesives & sealants', 'Printing inks', 'Dewaxing & extraction'],
        supply: '165 kg drums, IBCs, bulk tankers',
      },
      {
        name: 'Ethanol & SBA',
        grade: 'Ethanol · sec-Butyl Alcohol · DIPE',
        range: 'Complementary oxygenated solvents and ethers',
        specs: [
          { label: 'Ethanol', value: '96% & absolute grades' },
          { label: 'SBA Purity', value: '≥ 99.0 wt%' },
          { label: 'DIPE', value: 'Solvent & octane grade' },
          { label: 'Forms', value: 'Drums / IBC / bulk' },
        ],
        applications: ['Pharma & personal care', 'Paints & thinners', 'Fuel ethers', 'Laboratory use'],
        supply: 'Drums, IBCs, ISO tanks and bulk deliveries',
      },
    ],
  },
];

export const stats = [
  { value: '13+', unit: 'cities', label: 'Karachi, Lahore, Islamabad — delivery nationwide' },
  { value: '24/7', unit: 'service', label: 'Supply coordination around the clock' },
  { value: '6', unit: 'product lines', label: 'Chemicals, polymers and intermediates we supply' },
  { value: '2010', unit: 'founded', label: 'Alfajr established in Lahore, Pakistan' },
];

export const industries = [
  { name: 'Packaging', detail: 'Films, bottles, caps, closures and rigid containers' },
  { name: 'Construction', detail: 'Pipes, insulation, laminates, adhesives and sealants' },
  { name: 'Automotive', detail: 'PP components, synthetic lubricants, antifreeze, tyres' },
  { name: 'Agriculture', detail: 'Agrochemical intermediates, films, pipes and irrigation' },
  { name: 'Textiles & Fibres', detail: 'Acrylic fibre, PET feedstock, nylon intermediates' },
  { name: 'Pharma & Labs', detail: 'HPLC solvents, IPA, high-purity acetonitrile' },
  { name: 'Paints & Coatings', detail: 'Ketones, glycol ethers and specialty solvents' },
  { name: 'Energy & Oilfield', detail: 'Drilling-fluid base stocks, PAO, gas-treating amines' },
];
