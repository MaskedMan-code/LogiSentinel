import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import DataTable from '@/components/ui/DataTable'
import MetricBar from '@/components/ui/MetricBar'
import SectionHeader from '@/components/ui/SectionHeader'
import StatCard from '@/components/ui/StatCard'
import Timeline from '@/components/ui/Timeline'
import { alerts, enterpriseFleet } from '@/data/mock'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 xl:grid-cols-[1.5fr_1fr]">
        <Card
          title="Fleet Health Summary"
          subtitle="Enterprise overview with live operational density and current alerts"
          right={<Badge tone="info">Live</Badge>}
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <StatCard label="Active Fleet" value="18" delta="+2 today" />
            <StatCard label="Critical Alerts" value="3" delta="2 unresolved" tone="critical" />
            <StatCard label="Manuals Indexed" value="4" delta="PDF library ready" tone="info" />
            <StatCard label="Privacy Blocks" value="27" delta="PII redactions applied" tone="success" />
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-sm border border-app-border bg-app-panel2 p-3">
              <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                <span>Service readiness</span>
                <span className="font-mono text-slate-300">86%</span>
              </div>
              <div className="mt-3"><MetricBar value={86} max={100} tone="success" /></div>
            </div>
            <div className="rounded-sm border border-app-border bg-app-panel2 p-3">
              <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                <span>Diagnostics load</span>
                <span className="font-mono text-slate-300">61%</span>
              </div>
              <div className="mt-3"><MetricBar value={61} max={100} tone="warning" /></div>
            </div>
            <div className="rounded-sm border border-app-border bg-app-panel2 p-3">
              <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                <span>Redaction hit-rate</span>
                <span className="font-mono text-slate-300">100%</span>
              </div>
              <div className="mt-3"><MetricBar value={100} max={100} tone="info" /></div>
            </div>
          </div>
        </Card>

        <Card title="Command Timeline" subtitle="Recent activity from privacy, AI, and fleet events">
          <Timeline items={alerts} />
        </Card>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.25fr_0.75fr]">
        <Card title="Fleet Intelligence Table" subtitle="Dense operational view across vehicles and current fault states" dense>
          <DataTable
            headers={[ 'Vehicle', 'Model', 'Status', 'Error', 'Driver', 'Route', 'Mileage', 'Site' ]}
            rows={enterpriseFleet.map((row) => [
              <span key="id" className="font-mono text-xs text-sky-300">{row.id}</span>,
              <span key="model" className="text-slate-100">{row.year} {row.model}</span>,
              <Badge key="status" tone={row.tone as 'success' | 'warning' | 'critical' | 'info'}>{row.status}</Badge>,
              <span key="error" className="font-mono text-xs text-slate-200">{row.error}</span>,
              <span key="driver" className="text-slate-200">{row.driver}</span>,
              <span key="route" className="font-mono text-xs text-slate-300">{row.route}</span>,
              <span key="mileage" className="font-mono text-xs text-slate-300">{row.mileage}</span>,
              <span key="site" className="text-slate-300">{row.site}</span>,
            ])}
          />
        </Card>

        <Card title="AI Insight Queue" subtitle="Manual-aware diagnostics ready for backend proxy calls">
          <div className="space-y-3 text-sm leading-6 text-slate-300">
            <div className="rounded-sm border border-app-border bg-app-panel2 p-3">
              P0420 is currently the most common exhaust-related fault. Inspect exhaust leaks, oxygen sensors, and catalytic efficiency.
            </div>
            <div className="rounded-sm border border-app-border bg-app-panel2 p-3">
              P0171 suggests a lean condition. Verify vacuum leaks, MAF readings, and fuel delivery before deeper teardown.
            </div>
            <div className="rounded-sm border border-app-border bg-app-panel2 p-3">
              U0100 indicates a communication fault. Check CAN bus health and module power before replacing components.
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge tone="info">Source refs</Badge>
            <Badge tone="success">Redacted</Badge>
            <Badge tone="accent">Backend proxy</Badge>
          </div>
        </Card>
      </section>
    </div>
  )
}
