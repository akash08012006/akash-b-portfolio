import { motion } from "motion/react";
import { Briefcase, Calendar, Building, ChevronRight } from "lucide-react";
import { experiences } from "../data/portfolioData";

export default function Experience() {
  return (
    <section 
      id="experience" 
      className="relative py-24 px-4 bg-bg-main overflow-hidden"
    >
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent-teal/5 filter blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div id="experience-header" className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/10 mb-4 font-mono text-[10px] tracking-widest uppercase font-semibold">
            <Briefcase className="w-3 h-3 text-accent-cyan" />
            WORK EXPERIENCE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white tracking-tight mb-4">
            Experience & Growth
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto font-sans">
            A chronicle of my professional internships, hands-on learning, and collaboration history.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-3xl mx-auto pl-6 md:pl-8 border-l border-gradient-to-b border-accent-teal/20 via-accent-cyan/20 to-transparent space-y-12">
          
          {/* Vertical timeline line accent */}
          <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-accent-teal via-accent-cyan to-transparent pointer-events-none" />

          {experiences.map((exp, idx) => (
            <motion.div
              id={`experience-timeline-node-${exp.id}`}
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-bg-main border-2 border-accent-teal flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-ping absolute" />
                <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
              </div>

              {/* Card Container */}
              <div className="glass-card glass-card-hover rounded-2xl p-6 md:p-8 border border-white/5 relative">
                {/* Duration/Timeline Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2 text-slate-400 font-mono text-[10px] tracking-wider uppercase font-semibold bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/5 w-fit">
                    <Calendar className="w-3.5 h-3.5 text-accent-teal" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-accent-cyan font-mono font-bold">
                    <Building className="w-3.5 h-3.5 text-accent-cyan" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                {/* Role Title */}
                <h3 className="text-xl font-serif font-bold text-white tracking-tight mb-3">
                  {exp.role}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-4 font-sans">
                  {exp.description}
                </p>

                {/* Bullet details decoration */}
                <div className="flex items-center gap-1.5 text-accent-teal text-[11px] font-mono font-bold uppercase tracking-wider">
                  <span>Collaborative Session</span>
                  <ChevronRight className="w-3.5 h-3.5 text-accent-teal animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
