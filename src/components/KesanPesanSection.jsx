import React, { useEffect, useRef } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function KesanPesanSection({
  testimonials,
  visitorName,
  setVisitorName,
  visitorRole,
  setVisitorRole,
  visitorMessage,
  setVisitorMessage,
  onSubmit
}) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.kesan-header',
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

      gsap.fromTo('.kesan-form-box',
        { opacity: 0, y: 18 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 88%'
          },
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: 'power2.out'
        }
      )

      gsap.fromTo('.kesan-item-card',
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
    <section ref={sectionRef} id="kesan-pesan" className="optimize-render px-6 lg:px-14 py-16 bg-[#0f0e0c]">
      <div className="kesan-header max-w-4xl mb-10">
        <div className="text-[10px] uppercase font-bold tracking-[1.5px] text-[#caa45e]">
          SUARA MASYARAKAT & BUDAYAWAN
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#f5f2eb] mt-1">
          Kesan & Pesan Pengunjung
        </h2>
        <p className="text-[15px] text-[#bfb8aa] mt-2 leading-relaxed">
          Catatan refleksi, kekaguman, dan doa restu para pengunjung festival, akademisi, serta pemerhati budaya dari berbagai penjuru tanah air dan mancanegara.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Form Input Pesan (Left 5 Cols) */}
        <div className="kesan-form-box lg:col-span-5 bg-[#191612] border border-[#2a241b] rounded p-6">
          <h3 className="font-serif text-lg font-bold text-[#f5f2eb] mb-1">
            Tuliskan Kesan Anda
          </h3>
          <p className="text-[12px] text-[#827867] mb-5">
            Bagikan pengalaman batin dan kesan Anda mengenai penyelenggaraan Festival Erau 2024.
          </p>

          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="text-[11px] uppercase font-semibold text-[#827867] block mb-1.5">
                Nama Lengkap
              </label>
              <input
                type="text"
                required
                value={visitorName}
                onChange={(e) => setVisitorName(e.target.value)}
                placeholder="Contoh: Raden Suryanata"
                className="w-full bg-[#0f0e0c] border border-[#2a241b] focus:border-[#caa45e] rounded px-3.5 py-2.5 text-[13px] text-[#ede8de] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="text-[11px] uppercase font-semibold text-[#827867] block mb-1.5">
                Asal Daerah / Profesi
              </label>
              <input
                type="text"
                value={visitorRole}
                onChange={(e) => setVisitorRole(e.target.value)}
                placeholder="Contoh: Wisatawan Budaya, Samarinda"
                className="w-full bg-[#0f0e0c] border border-[#2a241b] focus:border-[#caa45e] rounded px-3.5 py-2.5 text-[13px] text-[#ede8de] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="text-[11px] uppercase font-semibold text-[#827867] block mb-1.5">
                Kesan, Pesan, atau Doa
              </label>
              <textarea
                required
                rows="4"
                value={visitorMessage}
                onChange={(e) => setVisitorMessage(e.target.value)}
                placeholder="Tuliskan pengalaman atau apresiasi Anda terhadap ritual adat Erau..."
                className="w-full bg-[#0f0e0c] border border-[#2a241b] focus:border-[#caa45e] rounded px-3.5 py-2.5 text-[13px] text-[#ede8de] focus:outline-none resize-none leading-relaxed transition-colors"
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full !py-3"
            >
              <Send className="w-4 h-4" />
              <span>Kirimkan Kesan & Pesan</span>
            </button>
          </form>
        </div>

        {/* List Kesan Pesan (Right 7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          {testimonials.map(item => (
            <div
              key={item.id}
              className="kesan-item-card bg-[#191612] border border-[#2a241b] hover:border-[#463b27] rounded p-5 transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="font-serif text-base font-bold text-[#f5f2eb]">
                    {item.name}
                  </h4>
                  <div className="text-[11px] text-[#caa45e] mt-0.5">
                    {item.role}
                  </div>
                </div>
                <span className="text-[10px] uppercase tracking-[1px] font-semibold text-[#827867] bg-[#231f18] px-2 py-0.5 rounded border border-[#2a241b]">
                  {item.tag}
                </span>
              </div>

              <p className="text-[13px] text-[#bfb8aa] mt-3 leading-relaxed italic">
                "{item.message}"
              </p>

              <div className="mt-3 pt-2.5 border-t border-[#2a241b]/60 flex items-center justify-between text-[11px] text-[#827867]">
                <span>Waktu: {item.date}</span>
                <span className="flex items-center gap-1 text-[#caa45e] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Terverifikasi
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
