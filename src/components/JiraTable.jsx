const STATUS_STYLES = {
  'In Progress': 'bg-brand-primary/15 text-brand-primary',
  'To Do':       'bg-brand-muted/15 text-brand-muted',
  'In Review':   'bg-brand-accent/15 text-brand-accent',
  'Blocked':     'bg-brand-secondary/15 text-brand-secondary',
}

const PRIORITY_STYLES = {
  High:   'bg-brand-secondary/15 text-brand-secondary',
  Medium: 'bg-brand-primary/15 text-brand-primary',
  Low:    'bg-brand-muted/15 text-brand-muted',
}

const COLUMNS = ['ID', 'Summary', 'Assignee', 'Status', 'Priority', 'Updated']

export default function JiraTable({ tickets }) {
  if (tickets.length === 0) {
    return (
      <div className="py-16 text-center text-brand-muted text-sm">
        No tickets in this category.
      </div>
    )
  }

  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="bg-brand-background border-b border-brand-border">
          {COLUMNS.map(col => (
            <th
              key={col}
              scope="col"
              className="text-left text-xs font-semibold text-brand-muted uppercase tracking-wider px-4 py-3"
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-brand-border">
        {tickets.map(ticket => (
          <tr
            key={ticket.id}
            className="hover:bg-brand-primary/3 transition-colors duration-150"
          >
            <td className="px-4 py-3 font-mono text-xs text-brand-muted whitespace-nowrap">
              {ticket.id}
            </td>
            <td className="px-4 py-3 text-brand-text font-medium max-w-xs">
              {ticket.summary}
            </td>
            <td className="px-4 py-3 text-brand-muted whitespace-nowrap">
              {ticket.assignee}
            </td>
            <td className="px-4 py-3">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold whitespace-nowrap ${STATUS_STYLES[ticket.status] ?? 'bg-brand-border text-brand-muted'}`}
              >
                {ticket.status}
              </span>
            </td>
            <td className="px-4 py-3">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold whitespace-nowrap ${PRIORITY_STYLES[ticket.priority] ?? 'bg-brand-border text-brand-muted'}`}
              >
                {ticket.priority}
              </span>
            </td>
            <td className="px-4 py-3 text-xs text-brand-muted whitespace-nowrap">
              {ticket.updated}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
