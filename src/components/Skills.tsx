import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Globe, Database, Cpu, Settings2, Sparkles } from 'lucide-react';
import { resumeData } from '../data';

type Category = 'languages' | 'web' | 'concepts' | 'tools';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<Category>('languages');

  const categories = [
    { id: 'languages' as Category, label: 'Languages', icon: Code2, description: 'Core programming syntax and computational logic' },
    { id: 'web' as Category, label: 'Web Stack', icon: Globe, description: 'UI layouts, styling, responsive structures, and frameworks' },
    { id: 'concepts' as Category, label: 'Core Concepts', icon: Cpu, description: 'Algorithmic logic, database paradigms, and ML models' },
    { id: 'tools' as Category, label: 'Tools', icon: Settings2, description: 'Version control, deployment pipelines, and developer tooling' },
  ];

  // Helper to retrieve skills for current active category
  const getSkillsForCategory = (cat: Category) => {
    switch (cat) {
      case 'languages':
        return resumeData.skills.languages.map(name => ({ name, level: 85, color: 'from-blue-500 to-cyan-500' }));
      case 'web':
        return resumeData.skills.web.map(name => ({ name, level: 80, color: 'from-blue-600 to-indigo-500' }));
      case 'concepts':
        return resumeData.skills.concepts.map(name => ({ name, level: 75, color: 'from-indigo-500 to-cyan-500' }));
      case 'tools':
        return resumeData.skills.tools.map(name => ({ name, level: 85, color: 'from-cyan-500 to-blue-500' }));
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#0A0A0B] relative overflow-hidden">
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="font-mono text-xs text-blue-400 uppercase tracking-widest mb-2 font-semibold">Toolset</span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-white tracking-tight">
            Technical Skills
          </h2>
          <div className="h-0.5 w-12 bg-blue-500 mt-3 rounded" />
        </div>

        {/* Layout: Sidebar Selector and Active Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Category Selector Buttons */}
          <div className="lg:col-span-4 space-y-3">
            <p className="font-sans text-slate-400 text-sm mb-4">
              Select a category to inspect my proficiency level, core understandings, and primary tech implementations:
            </p>
            <div className="flex flex-col gap-2">
              {categories.map((cat) => {
                const IconComp = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    id={`skill-cat-${cat.id}`}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-4 w-full p-4 rounded-2xl border text-left font-sans transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-blue-500/10 border-blue-500/35 text-blue-400 shadow-md shadow-blue-500/5'
                        : 'bg-slate-900/30 border-slate-900 text-slate-400 hover:border-slate-800 hover:text-slate-200'
                    }`}
                  >
                    <div className={`p-2.5 rounded-xl transition-colors ${
                      isActive ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-900 text-slate-400'
                    }`}>
                      <IconComp size={18} />
                    </div>
                    <div>
                      <div className="font-bold text-sm">{cat.label}</div>
                      <div className="text-2xs text-slate-500 truncate max-w-[180px] sm:max-w-[240px]">{cat.description}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detailed Skill Progress bars */}
          <div className="lg:col-span-8 bg-slate-900/30 border border-slate-900/80 p-8 rounded-3xl min-h-[300px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-2 text-slate-300 font-mono text-xs uppercase tracking-wider pb-2 border-b border-slate-900/80">
                  <Sparkles size={14} className="text-blue-400" />
                  <span>{categories.find(c => c.id === activeCategory)?.label} Proficiency</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  {getSkillsForCategory(activeCategory).map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center font-mono text-xs">
                        <span className="font-semibold text-slate-200">{skill.name}</span>
                        <span className="text-slate-500">{skill.level}%</span>
                      </div>
                      
                      {/* Progress Bar Track */}
                      <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: index * 0.05 }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Conceptual contextual footer */}
                <div className="pt-4 mt-4 border-t border-slate-900/80 flex items-start gap-3">
                  <div className="p-1.5 bg-blue-500/10 rounded-lg text-blue-400 mt-0.5">
                    <Database size={14} />
                  </div>
                  <p className="font-sans text-xs text-slate-500 leading-relaxed">
                    Practically validated through university curriculums, standard certifications (Infosys, NPTEL), and complete development portfolios. I place primary focus on clean coding styles and robust database schemas.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
