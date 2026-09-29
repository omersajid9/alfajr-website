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
    id: 'lubricants',
    index: '01',
    business: 'Lubricants',
    tagline: 'Engine oils and transmission fluids for every vehicle on the road',
    description:
      'Automotive engine oils and transmission fluids from Japan, matched to the viscosity, performance class and certification your vehicle manual calls for. Passenger cars to truck fleets, in the packs and volumes high-street workshops actually need.',
    products: [
      {
        name: 'Automotive Engine Oils',
        grade: 'Gasoline, diesel & 2-cycle',
        range: 'Engine oils for cars, light trucks and motorcycles',
        specs: [
          { label: 'Viscosity Grades', value: 'Full SAE range, incl. low-viscosity eco grades' },
          { label: 'Performance Classes', value: 'ILSAC / API / ACEA levels available' },
          { label: 'Environment', value: 'ECO-friendly formulations in range' },
          { label: 'Forms', value: '1 L to 4 L bottles, 20 L pails, 200 L drums' },
        ],
        applications: ['Gasoline engines', 'Diesel engines & turbo applications', 'LPG engines', 'Small engines & motorcycles', 'Engine flushing'],
        supply: 'Bottles, pails and drums for workshops and retail',
      },
      {
        name: 'Fleet & Commercial Engine Oils',
        grade: 'Diesel, LPG & agri',
        range: 'Heavy-duty engine oils for trucks, buses, taxis and agricultural machinery',
        specs: [
          { label: 'Engine Coverage', value: 'Gasoline, LPG and diesel engines' },
          { label: 'Heavy-Duty Classes', value: 'API / ACEA HD levels in range' },
          { label: 'Viscosity', value: 'High-temp grades incl. 15W-40 and 20W-50' },
          { label: 'Forms', value: 'Pails, drums and bulk' },
        ],
        applications: ['Truck, bus and taxi fleets', 'LPG-engine vehicles', 'Agricultural machinery', 'Generators'],
        supply: 'Drum and bulk programmes for fleet operators',
      },
      {
        name: 'Transmission & Drivetrain Fluids',
        grade: 'ATF, gear & manual transmission oils',
        range: 'Automatic transmission fluids, gear oils and manual transmission lubricants',
        specs: [
          { label: 'Automatic Transmission', value: 'Dexron / Mercon and OEM-specified ATF grades' },
          { label: 'Gear Oils', value: 'GL-4 / GL-5 hypoid grades' },
          { label: 'Manual Transmission', value: 'MTF grades for car and motorcycle gearboxes' },
          { label: 'Drivetrain', value: 'Axle, differential and transfer-case fluids' },
          { label: 'Forms', value: '1 L to 4 L bottles, 20 L pails, 200 L drums' },
        ],
        applications: ['Automatic transmissions & torque converters', 'Manual gearboxes', 'Axles & differentials', 'Transfer cases'],
        supply: 'Bottles, pails and drums for workshops and fleets',
      },
    ],
  },
];

export const stats = [
  { value: '13+', unit: 'cities', label: 'Karachi, Lahore, Islamabad; delivery nationwide' },
  { value: '24/7', unit: 'service', label: 'Supply coordination around the clock' },
  { value: 'Full', unit: 'SAE range', label: 'Engine oils and transmission fluids across Pakistan' },
  { value: '2000', unit: 'founded', label: 'Al Fajr established in Lahore, Pakistan' },
];

export const markets = [
  { name: 'Passenger Cars', detail: 'Gasoline and diesel engine oils, ATF and gear oils for everyday vehicles' },
  { name: 'Workshops & Garages', detail: 'Retail packs through pails and drums, with quick restock for high-street service bays' },
  { name: 'Truck & Bus Fleets', detail: 'Heavy-duty engine oils with drum and bulk supply programmes' },
  { name: 'Taxis & Commercial Fleets', detail: 'High-mileage protection for city fleets and ride services' },
  { name: 'Motorcycles & Rickshaws', detail: '2-cycle and 4-stroke oils for bikes and three-wheelers' },
  { name: 'Agricultural Machinery', detail: 'Engine and transmission oils for tractors and farm equipment' },
  { name: 'Generators & Power', detail: 'Engine oils for petrol and diesel gen-sets, home to industrial' },
  { name: 'Distributors & Retailers', detail: 'Wholesale supply and regional stocking for retail partners' },
];