import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'

export default function OfflinePage() {
  return (
    <Card title="Offline Fallback" subtitle="Cached essentials and queued actions" right={<Badge tone="info">Signal Lost</Badge>}>
      <div className="space-y-3 text-sm text-slate-300">
        <div className="rounded-sm border border-app-border bg-app-panel2 p-4">Route summary cached locally.</div>
        <div className="rounded-sm border border-app-border bg-app-panel2 p-4">Diagnostics submissions are queued until signal returns.</div>
        <div className="rounded-sm border border-app-border bg-app-panel2 p-4">Emergency call actions remain visible.</div>
      </div>
    </Card>
  )
}
