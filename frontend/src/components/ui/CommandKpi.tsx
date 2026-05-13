type Props = { label: string; value: string; accent?: string; sub?: string }

export default function CommandKpi({ label, value, accent = 'text-white', sub }: Props) {
  return (
    <div className="rounded-sm border border-app-border bg-app-panel2 p-3">
      <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">{label}</div>
      <div className={`mt-2 font-mono text-2xl font-semibold ${accent}`}>{value}</div>
      {sub && <div className="mt-2 text-xs text-slate-400">{sub}</div>}
    </div>
  )
}
