// FigmaIcon: simplified Figma wordmark shape as an inline SVG.
// Used in place of a Lucide icon for the Figma Library card.
export function FigmaIcon({ size = 16, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16C9.79 16 8 14.21 8 12Z" />
      <path d="M0 20C0 17.79 1.79 16 4 16H8V20C8 22.21 6.21 24 4 24C1.79 24 0 22.21 0 20Z" />
      <path d="M8 0V8H4C1.79 8 0 6.21 0 4C0 1.79 1.79 0 4 0H8Z" />
      <path d="M8 8H12C14.21 8 16 6.21 16 4C16 1.79 14.21 0 12 0H8V8Z" />
      <path d="M0 12C0 9.79 1.79 8 4 8H8V16H4C1.79 16 0 14.21 0 12Z" />
    </svg>
  )
}

export default function QuickLinkCard({ label, icon: Icon, description, url }) {
  const isConfigured = Boolean(url)

  const cardClasses = `
    group relative flex items-start gap-3 p-4 rounded-xl border transition-all duration-150
    focus-within:ring-2 focus-within:ring-brand-accent
    ${isConfigured
      ? 'bg-white border-brand-border hover:-translate-y-0.5 hover:shadow-md cursor-pointer'
      : 'bg-brand-background border-brand-border opacity-60 cursor-default'
    }
  `

  const inner = (
    <div className={cardClasses}>
      {/* Accent left-border indicator on hover */}
      {isConfigured && (
        <div
          className="absolute left-0 top-0 bottom-0 w-1 bg-brand-accent opacity-0 group-hover:opacity-100 rounded-l-xl transition-opacity duration-150"
          aria-hidden="true"
        />
      )}

      <Icon
        size={18}
        className={`mt-0.5 shrink-0 ${isConfigured ? 'text-brand-accent' : 'text-brand-muted'}`}
      />

      <div className="min-w-0">
        <p className="text-brand-text font-semibold text-sm">{label}</p>
        <p className="text-brand-muted text-xs mt-0.5 leading-snug">{description}</p>
        {!isConfigured && (
          <p className="text-brand-secondary text-xs mt-1 font-medium">
            Not configured
          </p>
        )}
      </div>
    </div>
  )

  if (!isConfigured) {
    return (
      <div
        title="URL not configured — add to .env"
        aria-label={`${label} — URL not configured`}
      >
        {inner}
      </div>
    )
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block focus-visible:outline-none"
      aria-label={label}
    >
      {inner}
    </a>
  )
}
