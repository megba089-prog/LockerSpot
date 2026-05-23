import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Send, CheckCircle, Clock } from 'lucide-react'

interface FormState {
  nome: string
  azienda: string
  email: string
  telefono: string
  oggetto: string
  messaggio: string
}

const initialForm: FormState = {
  nome: '', azienda: '', email: '', telefono: '', oggetto: '', messaggio: '',
}

export default function Contatti() {
  const [form, setForm]         = useState<FormState>(initialForm)
  const [sent, setSent]         = useState(false)
  const [loading, setLoading]   = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!form.nome || !form.email || !form.messaggio) return
    setLoading(true)
    // Simulate send
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 1200)
  }

  const inputClass = `
    w-full bg-surfaceHi border border-border px-4 py-3 text-sm text-textPri
    placeholder:text-textMut outline-none
    focus:border-accent transition-colors duration-200
    font-body
  `

  const labelClass = "block text-xs font-mono text-textSub mb-2 tracking-widest uppercase"

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
          <span className="label-overline block mb-4">Parliamoci</span>
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
            Contatti &<br />
            <span style={{ color: 'var(--accent)' }}>Sede</span>
          </h1>
          <p className="text-textSub max-w-xl mt-6 leading-relaxed">
            Hai un progetto o vuoi saperne di più sui nostri prodotti?
            Il team OMR risponde in tempi rapidi.
          </p>
          <div className="flex items-center gap-2 mt-8 text-xs font-mono text-textMut">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-textSub">Contatti</span>
          </div>
        </div>
      </section>

      {/* ── INFO + FORM ── */}
      <section className="section-pad">
        <div className="container-omr">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Contact info */}
            <div className="lg:col-span-2">
              <span className="accent-line" />
              <h2
                className="mb-8"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '2rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                Dove Siamo
              </h2>

              <div className="flex flex-col gap-6">
                {/* Phone */}
                <a
                  href="tel:+390363912282"
                  className="flex items-start gap-4 group"
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-accent flex-shrink-0 transition-colors duration-200"
                    style={{ color: 'var(--accent)' }}
                  >
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="label-overline mb-1">Telefono</div>
                    <p className="text-textPri group-hover:text-accent transition-colors duration-200">
                      (+39) 0363 912282
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:omr@omroff.it"
                  className="flex items-start gap-4 group"
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-accent flex-shrink-0 transition-colors duration-200"
                    style={{ color: 'var(--accent)' }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="label-overline mb-1">Email</div>
                    <p className="text-textPri group-hover:text-accent transition-colors duration-200">
                      omr@omroff.it
                    </p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 flex items-center justify-center border border-border flex-shrink-0"
                    style={{ color: 'var(--accent)' }}
                  >
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="label-overline mb-1">Indirizzo</div>
                    <p className="text-textPri">
                      Via Fontana Rossa, 11<br />
                      24058 Romano di Lombardia (BG)<br />
                      Italia
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 flex items-center justify-center border border-border flex-shrink-0"
                    style={{ color: 'var(--accent)' }}
                  >
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="label-overline mb-1">Orari</div>
                    <p className="text-textSub text-sm">
                      Lunedì – Venerdì<br />
                      08:00 – 17:30
                    </p>
                  </div>
                </div>
              </div>

              {/* P.IVA */}
              <div
                className="mt-8 p-4 border text-xs font-mono text-textMut"
                style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
              >
                P.IVA 01272210160
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {sent ? (
                <div
                  className="flex flex-col items-center justify-center text-center h-full min-h-80 gap-4 border p-10"
                  style={{ borderColor: 'var(--accent)', background: 'var(--surface)' }}
                >
                  <CheckCircle size={48} style={{ color: 'var(--accent)' }} />
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      fontSize: '1.8rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                    }}
                  >
                    Messaggio Inviato!
                  </h3>
                  <p className="text-textSub text-sm max-w-xs">
                    Grazie per averci contattato. Il team OMR ti risponderà il prima possibile.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm(initialForm) }}
                    className="btn-ghost mt-2"
                  >
                    Invia un altro messaggio
                  </button>
                </div>
              ) : (
                <div
                  className="p-8 border"
                  style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
                >
                  <h3
                    className="mb-6"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '1.4rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                    }}
                  >
                    Richiedi Informazioni
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className={labelClass}>Nome e Cognome *</label>
                      <input
                        type="text"
                        name="nome"
                        value={form.nome}
                        onChange={handleChange}
                        placeholder="Mario Rossi"
                        className={inputClass}
                        style={{ fontFamily: 'var(--font-body)' }}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Azienda</label>
                      <input
                        type="text"
                        name="azienda"
                        value={form.azienda}
                        onChange={handleChange}
                        placeholder="Nome azienda"
                        className={inputClass}
                        style={{ fontFamily: 'var(--font-body)' }}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="mario@azienda.it"
                        className={inputClass}
                        style={{ fontFamily: 'var(--font-body)' }}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Telefono</label>
                      <input
                        type="tel"
                        name="telefono"
                        value={form.telefono}
                        onChange={handleChange}
                        placeholder="+39 000 0000000"
                        className={inputClass}
                        style={{ fontFamily: 'var(--font-body)' }}
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className={labelClass}>Oggetto</label>
                    <select
                      name="oggetto"
                      value={form.oggetto}
                      onChange={handleChange}
                      className={inputClass}
                      style={{ fontFamily: 'var(--font-body)', background: 'var(--surface-hi)' }}
                    >
                      <option value="">Seleziona un argomento</option>
                      <option value="batterie">Macchine per Batterie Pb-A</option>
                      <option value="tubi">Macchine per Lavorazione Tubi</option>
                      <option value="meccanica">Lavorazioni Meccaniche</option>
                      <option value="altro">Altro</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className={labelClass}>Messaggio *</label>
                    <textarea
                      name="messaggio"
                      value={form.messaggio}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Descrivi la tua richiesta o il tuo progetto..."
                      className={inputClass}
                      style={{ fontFamily: 'var(--font-body)', resize: 'vertical' }}
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={loading || !form.nome || !form.email || !form.messaggio}
                    className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Invio in corso...
                      </span>
                    ) : (
                      <>
                        Invia Messaggio <Send size={14} />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-textMut mt-3 text-center">
                    * Campi obbligatori. I dati saranno trattati in conformità alla Privacy Policy.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="container-omr px-6 lg:px-20 xl:px-32 py-12">
          <div className="label-overline mb-4">Come Raggiungerci</div>
          <div className="w-full overflow-hidden border border-border" style={{ height: '380px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.097534902573!2d9.743549516003018!3d45.52824277910172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478146de36843de9%3A0x8ef89488b7f2335c!2sOfficina+Meccanica+Romanese+S.R.L.!5e0!3m2!1sit!2sit!4v1458331466762"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(80%) invert(5%) contrast(90%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa OMR - Officina Meccanica Romanese"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
