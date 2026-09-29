import { markets } from '../data/products';
import { useReveal } from '../hooks/useReveal';

export default function Markets() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="markets" ref={ref} className="bg-paper text-navy-900">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="reveal t-label text-navy-400">03 · Who we serve</p>
            <h2 className="reveal t-display mt-6 text-4xl md:text-6xl" style={{ ['--reveal-delay' as string]: '100ms' }}>
              The engines
              <br />
              we keep moving
            </h2>
          </div>
          <p className="reveal max-w-md text-[15px] leading-relaxed text-navy-500" style={{ ['--reveal-delay' as string]: '200ms' }}>
            Every day, workshops, fleets and drivers across Pakistan rely on us for the right grade, on time, from city cars to truck fleets.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px bg-navy-900/10 sm:grid-cols-2 lg:grid-cols-4">
          {markets.map((m, i) => (
            <div
              key={m.name}
              className="reveal group bg-paper p-8 transition-colors duration-500 hover:bg-navy-800"
              style={{ ['--reveal-delay' as string]: `${(i % 4) * 90}ms` }}
            >
              <p className="font-mono text-xs text-navy-300 transition-colors group-hover:text-white/40">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-8 font-display text-lg font-semibold uppercase tracking-tight transition-colors group-hover:text-white">
                {m.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-500 transition-colors group-hover:text-white/65">
                {m.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}