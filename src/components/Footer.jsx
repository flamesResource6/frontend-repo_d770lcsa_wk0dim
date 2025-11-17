export default function Footer(){
  return (
    <footer className="bg-[#1b0b32] text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
        <div>
          <p className="text-lg font-semibold">Baba Ali</p>
          <p className="text-white/80 mt-2">Authentic African spiritual healing and love reunification services across the United States.</p>
        </div>
        <div>
          <p className="font-semibold mb-2">Contact</p>
          <ul className="space-y-1 text-white/90">
            <li>Phone/Text: <a href="tel:+13479214776" className="underline hover:text-[#D4AF37]">(347) 921-4776</a></li>
            <li>Email: <a href="mailto:contact@spellstogetmyexback.com" className="underline hover:text-[#D4AF37]">contact@spellstogetmyexback.com</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2">Legal</p>
          <p className="text-sm text-white/70">Results may vary. Services are provided for spiritual guidance and personal empowerment.</p>
        </div>
      </div>
      <div className="mt-8 text-center text-white/70 text-sm">© {new Date().getFullYear()} Baba Ali. All rights reserved.</div>
    </footer>
  )
}
