// Gradient combinations built from brand token classes only — no hex values.
const GRADIENTS = [
  'from-brand-primary to-brand-secondary',
  'from-brand-accent to-brand-primary',
  'from-brand-secondary to-brand-accent',
  'from-brand-primary to-brand-accent',
  'from-brand-muted to-brand-secondary',
  'from-brand-accent to-brand-secondary',
]

export default function NewsCard({ article, index }) {
  return (
    <article className="group rounded-xl border border-brand-border bg-white overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-150 focus-within:ring-2 focus-within:ring-brand-accent flex flex-col">

      {/* Gradient thumbnail */}
      <div
        className={`h-40 bg-gradient-to-br ${GRADIENTS[index % GRADIENTS.length]} shrink-0`}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <span className="text-xs font-semibold text-brand-accent uppercase tracking-wider">
          {article.source}
        </span>

        <h3 className="text-brand-text font-semibold text-sm leading-snug line-clamp-3 flex-1">
          {article.headline}
        </h3>

        <div className="flex items-center justify-between pt-1">
          <span className="text-brand-muted text-xs">{article.timeAgo}</span>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary text-xs font-semibold hover:text-brand-secondary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-sm px-1"
            aria-label={`Read: ${article.headline}`}
          >
            Read →
          </a>
        </div>
      </div>

    </article>
  )
}
