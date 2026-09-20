import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { productLines } from '../data/products';

const WEB3FORMS_KEY = '774939eb-9a3b-413e-bc25-1df61faceb28';

export default function Contact() {
  const ref = useReveal<HTMLElement>();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    formData.append('access_key', WEB3FORMS_KEY);
    formData.append('subject', 'Alfajr website enquiry');
    formData.append('from_name', 'Alfajr website');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setSent(true);
      } else {
        setError('Could not send. Please try again or email sales@alfajr.com.pk.');
      }
    } catch {
      setError('Could not send. Please try again or email sales@alfajr.com.pk.');
    } finally {
      setSending(false);
    }
  }

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
                onSubmit={onSubmit}
              >
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <label className="block">
                    <span className="t-label text-navy-400">Full name</span>
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="Muhammad Ahmed"
                      className="mt-3 w-full border-b border-navy-900/25 bg-transparent pb-3 font-body text-base outline-none transition-colors placeholder:text-navy-300 focus:border-navy-700"
                    />
                  </label>
                  <label className="block">
                    <span className="t-label text-navy-400">Company</span>
                    <input
                      required
                      name="company"
                      type="text"
                      placeholder="Pak Industries (Pvt) Ltd"
                      className="mt-3 w-full border-b border-navy-900/25 bg-transparent pb-3 font-body text-base outline-none transition-colors placeholder:text-navy-300 focus:border-navy-700"
                    />
                  </label>
                  <label className="block">
                    <span className="t-label text-navy-400">Email</span>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="you@company.com.pk"
                      className="mt-3 w-full border-b border-navy-900/25 bg-transparent pb-3 font-body text-base outline-none transition-colors placeholder:text-navy-300 focus:border-navy-700"
                    />
                  </label>
                  <label className="block">
                    <span className="t-label text-navy-400">Phone</span>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="+92 300 0000000"
                      className="mt-3 w-full border-b border-navy-900/25 bg-transparent pb-3 font-body text-base outline-none transition-colors placeholder:text-navy-300 focus:border-navy-700"
                    />
                  </label>
                  <label className="block md:col-span-2">
                    <span className="t-label text-navy-400">Product line</span>
                    <select
                      name="product"
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
                      name="message"
                      rows={4}
                      placeholder="e.g. HDPE 5502xx blow moulding grade, 20 MT/month, Faisalabad"
                      className="mt-3 w-full resize-none border-b border-navy-900/25 bg-transparent pb-3 font-body text-base outline-none transition-colors placeholder:text-navy-300 focus:border-navy-700"
                    />
                  </label>
                </div>
                {error ? (
                  <p className="mt-6 text-[14px] leading-relaxed text-red-700">{error}</p>
                ) : null}
                <button
                  type="submit"
                  disabled={sending}
                  className="t-label mt-10 w-full bg-navy-700 px-8 py-4 text-white transition-colors duration-300 hover:bg-navy-900 disabled:cursor-wait disabled:opacity-60 md:w-auto"
                >
                  {sending ? 'Sending…' : 'Submit enquiry →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
