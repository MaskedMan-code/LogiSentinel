import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import DataTable from '@/components/ui/DataTable'
import SectionHeader from '@/components/ui/SectionHeader'
import { enterpriseFleet } from '@/data/mock'

export default function FleetHealthPage() {
  return (
    <div className="space-y-4">
      <SectionHeader title="Fleet Health" subtitle="Vehicle distribution, fault density, and service readiness across the courier fleet." />
      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <Card title="Health Distribution" subtitle="Vehicles grouped by current operational state">
          <div className="grid gap-3 md:grid-cols-3">
            {[
              ['Healthy', '11', 'success'],
              ['Watch', '4', 'warning'],
              ['Critical', '3', 'critical'],
            ].map(([label, value, tone]) => (
              <div key={label} className="rounded-sm border border-app-border bg-app-panel2 p-4">
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">{label}</div>
                <div className="mt-2 text-3xl font-semibold text-white">{value}</div>
                <div className="mt-3"><Badge tone={tone as any}>{label}</Badge></div>
              </div>
            ))}
          </div>
        </Card>
        <Card title="Top Fault Codes" subtitle="Frequent issues requiring manual-guided triage">
          <div className="space-y-3 text-sm">
            {[
              ['P0420', 'Catalyst efficiency'],
              ['P0171', 'Lean condition bank 1'],
              ['U0100', 'Module communication'],
            ].map(([code, desc]) => (
              <div key={code} className="flex items-center justify-between rounded-sm border border-app-border bg-app-panel p-3">
                <div>
                  <div className="font-mono text-xs text-sky-300">{code}</div>
                  <div className="mt-1 text-slate-200">{desc}</div>
                </div>
                <Badge tone="info">Inspect</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <Card title="Fleet Table" subtitle="Operational snapshot" dense>
        <DataTable
          headers={[ 'ID', 'Model', 'Status', 'Driver', 'Error', 'Mileage' ]}
          rows={enterpriseFleet.map((row) => [
            <span key="id" className="font-mono text-xs text-sky-300">{row.id}</span>,
            row.model,
            <Badge key="status" tone={row.tone as any}>{row.status}</Badge>,
            row.driver,
            <span key="error" className="font-mono text-xs">{row.error}</span>,
            <span key="mileage" className="font-mono text-xs">{row.mileage}</span>,
          ])}
        />
      </Card>
    </div>
  )
}
