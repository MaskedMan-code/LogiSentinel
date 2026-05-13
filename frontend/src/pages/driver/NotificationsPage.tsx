import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'

export default function NotificationsPage() {
  return (
    <Card title="Notification Center" subtitle="Priority operational alerts and service reminders" right={<Badge tone="warning">3 Alerts</Badge>}>
      <div className="space-y-3">
        {[
          ['Oil service due', 'next 200 km'],
          ['Dispatch update', 'new stop at 13:40'],
          ['Weather advisory', 'check road conditions'],
        ].map(([title, detail]) => (
          <div key={title} className="rounded-sm border border-app-border bg-app-panel2 p-3">
            <div className="text-sm font-semibold text-white">{title}</div>
            <div className="mt-1 text-sm text-slate-400">{detail}</div>
          </div>
        ))}
      </div>
    </Card>
  )
}
