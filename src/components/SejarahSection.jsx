import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SejarahSection() {
  const sectionRef = useRef(null)

  const events = [
    {
      period: 'Abad IV Masehi',
      title: 'Kerajaan Kutai Martapura',
      desc: 'Maharaja Mulawarman mendirikan 7 prasasti tiang batu Yupa di Muara Kaman sebagai peringatan sedekah 20.000 ekor sapi kepada para Brahmana. Tonggak awal sejarah tulis di Nusantara.'
    },
    {
      period: 'Tahun 1300 Masehi',
      title: 'Awal Mula Ritual Erau',
      desc: 'Diadakan pertama kali saat upacara Tijak Tanah dan mandi ke sungai ketika Raja Aji Batara Agung Dewa Sakti berusia 5 tahun, berlanjut saat penobatannya di Kutai Lama.'
    },
    {
      period: 'Tahun 1782 Masehi',
      title: 'Pemindahan ke Tenggarong',
      desc: 'Sultan Aji Muhammad Muslihuddin (Aji Imbut) memindahkan pusat Kesultanan ke Tepian Pandan (Tenggarong). Sejak itu, Kedaton dan Sungai Mahakam menjadi pusat sakral perayaan Erau.'
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.sejarah-header',
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

      gsap.fromTo('.sejarah-card',
        { opacity: 0, y: 18 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 88%'
          },
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.08,
          ease: 'power2.out'
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="sejarah" className="optimize-render px-6 lg:px-14 py-16 border-b border-[#2a241b] bg-[#12100d]">
      <div className="sejarah-header max-w-4xl mb-10">
        <div className="text-[10px] uppercase font-bold tracking-[1.5px] text-[#caa45e]">
          AKAR PERADABAN TERTUA
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#f5f2eb] mt-1">
          Sejarah Kesultanan Kutai Kartanegara
        </h2>
        <p className="text-[15px] text-[#bfb8aa] mt-3 leading-relaxed">
          Tradisi Erau bermula sejak abad ke-13 pada masa pemerintahan Raja Kutai Kartanegara pertama, <strong className="text-[#ede8de]">Aji Batara Agung Dewa Sakti</strong> (1300 M). Perayaan ini terus dirawat hingga penggabungan trah Hindu tertua Muara Kaman (abad ke-4 Masehi) dan berdirinya Kesultanan Islam di tanah Kutai.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((evt, idx) => (
          <div key={idx} className="sejarah-card bg-[#191612] border border-[#2a241b] hover:border-[#caa45e] rounded p-6 relative transition-all duration-200 hover:-translate-y-1">
            <span className="text-[11px] font-bold text-[#caa45e] bg-[#231f18] px-2.5 py-1 rounded border border-[#463b27]">
              {evt.period}
            </span>
            <h3 className="font-serif text-xl font-bold text-[#f5f2eb] mt-4">
              {evt.title}
            </h3>
            <p className="text-[13px] text-[#bfb8aa] mt-2 leading-relaxed">
              {evt.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
