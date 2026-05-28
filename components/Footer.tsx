import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-[var(--bg-sage)] text-black py-16 md:py-24 relative overflow-hidden min-h-[600px]">
      <div className="container-large px-6 relative z-10 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_300px_400px] gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="space-y-4">
            <Image src="/images/logo.png" alt="70b" width={200} height={64} className="h-14 w-auto md:h-16" />
            <p className="text-sm md:text-base text-gray-800 font-sans max-w-[320px] leading-relaxed">
              Building the Future with Generative AI
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <h3 className="font-serif font-medium text-xl md:text-2xl">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: '/#about-us', label: 'WHO WE ARE' },
                { href: '/programs', label: 'PROGRAMMES' },
                { href: '/checkout', label: 'ENROL NOW' },
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
                <a href="mailto:admin@xai.hk" className="text-gray-700 hover:text-black transition-colors text-sm md:text-base block">
                  admin@xai.hk
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-black">Website</p>
                <a href="https://www.70b.ai" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors text-sm md:text-base block">
                  https://www.70b.ai
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-300">
          <p className="text-sm text-gray-600 font-sans">© 2026 70b. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/data-privacy-terms" className="text-sm text-gray-600 hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="/#footer" className="text-sm text-gray-600 hover:text-black transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
