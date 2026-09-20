import { useReveal } from '../hooks/useReveal';

const steps = [
  {
    n: '01',
    title: 'Sourcing & contracting',
    body: 'We nominate grades and plan volumes against supplier production and shipping windows.',
  },
  {
    n: '02',
    title: 'Import & compliance',
    body: 'We handle LCs, customs clearance, PSQCA and hazardous-cargo documents end to end.',
  },
  {
    n: '03',
    title: 'Storage & QC',
    body: 'We warehouse at the Karachi port cluster and verify CoA before dispatch.',
  },
  {
    n: '04',
    title: 'Nationwide delivery',
    body: 'We deliver by tanker, bagged container and drum nationwide.',
  },
];

export default function Logistics() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="logistics" ref={ref} className="bg-white text-navy-900">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-32">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="reveal t-label text-navy-400">04 — Supply chain</p>
            <h2 className="reveal t-display mt-6 text-4xl md:text-6xl" style={{ ['--reveal-delay' as string]: '100ms' }}>
              Port gate
              <br />
              to plant gate
            </h2>
            <p className="reveal mt-8 t-body-lg text-navy-700" style={{ ['--reveal-delay' as string]: '200ms' }}>
              Distribution is a promise of continuity. Alfajr owns every step between the INEOS plant and your
              production line — so a delayed vessel, a missing document or a disputed assay never becomes your problem.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="reveal hairline-t flex gap-8 py-8 first:border-t-0 first:pt-0 md:py-10"
                style={{ ['--reveal-delay' as string]: `${i * 110}ms` }}
              >
                <span className="font-mono text-sm text-navy-300">{s.n}</span>
                <div>
                  <h3 className="font-display text-xl font-semibold uppercase tracking-tight md:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-navy-500">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
