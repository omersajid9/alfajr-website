const items = [
  'HDPE',
  'Polypropylene',
  'Acrylonitrile',
  'Phenol',
  'Acetone',
  'MEG',
  'Polyalphaolefins',
  'Acetonitrile',
  'IPA',
  'LLDPE',
  'Ethanolamines',
  'MEK',
  'Polyisobutene',
  'LDPE',
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
