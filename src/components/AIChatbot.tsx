import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Bot, X, Send, BotOff, RefreshCw, Terminal, ArrowUpRight } from 'lucide-react';
import { ChatMessage } from '../types';

interface AIChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AIChatbot({ isOpen, onClose }: AIChatbotProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "Hello! I am Akash B's AI Clone. Ask me anything about my academic projects (FixMyCity, Edusphere), internships at Brainery Spot, technical skill stacks, or certifications!"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const presets = [
    "What projects did Akash build?",
    "What are his core technical skills?",
    "Where did he do his internships?",
    "Tell me about his college grade."
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMessage: ChatMessage = { role: 'user', text: textToSend };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setLoading(true);

    try {
      const historyToSend = [...messages, userMessage];
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: historyToSend }),
      });
      
      const data = await res.json();
      if (res.ok && data.text) {
        setMessages((prev) => [...prev, { role: 'model', text: data.text }]);
      } else {
        setMessages((prev) => [...prev, {
          role: 'model',
          text: "I had a connection hitch, but let me tell you that Akash is a high-grade B.Tech CSBS student proficient in Java, Python, SQL, and Full-Stack frameworks!"
        }]);
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, {
        role: 'model',
        text: "My neural networks temporarily offline! You can contact Akash directly at akashvsb6@gmail.com for inquiries."
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          id="ai-chatbot-floating-btn"
          onClick={() => {}} // Controlled by App state
          className="hidden" // We'll manage trigger centrally via header & button
        />
      )}

      {/* Slide-out Chat Panel Panel */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden pointer-events-none">
            {/* Modal backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm pointer-events-auto"
            />

            {/* Chat Drawer Side Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[#0F0F11] border-l border-slate-800 pointer-events-auto flex flex-col shadow-2xl"
              id="ai-chat-panel"
            >
              {/* Chat Header */}
              <div className="p-5 border-b border-slate-800 bg-[#0F0F11]/80 backdrop-blur-md flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/10 text-blue-400 rounded-xl">
                    <Bot size={18} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-slate-200 text-sm">Akash B (AI Assistant)</h4>
                    <span className="font-mono text-3xs text-blue-400 flex items-center gap-1 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                      Gemini 3.5-Flash Powered
                    </span>
                  </div>
                </div>
                <button
                  id="close-ai-chat-btn"
                  onClick={onClose}
                  className="p-1.5 rounded-lg bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-850 cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Chat messages viewport */}
              <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-thin scrollbar-thumb-slate-800"
              >
                {messages.map((m, idx) => {
                  const isBot = m.role === 'model';
                  return (
                    <div
                      key={idx}
                      className={`flex ${isBot ? 'justify-start' : 'justify-end'} items-start gap-2.5`}
                    >
                      {isBot && (
                        <div className="p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
                          <Bot size={14} />
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] rounded-2xl p-4 text-sm font-sans leading-relaxed ${
                          isBot
                            ? 'bg-slate-950 text-slate-300 border border-slate-850/40 rounded-tl-none'
                            : 'bg-blue-500 text-slate-950 font-bold rounded-tr-none shadow-md shadow-blue-500/5'
                        }`}
                      >
                        {/* Simplistic paragraph splitter or list helper for markdown-like readability */}
                        <div className="space-y-2 whitespace-pre-wrap">
                          {m.text}
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Loading indicator */}
                {loading && (
                  <div className="flex justify-start items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                      <Bot size={14} />
                    </div>
                    <div className="bg-slate-950 border border-slate-850/40 rounded-2xl rounded-tl-none p-4 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Presets Panel */}
              {messages.length === 1 && (
                <div className="px-5 py-3 border-t border-slate-850/50 bg-slate-950/20 space-y-2">
                  <span className="font-mono text-3xs text-slate-500 uppercase tracking-widest block">Quick Suggestions</span>
                  <div className="grid grid-cols-1 gap-2">
                    {presets.map((p, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(p)}
                        className="flex items-center justify-between text-left px-3 py-2 bg-slate-950 hover:bg-slate-850 border border-slate-850 text-slate-300 hover:text-blue-400 rounded-xl text-xs font-sans transition-colors cursor-pointer group"
                      >
                        <span>{p}</span>
                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Chat Input form footer */}
              <div className="p-5 border-t border-slate-800 bg-[#0F0F11]/60 flex items-center gap-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend(inputValue)}
                  className="flex-1 bg-slate-950 border border-slate-850 focus:border-blue-500/30 rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none"
                  placeholder="Ask me a question about Akash B..."
                  disabled={loading}
                />
                <button
                  id="send-ai-chat-btn"
                  onClick={() => handleSend(inputValue)}
                  disabled={loading || !inputValue.trim()}
                  className="p-3 bg-blue-500 hover:bg-blue-400 disabled:opacity-50 text-slate-950 rounded-xl cursor-pointer transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
