import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface ProductCardProps {
  title: string
  description: string
  icon: React.ReactNode
  tag?: string
  index?: number
}

export default function ProductCard({ title, description, icon, tag, index = 0 }: ProductCardProps) {
  return (
    <div
      className="card group relative overflow-hidden flex flex-col p-8 cursor-pointer"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Accent corner */}
      <div
        className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(225deg, var(--accent) 0%, transparent 60%)',
        }}
      />

      {/* Tag */}
      {tag && (
        <div className="label-overline mb-4">{tag}</div>
      )}

      {/* Icon */}
      <div
        className="w-12 h-12 flex items-center justify-center mb-6 border border-border group-hover:border-accent transition-colors duration-300"
        style={{ color: 'var(--accent)' }}
      >
        {icon}
      </div>

      {/* Content */}
      <h3
        className="text-2xl mb-3 text-textPri group-hover:text-accent transition-colors duration-200"
        style={{ fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' }}
      >
        {title}
      </h3>
      <p className="text-sm text-textSub leading-relaxed flex-1">{description}</p>

      {/* CTA */}
      <div className="mt-6 flex items-center gap-2 text-xs font-mono text-textMut group-hover:text-accent transition-colors duration-200">
        <span>Scopri di più</span>
        <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-200" />
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 h-px bg-accent"
        style={{ width: '0', transition: 'width 0.4s ease' }}
        ref={(el) => {
          if (el) {
            const parent = el.parentElement
            if (parent) {
              parent.addEventListener('mouseenter', () => { el.style.width = '100%' })
              parent.addEventListener('mouseleave', () => { el.style.width = '0' })
            }
          }
        }}
      />
    </div>
  )
}
