import { useState } from 'react';

export default function DiagnosticsChat() {
  // We default to the Nissan NV, but the mechanic can change it!
  const [selectedVehicle, setSelectedVehicle] = useState('NISSAN-NV');
  const [question, setQuestion] = useState('');
  const [chatLog, setChatLog] = useState<{role: string, text: string, shield?: string}[]>([]);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question) return;

    const currentChat = [...chatLog, { role: 'user', text: question }];
    setChatLog(currentChat);
    setQuestion('');
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/diagnostics/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: currentChat[currentChat.length - 1].text,
          vehicle_id: selectedVehicle, // Sending the selected truck ID to the backend!
          manual_title: `${selectedVehicle} Manual`
        })
      });

      const data = await response.json();

      if (response.ok) {
        const redactedAlert = data.metadata?.redacted_matches?.length > 0 
          ? `🛡️ PRIVACY SHIELD INTERCEPTED: ${data.metadata.redacted_matches.join(', ')}` 
          : undefined;

        setChatLog([...currentChat, { 
          role: 'ai', 
          text: data.answer,
          shield: redactedAlert
        }]);
      } else {
        setChatLog([...currentChat, { role: 'error', text: `Server Error: ${data.detail}` }]);
      }
    } catch (error) {
        setChatLog([...currentChat, { role: 'error', text: "Failed to connect to backend." }]);
    }
    
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-4 border border-gray-700 rounded-lg p-6 bg-app-panel2 shadow-xl">
      <h3 className="text-xl font-bold text-white mb-2">Secure AI Diagnostics</h3>
      
      {/* OUR NEW AUTOMATED DROPDOWN */}
      <div className="flex flex-col gap-1 mb-4">
        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Select Active Fleet Vehicle</label>
        <select 
          className="w-full bg-[#0f172a] border border-gray-700 text-white p-3 rounded text-sm focus:outline-none focus:border-blue-500 cursor-pointer"
          value={selectedVehicle}
          onChange={(e) => setSelectedVehicle(e.target.value)}
        >
          <option value="NISSAN-NV">Truck 1: 2021 Nissan NV Cargo</option>
          <option value="FORD-TRANSIT">Truck 2: 2024 Ford Transit</option>
          <option value="NGDV">Truck 3: NGDV Operator Manual</option>
          <option value="LLV">Truck 4: LLV Electrical Systems</option>
        </select>
      </div>

      {/* Chat Window */}
      <div className="flex flex-col gap-3 min-h-[300px] max-h-[400px] overflow-y-auto bg-[#0f172a] border border-gray-800 p-4 rounded shadow-inner">
        {chatLog.length === 0 && <p className="text-gray-500 italic text-sm text-center mt-10">System ready. Select a vehicle and ask a diagnostic question...</p>}
        
        {chatLog.map((msg, idx) => (
          <div key={idx} className={`p-3 rounded max-w-[85%] ${msg.role === 'user' ? 'bg-blue-900/40 text-blue-100 self-end ml-auto border border-blue-800/50' : 'bg-gray-800 text-gray-200 self-start border border-gray-700'}`}>
            <span className="block text-[10px] uppercase text-gray-400 mb-1">{msg.role === 'user' ? 'Mechanic' : 'Enterprise AI'}</span>
            <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
            {msg.shield && <p className="text-[11px] text-emerald-400 font-mono mt-2 pt-2 border-t border-gray-700">{msg.shield}</p>}
          </div>
        ))}
        {loading && <div className="text-blue-400 text-sm animate-pulse ml-2 font-mono">Analyzing {selectedVehicle} manual...</div>}
      </div>

      {/* Input Box */}
      <div className="flex gap-2">
        <input 
          type="text" 
          placeholder="e.g., Driver John Doe is stranded at 555-123-4567. How do I fix a P0171 code?" 
          className="flex-1 bg-[#0f172a] border border-gray-700 text-white p-3 rounded focus:outline-none focus:border-blue-500"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
        />
        <button onClick={handleAsk} disabled={loading} className="bg-blue-600 hover:bg-blue-500 disabled:bg-blue-900 text-white px-8 py-2 rounded font-bold transition-all shadow-lg hover:shadow-blue-500/20">
          Send
        </button>
      </div>
    </div>
  );
}