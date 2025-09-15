import React from "react";

export default function Footer() {
  return (
    <footer className="relative px-6 py-6 text-center text-sm text-neutral-400 select-none">
      {/* Gradient accent line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-300 shadow-md animate-pulse"></div>

      {/* Footer text */}
      © {new Date().getFullYear()} Anish Choudhary · Built with React, Tailwind & Framer Motion

      {/* Optional subtle animation */}
      <style jsx>{`
        footer {
          position: relative;
        }
      `}</style>
    </footer>
  );
}
