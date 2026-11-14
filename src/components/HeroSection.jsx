import React, { useEffect, useRef } from 'react'
import { ChevronRight, Sparkles } from 'lucide-react'
import gsap from 'gsap'

export default function HeroSection({ onExplore, onOpenAi }) {
  const contentRef = useRef(null)

  useEffect(() => {
    if (!contentRef.current) return
    const elements = contentRef.current.querySelectorAll('.gsap-fade')
    gsap.fromTo(
      elements,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.45, stagger: 0.08, ease: 'power2.out' }
    )
  }, [])

  return (
    <section 
      id="pengertian" 
      className="relative min-h-[580px] lg:min-h-[640px] flex items-center px-6 lg:px-16 py-16 border-b border-[#2a241b] overflow-hidden bg-[#0f0e0c]"
    >
      {/* Background Cultural Photography matching Figma Screenshot 1 */}
      <div 
        className="absolute inset-0 bg-cover bg-right lg:bg-center z-0 opacity-55 mix-blend-luminosity pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1800&q=80')`,
          backgroundPosition: 'right 30%'
        }}
      />
      
      {/* Dark Multi-Stop Gradient Overlays for perfect text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f0e0c] via-[#0f0e0c]/85 to-transparent z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-transparent to-[#0f0e0c]/70 z-0 pointer-events-none" />

      {/* Vertical Watermark at Right Edge matching Figma */}
      <div className="hidden xl:block absolute right-4 top-16 bottom-16 z-10 pointer-events-none opacity-25 text-[10px] tracking-[4px] uppercase text-[#caa45e] vertical-watermark font-semibold">
        TENGGARONG • KUTAI KARTANEGARA • KALIMANTAN TIMUR
      </div>

      {/* Main Content (Wide & Spacious) */}
      <div ref={contentRef} className="relative z-10 max-w-2xl lg:max-w-3xl">
        <div className="gsap-fade text-[11px] uppercase font-bold tracking-[2.5px] text-[#caa45e] mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#caa45e]"></span>
          AI-BASED SMART CULTURAL FESTIVAL
        </div>

        <h1 className="gsap-fade font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f5f2eb] leading-[1.12] mb-6">
          Mengenal Erau <br/>
          <span className="italic text-[#d9be75] font-serif font-normal">melalui Cerita,</span> <br/>
          Visual, dan AI
        </h1>

        <p className="gsap-fade text-[15px] sm:text-[16px] text-[#bfb8aa] leading-relaxed mb-8 max-w-2xl font-light">
          Eksplorasi 13 tahapan Ritual Erau Kesultanan Kutai Kartanegara Ing Martadipura melalui visual storytelling, interpretasi budaya, dan kecerdasan buatan.
        </p>

        <div className="gsap-fade flex flex-wrap items-center gap-4 mb-10">
          <button 
            onClick={onExplore}
            className="btn-primary"
          >
            <span>Eksplorasi Ritual Erau</span>
            <ChevronRight className="w-4 h-4" />
          </button>
          <button 
            onClick={onOpenAi}
            className="btn-outline"
          >
            <Sparkles className="w-4 h-4 text-[#caa45e]" />
            <span>Tanyakan kepada AI</span>
          </button>
        </div>

        {/* Cultural Pillars Metadata Row matching Figma */}
        <div className="gsap-fade text-[10px] sm:text-[11px] tracking-[1.5px] uppercase text-[#827867] flex flex-wrap items-center gap-2.5 font-medium pt-4 border-t border-[#2a241b]">
          <span>13 PROSESI</span>
          <span className="text-[#caa45e]">•</span>
          <span>SEJARAH KERAJAAN</span>
          <span className="text-[#caa45e]">•</span>
          <span>FILOSOFI</span>
          <span className="text-[#caa45e]">•</span>
          <span>KOSMOLOGI</span>
          <span className="text-[#caa45e]">•</span>
          <span>VISUAL STORYTELLING</span>
        </div>
      </div>
    </section>
  )
}
