import { useReveal } from '../hooks/useReveal';
import { stats } from '../data/products';

const pillars = [
  {
    index: 'A',
    title: 'QUALITY',
    body: 'Every lot checked against its certificate of analysis before it leaves our warehouse, with full traceability back to the manufacturer.',
  },
  {
    index: 'B',
    title: 'INTEGRITY',
    body: 'The price, grade, and delivery date we quote are the ones you get.',
  },
  {
    index: 'C',
    title: 'SAFETY',
    body: 'Storage, handling, and transport built around the hazards these materials actually carry, following strict protocols.',
  },
];

export default function Values() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="values" ref={ref} className="bg-white text-navy-900">
      {/* Stats band */}
      <div className="hairline-b">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="reveal border-r border-navy-900/10 px-5 py-10 last:border-r-0 md:px-10 md:py-14 [&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r"
              style={{ ['--reveal-delay' as string]: `${i * 100}ms` }}
            >
              <p className="tnum font-display text-4xl font-semibold md:text-5xl">
                {s.value}
                <span className="ml-1 font-mono text-xs uppercase tracking-widest text-navy-400">{s.unit}</span>
              </p>
              {/* <p className="mt-3 max-w-[220px] text-sm leading-relaxed text-navy-500">{s.label}</p> */}
            </div>
          ))}
        </div>
      </div>

      {/* Values narrative */}
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-32">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="reveal t-label text-navy-400">01 — OUR VALUES</p>
            <h2
              className="reveal t-display mt-6 text-4xl md:text-6xl"
              style={{ ['--reveal-delay' as string]: '100ms' }}
            >
              QUALITY WE PROVE.
              <br />
              INTEGRITY WE PRACTICE.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="reveal t-body-lg text-navy-700" style={{ ['--reveal-delay' as string]: '180ms' }}>
              Petrochemicals don't forgive shortcuts. A drum of the wrong grade, a certificate that doesn't match
              the lot, a delivery that slips without warning — any of these costs a customer real money on their
              production line. Alfajr was built around not letting that happen.
            </p>
            <p
              className="reveal mt-6 t-body-lg text-navy-700"
              style={{ ['--reveal-delay' as string]: '260ms' }}
            >
              That's not a slogan for a wall. It's three commitments that shape how every order is handled, from
              the first phone call to the last invoice — regardless of whether it's a single drum or a vessel-load.
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className="mt-20 grid grid-cols-1 gap-px bg-navy-900/10 md:grid-cols-3">
          {pillars.map((p, i) => (
            <article
              key={p.title}
              className="reveal group bg-white p-8 transition-colors duration-500 hover:bg-navy-800 md:p-10"
              style={{ ['--reveal-delay' as string]: `${i * 120}ms` }}
            >
              <p className="font-mono text-xs text-navy-300 transition-colors group-hover:text-white/40">
                {p.index} /
              </p>
              <h3 className="mt-6 font-display text-xl font-semibold uppercase tracking-tight transition-colors group-hover:text-white">
                {p.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-navy-500 transition-colors group-hover:text-white/70">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
