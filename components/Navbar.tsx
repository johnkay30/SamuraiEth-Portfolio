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
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
      scrolled ? 'bg-black/90 backdrop-blur-lg py-3 border-white/10' : 'bg-transparent py-5 border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-lg md:text-xl font-black tracking-tighter uppercase font-jp whitespace-nowrap">
            SAMURAI<span className="text-samurai">.ETH</span>
          </span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-gray-400">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-samurai transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button className="hidden sm:block bg-samurai hover:bg-[#2d558a] text-white px-5 py-2 text-[10px] font-black uppercase tracking-widest transition-all">
            Book Mission
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white p-2 h-10 w-10 flex items-center justify-center focus:outline-none relative z-50"
            aria-label="Toggle Menu"
          >
            <div className="relative w-6 h-5">
              <span className={`absolute block w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'top-2 rotate-45' : 'top-0'}`}></span>
              <span className={`absolute block w-full h-0.5 bg-white transition-all duration-300 top-2 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute block w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'top-2 -rotate-45' : 'top-4'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/98 transition-all duration-500 md:hidden z-40 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-black uppercase tracking-[0.2em] font-jp">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={closeMenu}
              className={`text-white transition-all duration-300 hover:text-samurai transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${navLinks.indexOf(link) * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          <div className={`mt-8 transform transition-all duration-300 ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
            <button className="bg-samurai hover:bg-[#2d558a] text-white px-10 py-4 text-xs font-black uppercase tracking-widest transition-all shadow-lg">
              Book Mission
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;