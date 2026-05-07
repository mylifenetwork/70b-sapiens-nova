import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Programmes - Sapiens Nova Academy',
  description: 'Explore our comprehensive programmes designed for future leaders in technology, entrepreneurship, and venture investment.',
};

const trackRecords = [
  {
    id: 'hku',
    label: 'HKU Summer Institute',
    heading: 'HKU Summer Institute',
    subheading: 'Hong Kong, China',
    description: 'Students at the HKU Summer Institute experienced state-of-the-art facilities and world-class teaching that provide the ideal setting for learning and growth. The boot camp encompassed a wide range of activities, including hands-on robotics sessions, where students got to build and programme their own robots. Mentors from ventures capital companies and investors shared their expertise and experience in investing in deep-tech startups.',
    image: '/images/benny_ai.DTSH09PR_2Wpjt.webp',
    btnLabel: 'Enroll in similar programme',
    btnHref: '/checkout',
  },
  {
    id: 'chula',
    label: 'Chulalongkorn Venture Building',
    heading: 'Chulalongkorn Venture Building & Innovation',
    subheading: 'Bangkok, Thailand',
    description: 'Our 15-week immersive programme at Chulalongkorn University, Bangkok offered a unique blend of academic learning and practical experience in venture building and innovation. Students worked on real-world projects with other students around the world, from AI coding, to building a robotic arm, to pitching their startup ideas to investors. This programme is designed to equip students with the skills and knowledge they need to succeed in the fast-paced world of technology and entrepreneurship.',
    image: '/images/chula-venture-04.BjokNZOQ_2hTdub.webp',
    btnLabel: 'Enroll in similar programme',
    btnHref: '/checkout',
  },
  {
    id: 'web3',
    label: 'Nextg3n Web3 Hackathon KSA',
    heading: 'Nextg3n Web3 Hackathon KSA',
    subheading: 'Riyadh, Saudi Arabia',
    description: 'The first international web3 hackathon focused on Gen-Z in Saudi Arabia. Over 300 student participants from 16 countries competed in a 48-hour hackathon developing web3 solutions. Sapiens Nova co-sponsored the event alongside Saudi Aramco, PWC, Polygon, Saudi Ministry of Communications, and Digital Infrastructure.',
    image: '/images/web3-hackathon-ksa-04.B4XHduTN_2ed6vB.webp',
    btnLabel: 'Enroll in similar programme',
    btnHref: '/checkout',
  },
  {
    id: 'bisp',
    label: 'Tech & AI Workshop BISP',
    heading: 'Tech & AI Workshop, British International School Phuket (BISP)',
    subheading: 'Phuket, Thailand',
    description: 'We ran a tech & AI workshop at the British International School Phuket campus. Students from BISP participated in hands-on AI and technology exercises, exploring cutting-edge developments in machine learning and robotics. The workshop provided an immersive experience with real-world applications of AI technology.',
    image: '/images/tech-ai-workshop-bisp-campus-drone.Cd420VEo_2br701.webp',
    btnLabel: 'Enroll in similar programme',
    btnHref: '/checkout',
  },
];

const customProgrammes = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" /><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" /><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" /><path d="M17.599 6.5a3 3 0 0 0 .399-1.375" /><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" /><path d="M3.477 10.896a4 4 0 0 1 .585-.396" /><path d="M19.938 10.5a4 4 0 0 1 .585.396" /><path d="M6 18a4 4 0 0 1-1.967-.516" /><path d="M19.967 17.484A4 4 0 0 1 18 18" />
      </svg>
    ),
    title: 'AI, Technology & Robotics',
    description: 'Immersive programmes in artificial intelligence, machine learning, and robotics for the next generation of tech innovators.',
    details: ['AI and Machine Learning bootcamps', 'Robotics hands-on workshops', 'Tech venture deep-dives', 'Innovation challenges'],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
    title: 'Personal Growth & Well-Being',
    description: 'Psychology-based programmes focused on emotional intelligence, resilience, and purposeful living with Cambridge-trained guidance.',
    details: ['MBTI and personality assessments', 'Emotional resilience workshops', 'Cambridge psychology curriculum', 'Life design coaching'],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
        <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" /><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" /><path d="M2 7h20" /><path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7" />
      </svg>
    ),
    title: 'Start-up & Venture Capital',
    description: 'Hands-on venture building experiences with real investors, pitching practice, and startup ecosystem exposure.',
    details: ['Investor mentorship sessions', 'Startup pitch training', 'Venture capital deep-dives', 'Real startup project building'],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Workshops & Masterclasses',
    description: 'Focused single-day or multi-day workshops led by industry experts, covering topics from art & culture to advanced technology.',
    details: ['Expert-led masterclasses', 'Industry immersion days', 'Cultural exchange workshops', 'School group programmes'],
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-[var(--bg-linen)] pt-32 pb-20">
        <div className="absolute top-8 right-8 md:top-12 md:right-16 w-32 h-32 md:w-48 md:h-48 opacity-50 pointer-events-none">
          <Image src="/images/orange.Bsxz-IXU.webp" alt="" fill className="object-contain" />
        </div>
        <div className="container-large px-6 text-center space-y-6 relative z-10 max-w-4xl mx-auto">
          <div className="bg-[var(--brand-primary)] px-4 py-1 rounded-full inline-block">
            <span className="text-white text-sm font-normal uppercase tracking-wide">Innovative Education</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-black font-serif tracking-tight leading-[1.1]">
            Unlock Your Future
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Discover our transformative programmes designed to equip you with the skills, networks, and mindset for tomorrow&apos;s opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/checkout" className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium uppercase tracking-wide bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary)]/90 transition-colors">
              Enrol Now
            </Link>
            <a href="#customised-programmes" className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium uppercase tracking-wide border border-black text-black hover:bg-black hover:text-white transition-colors">
              Explore All
            </a>
          </div>
        </div>
      </section>

      {/* Currently Available */}
      <section className="w-full py-20 bg-white">
        <div className="container-large px-6 max-w-6xl mx-auto">
          <div className="bg-[var(--brand-primary)] px-4 py-1 rounded-full inline-block mb-4">
            <span className="text-white text-lg font-normal">Currently Available</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold font-serif mb-4">Flagship Summer Programmes</h2>
          <p className="text-gray-600 text-lg mb-10">Enroll now in our flagship summer programmes designed for future innovators and leaders.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Imperial */}
            <div className="rounded-xl p-6 pb-8 shadow-lg bg-[var(--brand-stromboli)] text-white transition-transform hover:scale-[1.02]">
              <div className="mb-6 overflow-hidden rounded-lg">
                <Image src="/images/imperial-motor-sport1.BHIDzqxG.jpg" alt="Imperial Motorsport" width={600} height={192} className="w-full h-48 object-cover" />
              </div>
              <span className="uppercase font-medium text-xs px-3 py-1 rounded-full inline-block mb-3 bg-white/20 text-white">Imperial College London, UK</span>
              <h3 className="text-2xl font-semibold font-serif mb-3">Imperial College London Motorsport Engineering Summer School</h3>
              <div className="mb-4 rounded-lg overflow-hidden">
                <div className="bg-white/20 px-4 py-2.5 border-l-4 border-white">
                  <p className="text-sm font-bold">⭐⭐⭐ Official Programme by Imperial College London</p>
                </div>
              </div>
              <p className="text-base mb-6 text-white/90">A practical introduction to how engineers generate, modify, and use power in the context of motorsport engineering.</p>
              <div className="flex gap-3">
                <a href="mailto:info@sapiens-nova.com?subject=Enquiry: Imperial Motorsport" className="inline-flex items-center justify-center text-sm font-medium rounded-full border border-white bg-white text-black hover:bg-white/90 px-4 py-2">Learn More</a>
                <Link href="/checkout" className="inline-flex items-center justify-center text-sm font-medium rounded-full bg-[var(--brand-coral-light)] text-black hover:bg-[var(--brand-coral-light)]/90 px-4 py-2 gap-2">
                  Enroll Now
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </Link>
              </div>
            </div>

            {/* Human+Tech */}
            <div className="rounded-xl p-6 pb-8 shadow-lg bg-[var(--brand-azure)] text-white transition-transform hover:scale-[1.02]">
              <div className="mb-6 overflow-hidden rounded-lg">
                <Image src="/images/human_tech1.BiYtWcrZ.jpg" alt="Human+Tech" width={600} height={192} className="w-full h-48 object-cover" />
              </div>
              <span className="uppercase font-medium text-xs px-3 py-1 rounded-full inline-block mb-3 bg-white/20 text-white">Awaji Island, Japan</span>
              <h3 className="text-2xl font-semibold font-serif mb-3">Human+Tech Futures Summer Camp</h3>
              <p className="text-base mb-6 text-white/90">Discover how technology can support healthy living. Participants explore AI, sensing and robotics technologies to create prototypes that enhance physical and emotional well-being.</p>
              <div className="flex gap-3">
                <a href="mailto:info@sapiens-nova.com?subject=Enquiry: Human+Tech Summer Camp" className="inline-flex items-center justify-center text-sm font-medium rounded-full border border-white bg-white text-black hover:bg-white/90 px-4 py-2">Learn More</a>
                <Link href="/checkout" className="inline-flex items-center justify-center text-sm font-medium rounded-full bg-[var(--brand-coral-light)] text-black hover:bg-[var(--brand-coral-light)]/90 px-4 py-2 gap-2">
                  Enroll Now
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customised Programmes */}
      <section id="customised-programmes" className="w-full py-20 bg-[var(--bg-linen)]">
        <div className="container-large px-6 max-w-6xl mx-auto">
          <div className="bg-[var(--brand-primary)] px-4 py-1 rounded-full inline-block mb-4">
            <span className="text-white text-lg font-normal">Customised Programmes</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold font-serif mb-4">Tailored for Your Institution</h2>
          <p className="text-gray-600 text-lg mb-10">We work with schools, universities, and organizations to create bespoke programmes that meet your specific needs.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {customProgrammes.map((prog) => (
              <div key={prog.title} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-[var(--brand-primary)] mb-4">{prog.icon}</div>
                <h3 className="text-xl font-semibold font-serif mb-2">{prog.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{prog.description}</p>
                <ul className="space-y-1 mb-6">
                  {prog.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-[var(--brand-primary)] shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                      {d}
                    </li>
                  ))}
                </ul>
                <a href={`mailto:info@sapiens-nova.com?subject=Enquiry: ${prog.title} programme`} className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-primary)] hover:underline">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proven Excellence / Track Record */}
      <section className="w-full py-20 bg-white">
        <div className="container-large px-6 max-w-6xl mx-auto">
          <div className="bg-[var(--brand-primary-light)] px-4 py-1 rounded-full inline-block mb-4">
            <span className="text-black text-lg font-normal">Proven Excellence</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold font-serif mb-4">Our Track Record</h2>
          <p className="text-gray-600 text-lg mb-10">See what we&apos;ve achieved with students around the world in our previous programmes.</p>
          <div className="space-y-16">
            {trackRecords.map((rec, i) => (
              <div key={rec.id} className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-center`}>
                <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg aspect-video">
                  <Image src={rec.image} alt={rec.heading} width={600} height={340} className="w-full h-full object-cover" />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-semibold font-serif">{rec.heading}</h3>
                  <p className="text-[var(--brand-primary)] font-medium text-sm uppercase tracking-wide">{rec.subheading}</p>
                  <p className="text-gray-700 leading-relaxed">{rec.description}</p>
                  <Link href={rec.btnHref} className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary)]/90 transition-colors">
                    {rec.btnLabel}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 bg-[var(--brand-stromboli)] text-white text-center">
        <div className="container-large px-6 max-w-2xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-5xl font-normal font-serif">Ready to Begin?</h2>
          <p className="text-white/80 text-lg">Join hundreds of students who have transformed their futures through Sapiens Nova Academy programmes.</p>
          <Link href="/checkout" className="inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-medium uppercase tracking-wide bg-[var(--brand-coral-light)] text-black hover:bg-[var(--brand-coral-light)]/90 transition-colors">
            Enrol Now
          </Link>
        </div>
      </section>
    </>
  );
}
