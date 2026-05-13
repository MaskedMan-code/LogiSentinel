import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'

export default function SettingsPage() {
  return (
    <Card title="Settings / Governance" subtitle="RBAC, policy controls, and secure integration settings" right={<Badge tone="critical">Admin</Badge>}>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {['Role-based access', 'Redaction policy', 'API quota', 'Audit retention', 'Model routing', 'Export permissions'].map((item) => (
          <div key={item} className="rounded-sm border border-app-border bg-app-panel2 p-4 text-sm text-slate-200">{item}</div>
        ))}
      </div>
    </Card>
  )
}
