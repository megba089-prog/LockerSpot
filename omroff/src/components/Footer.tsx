import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react'

const navLinks = [
  { to: '/',           label: 'Home' },
  { to: '/prodotti',   label: 'Prodotti' },
  { to: '/chi-siamo',  label: 'Chi Siamo' },
  { to: '/news',       label: 'News' },
  { to: '/contatti',   label: 'Contatti' },
]

const products = [
  { label: 'Macchine Batterie Pb-A' },
  { label: 'Lavorazione Tubi' },
  { label: 'Lavorazioni Meccaniche' },
]

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-omr section-pad">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span
                className="heading-display text-4xl text-textPri"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 800, letterSpacing: '0.06em' }}
              >
                OMR
              </span>
              <div className="label-overline mt-1">Officina Meccanica Romanese S.R.L.</div>
            </div>
            <p className="text-textSub text-sm leading-relaxed max-w-xs mb-6">
              Dal 1981 progettiamo e costruiamo macchinari industriali di precisione.
              Forniamo impianti in Europa, Stati Uniti e Asia con oltre quarant'anni di esperienza nel settore.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:+390363912282" className="flex items-center gap-2.5 text-sm text-textSub hover:text-accent transition-colors group">
                <span className="w-8 h-8 bg-surfaceHi flex items-center justify-center border border-border group-hover:border-accent transition-colors">
                  <Phone size={14} />
                </span>
                (+39) 0363 912282
              </a>
              <a href="mailto:omr@omroff.it" className="flex items-center gap-2.5 text-sm text-textSub hover:text-accent transition-colors group">
                <span className="w-8 h-8 bg-surfaceHi flex items-center justify-center border border-border group-hover:border-accent transition-colors">
                  <Mail size={14} />
                </span>
                omr@omroff.it
              </a>
              <div className="flex items-start gap-2.5 text-sm text-textSub">
                <span className="w-8 h-8 bg-surfaceHi flex items-center justify-center border border-border flex-shrink-0 mt-0.5">
                  <MapPin size={14} />
                </span>
                Via Fontana Rossa, 11<br />24058 Romano di Lombardia (BG)
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="label-overline mb-5"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.2em' }}
            >
              Navigazione
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="flex items-center gap-1.5 text-sm text-textSub hover:text-accent transition-colors group"
                  >
                    <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4
              className="label-overline mb-5"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.2em' }}
            >
              Prodotti
            </h4>
            <ul className="flex flex-col gap-2.5">
              {products.map(({ label }) => (
                <li key={label}>
                  <Link
                    to="/prodotti"
                    className="flex items-center gap-1.5 text-sm text-textSub hover:text-accent transition-colors group"
                  >
                    <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="label-overline mb-4">Certificazione</h4>
              <div className="inline-flex items-center gap-2 px-3 py-2 border border-border text-xs text-textMut font-mono">
                ✓ UNI EN ISO 9001:2015
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="hr-accent mt-16 mb-6" />
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-textMut font-mono">
            © {new Date().getFullYear()} OMR — Officina Meccanica Romanese S.R.L. · P.IVA 01272210160
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-textMut hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-textMut hover:text-accent transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
