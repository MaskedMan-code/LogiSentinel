type Item = { time: string; title: string; detail: string; tone?: 'info' | 'success' | 'warning' | 'critical' }

type Props = { items: Item[] }

const tones = {
  info: 'border-sky-400 bg-sky-400',
  success: 'border-emerald-400 bg-emerald-400',
  warning: 'border-amber-400 bg-amber-400',
  critical: 'border-red-400 bg-red-400',
}

export default function Timeline({ items }: Props) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="relative pl-6">
          {index !== items.length - 1 && <span className="absolute left-[7px] top-3 h-full w-px bg-app-border" />}
          <span className={`absolute left-0 top-2.5 h-3 w-3 rounded-[2px] border ${tones[item.tone ?? 'info']}`} />
          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.08em] text-slate-400">{item.time}</div>
          <div className="mt-1 text-sm font-semibold text-white">{item.title}</div>
          <div className="mt-1 text-sm text-slate-400">{item.detail}</div>
        </div>
      ))}
    </div>
  )
}
