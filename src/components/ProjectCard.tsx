import { motion } from "motion/react";
import { FolderGit2, ArrowRight, CheckCircle2, Terminal, Network, Pill, Bell, ListTodo } from "lucide-react";
import { Project } from "../data/portfolioData";

interface ProjectCardProps {
  project: Project;
  index: number;
  key?: string;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  // Render a beautiful, custom CSS-based mockup for each project based on its ID
  const renderMockup = (id: string) => {
    switch (id) {
      case "fixmycity":
        return (
          <div className="relative w-full h-48 md:h-64 bg-slate-950/80 rounded-2xl border border-white/5 overflow-hidden flex flex-col p-3 font-mono text-[10px] text-slate-400 shadow-inner">
            {/* Window bar */}
            <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-slate-500 text-[9px] font-mono">fixmycity-ml-classifier.py</span>
              <Terminal className="w-3 h-3 text-accent-teal" />
            </div>
            
            {/* Dashboard content simulator */}
            <div className="flex-1 flex flex-col gap-2">
              <div className="bg-white/5 p-2 rounded border border-white/5 flex justify-between items-center">
                <span className="text-slate-300 font-semibold">Incoming Citizen Report:</span>
                <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold animate-pulse">Unresolved</span>
              </div>
              <div className="text-[9px] text-slate-500 leading-tight">
                "Pothole identified on 5th main avenue causing traffic blocks..."
              </div>
              <div className="bg-bg-card p-2 rounded border border-accent-teal/10 flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5 text-accent-teal font-semibold">
                  <span>🤖 AI Classification Engine Output:</span>
                </div>
                <div className="grid grid-cols-2 gap-1 font-mono text-[9px]">
                  <div className="bg-slate-900 px-1.5 py-0.5 rounded flex justify-between">
                    <span>Category:</span>
                    <span className="text-accent-cyan">Roadways</span>
                  </div>
                  <div className="bg-slate-900 px-1.5 py-0.5 rounded flex justify-between">
                    <span>Confidence:</span>
                    <span className="text-accent-mint">98.4%</span>
                  </div>
                  <div className="bg-slate-900 px-1.5 py-0.5 rounded flex justify-between">
                    <span>Priority:</span>
                    <span className="text-amber-400">High (P2)</span>
                  </div>
                  <div className="bg-slate-900 px-1.5 py-0.5 rounded flex justify-between">
                    <span>Routing:</span>
                    <span className="text-accent-blue">Dept_Civil</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-white/5 pt-1.5 mt-1 text-[8px] text-accent-teal flex justify-between">
              <span>Status: Listening...</span>
              <span>v1.2.0</span>
            </div>
          </div>
        );

      case "railwaynav":
        return (
          <div className="relative w-full h-48 md:h-64 bg-slate-950/80 rounded-2xl border border-white/5 overflow-hidden flex flex-col p-4 font-mono text-[10px] text-slate-400 shadow-inner justify-between">
            {/* Header */}
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="text-accent-cyan font-bold tracking-wider flex items-center gap-1.5">
                <Network className="w-3.5 h-3.5 text-accent-cyan" />
                PATH_FINDER_NETWORK
              </span>
              <span className="text-slate-500 text-[8px]">DIJKSTRA_OPTIMIZED</span>
            </div>

            {/* Visual Node Graph Grid */}
            <div className="flex-1 relative my-2 border border-dashed border-white/5 rounded-lg overflow-hidden bg-bg-card/40 flex items-center justify-center">
              {/* Overlay lines and nodes */}
              <svg className="absolute inset-0 w-full h-full opacity-65">
                <line x1="20%" y1="25%" x2="50%" y2="50%" stroke="#14b8a6" strokeWidth="1.5" strokeDasharray="3,3" />
                <line x1="50%" y1="50%" x2="80%" y2="30%" stroke="#06b6d4" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="#3b82f6" strokeWidth="1.5" />
                <line x1="20%" y1="25%" x2="30%" y2="75%" stroke="#64748b" strokeWidth="1" />
                <line x1="30%" y1="75%" x2="75%" y2="75%" stroke="#64748b" strokeWidth="1" />
              </svg>

              {/* Node A (Platform 1) */}
              <div className="absolute top-[20%] left-[15%] flex flex-col items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-accent-teal border border-white/20 shadow-[0_0_8px_#14b8a6]" />
                <span className="text-[7px] text-slate-500 mt-1">Platform_1</span>
              </div>

              {/* Node B (Ticket Counter) */}
              <div className="absolute top-[70%] left-[25%] flex flex-col items-center">
                <span className="w-2 h-2 rounded-full bg-slate-500" />
                <span className="text-[7px] text-slate-500 mt-1">Lobby_Desk</span>
              </div>

              {/* Node C (Central Interchange) */}
              <div className="absolute top-[45%] left-[45%] flex flex-col items-center">
                <span className="w-3.5 h-3.5 rounded-full bg-accent-cyan border border-white/20 shadow-[0_0_10px_#06b6d4] flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                </span>
                <span className="text-[7px] text-accent-cyan mt-1 font-bold">Interchange_B</span>
              </div>

              {/* Node D (Platform 4) */}
              <div className="absolute top-[25%] left-[75%] flex flex-col items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-accent-cyan border border-white/20 shadow-[0_0_8px_#06b6d4]" />
                <span className="text-[7px] text-slate-500 mt-1">Platform_4</span>
              </div>

              {/* Node E (Exit Gate 3) */}
              <div className="absolute top-[70%] left-[70%] flex flex-col items-center">
                <span className="w-2 h-2 rounded-full bg-accent-blue" />
                <span className="text-[7px] text-slate-500 mt-1">Exit_Gate_3</span>
              </div>
            </div>

            {/* Metrics footer */}
            <div className="grid grid-cols-3 gap-2 text-[8px] bg-white/5 p-1.5 rounded border border-white/5">
              <div>
                <span className="text-slate-500">OPTIMAL_ROUTE:</span>
                <p className="text-accent-teal font-bold">A → C → D</p>
              </div>
              <div>
                <span className="text-slate-500">LATENCY:</span>
                <p className="text-white">0.024 ms</p>
              </div>
              <div>
                <span className="text-slate-500">QUEUE_LOAD:</span>
                <p className="text-accent-mint">MINIMAL</p>
              </div>
            </div>
          </div>
        );

      case "mediremind":
        return (
          <div className="relative w-full h-48 md:h-64 bg-slate-950/80 rounded-2xl border border-white/5 overflow-hidden flex flex-col p-4 font-sans text-xs text-slate-300 shadow-inner justify-between">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
              <div className="flex items-center gap-1.5">
                <Pill className="w-4 h-4 text-accent-teal" />
                <span className="font-semibold text-[11px] text-white">MediRemind Dashboard</span>
              </div>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono border border-emerald-500/20">Active</span>
            </div>

            {/* Medicine schedule rows */}
            <div className="flex-1 my-2 flex flex-col gap-1.5 overflow-hidden">
              {/* Taken */}
              <div className="bg-bg-card/60 px-2.5 py-1.5 rounded-lg border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                  <span className="text-[10px] font-semibold text-slate-200">Metformin 500mg</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[8px] font-mono text-slate-500">After Food · 8:00 AM</span>
                  <span className="text-[8px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">Taken</span>
                </div>
              </div>
              {/* Due */}
              <div className="bg-bg-card/60 px-2.5 py-1.5 rounded-lg border border-accent-teal/15 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell className="w-2.5 h-2.5 text-accent-teal animate-pulse" />
                  <span className="text-[10px] font-semibold text-slate-200">Atorvastatin 10mg</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[8px] font-mono text-slate-500">Before Food · 2:00 PM</span>
                  <span className="text-[8px] px-1.5 py-0.5 rounded bg-accent-teal/10 text-accent-teal border border-accent-teal/20 animate-pulse">Due</span>
                </div>
              </div>
              {/* Missed */}
              <div className="bg-bg-card/60 px-2.5 py-1.5 rounded-lg border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-400/70" />
                  <span className="text-[10px] font-semibold text-slate-400">Vitamin D3</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[8px] font-mono text-slate-500">Night · 9:00 PM</span>
                  <span className="text-[8px] px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">Missed</span>
                </div>
              </div>
            </div>

            {/* Footer stats */}
            <div className="flex items-center justify-between text-[9px] text-slate-500 font-mono border-t border-white/5 pt-1.5">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                OCR Processed · 3 medicines
              </span>
              <span className="text-accent-teal">React.js · Vercel</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-48 md:h-64 bg-slate-950/80 rounded-2xl border border-white/5 flex items-center justify-center p-4">
            <FolderGit2 className="w-12 h-12 text-slate-700 animate-pulse" />
          </div>
        );
    }
  };

  return (
    <motion.div
      id={`project-card-${project.id}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card glass-card-hover rounded-3xl p-6 md:p-8 flex flex-col lg:flex-row gap-8 items-stretch"
    >
      {/* Left side: Project Details */}
      <div id={`project-details-${project.id}`} className="flex-1 flex flex-col justify-between">
        <div>
          {/* Category Pill */}
          <div className="mb-4">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-semibold tracking-wider uppercase bg-accent-teal/10 text-accent-teal border border-accent-teal/20">
              {project.category}
            </span>
          </div>

          {/* Title & Subtitle */}
          <h3 className="text-xl md:text-2xl font-serif font-bold text-white tracking-tight mb-1">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="text-xs md:text-sm font-mono text-accent-cyan mb-4 font-semibold">
              {project.subtitle}
            </p>
          )}

          {/* Description */}
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Highlights */}
          <div className="mb-6 space-y-2">
            <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">Key Highlights:</p>
            <ul className="space-y-1.5">
              {project.highlights.map((highlight, hIdx) => (
                <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-accent-teal shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technologies used & Button */}
        <div>
          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/5 text-[10px] font-mono text-slate-400"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* View Project Button */}
          <a
            id={`project-btn-link-${project.id}`}
            href={project.buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white hover:text-accent-teal transition-colors group"
          >
            {project.buttonText}
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Right side: Interactive Visual Mockup */}
      <div id={`project-preview-${project.id}`} className="lg:w-[45%] flex items-center justify-center select-none">
        <div className="w-full h-full min-h-[200px] flex items-center justify-center bg-bg-card/30 p-2 rounded-2xl border border-white/[0.02]">
          {renderMockup(project.id)}
        </div>
      </div>
    </motion.div>
  );
}
