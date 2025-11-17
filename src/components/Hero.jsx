import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1b0b32]/90 via-[#1b0b32]/70 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-cream"
        >
          <h1 className="text-white font-serif tracking-wide drop-shadow-md text-4xl sm:text-5xl md:text-6xl">
            Reunite with Your Lost Love Through Authentic African Spiritual Healing
          </h1>
          <p className="mt-6 text-white/90 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            I am Baba Ali, a traditional healer with 30+ years of experience helping thousands across the United States reconnect with their soulmates. My ancestral spells work where others fail—with compassion, discretion, and proven results.
          </p>

          {/* Trust badges */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 text-sm text-white/90">
            <div className="backdrop-blur bg-white/10 rounded-md p-3 hover:bg-white/15 transition">🏆 Best African Love Spell Caster 2020 & 2022</div>
            <div className="backdrop-blur bg-white/10 rounded-md p-3 hover:bg-white/15 transition">📜 African National Healers Association Member</div>
            <div className="backdrop-blur bg-white/10 rounded-md p-3 hover:bg-white/15 transition">⭐ 30+ Years Authentic Practice</div>
            <div className="backdrop-blur bg-white/10 rounded-md p-3 hover:bg-white/15 transition">🌍 Serving All 50 States</div>
            <div className="backdrop-blur bg-white/10 rounded-md p-3 hover:bg-white/15 transition">🕊️ National Spiritual Alliance Certified</div>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#consult" className="px-6 py-3 rounded-md bg-[#D4AF37] text-[#4A148C] font-semibold shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37]">
              Get Your Free Consultation Now →
            </a>
            <a href="#how-it-works" className="px-6 py-3 rounded-md border border-white/60 text-white hover:bg-white/10">
              Discover How My Spells Work ↓
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative subtle geometry */}
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#D4AF37]/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#E07A5F]/10 blur-3xl" aria-hidden="true" />
    </section>
  )
}
