export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-900 text-white">
      <div className="blueprint-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1440px] px-5 pt-16 md:px-10 md:pt-24">
        <div className="grid grid-cols-1 gap-12 pb-16 md:grid-cols-12 md:pb-24">
          <div className="md:col-span-5">
            <p className="t-label text-white/40">Alfajr (Pvt) Ltd</p>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/60">
              We supply chemicals, polymers and intermediates across Pakistan. Authorised INEOS distributor.
            </p>
          </div>
          <div className="md:col-span-3 md:col-start-7">
            <p className="t-label text-white/40">Navigate</p>
            <ul className="mt-5 space-y-3">
              {['Values', 'Products', 'Industries', 'Logistics', 'Contact'].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="link-line text-[15px] text-white/75">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3 md:col-start-10">
            <p className="t-label text-white/40">Contact</p>
            <p className="mt-5 font-display text-white/40">+92 321 84 32850</p>
            {/* <p className="mt-5 font-display text-2xl font-bold uppercase tracking-wide">Lahore</p>
            <p className="mt-5 font-display text-2xl font-bold uppercase tracking-wide">sales@alfajr.com.pk</p> */}
            <p className="mt-3 text-sm leading-relaxed text-white/55">
              Product names and trademarks referenced belong to their respective owners.
            </p>
          </div>
        </div>

        {/* Monumental wordmark */}
        <div className="select-none overflow-hidden border-t border-white/10" aria-hidden="true">
          <p className="t-display -mb-[0.02em] whitespace-nowrap text-[18vw] text-white/95">Alfajr</p>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-navy-ink/60">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-3 px-5 py-5 md:px-10">
          <p className="t-label text-white/40">© {year} Alfajr (Pvt) Ltd — Lahore, Pakistan</p>
          <p className="t-label text-white/40">Quality · Integrity · Safety</p>
        </div>
      </div>
    </footer>
  );
}
