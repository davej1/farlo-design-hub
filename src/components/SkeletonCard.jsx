// Reusable skeleton loader used across News, Jira, and Docs sections.
// variant: 'card' (default) | 'table-row' | 'row'

export default function SkeletonCard({ variant = 'card' }) {
  if (variant === 'table-row') {
    return (
      <tr className="animate-pulse">
        <td className="px-4 py-3">
          <div className="h-3.5 w-16 bg-brand-border rounded" />
        </td>
        <td className="px-4 py-3">
          <div className="h-3.5 w-56 bg-brand-border rounded" />
        </td>
        <td className="px-4 py-3">
          <div className="h-3.5 w-20 bg-brand-border rounded" />
        </td>
        <td className="px-4 py-3">
          <div className="h-5 w-22 bg-brand-border rounded-full" />
        </td>
        <td className="px-4 py-3">
          <div className="h-5 w-16 bg-brand-border rounded-full" />
        </td>
        <td className="px-4 py-3">
          <div className="h-3.5 w-20 bg-brand-border rounded" />
        </td>
      </tr>
    )
  }

  if (variant === 'row') {
    return (
      <div className="animate-pulse flex items-center gap-4 px-6 py-4">
        <div className="h-5 w-5 bg-brand-border rounded shrink-0" />
        <div className="flex-1 space-y-1.5">
          <div className="h-3.5 w-3/4 bg-brand-border rounded" />
          <div className="h-3 w-1/3 bg-brand-border rounded" />
        </div>
        <div className="h-3 w-20 bg-brand-border rounded shrink-0" />
        <div className="h-3 w-24 bg-brand-border rounded shrink-0" />
        <div className="h-3.5 w-12 bg-brand-border rounded shrink-0" />
      </div>
    )
  }

  // Default: news card
  return (
    <div className="animate-pulse rounded-xl border border-brand-border overflow-hidden">
      <div className="h-40 bg-brand-border" />
      <div className="p-4 space-y-3">
        <div className="h-3 w-24 bg-brand-border rounded" />
        <div className="space-y-1.5">
          <div className="h-4 w-full bg-brand-border rounded" />
          <div className="h-4 w-5/6 bg-brand-border rounded" />
        </div>
        <div className="flex items-center justify-between pt-1">
          <div className="h-3 w-20 bg-brand-border rounded" />
          <div className="h-3 w-12 bg-brand-border rounded" />
        </div>
      </div>
    </div>
  )
}
