import { useReveal } from '../hooks/useReveal';

export default function Hero() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="top" ref={ref} className="relative bg-navy-800 text-white">
      <div className="blueprint-grid absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-[1440px]">
        {/* Left: wordmark panel */}
        <div className="flex min-h-[62vh] flex-col justify-between px-5 pb-10 pt-36 md:px-10 lg:min-h-screen lg:pb-14 lg:pt-44">
          <div>
            <p className="reveal t-label text-white/50" style={{ ['--reveal-delay' as string]: '0ms' }}>
            Engine oils & transmission fluids, Pakistan
            </p>
            <h1
              className="reveal t-display mt-6 text-[17vw] leading-[0.9] md:text-[13vw] lg:text-[8.5vw]"
              style={{ ['--reveal-delay' as string]: '120ms' }}
            >
              Al Fajr
              {/* <span className="sr-only">Al Fajr</span> */}
            </h1>
            <p className="reveal t-label mt-8 max-w-2xl text-white/60" style={{ ['--reveal-delay' as string]: '240ms' }}>
              Engine Oils · Transmission Fluids · Nationwide Delivery
            </p>
          </div>

          <div
            className="reveal mt-12 flex items-center gap-6 border-t border-white/15 pt-6"
            style={{ ['--reveal-delay' as string]: '360ms' }}
          >
            <div>
              <p className="t-label text-white/45">Distribution partner of</p>
              <p className="font-display text-3xl font-bold uppercase tracking-wide md:text-4xl">ENEOS</p>
            </div>
            <div className="h-12 w-px bg-white/15" />
          </div>
        </div>

        </div>

      {/* Scroll cue */}
      {/* <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block">
        <p className="t-label text-white/40">Scroll</p>
      </div> */}
    </section>
  );
}
