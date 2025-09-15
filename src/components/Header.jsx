// src/components/Header.jsx
import React, { useState, useRef, useEffect } from "react";
import { FileDown, Menu, X } from "lucide-react";

const NAV = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#notes", label: "Notes" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });
  const resumeRef = useRef(null);

  // Compute tooltip position on hover
  const handleMouseEnter = () => {
    if (resumeRef.current) {
      const rect = resumeRef.current.getBoundingClientRect();
      setTooltipPos({
        top: rect.top - 32, // 32px above button
        left: rect.left + rect.width / 2, // center horizontally
      });
    }
    setTooltipVisible(true);
  };
  const handleMouseLeave = () => setTooltipVisible(false);

  // Close mobile menu on outside click
  const mobileRef = useRef();
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileRef.current && !mobileRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* Logo / Name */}
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400 shadow-md flex items-center justify-center text-white font-bold">
            AC
          </div>
          <span className="font-bold tracking-tight text-white">
            Anish Choudhary
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="relative hover:text-white after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-emerald-400 after:to-cyan-400 after:transition-all hover:after:w-full"
              aria-current={window.location.hash === n.href ? "page" : undefined}
            >
              {n.label}
            </a>
          ))}

          {/* Resume Button */}
<div className="relative">
  <a
    ref={resumeRef}
    href="/Anish_Resume.pdf"
    download
    onMouseEnter={() => setTooltipVisible(true)}
    onMouseLeave={() => setTooltipVisible(false)}
    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-neutral-900 font-medium shadow hover:brightness-110 transition relative z-10"
  >
    <FileDown className="w-4 h-4" /> Resume
  </a>

  {/* Tooltip below the button */}
  {tooltipVisible && (
    <div
      className="absolute left-1/2 mt-2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-3 py-1 rounded shadow-lg whitespace-nowrap pointer-events-none z-20"
    >
      Download Resume (PDF)
    </div>
  )}
</div>

        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {mobileOpen && (
          <motion.nav
            ref={mobileRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-xl flex flex-col items-center py-4 gap-4 text-white text-lg md:hidden z-40"
          >
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="hover:text-emerald-400 transition"
              >
                {n.label}
              </a>
            ))}
            <a
              href="/Anish_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400 text-black font-medium shadow hover:brightness-110 transition"
            >
              <FileDown className="w-4 h-4" /> Resume
            </a>
          </motion.nav>
        )}
      </div>
    </header>
  );
}
