import { useDocs } from '../hooks/useDocs'
import DocRow from './DocRow'
import SkeletonCard from './SkeletonCard'

export default function DocsSection() {
  const { docs, loading } = useDocs()

  return (
    <section id="docs" className="py-12">
      <h2 className="text-brand-text font-bold text-2xl mb-6">Recent Documents</h2>

      <div className="rounded-xl border border-brand-border overflow-hidden divide-y divide-brand-border">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
              <SkeletonCard key={i} variant="row" />
            ))
          : docs.map(doc => <DocRow key={doc.id} doc={doc} />)
        }
      </div>
    </section>
  )
}
