type Props = {
  label: string
  value: string
  delta?: string
  tone?: 'neutral' | 'success' | 'warning' | 'critical' | 'info'
}

const toneMap = {
  neutral: 'border-app-border',
  success: 'border-emerald-900/80',
  warning: 'border-amber-900/80',
  critical: 'border-red-900/80',
  info: 'border-sky-900/80',
}

export default function StatCard({ label, value, delta, tone = 'neutral' }: Props) {
  return (
    <div className={`rounded-sm border bg-app-panel p-4 shadow-panel ${toneMap[tone]}`}>
      <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">{label}</div>
      <div className="mt-3 text-3xl font-semibold tracking-tight text-white">{value}</div>
      {delta && <div className="mt-2 text-xs text-slate-400">{delta}</div>}
    </div>
  )
}
