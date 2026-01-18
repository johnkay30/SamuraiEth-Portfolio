import React from 'react';

const services = [
  {
    title: 'Short-Form Clips',
    description: 'Transforming long podcasts and livestreams into high-impact TikTok, Reels, and Shorts designed for the attention economy.',
    icon: '✂️'
  },
  {
    title: 'Podcast Mastering',
    description: 'Deep-dive video essays and long-form podcast edits with premium pacing, professional sound design, and color grading.',
    icon: '🎙️'
  },
  {
    title: 'Commercial Ads',
    description: 'Conversion-focused promotional videos and cinematic trailers for protocol launches, mints, and exchange listings.',
    icon: '🎯'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-samu uppercase tracking-widest text-xs font-bold mb-4 block">Our Arsenal</span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase font-jp leading-tight">Tools of <span className="text-white/60">Engagement</span></h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="p-6 md:p-8 bg-white/5 border border-white/5 hover:border-samu/50 transition-all group">
              <div className="text-3xl md:text-4xl mb-6 group-hover:scale-125 transition-transform duration-300 inline-block">{service.icon}</div>
              <h3 className="text-lg md:text-xl font-bold uppercase mb-4 tracking-tight">{service.title}</h3>
              <p className="text-gray-300 font-light text-xs md:text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;