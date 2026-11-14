import React from 'react'
import KutaiEmblem from './KutaiEmblem'

export default function Footer() {
  return (
    <footer className="px-6 lg:px-14 py-12 bg-[#090807] border-t border-[#2a241b] text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <KutaiEmblem size={24} className="text-[#caa45e]" />
        <span className="font-serif text-[15px] font-bold text-[#f5f2eb]">
          Kesultanan Kutai Kartanegara Ing Martadipura
        </span>
      </div>
      <p className="text-[12px] text-[#827867] max-w-lg mx-auto leading-relaxed">
        Festival Erau Adat Kutai 2024. Merajut peradaban tertua Nusantara, merawat marwah tradisi, dan menyelaraskan harmoni semesta.
      </p>
      <div className="text-[11px] text-[#574f43] mt-6 tracking-wide">
        © 2024 Kesultanan Kutai Kartanegara • Smart Cultural Festival Dashboard • AI Knowledge System
      </div>
    </footer>
  )
}
