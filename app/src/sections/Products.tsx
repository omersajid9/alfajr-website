import { useState } from 'react';
import { productLines } from '../data/products';
import { useReveal } from '../hooks/useReveal';

export default function Products() {
  const ref = useReveal<HTMLElement>();
  const [openProduct, setOpenProduct] = useState<string | null>(productLines[0].products[0].name);

  const active = productLines[0];

  return (
    <section id="products" ref={ref} className="bg-navy-800 text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-32">
        {/* Heading */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="reveal t-label text-white/40">02 · Product portfolio</p>
            <h2
              className="reveal t-display mt-6 text-4xl md:text-6xl"
              style={{ ['--reveal-delay' as string]: '100ms' }}
            >
              Engineered Grades,
              <br />
              Ready to Supply.
            </h2>
          </div>
          <div className="flex items-end lg:col-span-4 lg:col-start-9">
            <p className="reveal text-[15px] leading-relaxed text-white/55" style={{ ['--reveal-delay' as string]: '200ms' }}>
            Engine oils and transmission fluids with full technical specifications. Every shipment includes TDS, SDS and compliance certificates.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Line selector */}
          {/* <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              {productLines.map((line) => {
                const isActive = line.id === activeId;
                return (
                  <button
                    key={line.id}
                    onClick={() => {
                      setActiveId(line.id);
                      setOpenProduct(line.products[0].name);
                    }}
                    className={`group flex w-full items-baseline gap-4 border-b border-white/10 py-5 text-left transition-colors ${
                      isActive ? 'text-white' : 'text-white/40 hover:text-white/80'
                    }`}
                  >
                    <span className={`font-mono text-xs ${isActive ? 'text-white/70' : 'text-white/30'}`}>
                      {line.index}
                    </span>
                    <span className="font-display text-lg font-semibold uppercase tracking-tight md:text-xl">
                      {line.business}
                    </span>
                    <span
                      className={`ml-auto transition-transform duration-500 ${
                        isActive ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'
                      }`}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </button>
                );
              })}
              <p className="mt-6 text-sm italic leading-relaxed text-white/45">{active.tagline}</p>
            </div>
          </div> */}

          {/* Product detail */}
          <div className="lg:col-span-12" key={active.id}>
            <p className="max-w-2xl text-[16px] leading-relaxed text-white/70">{active.description}</p>

            <div className="mt-10 border-t border-white/15">
              {active.products.map((p) => {
                const open = openProduct === p.name;
                return (
                  <article key={p.name} className="border-b border-white/15">
                    <button
                      onClick={() => setOpenProduct(open ? null : p.name)}
                      className="flex w-full flex-wrap items-baseline gap-x-5 gap-y-1 py-6 text-left"
                    >
                      <h3 className="font-display text-xl font-semibold uppercase tracking-tight md:text-2xl">
                        {p.name}
                      </h3>
                      <span className="t-label border border-white/25 px-2.5 py-1 text-white/70">{p.grade}</span>
                      <span
                        className={`ml-auto font-mono text-xl transition-transform duration-500 ${
                          open ? 'rotate-45' : ''
                        }`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-700 ease-swift ${
                        open ? 'grid-rows-[1fr] pb-8 opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-2xl text-[15px] leading-relaxed text-white/60">
                          <span className="t-label mr-2 text-white/40">Range:</span>
                          {p.range}
                        </p>

                        {/* Spec sheet */}
                        <div className="mt-6 overflow-x-auto">
                          <table className="w-full min-w-[560px] border-collapse">
                            <thead>
                              <tr className="border-b border-white/25">
                                <th className="t-label py-3 pr-4 text-left font-normal text-white/45">Property</th>
                                <th className="t-label py-3 text-left font-normal text-white/45">Typical value</th>
                              </tr>
                            </thead>
                            <tbody>
                              {p.specs.map((s) => (
                                <tr key={s.label} className="spec-row border-b border-white/10">
                                  <td className="py-3 pr-4 text-sm text-white/75">{s.label}</td>
                                  <td className="tnum py-3 font-mono text-sm text-white">{s.value}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {p.applications.map((a) => (
                            <span key={a} className="t-label border border-white/20 px-3 py-1.5 text-white/70">
                              {a}
                            </span>
                          ))}
                        </div>

                        <p className="mt-6 text-sm leading-relaxed text-white/55">
                          <span className="t-label mr-2 text-white/40">Supply form:</span>
                          {p.supply}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-white/35">
              * Typical values for guidance only; the sales contract states the binding specifications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
