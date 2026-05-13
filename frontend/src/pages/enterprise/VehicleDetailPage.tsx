import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import MetricBar from '@/components/ui/MetricBar'

export default function VehicleDetailPage() {
  return (
    <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
      <Card title="Vehicle Detail" subtitle="USC-001 / 2024 Ford Transit / enterprise view" right={<Badge tone="critical">Critical</Badge>}>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-sm border border-app-border bg-app-panel2 p-4">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">Current fault</div>
            <div className="mt-2 text-2xl font-semibold text-white">P0300</div>
            <p className="mt-2 text-sm text-slate-400">Random misfire detected after load transition.</p>
            <div className="mt-4"><MetricBar value={72} max={100} tone="critical" /></div>
          </div>
          <div className="rounded-sm border border-app-border bg-app-panel2 p-4">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">Vehicle telemetry</div>
            <div className="mt-3 space-y-2 text-sm text-slate-200">
              <div className="flex justify-between"><span>Driver</span><span className="font-mono text-xs">MIGUEL ALVAREZ</span></div>
              <div className="flex justify-between"><span>Mileage</span><span className="font-mono text-xs">84,210</span></div>
              <div className="flex justify-between"><span>Route</span><span className="font-mono text-xs">R-104</span></div>
              <div className="flex justify-between"><span>Location</span><span className="font-mono text-xs">Dallas</span></div>
            </div>
          </div>
        </div>
      </Card>
      <Card title="Maintenance Notes" subtitle="Manual references and service recommendations">
        <div className="space-y-3 text-sm text-slate-300">
          <div className="rounded-sm border border-app-border bg-app-panel p-3">Check exhaust leaks, intake air leaks, and sensor behavior first.</div>
          <div className="rounded-sm border border-app-border bg-app-panel p-3">If fuel trim readings are unstable, inspect fuel pressure and MAF signals.</div>
          <div className="rounded-sm border border-app-border bg-app-panel p-3">Use the secure backend proxy to ask Gemini for manual-aware next steps.</div>
        </div>
      </Card>
    </div>
  )
}
