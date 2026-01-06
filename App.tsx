
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoGrid from './components/VideoGrid';
import Services from './components/Services';
import AIAssistant from './components/AIAssistant';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <VideoGrid />
      <Services />
      <AIAssistant />
      <Contact />
      
      {/* Scroll to top utility could go here if needed, but keeping it minimalist */}
    </div>
  );
};

export default App;
