// src/components/Notes.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// === ENRICHED NOTES DATA ===
const NOTES = [
  {
    title: "High-Throughput Microservices",
    tag: "Backend",
    detail:
      "Designed event-driven microservices handling 500+ GPS signals/sec with Kafka pipelines and optimized queries.",
    fullDetail:
      "Designed event-driven microservices capable of handling 500+ GPS signals/sec with Kafka pipelines, optimized database queries, idempotent processing, and retry mechanisms for fault tolerance.",
    impact: [
      "500+ GPS signals/sec throughput",
      "Kafka event-driven pipelines",
      "Optimized database queries (MySQL, Redis)"
    ],
    keywords: ["Java 17", "Spring Boot", "Kafka", "Microservices"],
  },
  {
    title: "Observability & Monitoring",
    tag: "DevOps",
    detail:
      "Implemented Prometheus & Grafana dashboards for latency, throughput, and system metrics.",
    fullDetail:
      "Implemented Prometheus & Grafana dashboards to monitor latency, throughput, and real-time system metrics for transport applications, enabling proactive incident response and SLA management.",
    impact: [
      "Real-time monitoring with alerts",
      "Custom dashboards for latency & throughput",
      "SLA & incident response improvement"
    ],
    keywords: ["Prometheus", "Grafana", "Monitoring", "Metrics"],
  },
  {
    title: "Security & Authentication",
    tag: "Security",
    detail:
      "Developed JWT-based authentication flows and SSL/TLS conversions for secure APIs.",
    fullDetail:
      "Developed JWT-based authentication flows, SSL/TLS conversions, role-based access control, and compliance with modern security standards to secure microservices APIs.",
    impact: ["JWT authentication", "SSL/TLS encryption", "RBAC implementation"],
    keywords: ["JWT", "SSL/TLS", "Auth", "Security"],
  },
  {
    title: "Database Optimization",
    tag: "Database",
    detail:
      "Reduced query latency by ~40% using indexing, caching strategies with Redis, and query optimization.",
    fullDetail:
      "Reduced query latency by ~40% using indexing, caching strategies with Redis, optimized queries, and efficient schema design for real-time pipelines, improving system responsiveness.",
    impact: ["~40% query latency reduction", "Redis caching", "Optimized MySQL queries"],
    keywords: ["MySQL", "Redis", "Query Optimization", "Indexing"],
  },
  {
    title: "Open Source Contributions",
    tag: "Community",
    detail: "Contributed enhancements and bug fixes to Java microservices projects.",
    fullDetail:
      "Contributed enhancements and bug fixes to multiple Java microservices open-source projects, improving reliability, adding backend features, and mentoring junior contributors.",
    impact: ["Open-source improvements", "Java microservices", "Collaboration & mentorship"],
    keywords: ["Open Source", "Java", "Collaboration", "GitHub"],
  },
];

// TAG COLORS
const tagColors = {
  Backend: "from-emerald-400 to-cyan-500",
  DevOps: "from-purple-400 to-pink-500",
  Security: "from-yellow-400 to-orange-500",
  Database: "from-blue-400 to-indigo-500",
  Community: "from-pink-400 to-red-500",
};

export default function Notes() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeNote, setActiveNote] = useState(null);
  const [autoplay, setAutoplay] = useState(true);

  // Circular navigation
  const prev = () =>
    setActiveIndex((prev) => (prev - 1 + NOTES.length) % NOTES.length);
  const next = () => setActiveIndex((prev) => (prev + 1) % NOTES.length);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") setActiveNote(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Autoplay
  useEffect(() => {
    if (!autoplay || activeNote) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [autoplay, activeNote]);

  return (
    <section id="notes" className="max-w-7xl mx-auto px-6 py-20" aria-label="Notes & Insights">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Notes & Insights
      </motion.h2>

      {/* Autoplay Toggle */}
      <div className="text-center mb-6">
        <button
          onClick={() => setAutoplay(!autoplay)}
          className={`px-4 py-2 rounded-full font-medium ${
            autoplay
              ? "bg-emerald-500 text-white"
              : "bg-gray-600 text-neutral-200"
          }`}
        >
          Autoplay: {autoplay ? "On" : "Off"}
        </button>
      </div>

      {/* Carousel */}
      <div className="relative flex justify-center items-center h-[300px]">
        {NOTES.map((note, idx) => {
          const offset = ((idx - activeIndex + NOTES.length) % NOTES.length);
          const scale = offset === 0 ? 1 : 0.8;
          const opacity = offset === 0 ? 1 : 0.5;
          const xOffset = offset === 0 ? 0 : offset === 1 ? 200 : offset === NOTES.length - 1 ? -200 : 0;

          return (
            <motion.div
              key={idx}
              className="absolute rounded-3xl p-6 cursor-pointer bg-gradient-to-br from-gray-900/70 to-gray-800/50 border border-white/10 shadow-2xl w-72 h-72 flex flex-col justify-between"
              style={{ zIndex: offset === 0 ? 10 : 5 }}
              animate={{ scale, opacity, x: xOffset }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={() => offset === 0 && setActiveNote(note)}
            >
              {/* Tag */}
              <div
                className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${
                  tagColors[note.tag] || "from-gray-500 to-gray-600"
                }`}
              >
                {note.tag}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mt-4">{note.title}</h3>

              {/* Preview Detail */}
              <p className="text-sm text-neutral-300 mt-2 line-clamp-3">{note.detail}</p>
            </motion.div>
          );
        })}

        {/* Navigation Arrows */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-2xl px-3 py-1"
        >
          ◀
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-2xl px-3 py-1"
        >
          ▶
        </button>
      </div>

      {/* Full Detail Modal */}
      <AnimatePresence>
        {activeNote && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-3xl w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border border-white/10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveNote(null)}
                className="absolute top-4 right-4 text-white/70 hover:text-white text-xl"
              >
                <X />
              </button>

              {/* Tag */}
              <div
                className={`inline-block px-3 py-1 mb-4 rounded-full text-xs font-bold text-white shadow-md bg-gradient-to-r ${
                  tagColors[activeNote.tag] || "from-gray-500 to-gray-700"
                }`}
              >
                {activeNote.tag}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4">{activeNote.title}</h3>

              {/* Full Detail */}
              <p className="text-neutral-300 leading-relaxed">{activeNote.fullDetail}</p>

              {/* Impact Metrics */}
              {activeNote.impact?.length > 0 && (
                <ul className="mt-6 list-disc list-inside text-sm text-emerald-300">
                  {activeNote.impact.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}

              {/* Keywords */}
              {activeNote.keywords?.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {activeNote.keywords.map((kw, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 text-emerald-200 border border-emerald-400/30 shadow-[0_0_12px_#22c55e55] cursor-pointer"
                    >
                      {kw}
                    </motion.span>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
