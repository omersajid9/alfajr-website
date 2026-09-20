import { useReveal } from '../hooks/useReveal';

export default function Hero() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="top" ref={ref} className="relative bg-navy-800 text-white">
      <div className="blueprint-grid absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-[1440px]">
        {/* Left — wordmark panel */}
        <div className="flex min-h-[62vh] flex-col justify-between px-5 pb-10 pt-36 md:px-10 lg:min-h-screen lg:pb-14 lg:pt-44">
          <div>
            <p className="reveal t-label text-white/50" style={{ ['--reveal-delay' as string]: '0ms' }}>
            Industrial chemicals — Pakistan
            </p>
            <h1
              className="reveal t-display mt-6 text-[17vw] leading-[0.9] md:text-[13vw] lg:text-[8.5vw]"
              style={{ ['--reveal-delay' as string]: '120ms' }}
            >
              Alfajr
              {/* <span className="sr-only">Alfajr</span> */}
            </h1>
            <p className="reveal t-label mt-8 max-w-2xl text-white/60" style={{ ['--reveal-delay' as string]: '240ms' }}>
              Chemicals · Polymers · Intermediates —  Delivered nationwide
            </p>
          </div>

          <div
            className="reveal mt-12 flex items-center gap-6 border-t border-white/15 pt-6"
            style={{ ['--reveal-delay' as string]: '360ms' }}
          >
            <div>
              <p className="t-label text-white/45">Distribution partner of</p>
              <p className="font-display text-3xl font-bold uppercase tracking-wide md:text-4xl">INEOS</p>
            </div>
            <div className="h-12 w-px bg-white/15" />
            {/* <p className="max-w-[240px] text-sm leading-relaxed text-white/60">
              One of the world's largest chemical companies — 39 sites, 9 countries, ~29.4 million tonnes of annual capacity.
            </p> */}
          </div>
        </div>

        {/* Right — white mission panel */}
        {/* <div className="relative flex min-h-[70vh] flex-col justify-between bg-white px-5 py-14 text-navy-900 md:px-10 lg:min-h-screen lg:pt-44">
          <div className="blueprint-grid-dark absolute inset-0" aria-hidden="true" />
          <div className="relative">
            <p className="reveal t-label text-navy-400" style={{ ['--reveal-delay' as string]: '200ms' }}>
              The mission
            </p>
            <p
              className="reveal mt-8 max-w-xl font-display text-2xl font-medium leading-[1.35] tracking-tight md:text-[2rem]"
              style={{ ['--reveal-delay' as string]: '320ms' }}
            >
              Pakistani industry runs on reliable chemistry. Alfajr connects local manufacturers to the INEOS portfolio —
              polyolefins, phenol, nitriles, oxides, oligomers and solvents — with the stock, the paperwork and the
              engineering support to keep production lines moving.
            </p>
          </div>

          <div className="relative mt-14 grid grid-cols-2 gap-px bg-navy-900/10">
            {[
              ['06', 'INEOS business lines'],
              ['18+', 'Product families'],
              ['3', 'Stocking hubs'],
              ['24/7', 'Supply coordination'],
            ].map(([v, l], i) => (
              <div
                key={l}
                className="reveal bg-white p-6"
                style={{ ['--reveal-delay' as string]: `${420 + i * 90}ms` }}
              >
                <p className="tnum font-display text-3xl font-semibold md:text-4xl">{v}</p>
                <p className="t-label mt-2 text-navy-400">{l}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>

      {/* Scroll cue */}
      {/* <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block">
        <p className="t-label text-white/40">Scroll</p>
      </div> */}
    </section>
  );
}
