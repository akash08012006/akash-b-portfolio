import { motion } from "motion/react";
import { 
  User, MapPin, GraduationCap, School, Award, Calendar, 
  Code2, Coffee, Database, FileCode, Layers, GitBranch, Github, Server, Cpu
} from "lucide-react";
import { personalInfo, toolbox } from "../data/portfolioData";

export default function About() {
  // Helper to render responsive modern icons for toolbox items
  const renderToolIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "java":
        return <Coffee className="w-4 h-4 text-amber-500" />;
      case "python":
        return <Code2 className="w-4 h-4 text-sky-400" />;
      case "sql":
        return <Database className="w-4 h-4 text-emerald-400" />;
      case "html":
        return <FileCode className="w-4 h-4 text-orange-400" />;
      case "css":
        return <FileCode className="w-4 h-4 text-blue-400" />;
      case "react.js":
        return <Layers className="w-4 h-4 text-cyan-400 animate-pulse" style={{ animationDuration: '4s' }} />;
      case "node.js":
        return <Cpu className="w-4 h-4 text-green-400" />;
      case "express.js":
        return <Server className="w-4 h-4 text-gray-400" />;
      case "mongodb":
        return <Database className="w-4 h-4 text-emerald-500" />;
      case "git":
        return <GitBranch className="w-4 h-4 text-rose-400" />;
      case "github":
        return <Github className="w-4 h-4 text-white" />;
      default:
        return <Code2 className="w-4 h-4 text-accent-teal" />;
    }
  };

  return (
    <section 
      id="about" 
      className="relative py-24 px-4 bg-bg-darker overflow-hidden"
    >
      {/* Decorative orbital elements in the background */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-accent-teal/5 filter blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-blue/5 filter blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div id="about-header" className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-teal/10 text-accent-teal border border-accent-teal/10 mb-4 font-mono text-[10px] tracking-widest uppercase font-semibold">
            <User className="w-3 h-3 text-accent-teal" />
            ABOUT ME
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white tracking-tight mb-4">
            A Glimpse Into My World
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto font-sans">
            Learn more about who I am, what I do, and what inspires me.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Toolbox */}
          <motion.div
            id="about-toolbox-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 glass-card rounded-3xl p-6 md:p-8 flex flex-col justify-between h-full border border-white/5"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">✨</span>
                <h3 className="text-xl font-serif font-bold text-white">My Toolbox</h3>
              </div>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-8 font-sans">
                Explore the technologies and tools I use to build practical, scalable, and meaningful software solutions.
              </p>
            </div>

            {/* Badges Layout */}
            <div className="flex flex-wrap gap-2.5">
              {toolbox.map((tool) => (
                <motion.div
                  key={tool.name}
                  whileHover={{ scale: 1.05, borderColor: "rgba(20, 184, 166, 0.4)", backgroundColor: "rgba(20, 184, 166, 0.05)" }}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.02] border border-white/5 shadow-inner transition-colors cursor-default select-none"
                >
                  {renderToolIcon(tool.name)}
                  <span className="text-[11px] md:text-xs font-mono font-medium text-slate-300">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Personal Information Card */}
          <motion.div
            id="about-info-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 relative group"
          >
            {/* Soft border glowing animation effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-accent-teal via-accent-cyan to-accent-blue opacity-10 blur-xl group-hover:opacity-15 transition-opacity duration-500" />
            
            <div className="relative glass-card rounded-3xl p-6 md:p-8 border border-white/5 flex flex-col gap-6">
              <h3 className="text-lg font-serif font-bold text-white border-b border-white/5 pb-3">
                Identity Profile
              </h3>

              {/* Data Items */}
              <div className="space-y-4">
                
                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent-teal/10 border border-accent-teal/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-accent-teal" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block">LOCATION</span>
                    <span className="text-xs font-semibold text-slate-200">{personalInfo.location}</span>
                  </div>
                </div>

                {/* Degree */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-4 h-4 text-accent-cyan" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block">DEGREE</span>
                    <span className="text-xs font-semibold text-slate-200">{personalInfo.degree}</span>
                  </div>
                </div>

                {/* Institution */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center shrink-0">
                    <School className="w-4 h-4 text-accent-blue" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block">INSTITUTION</span>
                    <span className="text-xs font-semibold text-slate-200">{personalInfo.college}</span>
                  </div>
                </div>

                {/* CGPA */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent-mint/10 border border-accent-mint/20 flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4 text-accent-mint" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block">ACADEMIC STANDING</span>
                    <span className="text-xs font-bold text-accent-mint">CGPA: {personalInfo.cgpa}</span>
                  </div>
                </div>

                {/* Academic Timeline */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4 text-slate-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block">TIMELINE</span>
                    <span className="text-xs font-semibold text-slate-300">{personalInfo.academicYears}</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
