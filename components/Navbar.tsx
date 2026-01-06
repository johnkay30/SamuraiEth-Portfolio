
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-samurai flex items-center justify-center rounded transform rotate-45">
            <span className="text-white font-bold transform -rotate-45">S</span>
          </div>
          <span className="text-xl font-black tracking-tighter uppercase font-jp">Samu<span className="text-samurai">.</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-widest text-gray-400">
          <a href="#work" className="hover:text-samurai transition-colors">Work</a>
          <a href="#services" className="hover:text-samurai transition-colors">Services</a>
          <a href="#consultant" className="hover:text-samurai transition-colors">AI Sensei</a>
          <a href="#contact" className="hover:text-samurai transition-colors">Contact</a>
        </div>

        <button className="bg-samurai hover:bg-red-700 text-white px-5 py-2 text-sm font-bold uppercase tracking-tighter transition-all">
          Book Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
