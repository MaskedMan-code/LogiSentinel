import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'

export default function LoginPage() {
  return (
    <div className="grid min-h-screen place-items-center bg-app-bg px-4">
      <Card title="Enterprise Login" subtitle="Organization sign-in placeholder for multi-tenant access." right={<Badge tone="accent">Secure Entry</Badge>}>
        <div className="space-y-4 text-sm text-slate-300">
          <p>Use this screen for SSO, organization selection, and role-based access control.</p>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-sm border border-app-border bg-slate-950 p-3">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Email</div>
              <div className="mt-2 rounded-sm border border-app-border bg-app-bg px-3 py-2 text-slate-500">admin@courierco.com</div>
            </div>
            <div className="rounded-sm border border-app-border bg-slate-950 p-3">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Org</div>
              <div className="mt-2 rounded-sm border border-app-border bg-app-bg px-3 py-2 text-slate-500">USA Courier Service</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
