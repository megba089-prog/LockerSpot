import { Link } from 'react-router-dom'
import { ArrowRight, Shield, TrendingUp, Users, Target, CheckCircle, Globe } from 'lucide-react'

const timeline = [
  {
    year: '1981',
    title: 'Fondazione',
    desc: 'Nasce come officina meccanica per lavori conto terzi di tornitura, fresatura e montaggio. Avvio delle attività di manutenzione industriale.',
  },
  {
    year: '1983',
    title: 'Espansione',
    desc: 'Affianca alla propria attività la produzione di piccoli escavatori, ampliando le competenze meccaniche e il parco macchine.',
  },
  {
    year: '1990s',
    title: 'Specializzazione',
    desc: 'OMR si specializza nel settore della produzione di batterie al piombo-acido, diventando un riferimento tecnico per le aziende del comparto.',
  },
  {
    year: '2000s',
    title: 'Internazionalizzazione',
    desc: 'Fornitura di impianti in Europa, Stati Uniti e Asia. L\'azienda consolida la sua presenza sui mercati internazionali.',
  },
  {
    year: '2015',
    title: 'ISO 9001',
    desc: 'Ottenimento della certificazione UNI EN ISO 9001:2015, attestante il Sistema di Gestione per la Qualità implementato.',
  },
  {
    year: 'Oggi',
    title: 'Leadership Tecnica',
    desc: 'Oltre 40 anni di expertise, tre continenti serviti, tre linee di prodotto consolidate. OMR continua a innovare e crescere.',
  },
]

const qualityPolicies = [
  { icon: <Shield size={18} />, label: 'Garantire', text: 'Il miglioramento continuo del Sistema Qualità, assicurando il rispetto dei requisiti dettati dalla legislazione vigente.' },
  { icon: <Target size={18} />, label: 'Assicurare', text: 'Il rispetto dei requisiti qualitativi e temporali del servizio fornito, con massima attenzione alla fase di progettazione.' },
  { icon: <Users size={18} />, label: 'Mantenere', text: 'Gli impegni assunti con i Clienti, comprendendo le loro esigenze espresse o implicite e soddisfacendole pienamente.' },
  { icon: <TrendingUp size={18} />, label: 'Migliorare', text: "L'efficienza operativa interna mediante la crescita professionale del personale e self-audit periodici." },
]

export default function ChiSiamo() {
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
        <div className="container-omr section-pad py-0 relative z-10">
          <span className="label-overline block mb-4">La nostra storia</span>
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
            Chi<br />
            <span style={{ color: 'var(--accent)' }}>Siamo</span>
          </h1>
          <p className="text-textSub max-w-xl mt-6 leading-relaxed">
            Oltre quarant'anni di storia industriale, una passione per la meccanica di precisione
            e un'ambizione globale nata in Lombardia.
          </p>
          <div className="flex items-center gap-2 mt-8 text-xs font-mono text-textMut">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-textSub">Chi Siamo</span>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="section-pad">
        <div className="container-omr">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="accent-line" />
              <h2
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  lineHeight: 1.05,
                }}
              >
                Officina Meccanica<br />Romanese S.R.L.
              </h2>
              <p className="text-textSub leading-relaxed mb-4">
                L'azienda nasce nel <strong className="text-textPri">1981</strong> come officina meccanica per lavori
                conto terzi di tornitura, fresatura e montaggio e lavori di manutenzione industriale.
              </p>
              <p className="text-textSub leading-relaxed mb-4">
                Dall'inizio svolge lavori di manutenzione di impianti industriali presso le aziende di
                produzione batterie. Nel <strong className="text-textPri">1983</strong> affianca alla propria attività la
                produzione di piccoli escavatori.
              </p>
              <p className="text-textSub leading-relaxed mb-8">
                Oggi l'azienda è in grado di progettare e costruire impianti per la produzione di
                batterie ad avviamento, impianti per la lavorazione del tubo e di studiare impianti
                speciali secondo le specifiche del cliente. OMR ha fornito impianti in
                <strong className="text-textPri"> Europa, Stati Uniti e Asia</strong> e vanta una esperienza
                quarantennale nel settore.
              </p>
              <Link to="/contatti" className="btn-primary">
                Contattaci <ArrowRight size={16} />
              </Link>
            </div>

            {/* Stats panel */}
            <div className="grid grid-cols-2 gap-px bg-border">
              {[
                { val: '1981', lbl: 'Fondazione' },
                { val: '40+', lbl: 'Anni Esperienza' },
                { val: '3', lbl: 'Linee di Prodotto' },
                { val: 'ISO', lbl: '9001:2015' },
              ].map(({ val, lbl }) => (
                <div
                  key={lbl}
                  className="flex flex-col items-center justify-center py-12 gap-2"
                  style={{ background: 'var(--surface)' }}
                >
                  <span
                    className="text-5xl"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--accent)', letterSpacing: '0.02em' }}
                  >
                    {val}
                  </span>
                  <span className="text-xs font-mono text-textMut">{lbl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container-omr">
          <span className="accent-line" />
          <span className="label-overline block mb-3">La nostra evoluzione</span>
          <h2
            className="mb-14"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            La Nostra Storia
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-16 top-0 bottom-0 w-px hidden md:block"
              style={{ background: 'var(--border)' }}
            />
            <div className="flex flex-col gap-8">
              {timeline.map((item, i) => (
                <div key={item.year} className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 group">
                  {/* Year badge */}
                  <div className="flex-shrink-0 flex items-center gap-4 md:w-32">
                    <div
                      className="w-3 h-3 rounded-full border-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-200 hidden md:block relative z-10"
                      style={{ borderColor: 'var(--accent)', background: i === timeline.length - 1 ? 'var(--accent)' : 'var(--bg)' }}
                    />
                    <span
                      className="font-display font-800 text-accent"
                      style={{ fontFamily: 'var(--font-display)', fontWeight: 800, letterSpacing: '0.04em', fontSize: '1.1rem' }}
                    >
                      {item.year}
                    </span>
                  </div>
                  {/* Content */}
                  <div
                    className="flex-1 p-6 border border-border group-hover:border-accent transition-colors duration-300"
                    style={{ background: 'var(--surface-hi)' }}
                  >
                    <h3
                      className="mb-2 text-textPri"
                      style={{ fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '1rem' }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm text-textSub leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── QUALITÀ ── */}
      <section className="section-pad">
        <div className="container-omr">
          <span className="accent-line" />
          <span className="label-overline block mb-3">Sistema di Gestione</span>
          <h2
            className="mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            Politica della Qualità
          </h2>
          <p className="text-textSub max-w-2xl leading-relaxed mb-14">
            La Direzione di OMR ritiene che il successo e la continuità di presenza sul mercato
            siano strettamente legati all'impegno verso il grado di soddisfazione dei clienti,
            al miglioramento continuo e allo sviluppo delle risorse umane.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {qualityPolicies.map(({ icon, label, text }) => (
              <div
                key={label}
                className="p-6 border border-border hover:border-accent transition-colors duration-300 group"
                style={{ background: 'var(--surface)' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-accent group-hover:scale-110 transition-transform duration-200"
                  >
                    {icon}
                  </span>
                  <span
                    className="text-accent"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: '0.85rem' }}
                  >
                    {label}
                  </span>
                </div>
                <p className="text-sm text-textSub leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          {/* ISO Badge */}
          <div
            className="p-8 border flex flex-col md:flex-row items-start md:items-center gap-6"
            style={{ background: 'var(--surface)', borderColor: 'var(--accent)' }}
          >
            <div
              className="w-16 h-16 flex items-center justify-center border flex-shrink-0"
              style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
            >
              <Shield size={28} />
            </div>
            <div className="flex-1">
              <h3
                className="mb-2"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '1.2rem' }}
              >
                UNI EN ISO 9001:2015
              </h3>
              <p className="text-sm text-textSub">
                OMR si impegna a mettere in atto un efficace Sistema di Gestione per la Qualità
                in conformità alla norma UNI EN ISO 9001:2015, con self-audit periodici e
                miglioramento continuo di tutti i processi aziendali.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="px-4 py-2 border border-accent text-xs font-mono text-accent">
                ✓ CERTIFICATO
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GLOBE REACH ── */}
      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container-omr">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="accent-line" />
              <span className="label-overline block mb-3">Presenza Globale</span>
              <h2
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                Un'Azienda<br />Italiana nel Mondo
              </h2>
              <p className="text-textSub leading-relaxed mb-8">
                Nata a Romano di Lombardia, nel cuore della pianura bergamasca, OMR ha saputo
                portare la propria eccellenza meccanica ben oltre i confini nazionali, costruendo
                relazioni durature con clienti in tre continenti.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { region: 'Europa', detail: 'Italia, Germania, Francia, UK, Spagna e altri' },
                  { region: 'Nord America', detail: 'Stati Uniti d\'America' },
                  { region: 'Asia', detail: 'Mercati orientali — produzione batterie' },
                ].map(({ region, detail }) => (
                  <div key={region} className="flex items-start gap-3">
                    <CheckCircle size={16} className="flex-shrink-0 mt-1" style={{ color: 'var(--accent)' }} />
                    <div>
                      <span className="text-sm font-display font-700 text-textPri uppercase tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>
                        {region}
                      </span>
                      <span className="text-xs text-textMut ml-2">— {detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="flex items-center justify-center h-64"
              style={{ background: 'var(--surface-hi)', border: '1px solid var(--border)' }}
            >
              <Globe size={80} style={{ color: 'var(--accent)', opacity: 0.3 }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
