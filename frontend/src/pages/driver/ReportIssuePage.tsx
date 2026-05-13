import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'

export default function ReportIssuePage() {
  return (
    <Card title="Report Issue / Diagnostics Capture" subtitle="Photo, voice, and quick code capture with minimal typing" right={<Badge tone="warning">Emergency Safe</Badge>}>
      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-sm border border-app-border bg-app-panel2 p-4 text-sm text-slate-200">Tap to capture photo</div>
        <div className="rounded-sm border border-app-border bg-app-panel2 p-4 text-sm text-slate-200">Tap to record voice note</div>
        <div className="rounded-sm border border-app-border bg-app-panel2 p-4 text-sm text-slate-200">Enter warning code</div>
        <div className="rounded-sm border border-app-border bg-app-panel2 p-4 text-sm text-slate-200">Submit secure report</div>
      </div>
    </Card>
  )
}
