import React, { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import HeroSection from './components/HeroSection'
import KpiSection from './components/KpiSection'
import EksplorasiSection from './components/EksplorasiSection'
import SejarahSection from './components/SejarahSection'
import FilosofiSection from './components/FilosofiSection'
import WarisanSection from './components/WarisanSection'
import KegiatanSection from './components/KegiatanSection'
import PetaBudayaSection from './components/PetaBudayaSection'
import KesanPesanSection from './components/KesanPesanSection'
import Footer from './components/Footer'
import RitualModal from './components/RitualModal'
import AiAssistantDrawer from './components/AiAssistantDrawer'
import SlideIndicator from './components/SlideIndicator'

export default function App() {
  const [activeSection, setActiveSection] = useState('pengertian')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [selectedMapSite, setSelectedMapSite] = useState(0)
  const [isAiOpen, setIsAiOpen] = useState(false)
  const [selectedRitual, setSelectedRitual] = useState(null)
  const [aiInput, setAiInput] = useState('')

  const navSections = [
    { id: 'pengertian', label: 'Pengertian Erau', shortLabel: 'Pengertian' },
    { id: 'eksplorasi', label: 'Eksplorasi Alur Erau', shortLabel: 'Eksplorasi' },
    { id: 'sejarah', label: 'Sejarah Kerajaan', shortLabel: 'Sejarah' },
    { id: 'filosofi', label: 'Filosofi & Kosmologi', shortLabel: 'Filosofi' },
    { id: 'warisan', label: 'Warisan & Arsip', shortLabel: 'Warisan' },
    { id: 'kegiatan', label: '13 Prosesi Ritual', shortLabel: '13 Ritual' },
    { id: 'peta', label: 'Peta Geografi Budaya', shortLabel: 'Peta Budaya' },
    { id: 'kesan-pesan', label: 'Kesan & Pesan Pengunjung', shortLabel: 'Kesan Pesan' }
  ]
  const [aiChat, setAiChat] = useState([
    {
      role: 'assistant',
      text: 'Tabe! Saya adalah AI Cultural Assistant Kesultanan Kutai Kartanegara. Tanyakan mengenai 13 tahapan ritual Erau, kosmologi Naga Erau, sejarah Kerajaan Kutai Martapura abad ke-4, hingga makna filosofis busana dan pusaka adat.'
    }
  ])

  // Guestbook / Kesan Pesan State
  const [visitorName, setVisitorName] = useState('')
  const [visitorRole, setVisitorRole] = useState('')
  const [visitorMessage, setVisitorMessage] = useState('')
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: 'Prof. Dr. Bambang Sulistyo',
      role: 'Peneliti Sejarah Nusantara, FIB UI',
      date: '10 Oktober 2024',
      message: 'Erau adalah bukti hidup peradaban tertua di Nusantara yang masih merawat ruh kosmologinya. Integrasi digital ini memberi ruang bagi generasi muda untuk memahami makna sakral di balik setiap prosesi tanpa kehilangan keagungannya.',
      tag: 'Kajian Sejarah'
    },
    {
      id: 2,
      name: 'Dayang Kartika Putri',
      role: 'Tokoh Muda Budaya Kutai',
      date: '08 Oktober 2024',
      message: 'Momen jamuan Beseprah selalu membuat saya terharu. Duduk bersila bersama ribuan orang tanpa membedakan status sosial mengajarkan kerendahan hati yang murni. Visualisasi platform ini sangat estetis dan menghormati marwah adat.',
      tag: 'Tradisi Beseprah'
    },
    {
      id: 3,
      name: 'Julian Montgomery',
      role: 'Cultural Documentarian, Australia',
      date: '05 Oktober 2024',
      message: 'The dragon release ceremony on the Mahakam River was breathtaking. The balance between ancient Dayak and Melayu royal rituals creates an atmosphere of deep spiritual reverence unlike anywhere else.',
      tag: 'Puncak Mengulur Naga'
    }
  ])

  // Data: 13 Tahapan Ritual Erau
  const rituals = [
    {
      id: '01',
      name: 'Menjamu Benua',
      category: 'RITUAL PEMBUKA',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
      description: 'Upacara memohon izin dan keselamatan kepada para penjaga gaib di hulu, tengah, dan hilir Kota Tenggarong sebelum seluruh prosesi Erau diselenggarakan.',
      filosofi: 'Harmoni kosmologis antara manusia, alam semesta, dan entitas spiritual penjaga pertiwi.',
      lokasi: 'Tenggarong (Kepala Benua, Tengah Benua, Buntut Benua)'
    },
    {
      id: '02',
      name: 'Merangin',
      category: 'SAKRALISASI RUANG',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1609137144820-21a115fd2480?auto=format&fit=crop&w=800&q=80',
      description: 'Ritual pembersihan batiniah dan sakralisasi ruang upacara Keraton setiap malam hari selama Erau berlangsung oleh para Belian dan Dewa.',
      filosofi: 'Menjaga kesucian spiritual area keraton dari pengaruh energi negatif duniawi.',
      lokasi: 'Serambi Keraton Kutai Kartanegara'
    },
    {
      id: '03',
      name: 'Beluluh Sultan',
      category: 'PENYUCIAN DIRI',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
      description: 'Upacara pembersihan diri jasmani dan rohani Sultan Kutai Kartanegara di atas Balai Bambu Kuning bertingkat tiga beralaskan kain kuning keramat.',
      filosofi: 'Penyucian jiwa pemimpin agar senantiasa jernih, adil, dan diberkati dalam mengayomi rakyatnya.',
      lokasi: 'Kedaton Kutai Kartanegara'
    },
    {
      id: '04',
      name: 'Ngaturken Semah',
      category: 'PENGHORMATAN LELUHUR',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
      description: 'Penyerahan sesaji persembahan agung kepada arwah para leluhur raja-raja Kutai Martapura dan Kutai Kartanegara.',
      filosofi: 'Rasa syukur dan takzim kepada pendahulu yang mendirikan peradaban tertua di Nusantara.',
      lokasi: 'Makam Raja-Raja Kutai Kartanegara'
    },
    {
      id: '05',
      name: 'Bepelas Malam',
      category: 'RITUAL INTI MALAM',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80',
      description: 'Ritual sakral setiap malam di mana Sultan menginjak pusaka Gong Raden Galuh diiringi dentuman meriam keraton sesuai hitungan malam Erau.',
      filosofi: 'Pengikatan spiritual ikatan suci antara raja, bumi, dan alam gaib demi ketenteraman kerajaan.',
      lokasi: 'Ruang Ulin Keraton Kesultanan'
    },
    {
      id: '06',
      name: 'Beseprah',
      category: 'KESETARAAN & SOSIAL',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
      description: 'Jamuan makan massal di mana Sultan, kerabat keraton, pejabat, dan puluhan ribu rakyat jelata duduk bersila bersama di atas hamparan kain putih sepanjang satu kilometer.',
      filosofi: 'Penghapusan sekat derajat sosial; lambang kebersamaan, persaudaraan tanpa kasta, dan kerendahan hati seorang pemimpin.',
      lokasi: 'Jalan Depan Keraton Mulawarman, Tenggarong'
    },
    {
      id: '07',
      name: 'Mengulur Naga',
      category: 'PUNCAK RITUAL',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      description: 'Arak-arakan replika sepasang Naga Erau sepanjang 16 meter menyusuri Sungai Mahakam menuju Kutai Lama (asal mula kemunculan Putri Karang Melenu).',
      filosofi: 'Kosmologi air dan naga sebagai simbol kemakmuran, asal-usul trah kesultanan, dan kesejahteraan hidup.',
      lokasi: 'Sungai Mahakam dari Tenggarong ke Kutai Lama'
    },
    {
      id: '08',
      name: 'Belimbur',
      category: 'PENYUCIAN AKHIR',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&w=800&q=80',
      description: 'Seluruh warga saling memercikkan air Sungai Mahakam yang telah disucikan menggunakan mayang pinang setelah naga tiba di Kutai Lama.',
      filosofi: 'Membersihkan diri dari sifat tercela, hawa nafsu buruk, dan menyongsong lembaran hidup yang berkah.',
      lokasi: 'Sepanjang Tepian Sungai Mahakam, Tenggarong'
    }
  ]

  // Data: Sites for Peta Budaya
  const sites = [
    {
      name: 'Keraton Kutai Kartanegara',
      category: 'Keraton / Museum',
      color: '#caa45e',
      coords: { x: '42%', y: '58%' },
      desc: 'Pusat pemerintahan Kesultanan Kutai Kartanegara Ing Martadipura. Bangunan megah bersejarah tempat dilangsungkannya ritual sakral Bepelas, Beluluh, dan Merangin.',
      highlight: 'Takhta Sultan & Ruang Sakral Ulin Bepelas'
    },
    {
      name: 'Museum Mulawarman',
      category: 'Keraton / Museum',
      color: '#caa45e',
      coords: { x: '52%', y: '48%' },
      desc: 'Bekas istana kesultanan yang kini menyimpan prasasti tiang batu Yupa abad ke-4, singgasana berbalut emas murni, dan meriam kuno peninggalan kerajaan.',
      highlight: 'Prasasti Yupa Abad IV & Singgasana Emas'
    },
    {
      name: 'Sungai Mahakam',
      category: 'Lokasi Ritual',
      color: '#caa45e',
      coords: { x: '60%', y: '55%' },
      desc: 'Nadi kosmologis Kalimantan Timur. Jalur pelayaran ritual Mengulur Naga menuju Kutai Lama serta arena penyucian massal tradisi Belimbur.',
      highlight: 'Arena Mengulur Naga & Tradisi Belimbur'
    },
    {
      name: 'Alun-Alun Tenggarong',
      category: 'Destinasi Wisata',
      color: '#caa45e',
      coords: { x: '38%', y: '68%' },
      desc: 'Pusat pesta rakyat di depan Kedaton. Lokasi panggung pagelaran seni tari adat Kutai, Dayak, serta pertunjukan budaya mancanegara.',
      highlight: 'Pentas Seni Budaya & Pasar Rakyat'
    },
    {
      name: 'Pulau Kumala',
      category: 'Destinasi Wisata',
      color: '#caa45e',
      coords: { x: '65%', y: '42%' },
      desc: 'Pulau delta seluas 73 hektar di tengah Sungai Mahakam yang mengabadikan patung Lembuswana, satwa mitologi lambang Kesultanan Kutai Kartanegara.',
      highlight: 'Monumen Sakral Satwa Lembuswana'
    },
    {
      name: 'Makam Raja-Raja Kutai',
      category: 'Situs Sejarah',
      color: '#caa45e',
      coords: { x: '72%', y: '36%' },
      desc: 'Kompleks peristirahatan sakral Sultan Aji Muhammad Muslihuddin (Aji Imbut), pendiri kota Tenggarong, beserta para penerus dan kerabat kesultanan.',
      highlight: 'Ziarah Makam Leluhur & Doa Selamat'
    }
  ]

  // Smooth scroll handler
  const scrollTo = (id) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // ScrollSpy & Scroll Progress Synchronization
  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight
          if (totalHeight > 0) {
            setScrollProgress((window.scrollY / totalHeight) * 100)
          }

          const scrollPosition = window.scrollY + 220
          let currentSection = navSections[0].id

          for (const sec of navSections) {
            const el = document.getElementById(sec.id)
            if (el) {
              const top = el.offsetTop
              if (scrollPosition >= top) {
                currentSection = sec.id
              }
            }
          }
          setActiveSection(currentSection)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle AI question submit
  const handleSendAi = (e) => {
    e?.preventDefault()
    if (!aiInput.trim()) return

    const userMsg = aiInput
    setAiInput('')
    setAiChat(prev => [...prev, { role: 'user', text: userMsg }])

    setTimeout(() => {
      let response = "Pertanyaan yang sangat bernilai. Dalam falsafah Kesultanan Kutai Kartanegara Ing Martadipura, ritual Erau berakar dari kata 'Eroh' yang berarti keramaian, sukacita, dan ungkapan syukur semesta. Seluruh 13 tahapan prosesi melambangkan keselarasan antara mikrokosmos (batin manusia), makrokosmos (alam semesta), dan Sang Pencipta."
      if (userMsg.toLowerCase().includes('naga') || userMsg.toLowerCase().includes('mengulur')) {
        response = "Prosesi Mengulur Naga melambangkan asal usul Putri Karang Melenu yang muncul dari buih Sungai Mahakam bersama sang naga. Pelepasan sepasang naga sepanjang 16 meter ke Kutai Lama merupakan restu penyuburan tanah dan air bagi seluruh masyarakat Kalimantan Timur."
      } else if (userMsg.toLowerCase().includes('beseprah')) {
        response = "Beseprah adalah jamuan makan duduk bersila di atas hamparan kain putih sepanjang satu kilometer. Di sini, Sultan dan seluruh rakyat bersanding tanpa sekat hierarki. Makna filosofisnya adalah egaliter, penghormatan antarsesama manusia, dan komitmen pemimpin untuk selalu mendengar rakyatnya."
      } else if (userMsg.toLowerCase().includes('beluluh')) {
        response = "Beluluh berasal dari kata 'luluk' atau membersihkan diri. Sultan menaiki Balai Bambu Kuning tiga tingkat beralaskan kain kuning, kemudian diperciki air sakral peramuan para Dewa. Ini adalah sakralisasi raga dan batin pemimpin agar dijauhkan dari marabahaya."
      }
      setAiChat(prev => [...prev, { role: 'assistant', text: response }])
    }, 500)
  }

  // Handle guestbook submit
  const handleAddTestimonial = (e) => {
    e.preventDefault()
    if (!visitorName.trim() || !visitorMessage.trim()) return

    const newEntry = {
      id: Date.now(),
      name: visitorName,
      role: visitorRole || 'Pengunjung Festival',
      date: 'Baru saja',
      message: visitorMessage,
      tag: 'Kesan Pengunjung'
    }

    setTestimonials([newEntry, ...testimonials])
    setVisitorName('')
    setVisitorRole('')
    setVisitorMessage('')
  }

  return (
    <div className="min-h-screen bg-[#0f0e0c] text-[#bfb8aa] flex flex-col lg:flex-row relative selection:bg-[#caa45e] selection:text-[#0f0e0c]">
      
      {/* 1. LEFT STICKY SIDEBAR (260px Fixed) */}
      <Sidebar 
        activeSection={activeSection}
        scrollTo={scrollTo}
        onOpenAi={() => setIsAiOpen(true)}
      />

      {/* 2. MAIN SCROLLING PAGE */}
      <main className="flex-1 min-w-0 flex flex-col relative overflow-x-hidden">
        
        {/* SECTION 1: PENGERTIAN & HERO */}
        <HeroSection 
          onExplore={() => scrollTo('eksplorasi')}
          onOpenAi={() => setIsAiOpen(true)}
        />

        {/* 4 KPI SUMMARY CARDS */}
        <KpiSection 
          onSelectRitual={() => scrollTo('kegiatan')}
          onSelectPhilosophy={() => scrollTo('filosofi')}
          onSelectHistory={() => scrollTo('sejarah')}
          onOpenAi={() => setIsAiOpen(true)}
        />

        {/* SECTION 2: EKSPLORASI ALUR ERAU */}
        <EksplorasiSection 
          onSelectDetail={(subtitle) => scrollTo('kegiatan')}
          onSelectRitualByName={(ritualName) => {
            const found = rituals.find(r => r.name.toLowerCase().includes(ritualName.toLowerCase()))
            if (found) {
              setSelectedRitual(found)
            } else {
              scrollTo('kegiatan')
            }
          }}
        />

        {/* SECTION 3: SEJARAH */}
        <SejarahSection />

        {/* SECTION 4: FILOSOFI */}
        <FilosofiSection />

        {/* SECTION 5: WARISAN & ARSIP */}
        <WarisanSection />

        {/* SECTION 6: KEGIATAN & 13 PROSESI RITUAL */}
        <KegiatanSection 
          rituals={rituals}
          onSelectRitual={(ritual) => setSelectedRitual(ritual)}
        />

        {/* SECTION 7: PETA BUDAYA */}
        <PetaBudayaSection 
          sites={sites}
          selectedSite={selectedMapSite}
          onSelectSite={(index) => setSelectedMapSite(index)}
          onAskAiForSite={(siteName) => {
            setAiInput(`Jelaskan sejarah dan ritual Erau yang berlangsung di ${siteName}`)
            setIsAiOpen(true)
          }}
        />

        {/* SECTION 8: KESAN & PESAN PENGUNJUNG */}
        <KesanPesanSection 
          testimonials={testimonials}
          visitorName={visitorName}
          setVisitorName={setVisitorName}
          visitorRole={visitorRole}
          setVisitorRole={setVisitorRole}
          visitorMessage={visitorMessage}
          setVisitorMessage={setVisitorMessage}
          onSubmit={handleAddTestimonial}
        />

        {/* FOOTER */}
        <Footer />

      </main>

      {/* 3. FLOATING SLIDE HUD (Inspirasi landonorris.com) */}
      <SlideIndicator 
        sections={navSections}
        activeSection={activeSection}
        scrollTo={scrollTo}
        scrollProgress={scrollProgress}
      />

      {/* 3. MODAL: RITUAL DETAIL */}
      <RitualModal 
        ritual={selectedRitual}
        onClose={() => setSelectedRitual(null)}
        onAskAi={(ritualName) => {
          setAiInput(`Jelaskan lebih dalam makna dan tahapan ritual ${ritualName} di Kesultanan Kutai Kartanegara`)
          setSelectedRitual(null)
          setIsAiOpen(true)
        }}
      />

      {/* 4. DRAWER: AI CULTURAL ASSISTANT */}
      <AiAssistantDrawer 
        isOpen={isAiOpen}
        onClose={() => setIsAiOpen(false)}
        chatHistory={aiChat}
        input={aiInput}
        setInput={setAiInput}
        onSubmit={handleSendAi}
      />

    </div>
  )
}
