type Props = { headers: string[]; rows: React.ReactNode[][] }

export default function DataTable({ headers, rows }: Props) {
  return (
    <div className="overflow-hidden rounded-sm border border-app-border">
      <div className="max-h-[420px] overflow-auto scrollbar-thin">
        <table className="min-w-full border-separate border-spacing-0 text-sm">
          <thead className="sticky top-0 z-10 bg-app-panel2">
            <tr>
              {headers.map((header) => (
                <th key={header} className="border-b border-app-border px-3 py-2 text-left text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="group hover:bg-slate-900/70">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="border-b border-app-border px-3 py-2 align-top text-slate-200 group-hover:text-white">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
