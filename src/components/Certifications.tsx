import { motion } from "motion/react";
import { Award, Cpu, Cloud, BrainCircuit, Database, ShieldCheck } from "lucide-react";
import { certifications } from "../data/portfolioData";

export default function Certifications() {
  // Helper to map icon names to Lucide react icons
  const renderCertIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu":
        return <Cpu className="w-5 h-5 text-accent-teal" />;
      case "Cloud":
        return <Cloud className="w-5 h-5 text-accent-cyan" />;
      case "BrainCircuit":
        return <BrainCircuit className="w-5 h-5 text-accent-blue" />;
      case "Database":
        return <Database className="w-5 h-5 text-accent-mint" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-accent-teal" />;
    }
  };

  return (
    <section 
      id="certifications" 
      className="relative py-20 px-4 bg-bg-darker overflow-hidden"
    >
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-accent-cyan/5 filter blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div id="certifications-header" className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-teal/10 text-accent-teal border border-accent-teal/10 mb-4 font-mono text-[10px] tracking-widest uppercase font-semibold">
            <Award className="w-3 h-3 text-accent-teal" />
            ACHIEVEMENTS
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black text-white tracking-tight mb-3">
            Certifications & Learning
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto font-sans">
            Credentials and specialized courses completed during my academic journey.
          </p>
        </div>

        {/* Compact grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, idx) => (
            <motion.div
              id={`certification-card-${cert.id}`}
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ 
                scale: 1.03, 
                borderColor: "rgba(6, 182, 212, 0.3)", 
                boxShadow: "0 8px 24px -8px rgba(6, 182, 212, 0.2)" 
              }}
              className="glass-card rounded-2xl p-5 border border-white/5 flex flex-col justify-between h-40 transition-all duration-300 group cursor-pointer"
            >
              {/* Icon Container */}
              <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-3 group-hover:bg-accent-teal/10 group-hover:border-accent-teal/20 transition-colors">
                {renderCertIcon(cert.iconName)}
              </div>

              {/* Title & Issuer */}
              <div className="space-y-1">
                <h3 className="text-xs sm:text-sm font-bold text-slate-100 leading-tight tracking-tight group-hover:text-white transition-colors line-clamp-2">
                  {cert.name}
                </h3>
                <p className="text-[10px] font-mono text-slate-400 group-hover:text-accent-cyan transition-colors">
                  {cert.issuer}
                </p>
              </div>

              {/* Subtle visual completion flag */}
              <div className="mt-2 text-right">
                <span className="text-[8px] font-mono tracking-wider text-slate-500 uppercase font-semibold">
                  Verified ✓
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
