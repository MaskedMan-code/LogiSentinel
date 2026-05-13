import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'

export default function DriverLoginPage() {
  return (
    <div className="grid min-h-screen place-items-center bg-app-bg px-4">
      <Card title="Driver Login" subtitle="Simple mobile-friendly sign-in placeholder." right={<Badge tone="warning">Touch First</Badge>}>
        <div className="space-y-4 text-sm text-slate-300">
          <div className="rounded-sm border border-app-border bg-slate-950 p-3">Driver ID / mobile number</div>
          <div className="rounded-sm border border-app-border bg-slate-950 p-3">One-time passcode</div>
        </div>
      </Card>
    </div>
  )
}
