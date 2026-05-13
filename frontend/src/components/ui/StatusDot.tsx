type Props = { tone?: 'success' | 'warning' | 'critical' | 'info' | 'neutral' }

const tones = {
  success: 'bg-emerald-400 shadow-[0_0_0_4px_rgba(34,197,94,0.12)]',
  warning: 'bg-amber-400 shadow-[0_0_0_4px_rgba(245,158,11,0.12)]',
  critical: 'bg-red-400 shadow-[0_0_0_4px_rgba(239,68,68,0.12)]',
  info: 'bg-sky-400 shadow-[0_0_0_4px_rgba(78,161,255,0.12)]',
  neutral: 'bg-slate-500 shadow-[0_0_0_4px_rgba(148,163,184,0.12)]',
}

export default function StatusDot({ tone = 'neutral' }: Props) {
  return <span className={`inline-block h-2.5 w-2.5 rounded-[2px] ${tones[tone]}`} />
}
