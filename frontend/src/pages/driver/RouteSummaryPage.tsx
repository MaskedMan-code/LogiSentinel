import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import Timeline from '@/components/ui/Timeline'
import { driverSteps } from '@/data/mock'

export default function RouteSummaryPage() {
  return (
    <div className="space-y-4">
      <Card title="Daily Route Summary" subtitle="Minimal typing, clear status, and large action targets for drivers" right={<Badge tone="warning">3 Stops Left</Badge>}>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-sm border border-app-border bg-app-panel2 p-4"><div className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Vehicle</div><div className="mt-2 text-lg font-semibold text-white">USC-001</div></div>
          <div className="rounded-sm border border-app-border bg-app-panel2 p-4"><div className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Route</div><div className="mt-2 text-lg font-semibold text-white">R-104</div></div>
          <div className="rounded-sm border border-app-border bg-app-panel2 p-4"><div className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">ETA</div><div className="mt-2 text-lg font-semibold text-white">14:20</div></div>
        </div>
      </Card>
      <Card title="Today's Flow" subtitle="Tap through the guided actions in sequence">
        <Timeline items={driverSteps} />
      </Card>
    </div>
  )
}
