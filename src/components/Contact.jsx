import React, { useState } from "react";
import { Mail, Linkedin, Github, Calendar } from "lucide-react";

const GITHUB = "https://github.com/anish7dev";
const LINKEDIN = "https://linkedin.com/in/anish7choudhary";
const EMAIL = "mailto:anishchoudhary1998@gmail.com";
const CALENDLY = "https://calendly.com/anish7choudhary/meeting";

export default function Contact() {
  const [showForm, setShowForm] = useState(false);

  const CONTACTS = [
    { href: EMAIL, icon: <Mail className="w-5 h-5" />, title: "Email" },
    { href: LINKEDIN, icon: <Linkedin className="w-5 h-5" />, title: "LinkedIn" },
    { href: GITHUB, icon: <Github className="w-5 h-5" />, title: "GitHub" },
    { href: CALENDLY, icon: <Calendar className="w-5 h-5" />, title: "Schedule" },
  ];

  return (
    <section
      id="contact"
      className="relative max-w-4xl mx-auto px-6 py-24 rounded-3xl overflow-hidden"
      aria-label="Contact"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-cyan-500/10 via-emerald-500/10 to-purple-500/10 blur-3xl animate-pulse"></div>

      {/* Availability Badge */}
      <div className="text-center mb-10">
        <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold text-emerald-300 bg-emerald-400/10 border border-emerald-400/20 shadow-sm animate-bounce">
          Available for Full-time · Freelance · Remote
        </span>
        <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white tracking-tight">
          Let’s Build Something{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Impactful
          </span>
        </h2>
        <p className="mt-4 text-neutral-300 max-w-xl mx-auto leading-relaxed">
          Whether you’re a recruiter or a client, I deliver{" "}
          <span className="text-white font-semibold">high-performance systems</span>{" "}
          that scale.
        </p>
      </div>

      {/* Contact Bar */}
      <div className="flex justify-center gap-6 mb-12">
        {CONTACTS.map(({ href, icon, title }, idx) => (
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 hover:bg-gradient-to-r hover:from-emerald-400 hover:to-cyan-400 text-white shadow-md hover:shadow-lg transition-transform transform hover:scale-110"
          >
            <div className="group-hover:animate-pulse">{icon}</div>
            <span className="absolute -bottom-6 text-xs text-neutral-300 opacity-0 group-hover:opacity-100 transition">
              {title}
            </span>
          </a>
        ))}
      </div>

      {/* Collapsible Contact Form */}
      {/* <div className="text-center mb-10">
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-md hover:brightness-110 transition"
        >
          {showForm ? "Hide Contact Form" : "Send a Message"}
        </button>
      </div>

      {showForm && (
        <form className="max-w-xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-4 text-white">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-neutral-900 font-semibold shadow hover:brightness-110 transition"
          >
            Send
          </button>
        </form>
      )} */}

      {/* Footer Microcopy */}
      <div className="text-center mt-12 text-neutral-400 text-sm">
        ✦ Usually reply within <span className="text-emerald-300 font-medium">24 hours</span>.  
        Let’s make it happen 🚀
      </div>
    </section>
  );
}
