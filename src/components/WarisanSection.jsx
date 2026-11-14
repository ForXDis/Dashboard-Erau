import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function WarisanSection() {
  const [activeTab, setActiveTab] = useState('Foto')
  const sectionRef = useRef(null)

  const items = [
    {
      title: 'Prosesi Beluluh Sultan',
      category: 'FOTO • BELULUH',
      year: '2023',
      source: 'Dinas Kebudayaan Kukar',
      type: 'Foto',
      image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=70'
    },
    {
      title: 'Pelepasan Burung Sakral',
      category: 'FOTO • MELEPAS BURUNG',
      year: '2022',
      source: 'Dokumentasi Lapangan',
      type: 'Foto',
      image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=70'
    },
    {
      title: 'Gadis Penari Adat Kutai',
      category: 'FOTO • NANDONG',
      year: '2023',
      source: 'Arsip Kesultanan',
      type: 'Foto',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=70'
    },
    {
      title: 'Penari Topeng Kutai',
      category: 'FOTO • BELIAN',
      year: '2022',
      source: 'Dokumentasi Lapangan',
      type: 'Foto',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=70'
    },
    {
      title: 'Prasasti Yupa Muara Kaman',
      category: 'NASKAH • EPIGRAFI',
      year: 'Abad IV',
      source: 'Museum Mulawarman',
      type: 'Naskah',
      image: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=600&q=70'
    },
    {
      title: 'Lambang Sakral Lembuswana',
      category: 'SIMBOL BUDAYA • MITOLOGI',
      year: 'Abad XIII',
      source: 'Pustaka Keraton',
      type: 'Simbol Budaya',
      image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=70'
    },
    {
      title: 'Sultan Aji Muhammad Sulaiman',
      category: 'TOKOH • RAJA KUTAI',
      year: '1850-1899',
      source: 'Arsip Nasional RI',
      type: 'Tokoh',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=70'
    },
    {
      title: 'Babad Kutai Kartanegara',
      category: 'SEJARAH • KRONIK',
      year: '1605',
      source: 'Naskah Kuno Keraton',
      type: 'Sejarah',
      image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=70'
    }
  ]

  const filtered = activeTab === 'Foto'
    ? items.filter(i => i.type === 'Foto')
    : items.filter(i => i.type === activeTab || activeTab === 'Foto')

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.warisan-card',
        { opacity: 0, y: 16 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 92%'
          },
          opacity: 1,
          y: 0,
          duration: 0.35,
          stagger: 0.05,
          ease: 'power2.out'
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [activeTab])

  return (
    <section ref={sectionRef} id="warisan" className="optimize-render px-6 lg:px-14 py-16 border-b border-[#2a241b] bg-[#12100d]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="text-[10px] uppercase font-bold tracking-[1.5px] text-[#caa45e]">
            ARSIP DIGITAL KESULTANAN
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#f5f2eb] mt-1">
            Warisan Budaya & Dokumentasi
          </h2>
          <p className="text-[14px] text-[#bfb8aa] mt-1">
            Koleksi dokumentasi digital warisan budaya Erau Kutai Kartanegara.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {['Foto', 'Naskah', 'Simbol Budaya', 'Tokoh', 'Sejarah', 'Referensi'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-1.5 rounded text-[12px] font-medium transition-all border cursor-pointer ${
                activeTab === tab
                  ? 'bg-[#2a241c] border-[#caa45e] text-[#caa45e]'
                  : 'bg-[#191612] border-[#2a241b] text-[#827867] hover:border-[#463b27] hover:text-[#ede8de]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* 4-Columns Media Matrix */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filtered.map((item, idx) => (
          <div
            key={idx}
            className="warisan-card bg-[#191612] border border-[#2a241b] hover:border-[#caa45e] rounded overflow-hidden group cursor-pointer transition-all duration-200 hover:-translate-y-1"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#161411]">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#191612] via-transparent to-transparent opacity-90" />
              <div className="absolute top-2.5 right-2.5 bg-[#231f18]/90 border border-[#463b27] px-2 py-0.5 rounded text-[10px] font-semibold text-[#caa45e]">
                {item.year}
              </div>
            </div>
            <div className="p-4">
              <div className="text-[10px] uppercase font-bold tracking-[1px] text-[#caa45e]">
                {item.category}
              </div>
              <h4 className="font-serif text-base font-bold text-[#f5f2eb] mt-1 group-hover:text-[#caa45e] transition-colors truncate">
                {item.title}
              </h4>
              <div className="text-[11px] text-[#827867] mt-2">
                {item.source}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
