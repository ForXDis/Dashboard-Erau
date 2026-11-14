import React, { useEffect, useRef } from 'react'
import { ChevronRight, Sparkles } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function PetaBudayaSection({ sites, selectedSite, onSelectSite, onAskAiForSite }) {
  const current = sites[selectedSite] || sites[0]
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.peta-header',
        { opacity: 0, y: 18 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 92%'
          },
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: 'power2.out'
        }
      )

      gsap.fromTo('.peta-map-col',
        { opacity: 0, x: -18 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 88%'
          },
          opacity: 1,
          x: 0,
          duration: 0.45,
          ease: 'power2.out'
        }
      )

      gsap.fromTo('.peta-site-col',
        { opacity: 0, x: 18 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 88%'
          },
          opacity: 1,
          x: 0,
          duration: 0.45,
          ease: 'power2.out'
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="peta" className="optimize-render px-6 lg:px-14 py-16 border-b border-[#2a241b] bg-[#12100d]">
      <div className="peta-header mb-8">
        <div className="text-[10px] uppercase font-bold tracking-[1.5px] text-[#caa45e]">
          GEOGRAFI BUDAYA
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#f5f2eb] mt-1">
          Peta Budaya Erau
        </h2>
        <p className="text-[14px] text-[#bfb8aa] mt-1">
          Tenggarong dan Kutai Kartanegara — situs-situs warisan budaya Erau.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Map Canvas (Left 8 Cols) */}
        <div className="peta-map-col lg:col-span-8 bg-[#191612] border border-[#2a241b] rounded overflow-hidden flex flex-col">
          <div 
            className="relative h-[420px] w-full bg-cover bg-center overflow-hidden"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1000&q=70')`,
              backgroundPosition: 'center 45%'
            }}
          >
            {/* Dark Mask */}
            <div className="absolute inset-0 bg-[#0f0e0c]/65 backdrop-blur-[1px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(202,164,94,0.08)_1px,transparent_1px)] bg-[size:32px_32px]" />

            {/* Hotspot Pins */}
            {sites.map((site, index) => {
              const isSelected = selectedSite === index
              return (
                <div
                  key={index}
                  onClick={() => onSelectSite(index)}
                  style={{ left: site.coords.x, top: site.coords.y }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 group"
                >
                  <div className={`relative flex items-center justify-center transition-transform ${isSelected ? 'scale-125' : 'hover:scale-110'}`}>
                    <div className={`w-3.5 h-3.5 rounded-full border-2 border-[#0f0e0c] bg-[#caa45e] ${isSelected ? 'pin-pulse ring-4 ring-[#caa45e]/40' : ''}`} />
                    <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#14120f] border border-[#463b27] px-2.5 py-1 rounded text-[11px] font-semibold text-[#f5f2eb] shadow-2xl pointer-events-none transition-opacity ${
                      isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}>
                      {site.name}
                    </div>
                  </div>
                </div>
              )
            })}

            <div className="absolute bottom-3 left-4 text-[10px] uppercase tracking-[1.5px] text-[#caa45e] font-semibold bg-[#14120f]/90 px-3 py-1.5 rounded border border-[#2a241b]">
              TENGGARONG • KUTAI KARTANEGARA • KALIMANTAN TIMUR
            </div>
          </div>

          {/* Legend Row */}
          <div className="p-3.5 bg-[#14120f] border-t border-[#2a241b] flex flex-wrap items-center gap-6 text-[11px] text-[#827867]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#caa45e]"></span>
              <span>Keraton / Museum</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#caa45e]"></span>
              <span>Lokasi Ritual</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#caa45e]"></span>
              <span>Situs Sejarah</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#caa45e]"></span>
              <span>Destinasi Wisata</span>
            </div>
          </div>
        </div>

        {/* Site Details & List (Right 4 Cols) */}
        <div className="peta-site-col lg:col-span-4 flex flex-col gap-4">
          <div className="bg-[#191612] border border-[#2a241b] rounded p-4">
            <div className="text-[12px] text-[#827867] mb-3 font-medium">
              Pilih penanda pada peta untuk melihat informasi situs budaya:
            </div>
            <div className="space-y-2">
              {sites.map((site, index) => {
                const isSelected = selectedSite === index
                return (
                  <button
                    key={index}
                    onClick={() => onSelectSite(index)}
                    className={`w-full flex items-center justify-between p-3 rounded text-[13px] text-left transition-all border cursor-pointer ${
                      isSelected
                        ? 'bg-[#2a241c] border-[#caa45e] text-[#f5f2eb] font-semibold'
                        : 'bg-[#14120f] border-[#2a241b] text-[#bfb8aa] hover:border-[#463b27]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <span className={`w-2 h-2 rounded-full shrink-0 ${isSelected ? 'bg-[#caa45e]' : 'bg-[#463b27]'}`} />
                      <span className="truncate">{site.name}</span>
                    </div>
                    <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-[#caa45e]' : 'text-[#827867]'}`} />
                  </button>
                )
              })}
            </div>
          </div>

          {/* Active Site Info Card */}
          <div className="bg-[#191612] border border-[#463b27] rounded p-5 flex flex-col justify-between">
            <div>
              <div className="text-[10px] uppercase font-bold tracking-[1.5px] text-[#caa45e]">
                {current.category}
              </div>
              <h4 className="font-serif text-lg font-bold text-[#f5f2eb] mt-1">
                {current.name}
              </h4>
              <div className="text-[11px] text-[#caa45e] font-medium mt-1">
                {current.highlight}
              </div>
              <p className="text-[13px] text-[#bfb8aa] mt-3 leading-relaxed">
                {current.desc}
              </p>
            </div>

            <button 
              onClick={() => onAskAiForSite(current.name)}
              className="btn-outline w-full mt-4 !py-2 text-[12px]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#caa45e]" />
              <span>Tanyakan Sejarah Situs ke AI</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
