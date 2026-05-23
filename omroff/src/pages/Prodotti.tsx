import { Link } from 'react-router-dom'
import { Zap, Pipette, Wrench, ArrowRight, CheckCircle, ArrowUpRight } from 'lucide-react'

const categories = [
  {
    id: '01',
    tag: 'Categoria 01',
    icon: <Zap size={28} />,
    title: 'Macchine per la Produzione Batterie Pb-A',
    subtitle: 'Lead-Acid Battery Production Machines',
    description:
      'OMR progetta e costruisce impianti completi per la produzione di batterie al piombo-acido per avviamento. Dall\'assemblaggio alla formazione, ogni macchina è studiata per garantire il massimo rendimento produttivo e la massima affidabilità nel tempo.',
    features: [
      'Impianti di assemblaggio celle e batterie',
      'Macchine per la formazione e il collaudo',
      'Sistemi di automazione e controllo',
      'Progettazione custom su specifiche cliente',
      'Assistenza tecnica e manutenzione',
      'Installazione e avviamento in loco',
    ],
    markets: ['Europa', 'Stati Uniti', 'Asia'],
  },
  {
    id: '02',
    tag: 'Categoria 02',
    icon: <Pipette size={28} />,
    title: 'Macchine per la Lavorazione dei Tubi',
    subtitle: 'Tube Processing Machines',
    description:
      'Soluzioni avanzate per la lavorazione industriale dei tubi. OMR sviluppa macchine per taglio, curvatura, saldatura e lavorazione di tubi metallici, con particolare attenzione alla precisione dimensionale e alla ripetibilità del processo produttivo.',
    features: [
      'Macchine per taglio e troncatura tubi',
      'Sistemi di curvatura e piegatura',
      'Attrezzature per la saldatura automatica',
      'Controlli dimensionali integrati',
      'Linee di produzione complete',
      'Soluzioni modulari e scalabili',
    ],
    markets: ['Europa', 'Nord Africa', 'Medio Oriente'],
  },
  {
    id: '03',
    tag: 'Categoria 03',
    icon: <Wrench size={28} />,
    title: 'Lavorazioni Meccaniche Conto Terzi',
    subtitle: 'Third-Party Mechanical Machining',
    description:
      'L\'officina meccanica OMR offre un servizio completo di lavorazioni conto terzi: tornitura CNC, fresatura, rettifica e montaggio. Il nostro parco macchine di ultima generazione garantisce precisione e rispetto dei tempi di consegna.',
    features: [
      'Tornitura CNC di precisione',
      'Fresatura e lavorazioni complesse',
      'Rettifica cilindrica e piana',
      'Montaggio e collaudo meccanico',
      'Lavorazioni su disegno cliente',
      'Controllo qualità documentato',
    ],
    markets: ['Lombardia', 'Nord Italia', 'Europa'],
  },
]

export default function Prodotti() {
  return (
    <div>
      {/* ── PAGE HEADER ── */}
      <section
        className="relative overflow-hidden py-24"
        style={{ background: 'var(--surface)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 50% 80% at 30% 50%, rgba(249,115,22,0.07) 0%, transparent 70%)',
          }}
        />
        <div className="container-omr section-pad py-0 relative z-10">
          <span className="label-overline block mb-4">Catalogo</span>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              lineHeight: 0.9,
            }}
          >
            I Nostri<br />
            <span style={{ color: 'var(--accent)' }}>Prodotti</span>
          </h1>
          <p className="text-textSub max-w-xl mt-6 leading-relaxed">
            Tre linee di prodotto, una sola mission: ingegneria di precisione al servizio
            dell'industria globale. Ogni impianto è progettato con cura e costruito per durare.
          </p>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mt-8 text-xs font-mono text-textMut">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-textSub">Prodotti</span>
          </div>
        </div>
      </section>

      {/* ── PRODUCT SECTIONS ── */}
      {categories.map((cat, i) => (
        <section
          key={cat.id}
          className="section-pad"
          style={{ background: i % 2 === 0 ? 'var(--bg)' : 'var(--surface)' }}
        >
          <div className="container-omr">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>

              {/* Content */}
              <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="label-overline mb-4">{cat.tag}</div>
                <div
                  className="w-14 h-14 flex items-center justify-center border mb-6"
                  style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
                >
                  {cat.icon}
                </div>
                <h2
                  className="mb-2"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    lineHeight: 1.05,
                  }}
                >
                  {cat.title}
                </h2>
                <p className="text-sm font-mono text-textMut mb-6">{cat.subtitle}</p>
                <p className="text-textSub leading-relaxed mb-8">{cat.description}</p>

                {/* Markets */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {cat.markets.map((m) => (
                    <span
                      key={m}
                      className="px-3 py-1 text-xs font-mono border"
                      style={{ borderColor: 'var(--border)', color: 'var(--text-sub)' }}
                    >
                      {m}
                    </span>
                  ))}
                </div>

                <Link to="/contatti" className="btn-primary">
                  Richiedi Informazioni <ArrowRight size={14} />
                </Link>
              </div>

              {/* Feature list */}
              <div className={i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div
                  className="p-8 border"
                  style={{ background: i % 2 === 0 ? 'var(--surface)' : 'var(--surface-hi)', borderColor: 'var(--border)' }}
                >
                  <h3
                    className="text-sm mb-6"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)' }}
                  >
                    Caratteristiche principali
                  </h3>
                  <ul className="flex flex-col gap-4">
                    {cat.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircle
                          size={16}
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: 'var(--accent)' }}
                        />
                        <span className="text-sm text-textSub leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom accent */}
                  <div className="hr-accent mt-8" />
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs font-mono text-textMut">Settore {cat.id}/03</span>
                    <span
                      className="text-4xl font-display font-800 opacity-10"
                      style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--accent)' }}
                    >
                      {cat.id}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <section className="section-pad" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="container-omr text-center">
          <span className="label-overline block mb-4">Progetto Speciale?</span>
          <h2
            className="mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 4rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            Hai Esigenze Specifiche?
          </h2>
          <p className="text-textSub max-w-lg mx-auto mb-8">
            Progettiamo impianti speciali secondo le specifiche del cliente. Contattaci per
            discutere la tua esigenza.
          </p>
          <Link to="/contatti" className="btn-primary">
            Parliamo del tuo Progetto <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
