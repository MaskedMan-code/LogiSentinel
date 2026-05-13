import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import Timeline from '@/components/ui/Timeline'
import { alerts } from '@/data/mock'

export default function AlertsPage() {
  return (
    <div className="space-y-4">
      <Card title="Active Alerts & Incidents" subtitle="Prioritized incident log with triage state and privacy status" right={<Badge tone="critical">3 Open</Badge>}>
        <div className="grid gap-3 xl:grid-cols-[1fr_1fr]">
          <div className="space-y-3">
            {[
              ['USC-001', 'P0300', 'Random misfire detected', 'critical'],
              ['USC-002', 'P0171', 'System too lean', 'warning'],
              ['USC-004', 'U0100', 'Communication fault', 'critical'],
            ].map(([id, code, text, tone]) => (
              <div key={id} className="rounded-sm border border-app-border bg-app-panel2 p-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="font-mono text-xs text-sky-300">{id} · {code}</div>
                  <Badge tone={tone as any}>{tone}</Badge>
                </div>
                <p className="mt-2 text-sm text-slate-200">{text}</p>
              </div>
            ))}
          </div>
          <Timeline items={alerts} />
        </div>
      </Card>
    </div>
  )
}
