export default function AboutPage(){
  return (
    <main className="bg-[#F7F3E9] text-[#2C2C2C]">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="font-serif text-4xl sm:text-5xl text-[#4A148C]">About Baba Ali</h1>
        <p className="mt-6 leading-relaxed text-lg">For over three decades, I have walked the path of my ancestors, offering healing, reconciliation, and protection. My practice combines traditional African spiritual knowledge with deep compassion for every person who seeks my help.</p>
        <div className="mt-10 grid md:grid-cols-2 gap-8 items-start">
          <img src="https://images.unsplash.com/photo-1657049017353-7603c5f1fea5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDZXJlbW9uaWFsJTIwYWx0YXIlMjB3aXRoJTIwY2FuZGxlc3xlbnwwfDB8fHwxNzYzNDA5MTY2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Ceremonial altar with candles and herbs" className="rounded-lg shadow-md" loading="lazy"/>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#2D5016]">Credentials & Recognitions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>African National Healers Association Member</li>
              <li>National Spiritual Alliance Certified</li>
              <li>Recognized as Best African Love Spell Caster (2020 & 2022)</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
