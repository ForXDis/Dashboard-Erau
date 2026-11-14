import React from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'

export default function SlideIndicator({ sections, activeSection, scrollTo, scrollProgress }) {
  const currentIndex = sections.findIndex(s => s.id === activeSection)
  const current = sections[currentIndex] || sections[0]
  const displayIndex = String(currentIndex + 1).padStart(2, '0')
  const totalSections = String(sections.length).padStart(2, '0')

  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollTo(sections[currentIndex - 1].id)
    }
  }

  const handleNext = () => {
    if (currentIndex < sections.length - 1) {
      scrollTo(sections[currentIndex + 1].id)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-3 bg-[#161411]/90 backdrop-blur-md border border-[#463b27] px-4 py-2.5 rounded-full shadow-2xl">
      {/* Scroll Progress Bar */}
      <div className="w-16 h-1 bg-[#2a241b] rounded-full overflow-hidden relative">
        <div 
          className="h-full bg-[#caa45e] transition-all duration-300"
          style={{ width: `${Math.min(100, Math.max(0, scrollProgress))}%` }}
        />
      </div>

      {/* Slide Index & Title */}
      <div className="flex items-center gap-2 border-l border-[#2a241b] pl-3">
        <span className="font-mono text-[11px] font-bold text-[#caa45e]">
          {displayIndex} <span className="text-[#827867]">/ {totalSections}</span>
        </span>
        <span className="text-[11px] uppercase tracking-wider text-[#ede8de] font-medium max-w-[140px] truncate">
          {current.shortLabel || current.label}
        </span>
      </div>

      {/* Slide Navigation Buttons */}
      <div className="flex items-center gap-1 border-l border-[#2a241b] pl-2">
        <button
          onClick={handlePrev}
          disabled={currentIndex <= 0}
          className="p-1 rounded text-[#bfb8aa] hover:text-[#caa45e] disabled:opacity-30 disabled:hover:text-[#bfb8aa] transition-colors cursor-pointer"
          title="Slide Sebelumnya"
        >
          <ChevronUp className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex >= sections.length - 1}
          className="p-1 rounded text-[#bfb8aa] hover:text-[#caa45e] disabled:opacity-30 disabled:hover:text-[#bfb8aa] transition-colors cursor-pointer"
          title="Slide Selanjutnya"
        >
          <ChevronDown className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  )
}
