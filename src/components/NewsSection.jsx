import { RefreshCw } from 'lucide-react'
import { useNews } from '../hooks/useNews'
import NewsCard from './NewsCard'
import SkeletonCard from './SkeletonCard'

export default function NewsSection() {
  const { articles, loading, refresh } = useNews()

  return (
    <section id="news" className="py-12">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-brand-text font-bold text-2xl">
          What's Happening in Design &amp; Tech
        </h2>
        <button
          onClick={refresh}
          disabled={loading}
          aria-label="Refresh news feed"
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-brand-text border border-brand-border rounded-lg hover:border-brand-primary hover:text-brand-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RefreshCw size={13} className={loading ? 'animate-spin' : ''} />
          Refresh
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} variant="card" />)
          : articles.map((article, i) => (
              <NewsCard key={article.id} article={article} index={i} />
            ))}
      </div>

    </section>
  )
}
