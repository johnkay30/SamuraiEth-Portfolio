import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const navLinks = [
    { name: 'Work', href: '#work', sub: 'The Archive' },
    { name: 'Services', href: '#services', sub: 'The Arsenal' },
    { name: 'About', href: '#about', sub: 'The Standard' },
    { name: 'Contact', href: '#contact', sub: 'The Mission' },
  ];

  const socialLinks = [
    { name: '𝕏', href: 'https://x.com/samuraietherius?s=21' },
    { name: 'TikTok', href: 'https://www.tiktok.com/@samuraieth?_r=1&_t=ZS-939KQ3yBmmj' },
    { name: 'YT', href: 'https://youtube.com/@samuraieth?si=4ivmqUGr-hflM4-L' },
  ];

  const emailHref = "mailto:samuraiethereius@gmail.com?subject=New Project Mission Brief&body=Hello SAMURAI.ETH,%0D%0A%0D%0AI would like to discuss a project involving...";

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
      scrolled ? 'bg-black/90 backdrop-blur-lg py-3 border-white/10' : 'bg-transparent py-5 border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-lg md:text-xl font-black tracking-tighter uppercase font-jp whitespace-nowrap">
            SAMURAI<span className="text-samu">.ETH</span>
          </span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-gray-400">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-samu transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <a 
            href={emailHref}
            className="hidden sm:block bg-[#3b82f6] hover:bg-[#60a5fa] text-white px-4 md:px-5 py-2.5 text-[10px] font-black uppercase tracking-widest transition-all shadow-[0_5px_15px_rgba(59,130,246,0.3)]"
          >
            Book Mission
          </a>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white p-2 h-10 w-10 flex items-center justify-center focus:outline-none relative z-50"
            aria-label="Toggle Menu"
          >
            <div className="relative w-6 h-5">
              <span className={`absolute block w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'top-2 rotate-45 bg-[#3b82f6]' : 'top-0'}`}></span>
              <span className={`absolute block w-full h-0.5 bg-white transition-all duration-300 top-2 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute block w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'top-2 -rotate-45 bg-[#3b82f6]' : 'top-4'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black transition-all duration-500 md:hidden z-40 flex flex-col ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#3b82f6] rounded-full blur-[100px]"></div>
        </div>

        <div className="flex flex-col h-full pt-20 px-8 pb-10 relative z-10">
          {/* Header Info */}
          <div className="mb-10 border-b border-white/5 pb-6">
            <span className="text-[#3b82f6] text-[10px] font-black uppercase tracking-[0.3em] block mb-2">Navigation Menu</span>
            <div className="text-xl font-black tracking-tighter uppercase font-jp">
              SAMURAI<span className="text-[#3b82f6]">.ETH</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex-1 flex flex-col justify-start gap-6 overflow-y-auto pr-2 scrollbar-hide">
            {navLinks.map((link, idx) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={closeMenu}
                className={`group flex items-end justify-between transition-all duration-500 transform ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <div>
                  <span className="block text-[#3b82f6] text-[8px] font-black uppercase tracking-widest mb-1 opacity-60">{link.sub}</span>
                  <span className="text-2xl font-black uppercase tracking-tight group-hover:text-[#3b82f6] transition-colors">{link.name}</span>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center mb-1 group-hover:border-[#3b82f6] group-hover:text-[#3b82f6] transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </a>
            ))}

            {/* Prominent Mobile CTA */}
            <div className={`mt-6 transform transition-all duration-700 delay-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <a 
                href={emailHref}
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-3 bg-[#3b82f6] hover:bg-[#60a5fa] text-white py-5 rounded-xl font-black uppercase tracking-widest text-xs shadow-[0_15px_30px_rgba(59,130,246,0.3)] active:scale-95 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Book Mission
              </a>
            </div>
          </div>

          {/* Footer Area */}
          <div className="mt-auto pt-6 border-t border-white/5">
            <div className={`flex items-center justify-between transition-all duration-700 delay-500 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex gap-6">
                {socialLinks.map((social) => (
                  <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-[#3b82f6]">
                    {social.name}
                  </a>
                ))}
              </div>
              <p className="text-[8px] text-gray-600 uppercase tracking-widest">
                Forged with Discipline
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;