import React from 'react'
import {
  History,
  Compass,
  Sparkles,
  Circle,
  MapPin,
  MessageSquare,
  Layers
} from 'lucide-react'
import KutaiEmblem from './KutaiEmblem'

export default function Sidebar({ activeSection, scrollTo, onOpenAi }) {
  const menuItems = [
    { id: 'pengertian', label: 'Pengertian Erau', index: '01', icon: null, isEmblem: true },
    { id: 'eksplorasi', label: 'Eksplorasi Alur Erau', index: '02', icon: Layers },
    { id: 'sejarah', label: 'Sejarah Kerajaan', index: '03', icon: History },
    { id: 'filosofi', label: 'Filosofi & Kosmologi', index: '04', icon: Compass },
    { id: 'warisan', label: 'Warisan & Arsip', index: '05', icon: Sparkles },
    { id: 'kegiatan', label: '13 Prosesi Ritual', index: '06', icon: Circle },
    { id: 'peta', label: 'Peta Geografi Budaya', index: '07', icon: MapPin },
    { id: 'kesan-pesan', label: 'Kesan & Pesan', index: '08', icon: MessageSquare }
  ]

  return (
    <aside 
      style={{ width: '260px', minWidth: '260px', maxWidth: '260px' }}
      className="w-[260px] min-w-[260px] max-w-[260px] lg:h-screen lg:sticky lg:top-0 bg-[#14120f] border-r border-[#2a241b] flex flex-col justify-between shrink-0 z-30 select-none"
    >
      <div>
        {/* Branding Header */}
        <div className="p-5 border-b border-[#2a241b] flex items-start gap-3">
          <KutaiEmblem size={32} className="text-[#caa45e] shrink-0 mt-0.5" />
          <div className="min-w-0">
            <div className="text-[10px] uppercase font-bold tracking-[1.5px] text-[#caa45e] leading-tight">
              Kesultanan
            </div>
            <div className="text-[10px] uppercase tracking-[1.2px] text-[#827867] leading-tight">
              Kutai Kartanegara
            </div>
            <h1 className="font-serif text-[14px] font-bold text-[#f5f2eb] mt-1 leading-snug">
              Smart Cultural Festival Dashboard
            </h1>
            <div className="text-[11px] text-[#caa45e] font-medium mt-0.5">
              AI-Based • Erau 2024
            </div>
          </div>
        </div>

        {/* Navigation List */}
        <nav className="p-3 space-y-1">
          {menuItems.map(item => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded text-[13px] font-medium transition-all duration-200 text-left cursor-pointer group ${
                  isActive
                    ? 'bg-[#221e17] text-[#caa45e] border-l-2 border-[#caa45e] font-semibold shadow-sm'
                    : 'text-[#bfb8aa] hover:bg-[#191612] hover:text-[#ede8de]'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  {item.isEmblem ? (
                    <KutaiEmblem size={16} className={`shrink-0 transition-colors ${isActive ? 'text-[#caa45e]' : 'text-[#827867] group-hover:text-[#bfb8aa]'}`} />
                  ) : (
                    <Icon className={`w-4 h-4 shrink-0 transition-colors ${isActive ? 'text-[#caa45e]' : 'text-[#827867] group-hover:text-[#bfb8aa]'}`} />
                  )}
                  <span className="truncate">{item.label}</span>
                </div>
                <span className={`text-[10px] font-mono transition-opacity ${isActive ? 'text-[#caa45e] opacity-100 font-bold' : 'text-[#615849] opacity-40 group-hover:opacity-80'}`}>
                  {item.index}
                </span>
              </button>
            )
          })}
        </nav>
      </div>

      {/* Bottom AI Cultural Assistant Dock */}
      <div className="p-4 border-t border-[#2a241b] bg-[#14120f]">
        <button
          onClick={onOpenAi}
          className="w-full bg-[#191612] hover:bg-[#221e18] border border-[#463b27] hover:border-[#caa45e] rounded p-3 text-left transition-all group cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#caa45e] animate-pulse"></span>
            <span className="text-[10px] uppercase font-bold tracking-[1.2px] text-[#caa45e]">
              AI Cultural Assistant
            </span>
          </div>
          <p className="text-[11px] text-[#827867] mt-1 group-hover:text-[#bfb8aa] transition-colors leading-snug">
            Tanyakan filosofi, sejarah, & tata cara Erau
          </p>
        </button>
      </div>
    </aside>
  )
}
