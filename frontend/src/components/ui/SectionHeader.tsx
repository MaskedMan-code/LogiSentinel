type Props = {
  title: string
  subtitle?: string
  right?: React.ReactNode
}

export default function SectionHeader({ title, subtitle, right }: Props) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">{title}</div>
        {subtitle && <p className="mt-1 text-sm text-slate-400">{subtitle}</p>}
      </div>
      {right && <div>{right}</div>}
    </div>
  )
}
