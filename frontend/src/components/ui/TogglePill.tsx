type Props = { children: React.ReactNode; active?: boolean }

export default function TogglePill({ children, active = false }: Props) {
  return (
    <button className={`rounded-sm border px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition ${active ? 'border-sky-700 bg-sky-950/80 text-sky-300' : 'border-app-border bg-app-panel2 text-slate-400 hover:text-slate-200'}`}>
      {children}
    </button>
  )
}
