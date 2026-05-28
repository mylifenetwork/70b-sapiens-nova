'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const heroImages = [
  { src: '/images/hero05.jpg', style: { objectPosition: '65% top' }, loading: 'eager' as const, kenBurns: true },
  { src: '/images/hero02.jpeg', style: { objectPosition: 'center top' }, loading: 'lazy' as const, kenBurns: false },
  { src: '/images/hero03.jpg', style: { objectPosition: 'center top' }, loading: 'lazy' as const, kenBurns: false },
  { src: '/images/hero04.jpg', style: { objectPosition: 'center top' }, loading: 'lazy' as const, kenBurns: false },
];

export default function HeroSection() {
  const currentIndex = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const images = document.querySelectorAll<HTMLElement>('.hero-image');
    intervalRef.current = setInterval(() => {
      images[currentIndex.current].style.opacity = '0';
      currentIndex.current = (currentIndex.current + 1) % images.length;
      images[currentIndex.current].style.opacity = '1';
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section
      id="hero-section"
      className="relative flex h-svh min-h-[680px] w-full items-center justify-center overflow-hidden bg-black md:h-screen"
      style={{ paddingTop: 'clamp(5.5rem, 9vh, 8rem)', paddingBottom: 'clamp(6.5rem, 12vh, 9rem)' }}
    >
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 w-full h-full">
        {heroImages.map((img, i) => (
          <div key={i} className="hero-image absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out" style={{ opacity: i === 0 ? 1 : 0 }}>
            <Image src={img.src} alt="" fill loading={img.loading} style={{ objectFit: 'cover', ...img.style }} className={`w-full h-full object-cover md:object-cover${img.kenBurns ? ' animate-ken-burns' : ''}`} />
          </div>
        ))}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/80 via-black/60 md:from-black/75 md:via-black/45 to-black/30 md:to-black/20" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/40 via-transparent to-black/60 md:from-black/30 md:to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-large px-4 sm:px-6 text-center md:text-left w-full max-w-3xl md:max-w-none mx-auto md:mx-0">
        <h1 className="hero-title font-normal text-white font-serif tracking-tight leading-[1.1]" style={{ textShadow: 'rgba(0,0,0,0.5) 0px 4px 12px, rgba(0,0,0,0.3) 0px 2px 4px', whiteSpace: 'pre-line' }}>
          {`Building the Future \n with Generative AI`}
        </h1>
        <h2 className="hero-subtitle mt-4 font-normal text-white font-serif tracking-tight leading-[1.1]" style={{ textShadow: 'rgba(0,0,0,0.5) 0px 4px 12px, rgba(0,0,0,0.3) 0px 2px 4px', whiteSpace: 'pre-line' }}>
          We empower the next generation through AI innovation, STEM education, digital humans, accessibility technology, and enterprise AI solutions.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center md:justify-start items-center mt-8 md:mt-10">
          <Link href="/checkout" className="hero-cta inline-flex items-center justify-center w-full sm:w-auto px-8 sm:px-9 py-3.5 sm:py-4 rounded-[30px] font-medium text-sm sm:text-base uppercase tracking-wide transition-all duration-300 hover:opacity-90 hover:scale-105 h-auto" style={{ backgroundColor: 'var(--brand-primary-light)', color: 'var(--text-primary)' }}>
            ENROL NOW
          </Link>
          <Link href="/#programs" className="hero-cta inline-flex items-center justify-center w-full sm:w-auto px-8 sm:px-9 py-3.5 sm:py-4 rounded-[30px] font-medium text-sm sm:text-base uppercase tracking-wide transition-all duration-300 hover:opacity-90 hover:scale-105 h-auto" style={{ backgroundColor: 'var(--brand-primary)', color: 'var(--primary-foreground)' }}>
            EXPLORE PROGRAMMES
          </Link>
        </div>
      </div>

      {/* Announcement Marquee */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex min-h-14 items-center overflow-x-hidden overflow-y-visible bg-[var(--brand-primary-light)] py-3 sm:min-h-16 sm:py-4">
        <div className="flex w-max items-center animate-marquee">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3 px-4 sm:gap-4 sm:px-5">
              <span className="hero-marquee-text inline-flex items-center whitespace-nowrap font-serif text-lg font-normal leading-none text-[var(--text-primary)] sm:text-2xl md:text-3xl">
                Enrollment for Summer Programmes is now open
              </span>
              <svg className="hero-marquee-icon h-5 w-5 shrink-0 text-[var(--brand-primary)] sm:h-8 sm:w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
