import React, { useState } from 'react'
import { ChevronRight, ChevronLeft, Waves, Flame, Award, Sparkles, MapPin, Compass } from 'lucide-react'

export default function EksplorasiSection({ onSelectDetail, onSelectRitualByName }) {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      id: '01',
      phase: 'FASE I • AWAL UPACARA',
      title: 'Sakralisasi Alam & Permohonan Izin Semesta',
      subtitle: 'Menjamu Benua & Merangin',
      location: 'Hulu, Tengah & Hilir Sungai Mahakam, Tenggarong',
      image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1400&q=80',
      badge: 'Ritual Pembuka',
      icon: Compass,
      quote: 'Pohon tidak berdaun tanpa akar, negeri tidak makmur tanpa restu penunggu semesta.',
      narrative: 'Sebelum tabuhan gamelan pertama berbunyi di Keraton, para pemangku adat melayarkan perahu sesaji ke tiga penjuru mata air Tenggarong: Kepala Benua, Tengah Benua, dan Buntut Benua. Ini adalah wujud kerendahan hati manusia Kutai untuk tidak congkak di muka bumi.',
      ritualsInPhase: ['Menjamu Benua', 'Merangin'],
      flowHighlights: [
        { label: '3 Titik Wilayah', desc: 'Kepala, Tengah & Buntut Benua' },
        { label: 'Pemberkatan', desc: 'Air Suci & Sesaji Keraton' },
        { label: 'Doa Leluhur', desc: 'Mantra Belian & Dewa' }
      ]
    },
    {
      id: '02',
      phase: 'FASE II • PENYUCIAN KEPEMIMPINAN',
      title: 'Ritus Rohani Pemimpin & Penyelarasan Raga',
      subtitle: 'Beluluh Sultan & Bepelas Malam',
      location: 'Kedaton Kutai Kartanegara (Ruang Ulin)',
      image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1400&q=80',
      badge: 'Sakralisasi Pemimpin',
      icon: Flame,
      quote: 'Air peramuan Dewa meluruhkan noda batin, agar titah raja senantiasa adil bagi semesta.',
      narrative: 'Di atas Balai Bambu Kuning tiga tingkat beralaskan kain kuning keramat, Sri Paduka Sultan Kutai Kartanegara menjalani ritual Beluluh. Malam harinya, ritual Bepelas digelar di mana setiap injakan kaki Sultan di atas Gong Raden Galuh disambut gelegar dentuman meriam keraton.',
      ritualsInPhase: ['Beluluh Sultan', 'Ngaturken Semah', 'Bepelas Malam'],
      flowHighlights: [
        { label: 'Balai Bambu 3 Tingkat', desc: 'Penyucian Tingkat Raga & Jiwa' },
        { label: 'Gong Raden Galuh', desc: 'Pijakan Langkah Pusaka' },
        { label: 'Dentuman Meriam', desc: 'Sesuai Jumlah Malam Erau' }
      ]
    },
    {
      id: '03',
      phase: 'FASE III • HARMONI SOSIAL & KERAKYATAN',
      title: 'Jamuan Kebersamaan Tanpa Sekat Derajat',
      subtitle: 'Tradisi Jamuan Massal Beseprah',
      location: 'Jalan Depan Keraton Mulawarman, Sepanjang 1 KM',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=80',
      badge: 'Pesta Egaliter',
      icon: Award,
      quote: 'Duduk sama rendah, makan sama rasa. Tidak ada raja yang mulia tanpa cinta rakyatnya.',
      narrative: 'Hamparan kain putih sepanjang satu kilometer digelar di jalan raya kota raja Tenggarong. Sultan, keluarga bangsawan keraton, pejabat tinggi, dan puluhan ribu rakyat jelata duduk bersila bersama menyantap aneka hidangan khas Kutai tanpa pemisah kasta maupun protokol kaku.',
      ritualsInPhase: ['Beseprah'],
      flowHighlights: [
        { label: 'Kain Putih 1 KM', desc: 'Simbol Kesucian Tanpa Kasta' },
        { label: 'Santapan Khas', desc: 'Gence Ruan & Pirik Ikan' },
        { label: 'Puluhan Ribu Warga', desc: 'Duduk Bersila Sejajar' }
      ]
    },
    {
      id: '04',
      phase: 'FASE IV • PUNCAK KOSMOLOGI & PENYUCIAN',
      title: 'Pelepasan Sepasang Naga & Tradisi Belimbur',
      subtitle: 'Mengulur Naga & Perang Air Suci Belimbur',
      location: 'Sungai Mahakam dari Tenggarong Menuju Kutai Lama',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80',
      badge: 'Puncak Kemakmuran',
      icon: Waves,
      quote: 'Naga kembali ke persemayaman air, membasuh seluruh duka lara menjadi berkah kehidupan.',
      narrative: 'Puncak sakral Festival Erau ditandai pelepasan sepasang replika Naga Erau sepanjang 16 meter yang diarak mengarungi Sungai Mahakam menuju Kutai Lama. Saat ekor naga menyentuh air di Kutai Lama, warga di Tenggarong serentak saling memercikkan air Mahakam dalam ritual Belimbur.',
      ritualsInPhase: ['Mengulur Naga', 'Belimbur'],
      flowHighlights: [
        { label: 'Sepasang Naga 16m', desc: 'Pelayaran Menuju Kutai Lama' },
        { label: 'Mayang Pinang', desc: 'Percikan Air Suci Berkah' },
        { label: 'Belimbur Bersama', desc: 'Pembersihan Noda Batiniyah' }
      ]
    }
  ]

  const current = steps[activeStep]
  const IconComp = current.icon

  return (
    <section id="eksplorasi" className="optimize-render px-6 lg:px-14 py-16 border-b border-[#2a241b] bg-[#12100d]">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="text-[10px] uppercase font-bold tracking-[2px] text-[#caa45e] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#caa45e]"></span>
            ALUR NARRATIVE VISUAL
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#f5f2eb] mt-1">
            Eksplorasi Alur Perjalanan Erau
          </h2>
          <p className="text-[14px] text-[#bfb8aa] mt-2 max-w-2xl font-light">
            Telusuri empat fase sakral liturgi Kesultanan Kutai Kartanegara, dari ritual penyucian semesta hingga jamuan rakyat dan puncak pelepasan naga ke Mahakam.
          </p>
        </div>

        {/* Phase Indicator */}
        <div className="flex items-center gap-2 text-[12px] text-[#caa45e] font-semibold bg-[#191612] px-3.5 py-1.5 rounded-full border border-[#463b27]">
          <span>Langkah {activeStep + 1} dari {steps.length}</span>
        </div>
      </div>

      {/* Step Navigation Tabs with Progress Line */}
      <div className="relative mb-8">
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#2a241b] -translate-y-1/2 z-0 hidden md:block" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 relative z-10">
          {steps.map((st, idx) => {
            const isActive = activeStep === idx
            return (
              <button
                key={st.id}
                onClick={() => setActiveStep(idx)}
                className={`p-3.5 rounded-xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#221e18] border-[#caa45e] shadow-[0_8px_20px_rgba(202,164,94,0.15)] -translate-y-1'
                    : 'bg-[#191612] border-[#2a241b] hover:border-[#463b27] opacity-80 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                    isActive ? 'bg-[#caa45e] text-[#0f0e0c]' : 'bg-[#231f18] text-[#caa45e]'
                  }`}>
                    {st.id}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#827867]">
                    {st.badge}
                  </span>
                </div>
                <div className={`font-serif text-[13px] font-semibold truncate ${
                  isActive ? 'text-[#f5f2eb]' : 'text-[#bfb8aa]'
                }`}>
                  {st.subtitle}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Visual Slide Stage (Interactive Stage with High-Impact Imagery) */}
      <div className="relative rounded-2xl overflow-hidden border border-[#463b27] bg-[#161411] shadow-2xl grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
        
        {/* Left Visual Plate with Overlay (7 Cols) */}
        <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-full overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 scale-100 hover:scale-105"
            style={{ backgroundImage: `url('${current.image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#161411] via-transparent to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#161411]/40 to-[#161411] hidden lg:block" />

          {/* Floating Location Tag */}
          <div className="absolute top-4 left-4 bg-[#14120f]/90 border border-[#463b27] px-3 py-1.5 rounded-full backdrop-blur-md flex items-center gap-2 text-[11px] text-[#caa45e] font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            <span className="truncate max-w-[280px]">{current.location}</span>
          </div>

          {/* Sacred Quote Card */}
          <div className="absolute bottom-4 left-4 right-4 bg-[#14120f]/90 border border-[#2a241b] p-3.5 rounded-xl backdrop-blur-md">
            <p className="text-[12px] text-[#ede8de] italic leading-relaxed">
              "{current.quote}"
            </p>
          </div>
        </div>

        {/* Right Information & Flow Narrative (5 Cols) */}
        <div className="lg:col-span-5 p-6 lg:p-8 flex flex-col justify-between bg-[#161411] z-10">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-bold text-[#caa45e] uppercase tracking-wider mb-2">
              <IconComp className="w-4 h-4" />
              <span>{current.phase}</span>
            </div>

            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[#f5f2eb] leading-snug">
              {current.title}
            </h3>

            <div className="text-[13px] text-[#caa45e] font-medium mt-1">
              {current.subtitle}
            </div>

            <p className="text-[13px] text-[#bfb8aa] leading-relaxed mt-4 font-light">
              {current.narrative}
            </p>

            {/* Rituals & Flow Highlights in this Phase */}
            <div className="mt-4 pt-4 border-t border-[#2a241b] space-y-3">
              <div>
                <div className="text-[10px] uppercase font-bold tracking-[1px] text-[#827867] mb-2">
                  Sorotan Alur Liturgi:
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {current.flowHighlights?.map((fl, i) => (
                    <div key={i} className="bg-[#1a1713] border border-[#2a241b] rounded p-2">
                      <div className="text-[11px] font-bold text-[#caa45e] truncate">{fl.label}</div>
                      <div className="text-[10px] text-[#827867] truncate mt-0.5">{fl.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[10px] uppercase font-bold tracking-[1px] text-[#827867] mb-1.5">
                  Prosesi Terkait:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {current.ritualsInPhase.map((rit, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => onSelectRitualByName && onSelectRitualByName(rit)}
                      className="bg-[#1f1b16] hover:bg-[#2c2419] border border-[#3b3223] hover:border-[#caa45e] px-2.5 py-1 rounded text-[11px] text-[#ede8de] hover:text-[#caa45e] transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      <span>{rit}</span>
                      <ChevronRight className="w-3 h-3 text-[#caa45e]" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Flow Stepper Buttons */}
          <div className="mt-6 pt-4 border-t border-[#2a241b] flex items-center justify-between">
            <button
              onClick={() => setActiveStep(prev => (prev === 0 ? steps.length - 1 : prev - 1))}
              className="p-2.5 rounded-lg border border-[#2a241b] bg-[#14120f] hover:border-[#caa45e] text-[#bfb8aa] hover:text-[#f5f2eb] transition-colors cursor-pointer"
              title="Fase Sebelumnya"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => onSelectDetail && onSelectDetail(current.subtitle)}
              className="btn-outline !py-2 !px-4 text-[12px]"
            >
              <span>Pelajari Ritual Fase Ini</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setActiveStep(prev => (prev === steps.length - 1 ? 0 : prev + 1))}
              className="p-2.5 rounded-lg border border-[#2a241b] bg-[#14120f] hover:border-[#caa45e] text-[#bfb8aa] hover:text-[#f5f2eb] transition-colors cursor-pointer"
              title="Fase Selanjutnya"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

    </section>
  )
}
