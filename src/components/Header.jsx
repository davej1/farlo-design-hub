import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { label: 'News',    href: '#news' },
  { label: 'Tickets', href: '#tickets' },
  { label: 'Toolkit', href: '#toolkit' },
  { label: 'Docs',    href: '#docs' },
  { label: 'About',   href: '#about' },
]

function getGreeting() {
  const h = new Date().getHours()
  if (h < 12) return 'Good morning'
  if (h < 18) return 'Good afternoon'
  return 'Good evening'
}

function getFormattedDate() {
  return new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-brand-background border-b border-brand-border transition-shadow duration-150 ${
        scrolled ? 'shadow-md' : 'shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">

        {/* Wordmark + title */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-brand-primary font-bold text-xl tracking-tight">
            Farlo
          </span>
          <span className="text-brand-border select-none" aria-hidden="true">|</span>
          <span className="text-brand-text font-semibold text-base">
            Design Hub
          </span>
        </div>

        {/* Section nav */}
        <nav aria-label="Page sections">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="px-3 py-1.5 rounded-md text-sm font-medium text-brand-text hover:text-brand-primary hover:bg-brand-primary/5 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Greeting + date */}
        <div className="text-right shrink-0">
          {/* TODO: replace "Jesal" with authenticated user's first name */}
          <p className="text-brand-text font-semibold text-sm leading-tight">
            {getGreeting()}, Jesal
          </p>
          <p className="text-brand-muted text-xs mt-0.5">{getFormattedDate()}</p>
        </div>

      </div>
    </header>
  )
}
