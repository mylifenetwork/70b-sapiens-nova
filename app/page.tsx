import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';

export const metadata: Metadata = {
  title: 'Sapiens Nova Academy - Embrace Your Future: Innovate, Heal, Inspire',
};

const testimonials = [
  { quote: "The 15-week venture building programme at Chulalongkorn University was transformative. I learned AI coding, built a robotic arm, and pitched my startup idea to real investors. This experience solidified my path towards entrepreneurship.", name: "Alex Chen", role: "BAScii Student", bg: "bg-program-coral", textColor: "text-black", dividerColor: "bg-black" },
  { quote: "Attending the HKU Summer Institute boot camp was incredible. The hands-on robotics sessions and mentorship from venture capitalists gave me insights I couldn't get anywhere else. Highly recommend for anyone interested in tech ventures!", name: "Emma Rodriguez", role: "Year 12 Student", bg: "bg-white", textColor: "text-black", dividerColor: "bg-black" },
  { quote: "The Tech Boot Camp at Imperial College London exceeded all expectations. Working with industry experts and learning about AI applications in real-world scenarios was invaluable. This programme gave me the confidence to pursue computer science at university.", name: "James Thompson", role: "Year 11 Student", bg: "bg-program-linen", textColor: "text-black", dividerColor: "bg-black" },
  { quote: "The Future by Design psychology programme helped me understand myself better through MBTI assessments and personal development coaching. The Cambridge psychologist leading the sessions provided incredible guidance for my academic and career planning.", name: "Sarah Patel", role: "Year 10 Student", bg: "bg-program-azure", textColor: "text-white", dividerColor: "bg-white" },
  { quote: "Participating in the Nextg3n Web3 Hackathon in Riyadh was a game-changer. Meeting students from 16 different countries and working on cutting-edge blockchain projects opened my eyes to global opportunities in technology and innovation.", name: "Mohammed Al-Fahad", role: "University Student", bg: "bg-program-stromboli", textColor: "text-white", dividerColor: "bg-white" },
];

const programmes = [
  {
    title: "Venture Building and Innovation",
    description: "The Venture Building & Innovation Programme is an immersive, international entrepreneurship experience designed for ambitious students who want to turn ideas into real-world tech ventures. Through intensive boot camps, hackathons, and innovation workshops in Hong Kong, Japan, Thailand, Shenzhen, Saudi Arabia, and the UK, students gain hands-on experience building and pitching technology-driven solutions in global innovation hubs.",
    image: "/images/chula-venture-04.BjokNZOQ_2hTdub.webp",
    bg: "bg-[var(--bg-linen)]",
    textColor: "text-black",
    tagBg: "bg-program-cornfield text-white",
  },
  {
    title: "Well-Being",
    description: "The Well-Being & Personal Development Programme is designed to support young adults and professionals in developing emotional resilience, clarity of purpose, and sustainable success habits. Led by a Cambridge-trained Educational Psychologist (PhD), the programme blends research-backed psychology with practical tools that participants can apply immediately in school, university, and professional life.",
    image: "/images/chula-venture-01.wqMaRW51_Zq3qWb.webp",
    bg: "bg-[var(--brand-azure)]",
    textColor: "text-white",
    tagBg: "bg-program-cornfield text-white",
  },
  {
    title: "Art and Culture",
    description: "The Art & Culture Programme offers students an immersive creative experience combining music performance, professional coaching, and Japanese animation workshops in an inspiring international setting. Hosted at a world-class theatre on Awaji Island, Japan, this programme allows students to train, create, and perform in a professional artistic environment while exploring one of the most influential creative cultures in the world.",
    image: "/images/tech-ai-workshop-bisp-campus-drone.Cd420VEo_2br701.webp",
    bg: "bg-[var(--brand-stromboli)]",
    textColor: "text-white",
    tagBg: "bg-program-cornfield text-white",
  },
  {
    title: "SNA Institute",
    description: "SNA Institute is established to nurture the growth and long-term development of ambitious young talents, with a focused specialisation in technology, innovation, and venture building. Through structured mentorship and customised Research & Development (R&D) programmes, the Institute equips students with the academic depth, innovation mindset, and real-world experience needed to stand out in competitive university admissions and future careers.",
    image: "/images/advanced-research.webp",
    bg: "bg-[var(--brand-coral)]",
    textColor: "text-white",
    tagBg: "bg-program-cornfield text-white",
  },
];

const founders = [
  {
    id: "benny-lo",
    name: "Ir Professor Benny Lo",
    role: "co-Founder",
    image: "/images/benny_ai.DTSH09PR_2Wpjt.webp",
    bg: "bg-[var(--bg-linen)]",
    textColor: "text-black",
    bullets: [
      "co-Founder, AiVanse Technology Ltd",
      "Chief Scientific Officer, Precision Robotics Research Institute",
      "Visiting Reader, Imperial College London",
      "Adjunct Professor, Chulalongkorn University",
      "Former Reader, Hamlyn Centre for Robotic Surgery, Imperial College London",
      "Vice Chairman, HK Medical and Healthcare Foundation",
      "PhD in Computing - Imperial College London",
    ],
    linkedin: "https://www.linkedin.com/in/benny-lo-290599/?originalSubdomain=hk",
    scholar: "https://scholar.google.com/citations?user=zRd3g5cAAAAJ&hl=en",
  },
  {
    id: "sammi-wong",
    name: "Professor Sammi Wong",
    role: "co-Founder",
    image: "/images/Sammi Wong.VYMBg5yX_2g0o7C.webp",
    bg: "bg-[var(--brand-azure)]",
    textColor: "text-white",
    bullets: [
      "Founding Partner of venture studio, Turbulentos Ventures",
      "Former Founding Leader, US$120M HKSTP Ventures",
      "Adjunct Professor, Chulalongkorn University",
      "Council Member, Asian Fund for Cancer Research",
      "Chief Advisor, HK Startup Council (FHKI)",
      "Senior Advisor, w3 ff Venture Builder (web3 venture studio in Saudi Arabia)",
    ],
    linkedin: "https://www.linkedin.com/in/sammi-wong-04948a5/",
  },
  {
    id: "rina-lai",
    name: "Dr Rina Lai",
    role: "Education & Psychology Advisor",
    image: "/images/Rina Lai.CW77GIV5_zi2uW.webp",
    bg: "bg-[var(--brand-coral)]",
    textColor: "text-white",
    bullets: [
      "Founder, SynergisED (Research and Innovation Lab)",
      "Community Representative, Kennedy School Council, ESF Hong Kong",
      "Associate, Faculty of Psychology, Cambridge University",
      "Fellow, Royal Society of Arts",
      "Ph.D. in Education and Psychology, Cambridge University",
    ],
    linkedin: "https://www.linkedin.com/in/rina-lai/?originalSubdomain=hk",
  },
];

function FindOutMoreButton({ programmeName }: { programmeName: string }) {
  const subject = encodeURIComponent(`Enquiry: SNA ${programmeName} programme`);
  return (
    <a href={`mailto:info@sapiens-nova.com?subject=${subject}`} className="inline-flex items-center justify-center gap-3 mt-6 rounded-full h-10 px-6 text-sm font-medium transition-all cursor-pointer bg-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/90 text-white">
      Find out more
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0">
        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
      </svg>
    </a>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Who We Are */}
      <section id="who-we-are" className="w-full py-24 md:py-32 bg-[var(--bg-linen)]">
        <div className="container-large px-6 max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block bg-[var(--brand-primary)] px-4 py-1 rounded-full">
            <p className="text-base md:text-lg font-normal text-white uppercase tracking-wide font-sans">Who We Are</p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-normal text-black leading-[1.1] font-serif">
            Empowering Future Leaders Through Innovation
          </h2>
          <p className="text-lg md:text-xl text-black leading-relaxed font-normal font-sans max-w-3xl mx-auto">
            Sapiens Nova Academy Limited is a dynamic and innovative educational institution dedicated to developing tailored, interactive insights in technology, innovation, venture investment and entrepreneurship. Our vision is to prepare young adults for future careers as venture capitalists, entrepreneurs, and technology professionals through transformative education that unlocks each student&apos;s potential.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="w-full bg-white py-24">
        <div className="max-w-7xl w-full mx-auto py-10 px-6">
          <div className="bg-program-cornfield px-4 py-1 rounded-full inline-block mb-4">
            <span className="text-white text-lg md:text-xl font-normal leading-tight">Our Programmes</span>
          </div>
          <h2 className="text-4xl md:text-[2.75rem] md:leading-[1.2] font-semibold tracking-[-0.03em] sm:max-w-xl text-pretty font-serif">
            Comprehensive Programmes for Future Leaders
          </h2>
          <p className="mt-2 text-muted-foreground text-lg sm:text-xl">
            Explore our innovative programs designed to equip young adults for future careers in technology, entrepreneurship, and venture investment. In addition, we prioritize well-being by integrating art and culture into our curriculum.
          </p>

          {/* Currently Available Programmes */}
          <div className="mt-8 md:mt-12 mb-12">
            <div className="bg-[var(--brand-primary)] px-4 py-1 rounded-full inline-block mb-4">
              <span className="text-white text-lg md:text-xl font-normal leading-tight">Currently Available</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] font-serif mb-4">Currently Available Programmes</h2>
            <p className="text-muted-foreground text-lg mb-8">Enroll now in our flagship summer programmes designed for future innovators and leaders.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Imperial */}
              <div className="rounded-xl p-6 pb-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl bg-[var(--brand-stromboli)] text-white">
                <div className="mb-6 overflow-hidden rounded-lg">
                  <Image src="/images/imperial-motor-sport1.BHIDzqxG.jpg" alt="Imperial College London Motorsport Engineering Summer School" width={600} height={192} className="w-full h-48 object-cover" />
                </div>
                <span className="uppercase font-medium text-sm px-3 py-1 rounded-full inline-block mb-3 bg-[var(--brand-coral-light)] text-black">Imperial College London, South Kensington campus, London, UK</span>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] font-serif mb-3">Imperial College London Motorsport Engineering Summer School</h3>
                <div className="mb-4 rounded-lg overflow-hidden shadow-sm">
                  <div className="bg-white/20 backdrop-blur-sm px-4 py-2.5 border-l-4 border-white">
                    <p className="text-sm font-bold text-white leading-snug">⭐⭐⭐ Official Programme by Imperial College London (Exclusively offered to Sapiens Nova Academy)</p>
                  </div>
                </div>
                <p className="text-base mb-6 text-white/90">A practical introduction to how engineers generate, modify, and use power in context of motorsport engineering</p>
                <div className="flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center">
                  <a href="mailto:info@sapiens-nova.com?subject=Enquiry: Imperial Motorsport" className="inline-flex items-center justify-center text-sm font-medium rounded-full gap-2 border border-white text-black bg-white hover:bg-white hover:text-black px-4 py-2">Learn More</a>
                  <Link href="/checkout" className="inline-flex items-center justify-center text-sm font-medium rounded-full gap-3 bg-[var(--brand-coral-light)] hover:bg-[var(--brand-coral-light)]/90 text-black px-4 py-2">
                    Enroll Now
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>

              {/* Human+Tech */}
              <div className="rounded-xl p-6 pb-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl bg-[var(--brand-azure)] text-white">
                <div className="mb-6 overflow-hidden rounded-lg">
                  <Image src="/images/human_tech1.BiYtWcrZ.jpg" alt="Human+Tech Futures Summer Camp" width={600} height={192} className="w-full h-48 object-cover" />
                </div>
                <span className="uppercase font-medium text-sm px-3 py-1 rounded-full inline-block mb-3 bg-[var(--brand-coral-light)] text-black">Awaji Island, Japan</span>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] font-serif mb-3">Human+Tech Futures Summer Camp</h3>
                <p className="text-base mb-6 text-white/90">Discover how technology can support healthy living. Participants explore AI, sensing and robotics technologies to create prototypes that enhance physical and emotional well-being.</p>
                <div className="flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center">
                  <a href="mailto:info@sapiens-nova.com?subject=Enquiry: Human+Tech Summer Camp" className="inline-flex items-center justify-center text-sm font-medium rounded-full gap-2 border border-white text-black bg-white hover:bg-white hover:text-black px-4 py-2">Learn More</a>
                  <Link href="/checkout" className="inline-flex items-center justify-center text-sm font-medium rounded-full gap-3 bg-[var(--brand-coral-light)] hover:bg-[var(--brand-coral-light)]/90 text-black px-4 py-2">
                    Enroll Now
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Other Programmes */}
          <div className="mt-16">
            <div className="bg-[var(--brand-primary)] px-4 py-1 rounded-full inline-block mb-4">
              <span className="text-white text-lg md:text-xl font-normal leading-tight">Other Programmes</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] font-serif mb-4">Comprehensive Programme Portfolio</h2>
            <p className="text-muted-foreground text-lg mb-8">Explore our full range of innovative programs designed to equip young adults for future careers in technology, entrepreneurship, and venture investment.</p>
          </div>

          <div className="mt-8 md:mt-16 w-full mx-auto space-y-20">
            {programmes.map((prog, i) => (
              <div key={prog.title} className={`flex flex-col md:flex-row items-center gap-x-12 gap-y-6 md:even:flex-row-reverse rounded-2xl p-8 shadow-lg ${prog.bg}`}>
                <div className="relative w-full aspect-[4/3] rounded-xl basis-1/2 overflow-hidden shadow-md bg-white/20">
                  <Image src={prog.image} alt={prog.title} fill className="object-cover" />
                </div>
                <div className="basis-1/2 shrink-0">
                  <span className={`uppercase font-semibold text-xl md:text-2xl px-5 py-3 rounded-full inline-flex items-center gap-3 mb-4 ${prog.tagBg}`}>
                    {prog.title}
                    {prog.title === 'SNA Institute' && (
                      <Image src="/images/logo.png" alt="Sapiens Nova Logo" width={40} height={40} className="h-8 md:h-10 w-auto" />
                    )}
                  </span>
                  <p className={`text-base ${prog.textColor}`}>{prog.description}</p>
                  <FindOutMoreButton programmeName={prog.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="w-full py-24 bg-[var(--bg-cream)] overflow-hidden">
        <div className="container-large px-6 mb-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-[42.2px] leading-[1.2] font-normal text-black font-serif">Student Success Stories</h2>
          </div>
        </div>
        <div className="w-full relative overflow-hidden py-10">
          <div className="flex w-max items-center animate-marquee hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((t, i) => {
              const rotations = ['-rotate-[6deg]', 'rotate-[3deg]', '-rotate-[2deg]', '-rotate-[4deg]', 'rotate-[5deg]'];
              const rot = rotations[i % rotations.length];
              return (
                <div key={i} className={`group flex-shrink-0 w-[300px] md:w-[350px] lg:w-[400px] transition-all duration-300 mx-6 hover:rotate-0 hover:scale-105 hover:z-10 ${rot}`}>
                  <div className={`rounded-[35px] border-0 h-full min-h-[400px] flex flex-col items-center p-8 relative ${t.bg} shadow-lg`}>
                    <div className={`flex flex-col items-center justify-between h-full p-0 gap-6 w-full`}>
                      <div className={`mb-2 opacity-90 ${t.textColor}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                          <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                        </svg>
                      </div>
                      <div className="flex-1 flex items-center">
                        <p className={`text-center text-[15px] leading-[24px] font-normal font-sans ${t.textColor}`}>{t.quote}</p>
                      </div>
                      <div className={`h-px w-[60px] shrink-0 opacity-20 ${t.dividerColor}`} />
                      <div className="text-center space-y-1">
                        <p className={`text-[17px] leading-[24px] font-normal font-sans ${t.textColor}`}>{t.name}</p>
                        <p className={`text-[10px] leading-[24px] font-normal font-sans uppercase tracking-widest opacity-80 ${t.textColor}`}>{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet Our Founders */}
      <section id="locations-section" className="w-full py-20 md:py-32 bg-white overflow-hidden">
        <div className="container-large px-6 space-y-16">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="bg-[var(--brand-primary-light)] px-4 py-1.5 rounded-full inline-block">
              <span className="text-black text-sm font-normal uppercase tracking-wide">Meet Our Founders</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-normal text-black font-serif">World-Class Expertise Guiding Your Journey</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Our founding team unites exceptional expertise from prestigious global institutions. With backgrounds in AI and robotics research at Imperial College London, the founding CEO of a surgical robotics startup, and a founding leader at the deep-tech venture capital fund under Hong Kong Science and Technology Parks Corporation (HKSTP Ventures), we also benefit from our Education and Psychology Adviser from Cambridge University.
            </p>
            <div>
              <a href="mailto:info@sapiens-nova.com?subject=Meet Our Team Enquiry" className="inline-flex items-center justify-center bg-[var(--brand-coral)] hover:bg-[var(--brand-coral)]/90 text-white rounded-full px-10 py-6 text-base font-bold uppercase tracking-wide h-auto transition-all">
                MEET OUR TEAM
              </a>
            </div>
          </div>

          <div className="relative w-full h-auto lg:h-[650px] mt-20">
            <div className="flex flex-col md:grid md:grid-cols-2 lg:block gap-8 w-full max-w-[1200px] mx-auto">
              {founders.map((f) => (
                <div key={f.id} className={`group transition-all duration-300 lg:absolute w-full max-w-[320px] md:max-w-none lg:w-[320px] origin-center mx-auto hover:-rotate-1 hover:z-[60] hover:scale-105 hover:-translate-y-2 ${
                  f.id === 'benny-lo' ? 'lg:top-[20px] lg:left-[calc(50%-420px)] xl:left-[calc(50%-560px)] z-10' :
                  f.id === 'sammi-wong' ? 'lg:-top-[40px] lg:left-[calc(50%-140px)] xl:left-[calc(50%-200px)] z-20' :
                  'lg:top-[20px] lg:left-[calc(50%+140px)] xl:left-[calc(50%+160px)] z-15'
                }`}>
                  <div className={`rounded-[24px] p-6 pb-8 min-h-[550px] flex flex-col shadow-xl transition-all duration-300 relative ${f.bg}`}>
                    <h3 className={`text-xl md:text-2xl leading-tight mb-2 font-normal text-center font-serif ${f.textColor}`}>{f.name}</h3>
                    <p className={`text-xs font-normal uppercase tracking-wide text-center mb-4 ${f.textColor}`}>{f.role}</p>
                    <div className="w-full h-[220px] rounded-[16px] overflow-hidden mb-4 shadow-sm">
                      <Image src={f.image} alt={f.name} width={320} height={220} className="w-full h-full object-cover scale-105 object-[center_8%]" />
                    </div>
                    <div className={`text-xs leading-[1.45] mb-4 px-2 font-normal flex-grow space-y-0.5 ${f.textColor}`}>
                      {f.bullets.map((b, j) => <p key={j}>• {b}</p>)}
                    </div>
                    <div className="flex items-end justify-between mt-auto">
                      <a href={f.linkedin} target="_blank" rel="noopener noreferrer" className={`w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity ${f.textColor}`} aria-label={`LinkedIn`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
                        </svg>
                      </a>
                      {'scholar' in f && (
                        <a href={(f as typeof f & { scholar: string }).scholar} target="_blank" rel="noopener noreferrer" className={`w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity ${f.textColor}`} aria-label="Google Scholar">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 10L12 5 2 10l10 5 10-5z" />
                            <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chat Widget */}
      <a href="mailto:info@sapiens-nova.com" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 h-14 w-14 md:h-12 md:w-12 flex items-center justify-center rounded-full shadow-lg bg-card hover:opacity-80 hover:scale-110 transition-all focus:outline-none" style={{ zIndex: 1900 }} aria-label="Contact us">
        <Image src="/images/sapiens-logo.svg" alt="Sapiens AI" width={32} height={32} className="h-8 w-8" />
      </a>
    </>
  );
}
