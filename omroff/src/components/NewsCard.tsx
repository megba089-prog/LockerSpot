import { ArrowRight, Calendar } from 'lucide-react'

interface NewsCardProps {
  title: string
  date: string
  location: string
  excerpt: string
  imageEmoji?: string
  index?: number
}

export default function NewsCard({ title, date, location, excerpt, imageEmoji = '🏭', index = 0 }: NewsCardProps) {
  return (
    <article
      className="card group flex flex-col overflow-hidden"
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      {/* Image placeholder with gradient */}
      <div
        className="relative h-44 overflow-hidden flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, var(--surface-hi) 0%, var(--border) 100%)',
        }}
      >
        <span className="text-5xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 select-none">
          {imageEmoji}
        </span>
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
        {/* Location badge */}
        <div className="absolute top-3 right-3 px-2 py-1 bg-bg border border-border text-xs font-mono text-accent">
          {location}
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6">
        {/* Date */}
        <div className="flex items-center gap-1.5 text-xs font-mono text-textMut mb-3">
          <Calendar size={11} />
          {date}
        </div>

        {/* Title */}
        <h3
          className="text-xl mb-3 text-textPri group-hover:text-accent transition-colors duration-200 leading-tight"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.03em', textTransform: 'uppercase' }}
        >
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-textSub leading-relaxed flex-1">{excerpt}</p>

        {/* CTA */}
        <div className="mt-5 flex items-center gap-2 text-xs font-mono text-textMut group-hover:text-accent transition-colors duration-200 pt-4 border-t border-border">
          <span>Leggi di più</span>
          <ArrowRight size={13} className="transform group-hover:translate-x-1 transition-transform duration-200" />
        </div>
      </div>
    </article>
  )
}
