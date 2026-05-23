import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Wrench, Pipette, Globe, Award, Users } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import NewsCard from '../components/NewsCard'

const stats = [
  { value: '1981', label: 'Anno di Fondazione' },
  { value: '40+', label: 'Anni di Esperienza' },
  { value: '3', label: 'Continenti Serviti' },
  { value: 'ISO', label: '9001:2015 Certificati' },
]

const products = [
  {
    title: 'Macchine Batterie Pb-A',
    description: 'Impianti completi per la produzione di batterie al piombo-acido. Progettazione custom, alta affidabilità, supporto tecnico dedicato.',
    icon: <Zap size={22} />,
    tag: 'Prodotto — 01',
  },
  {
    title: 'Lavorazione Tubi',
    description: 'Macchine specializzate per la lavorazione dei tubi industriali. Precisione millimetrica e adattabilità alle specifiche del cliente.',
    icon: <Pipette size={22} />,
    tag: 'Prodotto — 02',
  },
  {
    title: 'Lavorazioni Meccaniche',
    description: 'Tornitura, fresatura e montaggio conto terzi. Officina attrezzata con macchine di ultima generazione e personale qualificato.',
    icon: <Wrench size={22} />,
    tag: 'Prodotto — 03',
  },
]

const newsItems = [
  {
    title: 'OMR al TUBE di Düsseldorf 2024',
    date: '20 Febbraio 2024',
    location: 'Düsseldorf, DE',
    excerpt: 'OMR presente alla fiera internazionale del tubo di Düsseldorf, una delle più importanti al mondo per il settore della lavorazione dei tubi.',
    imageEmoji: '🏗️',
  },
  {
    title: 'OMR all\'ELBC di Lione 2022',
    date: '6–9 Settembre 2022',
    location: 'Lione, FR',
    excerpt: 'Partecipiamo all\'European Lead Battery Conference & Exhibition, l\'evento di riferimento europeo per il settore delle batterie al piombo.',
    imageEmoji: '🔋',
  },
  {
    title: 'OMR al 16° ELBC di Vienna 2018',
    date: 'Settembre 2018',
    location: 'Vienna, AT',
    excerpt: 'OMR presente al sedicesimo European Lead Battery Conference nella capitale austriaca, con presentazione delle ultime novità tecnologiche.',
    imageEmoji: '⚡',
  },
]

export default function Home() {
  return (
    <div>
      {/* ── HERO ── */}
      <section
        className="relative min-h-[92vh] flex items-center overflow-hidden"
        style={{ background: 'var(--bg)' }}
      >
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 60% 50%, rgba(249,115,22,0.08) 0%, transparent 70%)',
          }}
        />

        {/* Large decorative number */}
        <div
          className="absolute right-0 bottom-0 select-none pointer-events-none opacity-5"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(180px, 28vw, 400px)',
            lineHeight: 0.85,
            letterSpacing: '-0.04em',
            color: 'var(--accent)',
          }}
        >
          1981
        </div>

        <div className="container-omr section-pad relative z-10">
          <div className="max-w-4xl">
            {/* Overline */}
            <div className="label-overline animate-fade-in stagger-1 mb-6">
              Romano di Lombardia · Bergamo · Italia
            </div>

            {/* Main heading */}
            <h1
              className="animate-fade-up stagger-2 mb-6"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(3rem, 8vw, 7rem)',
                lineHeight: 0.9,
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
              }}
            >
              Precisione
              <br />
              <span style={{ color: 'var(--accent)' }}>Industriale</span>
              <br />
              Dal 1981
            </h1>

            {/* Sub */}
            <p className="animate-fade-up stagger-3 text-textSub text-lg leading-relaxed max-w-xl mb-10">
              Progettiamo e costruiamo macchinari industriali per la produzione di batterie
              al piombo-acido, lavorazione tubi e lavorazioni meccaniche di precisione.
              Forniamo impianti in Europa, Stati Uniti e Asia.
            </p>

            {/* CTAs */}
            <div className="animate-fade-up stagger-4 flex flex-wrap gap-4">
              <Link to="/prodotti" className="btn-primary">
                I Nostri Prodotti <ArrowRight size={16} />
              </Link>
              <Link to="/contatti" className="btn-ghost">
                Contattaci
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: 'linear-gradient(transparent, var(--bg))' }}
        />
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container-omr px-6 lg:px-20 xl:px-32">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center justify-center py-10 px-6 gap-1 group">
                <span
                  className="text-4xl md:text-5xl text-accent group-hover:scale-105 transition-transform duration-200"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 800, letterSpacing: '0.04em' }}
                >
                  {value}
                </span>
                <span className="text-xs text-textMut font-mono text-center">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODOTTI ── */}
      <section className="section-pad">
        <div className="container-omr">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <span className="accent-line" />
              <span className="label-overline block mb-3">I nostri settori</span>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                Prodotti &<br />Servizi
              </h2>
            </div>
            <Link to="/prodotti" className="btn-ghost self-start md:self-auto">
              Tutti i prodotti <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {products.map((p, i) => (
              <div key={p.title} className="bg-bg">
                <ProductCard {...p} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHI SIAMO TEASER ── */}
      <section
        className="section-pad relative overflow-hidden"
        style={{ background: 'var(--surface)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background: 'radial-gradient(ellipse 50% 80% at 80% 50%, rgba(249,115,22,0.06) 0%, transparent 70%)',
          }}
        />
        <div className="container-omr relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="accent-line" />
              <span className="label-overline block mb-4">La nostra storia</span>
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
                Oltre Quarant'anni<br />di Expertise
              </h2>
              <p className="text-textSub leading-relaxed mb-4">
                L'azienda nasce nel <strong className="text-textPri">1981</strong> come officina meccanica per lavori
                conto terzi di tornitura, fresatura e montaggio. Dal principio svolge attività di
                manutenzione di impianti industriali presso aziende di produzione batterie.
              </p>
              <p className="text-textSub leading-relaxed mb-8">
                Oggi siamo in grado di progettare e costruire impianti completi, con forniture in
                Europa, Stati Uniti e Asia, certificati <strong className="text-textPri">UNI EN ISO 9001:2015</strong>.
              </p>
              <Link to="/chi-siamo" className="btn-primary">
                Chi Siamo <ArrowRight size={16} />
              </Link>
            </div>

            {/* Feature boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Globe size={20} />, title: 'Presenza Globale', desc: 'Impianti installati in Europa, USA e Asia.' },
                { icon: <Award size={20} />, title: 'ISO 9001:2015', desc: 'Qualità certificata e processi verificati.' },
                { icon: <Users size={20} />, title: 'Team Esperto', desc: 'Personale qualificato con decenni di esperienza.' },
                { icon: <Zap size={20} />, title: 'Soluzioni Custom', desc: 'Impianti progettati sulle specifiche del cliente.' },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="p-5 border border-border hover:border-accent transition-colors duration-300 group"
                  style={{ background: 'var(--surface-hi)' }}
                >
                  <div className="text-accent mb-3 group-hover:scale-110 transition-transform duration-200 w-fit">
                    {icon}
                  </div>
                  <h4
                    className="text-sm mb-1"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}
                  >
                    {title}
                  </h4>
                  <p className="text-xs text-textSub leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWS ── */}
      <section className="section-pad">
        <div className="container-omr">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <span className="accent-line" />
              <span className="label-overline block mb-3">Aggiornamenti</span>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                Ultime News &<br />Eventi
              </h2>
            </div>
            <Link to="/news" className="btn-ghost self-start md:self-auto">
              Tutte le news <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((n, i) => (
              <NewsCard key={n.title} {...n} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className="section-pad relative overflow-hidden"
        style={{ background: 'var(--accent)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="container-omr relative z-10 text-center">
          <span className="label-overline block mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Inizia il progetto
          </span>
          <h2
            className="mb-6 text-white"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2.5rem, 5vw, 5rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            Hai un Progetto<br />in Mente?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Contattaci per discutere le tue esigenze. Il nostro team di esperti ti
            seguirà dalla progettazione alla realizzazione finale.
          </p>
          <Link
            to="/contatti"
            className="inline-flex items-center gap-2 px-8 py-4 bg-bg text-accent font-display font-700 tracking-widest uppercase text-sm hover:bg-surface transition-colors duration-200"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
          >
            Contattaci Ora <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
