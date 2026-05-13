import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'

export default function ConsentPage() {
  return (
    <Card title="Privacy / Consent" subtitle="Clear disclosure of tracking, redaction, and operational data usage" right={<Badge tone="critical">Required</Badge>}>
      <div className="space-y-3 text-sm text-slate-300">
        <div className="rounded-sm border border-app-border bg-app-panel2 p-4">We collect vehicle and route data to support fleet operations.</div>
        <div className="rounded-sm border border-app-border bg-app-panel2 p-4">Sensitive values are redacted before AI processing.</div>
        <div className="rounded-sm border border-app-border bg-app-panel2 p-4">Emergency-only actions stay accessible while driving.</div>
      </div>
    </Card>
  )
}
