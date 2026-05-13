import { NavLink, Outlet } from 'react-router-dom'
import Badge from '@/components/ui/Badge'
import CommandKpi from '@/components/ui/CommandKpi'

const links = [
  ['Overview', '/enterprise'],
  ['Fleet Health', '/enterprise/fleet'],
  ['Alerts', '/enterprise/alerts'],
  ['Vehicles', '/enterprise/vehicles'],
  ['Manuals', '/enterprise/manuals'],
  ['AI Diagnostics', '/enterprise/ai'],
  ['Privacy Review', '/enterprise/privacy'],
  ['Driver Activity', '/enterprise/drivers'],
  ['Reports', '/enterprise/reports'],
  ['Settings', '/enterprise/settings'],
]

export default function EnterpriseLayout() {
  return (
    <div className="min-h-screen bg-app-bg text-app-text">
      <div className="mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)_320px]">
        <aside className="hidden border-r border-app-border bg-app-panel lg:flex lg:flex-col">
          <div className="border-b border-app-border p-4">
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">Secure Fleet Intelligence Agent</div>
            <h1 className="mt-2 text-xl font-semibold tracking-tight text-white">Enterprise Command</h1>
            <p className="mt-2 text-sm leading-6 text-slate-400">High-density oversight for fleet health, diagnostics, privacy, and audit control.</p>
          </div>
          <nav className="flex-1 space-y-1 p-3 text-sm">
            {links.map(([label, to]) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/enterprise'}
                className={({ isActive }) =>
                  [
                    'flex items-center justify-between rounded-sm border px-3 py-2 transition',
                    isActive ? 'border-sky-800 bg-sky-950/70 text-sky-200' : 'border-transparent bg-transparent text-slate-400 hover:border-app-border hover:bg-app-panel2 hover:text-slate-100',
                  ].join(' ')
                }
              >
                <span>{label}</span>
                <span className="text-[11px] font-mono opacity-60">→</span>
              </NavLink>
            ))}
          </nav>
          <div className="border-t border-app-border p-4">
            <div className="grid grid-cols-2 gap-2">
              <CommandKpi label="API Proxy" value="ON" accent="text-app-blue2" sub="Direct model calls blocked" />
              <CommandKpi label="Audit" value="LIVE" accent="text-emerald-300" sub="All actions logged" />
            </div>
          </div>
        </aside>

        <main className="min-w-0">
          <header className="border-b border-app-border bg-app-panel/90 backdrop-blur-0">
            <div className="flex flex-col gap-4 px-4 py-4 lg:px-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">Enterprise / Admin</div>
                  <h2 className="mt-1 text-2xl font-semibold tracking-tight text-white">Operational Premium Console</h2>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone="info">Secure Data</Badge>
                  <Badge tone="success">Redaction Active</Badge>
                  <Badge tone="accent">Model Proxy</Badge>
                </div>
              </div>
              <div className="grid gap-2 md:grid-cols-3 xl:grid-cols-4">
                <CommandKpi label="Fleet Online" value="18" accent="text-white" sub="2 vehicles need attention" />
                <CommandKpi label="Critical Alerts" value="3" accent="text-red-300" sub="1 unresolved incident" />
                <CommandKpi label="Manuals Indexed" value="4" accent="text-sky-300" sub="PDF library ready" />
                <CommandKpi label="Privacy Blocks" value="27" accent="text-emerald-300" sub="PII masked from prompts" />
              </div>
            </div>
          </header>
          <section className="p-4 lg:p-6">
            <Outlet />
          </section>
        </main>

        <aside className="hidden border-l border-app-border bg-app-panel2 xl:block">
          <div className="border-b border-app-border p-4">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Command Feed</div>
            <div className="mt-2 text-sm text-slate-300">Recent system events, policy notices, and AI activity summaries.</div>
          </div>
          <div className="space-y-3 p-4 text-sm">
            <div className="rounded-sm border border-app-border bg-app-panel p-3">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">AI Request</div>
              <p className="mt-2 text-slate-200">Gemini calls are routed through the backend proxy only.</p>
            </div>
            <div className="rounded-sm border border-app-border bg-app-panel p-3">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">Privacy</div>
              <p className="mt-2 text-slate-200">PII redaction policy is applied before any diagnostic prompt is sent.</p>
            </div>
            <div className="rounded-sm border border-app-border bg-app-panel p-3">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">Audit</div>
              <p className="mt-2 text-slate-200">Every upload, query, and export action is recorded in the event log.</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
