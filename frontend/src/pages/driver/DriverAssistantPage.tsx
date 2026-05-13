import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import ChatPanel from '@/components/ui/ChatPanel'
import { aiMessages } from '@/data/mock'

export default function DriverAssistantPage() {
  return (
    <Card title="AI Assistant" subtitle="Driver-friendly help with large responses and secure model routing" right={<Badge tone="accent">Voice Ready</Badge>}>
      <ChatPanel messages={aiMessages} />
    </Card>
  )
}
