import { useState } from 'react'
import { useJira } from '../hooks/useJira'
import JiraTable from './JiraTable'
import SkeletonCard from './SkeletonCard'

const TABS = ['All', 'In Progress', 'To Do', 'In Review', 'Blocked']

const COLUMNS = ['ID', 'Summary', 'Assignee', 'Status', 'Priority', 'Updated']

export default function JiraSection() {
  const { tickets, loading } = useJira()
  const [activeTab, setActiveTab] = useState('All')

  const filtered = activeTab === 'All'
    ? tickets
    : tickets.filter(t => t.status === activeTab)

  return (
    <section id="tickets" className="py-12">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-brand-text font-bold text-2xl">Active Tickets</h2>
      </div>

      {/* Filter tabs */}
      <div
        className="flex flex-wrap gap-2 mb-4"
        role="tablist"
        aria-label="Filter tickets by status"
      >
        {TABS.map(tab => (
          <button
            key={tab}
            role="tab"
            aria-selected={activeTab === tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent ${
              activeTab === tab
                ? 'bg-brand-primary text-white'
                : 'border border-brand-border text-brand-muted hover:border-brand-primary hover:text-brand-primary'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-brand-border overflow-hidden">
        {loading ? (
          <table className="w-full">
            <thead>
              <tr className="bg-brand-background border-b border-brand-border">
                {COLUMNS.map(col => (
                  <th
                    key={col}
                    className="text-left text-xs font-semibold text-brand-muted uppercase tracking-wider px-4 py-3"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 8 }).map((_, i) => (
                <SkeletonCard key={i} variant="table-row" />
              ))}
            </tbody>
          </table>
        ) : (
          <JiraTable tickets={filtered} />
        )}
      </div>

    </section>
  )
}
