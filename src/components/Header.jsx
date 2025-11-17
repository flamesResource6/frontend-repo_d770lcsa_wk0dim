import { useState, useEffect } from 'react'
import { Phone, Menu } from 'lucide-react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`${scrolled ? 'bg-[#4A148C]/90 shadow-lg shadow-purple-900/20' : 'bg-transparent'} fixed top-0 inset-x-0 z-50 transition-colors backdrop-blur supports-[backdrop-filter]:backdrop-blur-md`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <a href="/" className="inline-flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37] rounded">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#E07A5F] ring-2 ring-white/20 flex items-center justify-center text-[#4A148C] font-accent text-xl shadow-md">
              BA
            </div>
            <div className="leading-tight">
              <p className="font-semibold text-cream-50 text-white">Baba Ali</p>
              <p className="text-xs text-white/80">Authentic Love Spells</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            <a href="#how-it-works" className="text-white/90 hover:text-white transition-colors">How It Works</a>
            <a href="/about" className="text-white/90 hover:text-white transition-colors">About</a>
            <a href="#testimonials" className="text-white/90 hover:text-white transition-colors">Testimonials</a>
            <a href="#faq" className="text-white/90 hover:text-white transition-colors">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+13479214776"
              className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              <span className="sr-only">Call or text</span>
              <span className="font-medium tracking-wide">(347) 921-4776</span>
            </a>
            <a
              href="#consult"
              className="px-4 py-2 rounded-md bg-[#D4AF37] text-[#4A148C] font-semibold shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37]"
            >
              Free Consultation
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/20 text-white"
            aria-label="Toggle menu"
            onClick={() => setOpen(v => !v)}
          >
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pt-3 pb-4 space-y-2" role="dialog" aria-label="Mobile navigation">
            <a href="#how-it-works" className="block text-white/90 hover:text-white">How It Works</a>
            <a href="/about" className="block text-white/90 hover:text-white">About</a>
            <a href="#testimonials" className="block text-white/90 hover:text-white">Testimonials</a>
            <a href="#faq" className="block text-white/90 hover:text-white">FAQ</a>
            <a href="tel:+13479214776" className="inline-flex items-center gap-2 text-[#D4AF37]">
              <Phone className="w-4 h-4" /> <span>(347) 921-4776</span>
            </a>
            <a href="#consult" className="block px-4 py-2 rounded-md bg-[#D4AF37] text-[#4A148C] font-semibold text-center">Free Consultation</a>
          </div>
        )}
      </div>
    </header>
  )
}
