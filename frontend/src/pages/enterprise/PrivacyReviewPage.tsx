import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'

export default function PrivacyReviewPage() {
  return (
    <Card title="Privacy / Redaction Review" subtitle="Sensitive data masking before model submission" right={<Badge tone="success">Policy Active</Badge>}>
      <div className="grid gap-4 xl:grid-cols-2">
        <div className="rounded-sm border border-app-border bg-app-panel2 p-4">
          <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">Original field</div>
          <div className="mt-2 font-mono text-xs text-slate-200">Driver Home Address: 1042 Oak St, Dallas, TX</div>
          <div className="mt-4 font-mono text-xs text-slate-200">Phone: 555-0101</div>
        </div>
        <div className="rounded-sm border border-emerald-900/80 bg-emerald-950/30 p-4">
          <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-300">Redacted output</div>
          <div className="mt-2 font-mono text-xs text-emerald-200">Driver Home Address: [REDACTED]</div>
          <div className="mt-4 font-mono text-xs text-emerald-200">Phone: [REDACTED]</div>
        </div>
      </div>
    </Card>
  )
}
