import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-[var(--bg-sage)] text-black py-16 md:py-24 relative overflow-hidden min-h-[600px]">
      <div className="mx-auto max-w-[1150px] px-6 relative z-10 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_300px_400px] gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="space-y-4">
            <Image src="/images/logo.png" alt="Sapiens Nova Academy" width={200} height={64} className="h-14 w-auto md:h-16" />
            <p className="text-sm md:text-base text-gray-800 font-sans max-w-[320px] leading-relaxed">
              Building the Future with Generative AI
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.linkedin.com/company/the-sapiens-nova-academy/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-70 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 md:w-7 md:h-7 text-black">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://www.instagram.com/sapiensnovaacademy" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-70 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 md:w-7 md:h-7 text-black">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="https://www.facebook.com/share/1Y3rBy748u/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-70 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 md:w-7 md:h-7 text-black">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <h3 className="font-serif font-medium text-xl md:text-2xl">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: '/#about-us', label: 'WHO WE ARE' },
                { href: '/programs', label: 'PROGRAMMES' },
                { href: 'https://docs.google.com/forms/d/e/1FAIpQLSdtPrl4dJX4z_LP_XDTwL0C7ct68QhWGH6eMXMzHIsRd-4rsQ/viewform?usp=header', label: 'ENROLL NOW' },
                // { href: '/data-privacy-terms', label: 'DATA PRIVACY TERMS' },
                // { href: '/#footer', label: 'CONTACT' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-gray-700 hover:text-black transition-colors text-sm md:text-base font-sans">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h3 className="font-serif font-medium text-xl md:text-2xl">Contact Us</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-black">Email</p>
                <a href="mailto:info@sapiens-nova.com" className="text-gray-700 hover:text-black transition-colors text-sm md:text-base block">
                  info@sapiens-nova.com
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-black">Website</p>
                <a href="https://sapiens-nova.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors text-sm md:text-base block">
                  sapiens-nova.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-300">
          <p className="text-sm text-gray-600 font-sans">© 2026 Sapiens Nova. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/data-privacy-terms" className="text-sm text-gray-600 hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="/#footer" className="text-sm text-gray-600 hover:text-black transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
