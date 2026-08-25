import { motion } from "motion/react";
import { ArrowUpRight, MessageSquareCode } from "lucide-react";

export default function ContactCTA() {
  const handleScrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 90;
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
    <section id="contact-cta" className="relative py-16 px-4 bg-bg-darker overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Large Gradient Card */}
        <motion.div
          id="gradient-cta-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[2.5rem] bg-gradient-to-br from-accent-mint via-accent-teal to-accent-cyan p-8 md:p-14 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 group"
        >
          {/* Circular vector overlay inside the card to add visual depth */}
          <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full border border-white/10 group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full border border-white/5 group-hover:scale-105 transition-transform duration-500" />

          {/* Text Info */}
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white border border-white/5 mb-4 font-mono text-[9px] tracking-widest uppercase font-semibold">
              <MessageSquareCode className="w-3.5 h-3.5 text-white" />
              LET'S PARTNER
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-white tracking-tight mb-4 leading-tight">
              Let's build something <br />
              meaningful together
            </h2>
            <p className="text-white/80 text-xs sm:text-sm font-medium leading-relaxed font-sans">
              Have an idea, opportunity, or project in mind? Let's connect and create practical, scalable, and intelligent technology solutions together.
            </p>
          </div>

          {/* Action Button */}
          <div className="relative z-10 shrink-0 w-full md:w-auto">
            <button
              id="cta-contact-btn"
              onClick={handleScrollToContact}
              className="group w-full md:w-auto px-8 py-4 rounded-full bg-slate-950 text-white font-bold text-xs sm:text-sm hover:bg-slate-900 border border-white/5 hover:border-white/20 transition-all duration-300 shadow-xl flex items-center justify-center gap-2 cursor-pointer select-none"
            >
              Contact Me
              <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
