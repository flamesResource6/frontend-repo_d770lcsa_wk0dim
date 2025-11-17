import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#F7F3E9] font-sans">
      <Header />
      <main>
        <Hero />
        {/* Placeholder sections for How it works, Testimonials, FAQ, Consult */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif text-[#4A148C]">How My Spells Work</h2>
            <p className="mt-4 text-[#2C2C2C] leading-7">Every case is unique. After a free private consultation, I prepare a personalized ritual based on ancestral guidance. I work with pure intention, sacred herbs, and precise timing. You receive updates and guidance throughout the process.</p>
          </div>
        </section>

        <section id="consult" className="py-20 bg-[#1b0b32] text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif">Speak to Me Privately</h2>
            <p className="mt-3 text-white/80">Call or text 24/7. Your situation is treated with full discretion.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13479214776" className="px-6 py-3 rounded-md bg-[#D4AF37] text-[#4A148C] font-semibold">Call/Text: (347) 921-4776</a>
              <a href="mailto:contact@spellstogetmyexback.com" className="px-6 py-3 rounded-md border border-white/60">Email Me</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
