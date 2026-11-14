import React, { useEffect, useRef } from 'react'
import { Circle, Award, History, Sparkles } from 'lucide-react'
import gsap from 'gsap'

export default function KpiSection({ onSelectRitual, onSelectHistory, onSelectPhilosophy, onOpenAi }) {
  const containerRef = useRef(null)

  const cards = [
    {
      icon: Circle,
      stat: '13',
      title: 'Tahapan Prosesi',
      subtitle: 'RITUAL ERAU',
      action: onSelectRitual
    },
    {
      icon: Award,
      stat: 'Erau',
      title: 'Ritual Budaya',
      subtitle: 'KUTAI KARTANEGARA',
      action: onSelectPhilosophy
    },
    {
      icon: History,
      stat: 'abad IV',
      title: 'Kerajaan Tertua',
      subtitle: 'NUSANTARA',
      action: onSelectHistory
    },
    {
      icon: Sparkles,
      stat: 'AI',
      title: 'Cultural Interpretation',
      subtitle: 'KNOWLEDGE SYSTEM',
      action: onOpenAi
    }
  ]

  useEffect(() => {
    if (!containerRef.current) return
    const cardElements = containerRef.current.children
    gsap.fromTo(
      cardElements,
      { opacity: 0, y: 20, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.1, ease: 'power2.out', delay: 0.2 }
    )
  }, [])

  return (
    <section className="px-6 lg:px-14 py-8 bg-[#0f0e0c] border-b border-[#2a241b]">
      <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((kpi, idx) => {
          const Icon = kpi.icon
          return (
            <div
              key={idx}
              onClick={kpi.action}
              className="bg-[#191612] hover:bg-[#221e18] border border-[#2a241b] hover:border-[#463b27] rounded p-5 transition-all cursor-pointer group flex flex-col justify-between hover:-translate-y-1 duration-200"
            >
              <div className="flex items-center justify-between">
                <Icon className="w-4 h-4 text-[#caa45e] opacity-80 group-hover:scale-110 transition-transform" />
                <span className="text-[9px] uppercase tracking-[1px] font-semibold text-[#827867] group-hover:text-[#caa45e]">
                  {kpi.subtitle}
                </span>
              </div>
              <div className="mt-4">
                <div className="font-serif text-3xl font-bold text-[#caa45e]">
                  {kpi.stat}
                </div>
                <div className="text-[14px] font-semibold text-[#ede8de] mt-1">
                  {kpi.title}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
