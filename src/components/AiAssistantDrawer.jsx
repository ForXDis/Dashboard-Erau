import React from 'react'
import { Sparkles, X, Send } from 'lucide-react'

export default function AiAssistantDrawer({
  isOpen,
  onClose,
  chatHistory,
  input,
  setInput,
  onSubmit
}) {
  if (!isOpen) return null

  const suggestions = [
    'Apa itu Beseprah?',
    'Filosofi Mengulur Naga',
    'Kenapa ada Beluluh?'
  ]

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        style={{ width: '420px', maxWidth: '100%' }}
        className="w-full max-w-md bg-[#14120f] border-l border-[#463b27] h-full flex flex-col shadow-2xl"
      >
        {/* Header */}
        <div className="p-5 border-b border-[#2a241b] flex items-center justify-between bg-[#191612]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#2d2416] border border-[#caa45e] flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-[#caa45e]" />
            </div>
            <div>
              <h3 className="font-serif text-base font-bold text-[#f5f2eb]">
                AI Cultural Assistant
              </h3>
              <div className="text-[10px] text-[#caa45e] uppercase tracking-[1px]">
                Knowledge System Kesultanan
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#827867] hover:text-[#f5f2eb] p-1.5 rounded transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat History */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {chatHistory.map((msg, i) => (
            <div
              key={i}
              className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[88%] p-3.5 rounded text-[13px] leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-[#caa45e] text-[#0f0e0c] font-medium rounded-br-none'
                    : 'bg-[#191612] text-[#ede8de] border border-[#2a241b] rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Suggested Prompt Chips */}
        <div className="px-4 py-2 border-t border-[#2a241b] bg-[#14120f] overflow-x-auto flex gap-2">
          {suggestions.map((suggestion, idx) => (
            <button
              key={idx}
              onClick={() => setInput(suggestion)}
              className="whitespace-nowrap px-2.5 py-1 bg-[#191612] hover:bg-[#221e18] border border-[#2a241b] hover:border-[#caa45e] text-[11px] text-[#caa45e] rounded transition-all cursor-pointer"
            >
              {suggestion}
            </button>
          ))}
        </div>

        {/* Chat Input */}
        <form onSubmit={onSubmit} className="p-4 border-t border-[#2a241b] bg-[#191612]">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tanyakan tradisi atau sejarah Kutai..."
              className="flex-1 bg-[#0f0e0c] border border-[#2a241b] focus:border-[#caa45e] text-[13px] text-[#ede8de] px-3.5 py-2.5 rounded focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="bg-[#caa45e] hover:bg-[#d9be75] text-[#0f0e0c] px-4 py-2.5 rounded font-semibold transition-colors flex items-center justify-center shrink-0 cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
