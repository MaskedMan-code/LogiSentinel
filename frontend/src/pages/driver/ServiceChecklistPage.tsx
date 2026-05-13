import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'

export default function ServiceChecklistPage() {
  return (
    <Card title="Service Checklist" subtitle="Step-by-step guided maintenance and safety checks" right={<Badge tone="success">Ready</Badge>}>
      <div className="grid gap-3 md:grid-cols-2">
        {['Seatbelts', 'Brake lights', 'Tires', 'Fluid levels', 'Doors', 'Cargo area'].map((item) => (
          <div key={item} className="rounded-sm border border-app-border bg-app-panel2 p-4 text-sm text-slate-200">{item} · tap when verified</div>
        ))}
      </div>
    </Card>
  )
}
