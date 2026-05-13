import ManualUploadComponent from '@/components/ui/ManualUploadComponent'
import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import { manualLibrary } from '@/data/mock'

export default function ManualsPage() {
  return (
    <Card 
      title="Manual Upload & Document Library" 
      subtitle="PDF and CSV ingestion for AI-assisted diagnostics" 
      right={<Badge tone="info">4 Indexed</Badge>}
    >
      
      {/* 1. Our New Uploader Component */}
      <div className="mb-6">
        <ManualUploadComponent />
      </div>

      {/* 2. Your Existing Beautiful UI Grid */}
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {manualLibrary.map((item) => (
          <div key={item.title} className="rounded-sm border border-app-border bg-app-panel2 p-4">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">{item.pages}</div>
            <div className="mt-2 text-sm font-semibold text-white">{item.title}</div>
            <div className="mt-3 flex items-center justify-between gap-2">
              <Badge tone={item.tone as any}>{item.tag}</Badge>
              <span className="font-mono text-[11px] text-slate-500">PDF</span>
            </div>
          </div>
        ))}
      </div>
      
    </Card>
  )
}