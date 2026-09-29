import { useEffect, useState } from 'react';

const links = [
  { label: 'Values', href: '#values' },
  { label: 'Products', href: '#products' },
  { label: 'Markets', href: '#markets' },
  { label: 'Logistics', href: '#logistics' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(16,30,76,0.12)]' : 'bg-transparent'
      }`}
    >
      {/* Ticker bar */}
      <div className="bg-navy-900 text-white/80">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-1.5 md:px-10">
          <p className="t-label">ENEOS Business Partner, Pakistan</p>
          <p className="t-label hidden md:block">Karachi · Lahore · Islamabad</p>
        </div>
      </div>

      <div
        className={`mx-auto flex max-w-[1440px] items-center justify-between px-5 md:px-10 ${
          scrolled ? 'py-3' : 'py-5'
        } transition-all duration-500`}
      >
        <a href="#top" className="flex items-baseline gap-2">
          <span className={`font-display text-2xl font-bold uppercase tracking-tight ${scrolled ? 'text-navy-900' : 'text-white'}`}>
            Al Fajr
          </span>
          {/* <span className={`t-label ${scrolled ? 'text-navy-500' : 'text-white/60'}`}>× ENEOS</span> */}
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`link-line t-label ${scrolled ? 'text-navy-800' : 'text-white/85'}`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`t-label border px-5 py-2.5 transition-colors duration-300 ${
              scrolled
                ? 'border-navy-700 bg-navy-700 text-white hover:bg-navy-800'
                : 'border-white/70 text-white hover:bg-white hover:text-navy-800'
            }`}
          >
            Request a Quote
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className={`lg:hidden ${scrolled ? 'text-navy-900' : 'text-white'}`}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M3 7h18M3 12h18M3 17h12" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-navy-900 px-5 py-6 lg:hidden">
          <div className="flex flex-col gap-5">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="t-label text-white/85">
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="t-label mt-2 inline-block w-fit border border-white/70 px-5 py-2.5 text-white"
            >
              Request a Quote
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
