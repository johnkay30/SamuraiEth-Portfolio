import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import VideoGrid from './components/VideoGrid.tsx';
import Services from './components/Services.tsx';
import AIAssistant from './components/AIAssistant.tsx';
import Contact from './components/Contact.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <VideoGrid />
      <Services />
      <AIAssistant />
      <Contact />
    </div>
  );
};

export default App;