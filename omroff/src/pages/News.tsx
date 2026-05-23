import { Link } from 'react-router-dom'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'

const newsItems = [
  {
    id: 1,
    title: 'OMR al TUBE di Düsseldorf 2024',
    date: '20 Febbraio 2024',
    location: 'Düsseldorf, Germania',
    category: 'Fiera Internazionale',
    emoji: '🏗️',
    body: `OMR ha partecipato alla fiera internazionale TUBE di Düsseldorf 2024, uno degli eventi più importanti al mondo per il settore della lavorazione dei tubi. 

La fiera ha rappresentato un'importante occasione di networking con clienti internazionali e di presentazione delle ultime soluzioni sviluppate per la lavorazione industriale dei tubi metallici.

Il team OMR ha incontrato distributori, partner tecnici e potenziali clienti provenienti da tutto il mondo, consolidando la presenza dell'azienda sui mercati europei e internazionali.`,
  },
  {
    id: 2,
    title: "OMR all'ELBC di Lione 2022",
    date: '6–9 Settembre 2022',
    location: 'Lione, Francia',
    category: 'Conferenza Europea',
    emoji: '🔋',
    body: `OMR è stata presente all'European Lead Battery Conference & Exhibition (ELBC) di Lione, l'evento di riferimento europeo per il settore delle batterie al piombo.

La manifestazione ha riunito i principali player mondiali del settore battery manufacturing, offrendo a OMR l'opportunità di mostrare le proprie soluzioni per la produzione di batterie Pb-A.

Presenti allo stand OMR con il messaggio "See you at booth 101 in Lyon at September 2022 for ELBC", il team ha accolto clienti storici e nuovi contatti interessati alle tecnologie di produzione.`,
  },
  {
    id: 3,
    title: 'OMR al 16° ELBC di Vienna 2018',
    date: 'Settembre 2018',
    location: 'Vienna, Austria',
    category: 'Conferenza Europea',
    emoji: '⚡',
    body: `OMR ha partecipato al sedicesimo European Lead Battery Conference (16ELBC) a Vienna, capitale austriaca. 

L'evento biennale dedicato all'industria delle batterie al piombo-acido ha visto la partecipazione dei principali produttori mondiali di macchinari e batterie.

OMR ha presentato le proprie ultime innovazioni nel campo degli impianti per la produzione di batterie Pb-A, riscuotendo interesse da parte di operatori internazionali del settore energy storage.`,
  },
]

export default function News() {
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
          <span className="label-overline block mb-4">Aggiornamenti</span>
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
            News &<br />
            <span style={{ color: 'var(--accent)' }}>Eventi</span>
          </h1>
          <p className="text-textSub max-w-xl mt-6 leading-relaxed">
            Fiere internazionali, conferenze di settore e aggiornamenti dall'officina.
            OMR è presente sui principali palcoscenici dell'industria globale.
          </p>
          <div className="flex items-center gap-2 mt-8 text-xs font-mono text-textMut">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-textSub">News</span>
          </div>
        </div>
      </section>

      {/* ── NEWS LIST ── */}
      <section className="section-pad">
        <div className="container-omr">
          <div className="flex flex-col gap-0 divide-y divide-border border border-border">
            {newsItems.map((item, i) => (
              <article
                key={item.id}
                className="group p-8 md:p-10 hover:bg-surface transition-colors duration-300 cursor-pointer"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                  {/* Index & Category */}
                  <div className="lg:col-span-2 flex lg:flex-col gap-4 lg:gap-2">
                    <span
                      className="text-5xl font-display font-800 opacity-10 group-hover:opacity-20 transition-opacity"
                      style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--accent)', lineHeight: 1 }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="label-overline text-left">{item.category}</div>
                  </div>

                  {/* Emoji / visual */}
                  <div className="lg:col-span-2 hidden lg:flex items-center justify-center">
                    <div
                      className="w-20 h-20 flex items-center justify-center border border-border group-hover:border-accent transition-colors duration-300"
                      style={{ background: 'var(--surface-hi)', fontSize: '2rem' }}
                    >
                      {item.emoji}
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="lg:col-span-6">
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <span className="flex items-center gap-1.5 text-xs font-mono text-textMut">
                        <Calendar size={11} /> {item.date}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-mono text-textMut">
                        <MapPin size={11} /> {item.location}
                      </span>
                    </div>
                    <h2
                      className="mb-4 group-hover:text-accent transition-colors duration-200"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        lineHeight: 1.1,
                      }}
                    >
                      {item.title}
                    </h2>
                    <div className="text-sm text-textSub leading-relaxed space-y-3">
                      {item.body.trim().split('\n\n').map((para, pi) => (
                        <p key={pi}>{para.trim()}</p>
                      ))}
                    </div>
                  </div>

                  {/* CTA arrow */}
                  <div className="lg:col-span-2 flex items-start justify-end">
                    <div
                      className="w-10 h-10 border border-border flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-all duration-300"
                    >
                      <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                    </div>
                  </div>

                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVENTI FUTURI TEASER ── */}
      <section className="section-pad" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="container-omr text-center">
          <span className="label-overline block mb-4">Prossimi Appuntamenti</span>
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
            Seguici ai Prossimi<br />Eventi
          </h2>
          <p className="text-textSub max-w-lg mx-auto mb-8">
            Partecipiamo regolarmente alle principali fiere internazionali del settore.
            Contattaci per sapere dove ci troveremo prossimamente.
          </p>
          <Link to="/contatti" className="btn-primary">
            Rimani Aggiornato <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
