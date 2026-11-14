import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function FilosofiSection() {
  const sectionRef = useRef(null)

  const pillars = [
    {
      num: 'I',
      title: 'Penyucian & Kepemimpinan Bersih',
      desc: 'Melalui ritual Beluluh dan Bepelas, pemimpin adat menyucikan diri lahir dan batin, memohon petunjuk agar senantiasa adil, welas asih, dan dijauhkan dari marabahaya dalam mengayomi rakyat.'
    },
    {
      num: 'II',
      title: 'Kesetaraan Sosial Tanpa Kasta',
      desc: 'Diwujudkan dalam tradisi makan massal Beseprah. Sultan, bangsawan keraton, pemangku adat, dan puluhan ribu rakyat jelata duduk bersila setara di tanah beralaskan kain putih panjang.'
    },
    {
      num: 'III',
      title: 'Rasa Syukur Pada Air & Bumi',
      desc: 'Pelepasan sepasang Naga Erau dan tradisi saling memercikkan air Belimbur mengagungkan Sungai Mahakam sebagai sumber rezeki dan nadi kehidupan yang wajib dirawat kelestariannya.'
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.filosofi-header',
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

      gsap.fromTo('.filosofi-card',
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
    <section ref={sectionRef} id="filosofi" className="optimize-render px-6 lg:px-14 py-16 border-b border-[#2a241b] bg-[#0f0e0c]">
      <div className="filosofi-header max-w-4xl mb-10">
        <div className="text-[10px] uppercase font-bold tracking-[1.5px] text-[#caa45e]">
          MAKNA SPIRITUAL & MORAL
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#f5f2eb] mt-1">
          Filosofi Keselarasan Semesta
        </h2>
        <p className="text-[15px] text-[#bfb8aa] mt-3 leading-relaxed">
          Erau bukan sekadar pesta kemeriahan, melainkan ritus penyucian rohani bersama. Pandangan hidup Kutai memandang keselarasan antara mikrokosmos (batin manusia), makrokosmos (alam semesta), dan kekuatan transendental Sang Pencipta.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {pillars.map((p, idx) => (
          <div key={idx} className="filosofi-card bg-[#191612] border border-[#2a241b] hover:border-[#caa45e] rounded p-6 transition-all duration-200 hover:-translate-y-1">
            <div className="w-10 h-10 rounded bg-[#231f18] border border-[#463b27] flex items-center justify-center text-[#caa45e] font-serif font-bold text-lg mb-4">
              {p.num}
            </div>
            <h3 className="font-serif text-lg font-bold text-[#ede8de]">
              {p.title}
            </h3>
            <p className="text-[13px] text-[#bfb8aa] mt-2 leading-relaxed">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
