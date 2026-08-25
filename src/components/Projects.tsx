import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Code2, FolderGit } from "lucide-react";
import { projects } from "../data/portfolioData";
import ProjectCard from "./ProjectCard";

type CategoryFilter = "Professional" | "Academic" | "Others";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<CategoryFilter>("Academic");

  // Filter projects based on tab
  const filteredProjects = projects.filter(p => p.category === activeTab);

  const tabs: CategoryFilter[] = ["Professional", "Academic", "Others"];

  return (
    <section 
      id="projects" 
      className="relative py-24 px-4 bg-bg-main overflow-hidden"
    >
      {/* Decorative background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-cyan/5 filter blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-blue/5 filter blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div id="projects-header" className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/10 mb-4 font-mono text-[10px] tracking-widest uppercase font-semibold">
            <Code2 className="w-3 h-3 text-accent-cyan" />
            Portfolio Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto font-sans">
            Turning ideas into practical software solutions and meaningful digital experiences.
          </p>
        </div>

        {/* Segmented Filter Control */}
        <div id="projects-tabs-container" className="flex justify-center mb-12">
          <div className="inline-flex bg-bg-card border border-white/5 p-1 rounded-full shadow-inner">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  id={`project-tab-${tab.toLowerCase()}`}
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="relative px-5 py-2 text-xs font-semibold tracking-wide rounded-full transition-colors duration-300 cursor-pointer select-none"
                >
                  {/* Sliding active tab indicator using layoutId */}
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectTab"
                      className="absolute inset-0 bg-white rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      isActive ? "text-bg-darker font-bold" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {tab}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Listing / Grid with Transitions */}
        <div id="projects-grid" className="space-y-12">
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-12"
              >
                {filteredProjects.map((project, idx) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    index={idx} 
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key={`${activeTab}-empty`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-3xl p-10 md:p-16 text-center max-w-2xl mx-auto border border-white/5 flex flex-col items-center justify-center gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center mb-2">
                  <FolderGit className="w-6 h-6 text-slate-500 animate-pulse" />
                </div>
                <h4 className="text-lg font-serif font-bold text-white">
                  {activeTab} Projects Underway
                </h4>
                <p className="text-xs text-slate-400 max-w-md leading-relaxed font-sans">
                  I am currently structuring and documenting my {activeTab.toLowerCase()} project experiences. 
                  In the meantime, feel free to explore my featured academic projects!
                </p>
                <button
                  onClick={() => setActiveTab("Academic")}
                  className="mt-2 text-xs font-mono font-bold text-accent-teal hover:underline flex items-center gap-1 cursor-pointer"
                >
                  View Academic Projects <Sparkles className="w-3 h-3 text-accent-teal" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
