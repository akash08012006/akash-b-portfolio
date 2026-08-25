import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import ContactCTA from "./components/ContactCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // ScrollSpy to sync scroll position with the navigation active state
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "about", "experience", "contact"];
      const scrollPosition = window.scrollY + 180; // trigger offset for smooth transition

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="portfolio-app-root" className="bg-bg-darker text-slate-200 selection:bg-accent-teal selection:text-bg-darker min-h-screen">
      {/* Premium Floating Navigation Pill */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Core Layout Sections */}
      <main id="portfolio-main-content">
        {/* Full-Screen Space/Orbital Hero Area */}
        <Hero />

        {/* Featured Projects with filter options */}
        <Projects />

        {/* About Me & Toolbox section */}
        <About />

        {/* Experience vertical timeline */}
        <Experience />

        {/* Certification grid */}
        <Certifications />

        {/* Education Timeline */}
        <Education />

        {/* Connect Action gradient strip */}
        <ContactCTA />

        {/* Full Interactive Contact Form */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
