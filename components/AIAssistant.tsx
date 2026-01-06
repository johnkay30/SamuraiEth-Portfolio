
import React, { useState, useRef, useEffect } from 'react';
import { SamuraiConsultant } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Greeting. I am the Samurai.eth strategist. How can we assist your visual conquest today?' }
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
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
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
    <section id="about" className="py-24 px-6 bg-[#080808] relative">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="w-16 h-16 bg-samurai flex items-center justify-center rounded-full mb-6 shadow-[0_0_20px_rgba(255,0,0,0.5)]">
            <span className="text-3xl">👺</span>
          </div>
          <h2 className="text-4xl font-black uppercase font-jp mb-4">About <span className="text-samurai">Samurai.eth</span></h2>
          <p className="text-gray-400 font-light max-w-2xl">
            We are a high-performance visual engineering studio dedicated to the Web3 ecosystem. 
            Use our AI strategist below to scope your next mission and refine your content strategy.
          </p>
        </div>

        <div className="bg-[#0f0f0f] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
          <div className="p-4 bg-white/5 border-b border-white/10 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Samurai System Online</span>
          </div>

          <div 
            ref={scrollRef}
            className="h-[400px] overflow-y-auto p-6 flex flex-col gap-6 scrollbar-thin scrollbar-thumb-samurai"
          >
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 text-sm ${
                  msg.role === 'user' 
                    ? 'bg-samurai text-white rounded-l-xl rounded-tr-xl' 
                    : 'bg-white/10 text-gray-300 rounded-r-xl rounded-tl-xl font-light'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/10 p-4 rounded-r-xl rounded-tl-xl flex gap-1">
                  <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-black border-t border-white/10 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Query the Samurai strategist..."
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-samurai transition-colors"
            />
            <button 
              onClick={handleSend}
              disabled={isTyping}
              className="px-6 py-2 bg-samurai hover:bg-red-700 text-white rounded-lg text-sm font-bold transition-colors disabled:opacity-50"
            >
              SEND
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
