import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import Timeline from '@/components/ui/Timeline'
import { driverSteps } from '@/data/mock'

export default function DriverActivityPage() {
  return (
    <Card title="Driver Activity & Message Log" subtitle="Dispatch visibility, route progress, and issue capture history" right={<Badge tone="info">Live Feed</Badge>}>
      <Timeline items={driverSteps} />
    </Card>
  )
}
