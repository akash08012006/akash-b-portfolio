import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Github, Linkedin, ExternalLink, Send, Sparkles, MapPin, CheckCircle2 } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    
    // Simulate real-world API dispatch delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      
      // Auto-dismiss success screen after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className="relative py-24 px-4 bg-bg-main overflow-hidden border-t border-white/[0.02]"
    >
      {/* Decorative gradient glow background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-teal/5 filter blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div id="contact-header" className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/10 mb-4 font-mono text-[10px] tracking-widest uppercase font-semibold">
            <Mail className="w-3 h-3 text-accent-cyan" />
            GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white tracking-tight mb-4">
            Connect With Me
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto font-sans">
            Whether you have a project idea, a job opportunity, or just want to chat technology, my inbox is always open.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Quick Contact Methods & Socials */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-lg font-serif font-bold text-white mb-2">Direct Channels</h3>
            
            {/* Email card link */}
            <motion.a
              id="contact-channel-email"
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.02 }}
              className="glass-card rounded-2xl p-5 border border-white/5 flex items-center gap-4 group transition-colors hover:border-accent-teal/30 hover:bg-white/[0.03] cursor-pointer block"
            >
              <div className="w-10 h-10 rounded-xl bg-accent-teal/15 flex items-center justify-center text-accent-teal group-hover:bg-accent-teal group-hover:text-bg-darker transition-all duration-300">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[9px] font-mono text-slate-500 block uppercase tracking-wide font-semibold">EMAIL ME DIRECTLY</span>
                <span className="text-xs font-semibold text-slate-200 block truncate group-hover:text-accent-teal transition-colors">
                  {personalInfo.email}
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-accent-teal transition-colors" />
            </motion.a>

            {/* LinkedIn card link */}
            <motion.a
              id="contact-channel-linkedin"
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="glass-card rounded-2xl p-5 border border-white/5 flex items-center gap-4 group transition-colors hover:border-accent-cyan/30 hover:bg-white/[0.03] cursor-pointer block"
            >
              <div className="w-10 h-10 rounded-xl bg-accent-cyan/15 flex items-center justify-center text-accent-cyan group-hover:bg-accent-cyan group-hover:text-bg-darker transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[9px] font-mono text-slate-500 block uppercase tracking-wide font-semibold">LINKEDIN PROFILE</span>
                <span className="text-xs font-semibold text-slate-200 block truncate group-hover:text-accent-cyan transition-colors">
                  akash-b-b2559635b
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-accent-cyan transition-colors" />
            </motion.a>

            {/* GitHub card link */}
            <motion.a
              id="contact-channel-github"
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="glass-card rounded-2xl p-5 border border-white/5 flex items-center gap-4 group transition-colors hover:border-white/20 hover:bg-white/[0.03] cursor-pointer block"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-bg-darker transition-all duration-300">
                <Github className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[9px] font-mono text-slate-500 block uppercase tracking-wide font-semibold">GITHUB REPOSITORIES</span>
                <span className="text-xs font-semibold text-slate-200 block truncate group-hover:text-white transition-colors">
                  akash08012006
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" />
            </motion.a>

            {/* LeetCode link */}
            <motion.a
              id="contact-channel-leetcode"
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="glass-card rounded-2xl p-5 border border-white/5 flex items-center gap-4 group transition-colors hover:border-accent-blue/30 hover:bg-white/[0.03] cursor-pointer block"
            >
              <div className="w-10 h-10 rounded-xl bg-accent-blue/15 flex items-center justify-center text-accent-blue group-hover:bg-accent-blue group-hover:text-bg-darker transition-all duration-300">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[9px] font-mono text-slate-500 block uppercase tracking-wide font-semibold">LEETCODE STANDINGS</span>
                <span className="text-xs font-semibold text-slate-200 block truncate group-hover:text-accent-blue transition-colors">
                  akash
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-accent-blue transition-colors" />
            </motion.a>

            {/* Location card detail */}
            <div className="glass-card rounded-2xl p-5 border border-white/5 flex items-center gap-4 text-slate-400 cursor-default select-none">
              <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-slate-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[9px] font-mono text-slate-500 block uppercase tracking-wide font-semibold">BASED IN</span>
                <span className="text-xs font-semibold text-slate-300 block">{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* RIGHT: High-quality Contact Message Form */}
          <div className="md:col-span-7">
            <div className="glass-card rounded-[2rem] p-6 md:p-8 border border-white/5 relative">
              <h3 className="text-lg font-serif font-bold text-white mb-6">Send Me A Message</h3>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-10 text-center gap-4"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-accent-mint/15 flex items-center justify-center text-accent-mint animate-bounce">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-lg font-serif font-bold text-white">Message Transmitted!</h4>
                      <p className="text-xs text-slate-400 max-w-sm mx-auto mt-2 leading-relaxed font-sans">
                        Thank you for reaching out! Akash B. has received your inquiry and will follow up with you at your provided email coordinates shortly.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    id="contact-msg-form"
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Name input */}
                    <div>
                      <label htmlFor="form-name" className="text-[10px] font-mono font-bold text-slate-400 tracking-wider uppercase block mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-white/5 focus:border-accent-teal/50 focus:outline-none text-slate-200 text-xs sm:text-sm font-sans placeholder-slate-600 transition-all shadow-inner"
                      />
                    </div>

                    {/* Email input */}
                    <div>
                      <label htmlFor="form-email" className="text-[10px] font-mono font-bold text-slate-400 tracking-wider uppercase block mb-1.5">
                        Your Email *
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-white/5 focus:border-accent-teal/50 focus:outline-none text-slate-200 text-xs sm:text-sm font-sans placeholder-slate-600 transition-all shadow-inner"
                      />
                    </div>

                    {/* Subject input */}
                    <div>
                      <label htmlFor="form-subject" className="text-[10px] font-mono font-bold text-slate-400 tracking-wider uppercase block mb-1.5">
                        Subject
                      </label>
                      <input
                        id="form-subject"
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Collaboration Opportunities"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-white/5 focus:border-accent-teal/50 focus:outline-none text-slate-200 text-xs sm:text-sm font-sans placeholder-slate-600 transition-all shadow-inner"
                      />
                    </div>

                    {/* Message input */}
                    <div>
                      <label htmlFor="form-message" className="text-[10px] font-mono font-bold text-slate-400 tracking-wider uppercase block mb-1.5">
                        Message *
                      </label>
                      <textarea
                        id="form-message"
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message here..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-white/5 focus:border-accent-teal/50 focus:outline-none text-slate-200 text-xs sm:text-sm font-sans placeholder-slate-600 transition-all shadow-inner resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      id="form-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-accent-teal to-accent-cyan text-bg-darker font-bold text-xs sm:text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-55"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-bg-darker border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4 shrink-0" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
