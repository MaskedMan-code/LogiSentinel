import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'

export default function VehicleAssignedPage() {
  return (
    <Card title="Vehicle Assigned" subtitle="Pre-trip inspection and vehicle health confirmation" right={<Badge tone="info">Assigned</Badge>}>
      <div className="grid gap-3 md:grid-cols-2">
        {['Tires', 'Lights', 'Mirrors', 'Brakes', 'Doors', 'Cargo'].map((item) => (
          <div key={item} className="rounded-sm border border-app-border bg-app-panel2 p-4 text-sm text-slate-200">{item} checklist pending</div>
        ))}
      </div>
    </Card>
  )
}
