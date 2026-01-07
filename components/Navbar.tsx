
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-4 md:px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-samurai flex items-center justify-center rounded transform rotate-45">
            <span className="text-white font-bold transform -rotate-45">S</span>
          </div>
          <span className="text-xl font-black tracking-tighter uppercase font-jp whitespace-nowrap">Samurai<span className="text-samurai">.eth</span></span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-widest text-gray-400">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-samurai transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block bg-samurai hover:bg-red-700 text-white px-5 py-2 text-sm font-bold uppercase tracking-tighter transition-all">
            Book Now
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 top-[65px] bg-black/95 transition-transform duration-300 transform md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-start pt-12 gap-8 text-lg font-bold uppercase tracking-[0.2em]">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-400 hover:text-samurai transition-colors border-b border-transparent hover:border-samurai pb-2"
            >
              {link.name}
            </a>
          ))}
          <button className="mt-4 bg-samurai hover:bg-red-700 text-white px-10 py-4 text-sm font-black uppercase tracking-widest transition-all">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
