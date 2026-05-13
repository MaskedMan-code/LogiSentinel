type Props = {
  title?: string
  subtitle?: string
  right?: React.ReactNode
  children: React.ReactNode
  dense?: boolean
}

export default function Card({ title, subtitle, right, children, dense = false }: Props) {
  return (
    <section className="overflow-hidden rounded-sm border border-app-border bg-app-panel shadow-panel">
      {(title || subtitle || right) && (
        <header className={`flex items-start justify-between gap-4 border-b border-app-border bg-app-panel2 ${dense ? 'px-3 py-2' : 'px-4 py-3'}`}>
          <div>
            {title && <h2 className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-100">{title}</h2>}
            {subtitle && <p className="mt-1 text-sm text-slate-400">{subtitle}</p>}
          </div>
          {right && <div className="shrink-0">{right}</div>}
        </header>
      )}
      <div className={dense ? 'p-3' : 'p-4'}>{children}</div>
    </section>
  )
}
