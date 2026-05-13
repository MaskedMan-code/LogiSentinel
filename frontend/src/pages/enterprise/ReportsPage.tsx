import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'

export default function ReportsPage() {
  return (
    <Card title="Reports & Export" subtitle="Compliance exports, diagnostics summaries, and fleet PDF/CSV output" right={<Badge tone="accent">Export Ready</Badge>}>
      <div className="grid gap-3 md:grid-cols-3">
        {[
          ['Daily Operations', 'CSV / PDF'],
          ['Fault Trends', 'Chart bundle'],
          ['Privacy Audit', 'Redaction log'],
        ].map(([title, value]) => (
          <div key={title} className="rounded-sm border border-app-border bg-app-panel2 p-4">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">{title}</div>
            <div className="mt-2 text-lg font-semibold text-white">{value}</div>
          </div>
        ))}
      </div>
    </Card>
  )
}
