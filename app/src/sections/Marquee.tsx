const items = [
  '0W-20',
  '5W-30',
  '5W-40',
  '10W-40',
  '15W-40',
  '20W-50',
  'ATF',
  'Gear Oil',
  'Manual Transmission Oil',
  'Diesel Engine Oil',
  'Gasoline Engine Oil',
  '2-Cycle Oil',
  'API SP',
  'ACEA C3',
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-navy-900/10 bg-paper py-5">
      <div className="marquee-track flex w-max items-center gap-10">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-lg font-semibold uppercase tracking-wide text-navy-800">{item}</span>
            <span className="h-1.5 w-1.5 rotate-45 bg-navy-300" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
