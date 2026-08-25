import { motion } from "motion/react";
import { Sparkles, ArrowDown, Send } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90; // Align for Navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-24 pb-16 bg-gradient-to-b from-bg-darker to-bg-main"
    >
      {/* --- Orbital / Ring Background Pattern --- */}
      <div id="hero-orbital-bg" className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        {/* Outer Ring */}
        <div className="absolute w-[800px] h-[800px] md:w-[1000px] md:h-[1000px] rounded-full border border-white/[0.02] animate-orbit-slow" />
        {/* Middle Ring with partial dash */}
        <div className="absolute w-[550px] h-[550px] md:w-[700px] md:h-[700px] rounded-full border border-dashed border-white/[0.04] animate-orbit-reverse" />
        {/* Inner Ring */}
        <div className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full border border-white/[0.05]" />
        
        {/* Glow Nodes on Ring */}
        <div className="absolute w-[450px] h-[450px] animate-orbit-slow flex items-start justify-center">
          <div className="w-2 h-2 rounded-full bg-accent-teal shadow-[0_0_12px_rgba(20,184,166,0.8)]" />
        </div>
        <div className="absolute w-[700px] h-[700px] animate-orbit-reverse flex items-end justify-center">
          <div className="w-3 h-3 rounded-full bg-accent-cyan shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
        </div>

        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-accent-teal/10 filter blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent-blue/10 filter blur-[120px] animate-pulse-slow" />

        {/* Decorative Stars / Particles */}
        <div className="absolute top-[15%] left-[20%] w-1.5 h-1.5 rounded-full bg-white opacity-40 animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute top-[45%] right-[15%] w-1 h-1 rounded-full bg-white opacity-30" />
        <div className="absolute bottom-[20%] left-[10%] w-2 h-2 rounded-full bg-accent-mint/40 opacity-50 animate-bounce" style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-[35%] right-[25%] w-1.5 h-1.5 rounded-full bg-white opacity-25" />
        <div className="absolute top-[25%] right-[30%] w-1 h-1 rounded-full bg-accent-cyan/60 animate-pulse" />
      </div>

      {/* --- Main Hero Content --- */}
      <div id="hero-content-wrapper" className="relative z-10 w-full max-w-3xl flex flex-col items-center">
        {/* Centered Avatar Card */}
        <motion.div
          id="hero-avatar-card"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-6"
        >
          {/* Avatar Outer Ring Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-teal via-accent-cyan to-accent-blue opacity-30 blur-md animate-pulse" />
          
          {/* Real Avatar Frame */}
          <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-bg-card border border-white/10 flex items-center justify-center text-3xl md:text-4xl shadow-inner select-none animate-float">
            <span>{personalInfo.avatarEmoji}</span>
            {/* Tiny accent decoration badge */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-bg-card border border-white/10 flex items-center justify-center shadow-lg">
              <Sparkles className="w-3 h-3 text-accent-teal animate-spin" style={{ animationDuration: '8s' }} />
            </div>
          </div>
        </motion.div>

        {/* Status Badge */}
        <motion.div
          id="hero-status-badge"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 px-4 py-1.5 rounded-full bg-bg-card/60 backdrop-blur-md border border-white/5 shadow-md flex items-center gap-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono font-medium tracking-wide text-slate-300">
            Available for new opportunities
          </span>
        </motion.div>

        {/* Main Serif Heading */}
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-white tracking-tight leading-[1.1] mb-6 max-w-2xl"
        >
          Building Digital Solutions <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal via-accent-cyan to-accent-blue font-serif italic font-medium">
            with Logic and Passion
          </span>
        </motion.h1>

        {/* Hero Description */}
        <motion.p
          id="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl mb-10 font-sans"
        >
          {personalInfo.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          id="hero-ctas"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <button
            id="hero-primary-btn"
            onClick={() => handleScrollTo("projects")}
            className="group relative w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-bg-darker font-semibold text-sm hover:bg-slate-100 shadow-xl hover:shadow-accent-teal/10 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer select-none"
          >
            Explore My Work
            <ArrowDown className="w-4 h-4 text-bg-darker group-hover:translate-y-1 transition-transform" />
          </button>

          {/* Secondary CTA */}
          <button
            id="hero-secondary-btn"
            onClick={() => handleScrollTo("contact")}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-bg-card/40 backdrop-blur-md border border-white/10 hover:border-white/20 text-slate-300 hover:text-white text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer select-none"
          >
            👋 Let's Connect
            <Send className="w-3.5 h-3.5 text-slate-400" />
          </button>
        </motion.div>
      </div>

      {/* Decorative page scroll bottom indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-slate-600 flex items-start justify-center p-1"
        >
          <div className="w-1 h-1.5 rounded-full bg-accent-teal" />
        </motion.div>
      </div>
    </section>
  );
}
