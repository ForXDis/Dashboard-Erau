import React, { useEffect, useRef } from 'react'
import { ChevronRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function KegiatanSection({ rituals, onSelectRitual }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.kegiatan-header',
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

      gsap.fromTo('.kegiatan-card',
        { opacity: 0, y: 18 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 88%'
          },
          opacity: 1,
          y: 0,
          duration: 0.35,
          stagger: 0.04,
          ease: 'power2.out'
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="kegiatan" className="optimize-render px-6 lg:px-14 py-16 border-b border-[#2a241b] bg-[#0f0e0c]">
      <div className="kegiatan-header flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="text-[10px] uppercase font-bold tracking-[1.5px] text-[#caa45e]">
            TAHAPAN LITURGI SAKRAL
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#f5f2eb] mt-1">
            Kegiatan & 13 Prosesi Ritual Erau
          </h2>
          <p className="text-[14px] text-[#bfb8aa] mt-2 max-w-2xl font-light">
            Setiap tahapan prosesi memiliki tata urutan pakem adat yang wajib dipatuhi dengan kesucian niat, diiringi instrumen Gamelan Kutai dan tarian sakral para Dewa dan Belian.
          </p>
        </div>
        <div className="text-[12px] text-[#caa45e] font-semibold flex items-center gap-1">
          <span>Klik kartu untuk telaah filosofi mendalam</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {rituals.map(ritual => (
          <div
            key={ritual.id}
            onClick={() => onSelectRitual(ritual)}
            className="kegiatan-card bg-[#191612] border border-[#2a241b] hover:border-[#caa45e] rounded overflow-hidden cursor-pointer group transition-all duration-200 flex flex-col justify-between hover:-translate-y-1"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#161411]">
              <img
                src={ritual.image}
                alt={ritual.name}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#191612] via-transparent to-black/40" />
              <div className="absolute top-2.5 left-2.5 bg-[#231f18]/90 border border-[#463b27] px-2 py-0.5 rounded text-[11px] font-bold text-[#caa45e]">
                {ritual.id}
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[1px] font-semibold text-[#caa45e]">
                  {ritual.category}
                </div>
                <h4 className="font-serif text-base font-bold text-[#f5f2eb] mt-1 group-hover:text-[#caa45e] transition-colors truncate">
                  {ritual.name}
                </h4>
                <p className="text-[12px] text-[#bfb8aa] line-clamp-2 mt-1 leading-relaxed">
                  {ritual.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#2a241b] text-[11px] text-[#caa45e] font-medium flex items-center justify-between">
                <span>Lihat Makna Adat</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
