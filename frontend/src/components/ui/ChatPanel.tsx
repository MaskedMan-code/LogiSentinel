type Message = { role: 'assistant' | 'user'; text: string; meta?: string }

type Props = { messages: Message[] }

export default function ChatPanel({ messages }: Props) {
  return (
    <div className="space-y-3">
      {messages.map((message, index) => (
        <div key={index} className={`rounded-sm border px-3 py-2 ${message.role === 'assistant' ? 'border-sky-900/70 bg-sky-950/30' : 'border-app-border bg-slate-900/70'}`}>
          <div className="mb-1 flex items-center justify-between gap-2 text-[11px] uppercase tracking-[0.18em] text-slate-400">
            <span>{message.role === 'assistant' ? 'Fleet AI' : 'Operator'}</span>
            {message.meta && <span className="font-mono normal-case tracking-[0.06em] text-slate-500">{message.meta}</span>}
          </div>
          <p className="text-sm leading-6 text-slate-100">{message.text}</p>
        </div>
      ))}
    </div>
  )
}
