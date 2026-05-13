import DiagnosticsChat from '@/components/ui/DiagnosticsChat';
import Card from '@/components/ui/Card';

export default function AiDiagnosticsPage() {
  return (
    <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
      
      {/* LEFT COLUMN: The Real, Working AI Chat */}
      <div>
        <DiagnosticsChat />
      </div>

      {/* RIGHT COLUMN: Your existing Prompt Orchestration steps */}
      <Card title="Prompt Orchestration" subtitle="User prompt → redaction → backend validation → model call → cited answer">
        <div className="space-y-3 text-sm text-slate-300">
          <div className="rounded-sm border border-app-border bg-app-panel p-3">
            1. Upload manual or fleet CSV/JSON.
          </div>
          <div className="rounded-sm border border-app-border bg-app-panel p-3">
            2. Redact addresses, phone numbers, and other sensitive values.
          </div>
          <div className="rounded-sm border border-app-border bg-app-panel p-3">
            3. Ask a diagnostic question through the secure backend proxy.
          </div>
          <div className="rounded-sm border border-app-border bg-app-panel p-3">
            4. Return a concise answer with manual section references.
          </div>
        </div>
      </Card>
      
    </div>
  );
}