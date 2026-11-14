import React from 'react'
import { X, Sparkles } from 'lucide-react'

export default function RitualModal({ ritual, onClose, onAskAi }) {
  if (!ritual) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#191612] border border-[#463b27] rounded-lg max-w-2xl w-full overflow-hidden shadow-2xl">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#14120f]">
          <img
            src={ritual.image}
            alt={ritual.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#191612] via-transparent to-black/40" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-[#0f0e0c]/80 hover:bg-[#0f0e0c] text-[#f5f2eb] p-2 rounded-full border border-[#2a241b] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-6">
            <span className="bg-[#231f18] text-[#caa45e] border border-[#463b27] px-2.5 py-1 rounded text-[11px] font-bold">
              PROSESI #{ritual.id}
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#f5f2eb] mt-1">
              {ritual.name}
            </h3>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <h4 className="text-[11px] uppercase font-bold tracking-[1.5px] text-[#caa45e]">
              DESKRIPSI TAHAPAN
            </h4>
            <p className="text-[14px] text-[#bfb8aa] mt-1 leading-relaxed">
              {ritual.description}
            </p>
          </div>

          <div className="bg-[#14120f] border border-[#2a241b] p-4 rounded">
            <h4 className="text-[11px] uppercase font-bold tracking-[1.5px] text-[#caa45e]">
              MAKNA FILOSOFIS KESULTANAN
            </h4>
            <p className="text-[13px] text-[#ede8de] italic mt-1 leading-relaxed">
              "{ritual.filosofi}"
            </p>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-[#2a241b] text-[12px] text-[#827867]">
            <span>Lokasi: <strong className="text-[#bfb8aa]">{ritual.lokasi}</strong></span>
            <button
              onClick={() => onAskAi(ritual.name)}
              className="text-[#caa45e] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Tanyakan Detail ke AI
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
