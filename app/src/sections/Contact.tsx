import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { productLines } from '../data/products';

export default function Contact() {
  const ref = useReveal<HTMLElement>();
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" ref={ref} className="bg-paper text-navy-900">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="reveal t-label text-navy-400">05 — Contact</p>
            <h2 className="reveal t-display mt-6 text-4xl md:text-6xl" style={{ ['--reveal-delay' as string]: '100ms' }}>
              Start the
              <br />
              conversation
            </h2>
            <p className="reveal mt-8 max-w-md text-[15px] leading-relaxed text-navy-500" style={{ ['--reveal-delay' as string]: '200ms' }}>
              Send a grade, a monthly volume and a delivery city — our commercial desk replies with availability,
              pricing and lead time, typically within one working day.
            </p>

            <div className="mt-12 space-y-8">
              {[
                ['Head office', 'Lahore 54000, Pakistan'],
                ['Commercial desk', 'sales@alfajr.com.pk · +92 321 84 32850'],
                ['Technical support', 'tech@alfajr.com.pk · +92 321 84 32850'],
              ].map(([label, value], i) => (
                <div key={label} className="reveal hairline-t pt-6" style={{ ['--reveal-delay' as string]: `${280 + i * 90}ms` }}>
                  <p className="t-label text-navy-400">{label}</p>
                  <p className="mt-3 font-display text-lg font-medium leading-snug md:text-xl">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            {sent ? (
              <div className="reveal is-visible flex h-full min-h-[420px] flex-col items-start justify-center border border-navy-900/15 bg-white p-10">
                <p className="t-label text-navy-400">Enquiry received</p>
                <h3 className="t-display mt-4 text-3xl md:text-4xl">Thank you.</h3>
                <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-navy-500">
                  Your enquiry has been logged with our commercial desk. Expect a response within one working day.
                </p>
              </div>
            ) : (
              <form
                className="reveal border border-navy-900/15 bg-white p-8 md:p-12"
                style={{ ['--reveal-delay' as string]: '250ms' }}
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <label className="block">
                    <span className="t-label text-navy-400">Full name</span>
                    <input
                      required
                      type="text"
                      placeholder="Muhammad Ahmed"
                      className="mt-3 w-full border-b border-navy-900/25 bg-transparent pb-3 font-body text-base outline-none transition-colors placeholder:text-navy-300 focus:border-navy-700"
                    />
                  </label>
                  <label className="block">
                    <span className="t-label text-navy-400">Company</span>
                    <input
                      required
                      type="text"
                      placeholder="Pak Industries (Pvt) Ltd"
                      className="mt-3 w-full border-b border-navy-900/25 bg-transparent pb-3 font-body text-base outline-none transition-colors placeholder:text-navy-300 focus:border-navy-700"
                    />
                  </label>
                  <label className="block">
                    <span className="t-label text-navy-400">Email</span>
                    <input
                      required
                      type="email"
                      placeholder="you@company.com.pk"
                      className="mt-3 w-full border-b border-navy-900/25 bg-transparent pb-3 font-body text-base outline-none transition-colors placeholder:text-navy-300 focus:border-navy-700"
                    />
                  </label>
                  <label className="block">
                    <span className="t-label text-navy-400">Phone</span>
                    <input
                      type="tel"
                      placeholder="+92 300 0000000"
                      className="mt-3 w-full border-b border-navy-900/25 bg-transparent pb-3 font-body text-base outline-none transition-colors placeholder:text-navy-300 focus:border-navy-700"
                    />
                  </label>
                  <label className="block md:col-span-2">
                    <span className="t-label text-navy-400">Product line</span>
                    <select
                      className="mt-3 w-full border-b border-navy-900/25 bg-transparent pb-3 font-body text-base outline-none transition-colors focus:border-navy-700"
                      defaultValue={productLines[0].business}
                    >
                      {productLines.map((l) => (
                        <option key={l.id} value={l.business}>
                          {l.business}
                        </option>
                      ))}
                      <option value="other">Other / multiple</option>
                    </select>
                  </label>
                  <label className="block md:col-span-2">
                    <span className="t-label text-navy-400">Requirement</span>
                    <textarea
                      rows={4}
                      placeholder="e.g. HDPE 5502xx blow moulding grade, 20 MT/month, Faisalabad"
                      className="mt-3 w-full resize-none border-b border-navy-900/25 bg-transparent pb-3 font-body text-base outline-none transition-colors placeholder:text-navy-300 focus:border-navy-700"
                    />
                  </label>
                </div>
                <button
                  type="submit"
                  className="t-label mt-10 w-full bg-navy-700 px-8 py-4 text-white transition-colors duration-300 hover:bg-navy-900 md:w-auto"
                >
                  Submit enquiry →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
