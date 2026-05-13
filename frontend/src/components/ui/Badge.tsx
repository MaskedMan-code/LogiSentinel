type Tone = 'neutral' | 'success' | 'warning' | 'critical' | 'info' | 'accent'

type Props = {
  children: React.ReactNode
  tone?: Tone
  mono?: boolean
}

const tones: Record<Tone, string> = {
  neutral: 'border-app-border bg-app-panel2 text-slate-200',
  success: 'border-emerald-900/80 bg-emerald-950/70 text-emerald-300',
  warning: 'border-amber-900/80 bg-amber-950/70 text-amber-300',
  critical: 'border-red-900/80 bg-red-950/70 text-red-300',
  info: 'border-sky-900/80 bg-sky-950/70 text-sky-300',
  accent: 'border-app-blue/40 bg-sky-950/50 text-app-blue2',
}

export default function Badge({ children, tone = 'neutral', mono = false }: Props) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1 border px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] rounded-sm',
        mono ? 'font-mono normal-case tracking-[0.06em]' : '',
        tones[tone],
      ].join(' ')}
    >
      {children}
    </span>
  )
}
