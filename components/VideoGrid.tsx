import React, { useState } from 'react';
import { VideoProject } from '../types.ts';

const projects: VideoProject[] = [
  {
    id: '10',
    title: 'Web3 Visual Standard',
    category: 'Commercial Ads',
    thumbnailUrl: 'https://img.youtube.com/vi/ajnl-SwcZzg/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/ajnl-SwcZzg?autoplay=1&mute=1&rel=0&loop=1&playlist=ajnl-SwcZzg',
    description: 'Project: Performance Identity. Scope: Technical asset commercial. The Goal: To showcase precision-engineered visuals that communicate peak technical performance.'
  },
  {
    id: '7',
    title: 'Monad Launch Identity',
    category: 'Commercial Ads',
    thumbnailUrl: 'https://img.youtube.com/vi/-iAYH0aSWf0/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/-iAYH0aSWf0?autoplay=1&mute=1&rel=0&loop=1&playlist=-iAYH0aSWf0',
    description: 'Project: Monad Launch Identity. Scope: High-end motion graphics & visual storytelling. The Goal: To visualize the power of a fully EVM-compatible, high-performance L1 through aggressive, data-driven motion design'
  },
  {
    id: '14',
    title: 'Protocol Narrative Arc',
    category: 'Commercial Ads',
    thumbnailUrl: 'https://img.youtube.com/vi/L50GjlKarrY/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/L50GjlKarrY?autoplay=1&mute=1&rel=0&loop=1&playlist=L50GjlKarrY',
    description: 'Project: Protocol Narrative Arc. Scope: Cinematic high-fidelity commercial. The Goal: To synthesize technical complexity into a compelling visual journey for the decentralized landscape.'
  },
  {
    id: '11',
    title: 'Macro Vision Distillation',
    category: 'Podcast Edit',
    thumbnailUrl: 'https://img.youtube.com/vi/cbgoDbULUVU/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/cbgoDbULUVU?autoplay=1&mute=1&rel=0&loop=1&playlist=cbgoDbULUVU',
    description: 'Project: Macro Vision Distillation. Scope: Insightful podcast highlight extraction. The Goal: To visualize complex market analysis and technical alpha through high-retention cinematic editing.'
  },
  {
    id: '12',
    title: 'On-Chain Mechanics Dialogue',
    category: 'Podcast Edit',
    thumbnailUrl: 'https://img.youtube.com/vi/o8oz075Wnms/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/o8oz075Wnms?autoplay=1&mute=1&rel=0&loop=1&playlist=o8oz075Wnms',
    description: 'Project: On-Chain Mechanics Dialogue. Scope: Expert interview highlight. The Goal: To transform technical protocol discussions into digestible, visual-first social narratives designed for deep engagement.'
  },
  {
    id: '13',
    title: 'Ecosystem Depth Analysis',
    category: 'Podcast Edit',
    thumbnailUrl: 'https://img.youtube.com/vi/mMQFQ26quZU/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/mMQFQ26quZU?autoplay=1&mute=1&rel=0&loop=1&playlist=mMQFQ26quZU',
    description: 'Project: Ecosystem Depth Analysis. Scope: Technical stream summary. The Goal: To capture the essence of high-level crypto debate using professional audio-visual synchronization and sharp pacing.'
  }
];

const VideoGrid: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [playingId, setPlayingId] = useState<string | null>(null);
  const categories = ['All', 'Commercial Ads', 'Podcast Edit'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === (filter as any));

  const handleCardClick = (id: string) => {
    if (playingId === id) return;
    setPlayingId(id);
  };

  const stopVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPlayingId(null);
  };

  const isYouTube = (url: string) => url.includes('youtube.com') || url.includes('youtu.be');

  return (
    <section id="work" className="py-16 md:py-24 px-4 sm:px-6 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 md:mb-16 gap-6 md:gap-8">
          <div className="w-full">
            <span className="text-[#3b82f6] uppercase tracking-widest text-[10px] font-black mb-2 block">The Portfolio</span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-jp leading-tight">Visual <span className="text-white/60">Work</span></h2>
          </div>
          
          <div className="flex overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide gap-2 w-full lg:w-auto -mx-4 px-4 lg:mx-0 lg:px-0 justify-start lg:justify-end">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`whitespace-nowrap px-4 py-2.5 text-[9px] font-black uppercase tracking-widest border transition-all shrink-0 ${
                  filter === cat ? 'bg-[#3b82f6] border-[#3b82f6] text-white' : 'border-white/20 text-gray-400 hover:border-white/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div 
                key={project.id} 
                onClick={() => handleCardClick(project.id)}
                className={`group relative overflow-hidden bg-black flex flex-col cursor-pointer border transition-all duration-500 ${
                  playingId === project.id 
                    ? 'border-[#3b82f6] scale-[1.02] md:scale-100 shadow-[0_0_50px_rgba(59,130,246,0.3)] z-20' 
                    : 'border-white/5 hover:border-[#3b82f6]/40 lg:hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] z-0'
                }`}
              >
                <div className="relative aspect-video overflow-hidden">
                  {playingId === project.id ? (
                    <div className="relative w-full h-full bg-black">
                      {isYouTube(project.videoUrl) ? (
                        <iframe 
                          src={project.videoUrl}
                          title={project.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="w-full h-full"
                        ></iframe>
                      ) : (
                        <video 
                          src={project.videoUrl} 
                          autoPlay 
                          muted
                          loop
                          controls 
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      )}
                      <button 
                        onClick={stopVideo}
                        className="absolute top-2 right-2 z-30 bg-[#3b82f6] text-white w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#60a5fa] transition-all shadow-xl active:scale-90"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <>
                      <img 
                        src={project.thumbnailUrl} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-4 md:p-6 flex flex-col justify-end">
                        <span className="text-[#3b82f6] text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-1">{project.category}</span>
                        <h3 className="text-base md:text-xl font-black uppercase leading-tight mb-1">{project.title}</h3>
                        <p className="hidden md:block text-gray-300 text-xs font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 md:scale-50 md:group-hover:scale-100">
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-[#3b82f6] flex items-center justify-center rounded-full shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                          <svg className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6 4l10 6-10 6V4z"/>
                          </svg>
                        </div>
                      </div>
                    </>
                  )}
                  
                  <div className={`absolute inset-0 pointer-events-none border transition-colors duration-500 ${
                    playingId === project.id ? 'border-[#3b82f6]/40' : 'border-transparent group-hover:border-[#3b82f6]/20'
                  }`}></div>
                </div>

                {playingId === project.id && (
                  <div className="p-4 md:p-6 bg-[#111] border-t border-[#3b82f6]/20 animate-fade-in">
                    <span className="text-[#3b82f6] text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-2 block">{project.category}</span>
                    <h3 className="text-lg md:text-xl font-black uppercase mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-xs md:text-sm font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center border border-dashed border-white/10">
              <p className="text-gray-500 uppercase tracking-widest text-xs font-black">No transmissions found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoGrid;