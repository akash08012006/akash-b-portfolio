import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { navigationItems, personalInfo } from "../data/portfolioData";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (id: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 90; // Adjust for the floating nav height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 transition-all duration-300">
      {/* Container with relative sizing */}
      <div 
        id="navbar-container"
        className={`flex items-center justify-between w-full max-w-4xl px-4 py-2.5 transition-all duration-500 rounded-full md:px-6 ${
          scrolled 
            ? "bg-bg-darker/60 backdrop-blur-xl border border-white/10 shadow-2xl shadow-accent-teal/5" 
            : "bg-bg-darker/30 backdrop-blur-md border border-white/5"
        }`}
      >
        {/* Logo/Name */}
        <button 
          id="nav-logo"
          onClick={() => scrollToSection("home")}
          className="text-sm font-mono font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-accent-cyan cursor-pointer"
        >
          {personalInfo.name || "AKASH B"}
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-1">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                id={`nav-item-${item.id}`}
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-1.5 text-xs font-medium tracking-wide transition-colors duration-300 cursor-pointer rounded-full select-none"
              >
                {/* Active highlight background pill using Framer Motion layoutId */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span
                  className={`transition-colors duration-300 ${
                    isActive ? "text-bg-darker font-semibold" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Contact CTA in Nav (Desktop) */}
        <div id="nav-cta" className="hidden md:block">
          <button
            id="nav-connect-btn"
            onClick={() => scrollToSection("contact")}
            className="px-4 py-1.5 text-xs font-mono font-medium rounded-full border border-accent-teal/30 text-accent-teal hover:bg-accent-teal hover:text-bg-darker transition-all duration-300 cursor-pointer"
          >
            Connect
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="p-1.5 rounded-full md:hidden text-slate-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu slide-down */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu-container"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 p-4 rounded-3xl bg-bg-darker/95 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col gap-2 md:hidden"
          >
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  id={`mobile-nav-item-${item.id}`}
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-5 py-3 text-sm font-medium rounded-2xl transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    isActive 
                      ? "bg-white text-bg-darker font-semibold" 
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-bg-darker" />
                  )}
                </button>
              );
            })}
            <button
              id="mobile-nav-connect-btn"
              onClick={() => scrollToSection("contact")}
              className="w-full text-center mt-2 px-5 py-3 text-sm font-semibold rounded-2xl bg-gradient-to-r from-accent-teal to-accent-cyan text-bg-darker hover:opacity-90 transition-opacity cursor-pointer"
            >
              👋 Let's Connect
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
