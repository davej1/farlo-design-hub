import { FileText, Table2 } from 'lucide-react'

export default function DocRow({ doc }) {
  const isSheet = doc.type === 'sheet'

  return (
    <div className="flex items-center gap-4 px-6 py-4 hover:bg-brand-primary/3 transition-colors duration-150 group">

      {/* File type icon */}
      {isSheet
        ? <Table2 size={18} className="text-emerald-600 shrink-0" aria-label="Spreadsheet" />
        : <FileText size={18} className="text-brand-accent shrink-0" aria-label="Document" />
      }

      {/* File name */}
      <span className="flex-1 text-sm font-medium text-brand-text truncate">
        {doc.name}
      </span>

      {/* Modified by */}
      <span className="text-xs text-brand-muted w-24 text-right shrink-0 hidden sm:block">
        {doc.modifiedBy}
      </span>

      {/* Last modified */}
      <span className="text-xs text-brand-muted w-24 text-right shrink-0">
        {doc.modifiedAt}
      </span>

      {/* Open link */}
      <a
        href={doc.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-brand-primary text-xs font-semibold hover:text-brand-secondary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-sm px-1 w-12 text-right shrink-0"
        aria-label={`Open ${doc.name}`}
      >
        Open →
      </a>

    </div>
  )
}
