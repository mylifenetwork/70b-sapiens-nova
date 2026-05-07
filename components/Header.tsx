'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  useEffect(() => {
    const btn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('mobile-menu-close');
    const overlay = document.getElementById('mobile-menu-overlay');
    const menu = document.getElementById('mobile-menu');

    function openMenu() {
      menu?.classList.remove('translate-x-full');
      overlay?.classList.remove('opacity-0', 'pointer-events-none');
      overlay?.classList.add('opacity-100');
      document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
      menu?.classList.add('translate-x-full');
      overlay?.classList.add('opacity-0', 'pointer-events-none');
      overlay?.classList.remove('opacity-100');
      document.body.style.overflow = '';
    }

    btn?.addEventListener('click', openMenu);
    closeBtn?.addEventListener('click', closeMenu);
    overlay?.addEventListener('click', closeMenu);

    // Close on mobile nav link click
    document.querySelectorAll('.mobile-nav-link').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    return () => {
      btn?.removeEventListener('click', openMenu);
      closeBtn?.removeEventListener('click', closeMenu);
      overlay?.removeEventListener('click', closeMenu);
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 w-full bg-white/95 shadow-sm" style={{ zIndex: 1700 }}>
        <nav className="container-large py-4 md:py-2 px-4">
          {/* Mobile Layout */}
          <div className="flex md:hidden justify-between items-center">
            <Link href="/" className="shrink-0">
              <Image src="/images/logo.png" alt="Sapiens Nova Logo" width={120} height={40} className="h-10 w-auto object-contain mix-blend-multiply" />
            </Link>
            <button id="mobile-menu-btn" className="flex items-center justify-center text-black p-0 h-auto" aria-label="Open menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" />
              </svg>
            </button>
          </div>

          {/* Desktop Layout - 3 Column Grid */}
          <div className="hidden md:grid grid-cols-3 items-center gap-6">
            {/* Left Navigation */}
            <div className="flex items-center gap-6 justify-start pl-6">
              <Link href="/#who-we-are" className="nav-link hover:opacity-70 transition-opacity text-sm font-medium uppercase text-black tracking-wide">WHO WE ARE</Link>
              <Link href="/programs" className="nav-link hover:opacity-70 transition-opacity text-sm font-medium uppercase text-black tracking-wide">PROGRAMMES</Link>
              <Link href="/checkout" className="nav-link hover:opacity-70 transition-opacity text-sm font-medium uppercase text-black tracking-wide">ENROL NOW</Link>
            </div>
            {/* Centered Logo */}
            <div className="flex justify-center">
              <Link href="/" className="shrink-0">
                <Image src="/images/logo.png" alt="Sapiens Nova Logo" width={144} height={48} className="h-12 w-auto object-contain mix-blend-multiply" />
              </Link>
            </div>
            {/* Right Navigation */}
            <div className="flex items-center gap-6 justify-end">
              <Link href="/#footer" className="nav-link hover:opacity-70 transition-opacity text-sm font-medium uppercase text-black tracking-wide">CONTACT</Link>
              <Link href="/checkout" className="nav-link rounded-full font-medium text-sm uppercase px-5 py-2 h-9 bg-program-cornfield text-white hover:bg-program-cornfield/90 inline-flex items-center justify-center transition-colors">ENROL NOW</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div id="mobile-menu-overlay" className="fixed inset-0 bg-black/50 opacity-0 pointer-events-none transition-opacity duration-300 md:hidden" style={{ zIndex: 1799 }} aria-hidden="true" />

      {/* Mobile Menu Panel */}
      <aside id="mobile-menu" className="fixed inset-y-0 right-0 w-[85%] sm:w-[400px] bg-white shadow-lg transform translate-x-full transition-transform duration-500 ease-in-out flex flex-col md:hidden" style={{ zIndex: 1800 }} aria-label="Mobile navigation">
        <button id="mobile-menu-close" className="absolute top-4 right-4 rounded-sm opacity-70 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" aria-label="Close menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" /><path d="m6 6 12 12" />
          </svg>
        </button>
        <div className="flex-1 overflow-y-auto pt-16">
          <nav className="flex flex-col">
            {[
              { href: '/#who-we-are', label: 'WHO WE ARE' },
              { href: '/programs', label: 'PROGRAMMES' },
              { href: '/checkout', label: 'ENROL NOW' },
              { href: '/#footer', label: 'GET IN TOUCH' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="mobile-nav-link flex items-center justify-between px-6 py-5 text-base font-medium uppercase tracking-wider text-foreground hover:bg-muted transition-colors border-b border-border">
                <span>{label}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
