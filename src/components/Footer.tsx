import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const links = [
    { label: "GitHub", url: personalInfo.github },
    { label: "LeetCode", url: personalInfo.leetcode },
    { label: "LinkedIn", url: personalInfo.linkedin },
    { label: "Email", url: `mailto:${personalInfo.email}` }
  ];

  return (
    <footer id="footer" className="bg-bg-darker border-t border-white/5 py-12 px-4">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Copyright */}
        <p className="text-slate-500 font-mono text-[10px] tracking-wider text-center sm:text-left">
          © 2026 Akash B. All rights reserved.
        </p>

        {/* Right Side: Links */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {links.map((link) => (
            <a
              id={`footer-link-${link.label.toLowerCase()}`}
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-mono font-bold tracking-wider text-slate-400 hover:text-accent-teal transition-colors flex items-center gap-0.5 group uppercase"
            >
              <span>{link.label}</span>
              <span className="text-slate-600 group-hover:text-accent-teal transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[8px] transform duration-200">
                ↗
              </span>
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
