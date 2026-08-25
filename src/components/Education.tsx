import { motion } from "motion/react";
import { GraduationCap, Landmark, Calendar, Award, Star } from "lucide-react";
import { educationList } from "../data/portfolioData";

export default function Education() {
  return (
    <section 
      id="education" 
      className="relative py-24 px-4 bg-bg-main overflow-hidden"
    >
      {/* Decorative vector orbits in the background */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent-blue/5 filter blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div id="education-header" className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/10 mb-4 font-mono text-[10px] tracking-widest uppercase font-semibold">
            <GraduationCap className="w-3 h-3 text-accent-cyan" />
            ACADEMICS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white tracking-tight mb-4">
            Education Journey
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto font-sans">
            My academic foundation in engineering, business systems, and computer science.
          </p>
        </div>

        {/* Side by side / Stacked bento layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {educationList.map((edu, idx) => {
            const isLatest = idx === 0;
            return (
              <motion.div
                id={`education-card-${edu.id}`}
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`glass-card rounded-3xl p-6 border relative overflow-hidden flex flex-col justify-between ${
                  isLatest 
                    ? "border-accent-teal/30 shadow-xl shadow-accent-teal/5 bg-gradient-to-br from-bg-card to-accent-teal/5" 
                    : "border-white/5"
                }`}
              >
                {/* Visual Glow Highlight for latest degree */}
                {isLatest && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-teal/10 rounded-full filter blur-2xl pointer-events-none" />
                )}

                <div>
                  {/* Card Header Info */}
                  <div className="flex justify-between items-start gap-4 mb-6">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isLatest ? "bg-accent-teal/10 border border-accent-teal/20 text-accent-teal" : "bg-white/[0.02] border border-white/5 text-slate-400"
                    }`}>
                      <Landmark className="w-5 h-5" />
                    </div>
                    
                    {/* Duration badge */}
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono bg-white/[0.03] border border-white/5 text-slate-400">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      {edu.duration}
                    </span>
                  </div>

                  {/* Degree Name */}
                  <h3 className="text-lg md:text-xl font-serif font-bold text-white tracking-tight leading-snug mb-2">
                    {edu.degree}
                  </h3>

                  {/* Institution Name */}
                  <p className="text-slate-400 text-xs md:text-sm mb-6 flex items-center gap-1.5 font-sans">
                    <Star className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
                    {edu.institution}
                  </p>
                </div>

                {/* Score Section at the bottom */}
                <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500 tracking-wider uppercase font-semibold block">
                    ACADEMIC STATUS
                  </span>
                  <div className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border font-mono font-bold text-xs ${
                    isLatest 
                      ? "bg-accent-teal/15 border-accent-teal/30 text-accent-teal shadow-md" 
                      : "bg-white/[0.02] border-white/5 text-slate-300"
                  }`}>
                    <Award className="w-4 h-4 shrink-0" />
                    <span>{edu.score}</span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
