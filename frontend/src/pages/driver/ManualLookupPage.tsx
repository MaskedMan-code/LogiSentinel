import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import { manualLibrary } from '@/data/mock'

export default function ManualLookupPage() {
  return (
    <Card title="Manual Lookup" subtitle="Quick access to relevant service guidance" right={<Badge tone="info">Offline Cached</Badge>}>
      <div className="space-y-3">
        {manualLibrary.map((manual) => (
          <div key={manual.title} className="rounded-sm border border-app-border bg-app-panel2 p-3">
            <div className="flex items-center justify-between gap-2">
              <div>
                <div className="text-sm font-semibold text-white">{manual.title}</div>
                <div className="mt-1 text-xs text-slate-400">{manual.pages}</div>
              </div>
              <Badge tone={manual.tone}>{manual.tag}</Badge>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
