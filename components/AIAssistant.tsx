import React, { useState, useRef, useEffect } from 'react';
import { SamuraiConsultant } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Greeting. I am the SAMU strategist. How can we assist your visual conquest today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const consultantRef = useRef<SamuraiConsultant | null>(null);

  useEffect(() => {
    consultantRef.current = new SamuraiConsultant();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    if (consultantRef.current) {
      const response = await consultantRef.current.sendMessage(userMessage);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    }
    
    setIsTyping(false);
  };

  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 bg-[#080808] relative">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-8 md:mb-12 text-center">
          <h2 className="text-2xl md:text-4xl font-black uppercase font-jp mb-3 md:mb-4">The <span className="text-samurai">SAMU</span> Strategy</h2>
          <p className="text-xs md:text-base text-gray-500 font-light max-w-2xl px-2 leading-relaxed">
            A crypto-native video creator helping brands and creators turn podcasts, streams, and audio into compelling visual stories.
          </p>
        </div>

        <div className="bg-[#0f0f0f] border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col h-[500px] md:h-auto">
          <div className="p-3 md:p-4 bg-white/5 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-samurai animate-pulse"></div>
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white/60">SAMU System Online</span>
            </div>
            <span className="text-[8px] uppercase tracking-widest text-white/30 font-bold hidden sm:block">Tactical Analysis Engine</span>
          </div>

          <div 
            ref={scrollRef}
            className="flex-1 min-h-[300px] md:h-[400px] overflow-y-auto p-4 md:p-6 flex flex-col gap-4 md:gap-6 scrollbar-thin scrollbar-thumb-samurai"
          >
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] md:max-w-[80%] p-3.5 md:p-4 text-xs md:text-sm shadow-lg ${
                  msg.role === 'user' 
                    ? 'bg-samurai text-white rounded-2xl rounded-tr-none' 
                    : 'bg-white/5 text-gray-300 rounded-2xl rounded-tl-none border border-white/5'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/5 flex gap-1.5">
                  <div className="w-1.5 h-1.5 bg-samurai rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-samurai rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-samurai rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-3 md:p-5 bg-black border-t border-white/10 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Query the SAMU strategist..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs md:text-sm focus:outline-none focus:border-samurai transition-colors text-white placeholder:text-gray-600"
            />
            <button 
              onClick={handleSend}
              disabled={isTyping}
              className="w-12 h-12 md:w-auto md:px-8 bg-samurai hover:bg-[#2d558a] text-white rounded-xl text-xs md:text-sm font-black transition-all disabled:opacity-50 flex items-center justify-center shrink-0 active:scale-95"
            >
              <span className="hidden md:inline">TRANSMIT</span>
              <svg className="w-5 h-5 md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;