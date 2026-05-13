import { NavLink, Outlet } from 'react-router-dom'
import Badge from '@/components/ui/Badge'
import CommandKpi from '@/components/ui/CommandKpi'

const links = [
  ['Route', '/driver'],
  ['Vehicle', '/driver/vehicle'],
  ['Issue', '/driver/report'],
  ['Manuals', '/driver/manuals'],
  ['Assistant', '/driver/assistant'],
  ['Checklist', '/driver/checklist'],
  ['Consent', '/driver/consent'],
  ['Alerts', '/driver/notifications'],
  ['Offline', '/driver/offline'],
]

export default function DriverLayout() {
  return (
    <div className="min-h-screen bg-app-bg text-app-text">
      <div className="mx-auto grid min-h-screen max-w-[1100px] grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px]">
        <main className="min-w-0">
          <header className="border-b border-app-border bg-app-panel/90">
            <div className="flex flex-col gap-4 px-4 py-4 lg:px-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">Driver Mode</div>
                  <h2 className="mt-1 text-2xl font-semibold tracking-tight text-white">Secure Fleet Assistant</h2>
                </div>
                <Badge tone="warning">Mobile First</Badge>
              </div>
              <div className="grid gap-2 md:grid-cols-3">
                <CommandKpi label="Route Status" value="ON TIME" accent="text-emerald-300" sub="3 stops remaining today" />
                <CommandKpi label="Vehicle" value="USC-001" accent="text-sky-300" sub="Ford Transit / assigned" />
                <CommandKpi label="Offline Queue" value="2" accent="text-amber-300" sub="Pending when signal returns" />
              </div>
            </div>
          </header>
          <section className="p-4 lg:p-6">
            <Outlet />
          </section>
        </main>

        <aside className="border-l border-app-border bg-app-panel2">
          <div className="border-b border-app-border p-4">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Quick Access</div>
            <p className="mt-2 text-sm text-slate-400">Large tap targets, minimal typing, and guided workflows for the driver role.</p>
          </div>
          <nav className="space-y-1 p-3 text-sm">
            {links.map(([label, to]) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/driver'}
                className={({ isActive }) =>
                  [
                    'flex items-center justify-between rounded-sm border px-3 py-3 transition',
                    isActive ? 'border-emerald-800 bg-emerald-950/60 text-emerald-200' : 'border-transparent bg-transparent text-slate-400 hover:border-app-border hover:bg-app-panel hover:text-slate-100',
                  ].join(' ')
                }
              >
                <span>{label}</span>
                <span className="text-[11px] font-mono opacity-60">↗</span>
              </NavLink>
            ))}
          </nav>
        </aside>
      </div>
    </div>
  )
}
