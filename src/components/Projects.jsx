import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, X } from "lucide-react";

const PROJECTS = [
  {
    title: "High-Scale Payment Gateway",
    github: "https://github.com/anish/payment-gateway",
    problem:
      "Legacy payment APIs were slow, prone to failures, and struggled under peak loads.",
    solution:
      "Designed and implemented a microservices-based payment platform using Spring Boot, Kafka for async processing, Redis for caching, and MySQL with optimized indexing.",
    impact: [
      "Reduced P99 API latency to <180ms",
      "Improved throughput by 3× under peak traffic",
      "Achieved 99.99% service availability",
      "Integrated PCI DSS compliance and real-time monitoring dashboards",
    ],
    stack: ["Java 17", "Spring Boot 3", "Kafka", "Redis", "MySQL", "Prometheus/Grafana"],
  },
  {
    title: "Event-Driven Stock Trading Simulator",
    github: "https://github.com/anish/trading-sim",
    problem:
      "Existing trading simulator couldn't handle real-time market data or high-frequency orders.",
    solution:
      "Built a scalable, event-driven trading engine using Kafka streams for market events, async order processing, and Postgres for persistence.",
    impact: [
      "Supported 1M+ transactions/sec",
      "Achieved <100ms end-to-end trade execution latency",
      "Ensured risk management consistency and high system reliability",
      "Implemented automated testing and simulation of market spikes",
    ],
    stack: ["Java 17", "Kafka Streams", "PostgreSQL", "React", "JUnit/Mockito"],
  },
  {
    title: "AIS-140 GPS Fleet Tracking Platform",
    github: "https://github.com/your-github/gps-tracking",
    problem:
      "Government-compliant fleet tracking required handling high-volume GPS data efficiently.",
    solution:
      "Created a real-time ingestion and processing pipeline using Kafka, Cassandra for time-series storage, Redis for hot queries, and Spring Boot microservices for fleet management.",
    impact: [
      "Processed 500+ GPS signals/sec consistently",
      "Optimized geo-query latency for real-time vehicle tracking",
      "Ensured AIS-140 compliance and secure device communication",
      "Built operator dashboard with real-time analytics",
    ],
    stack: ["Java 17", "Spring Boot 3", "Kafka", "Cassandra", "Redis", "Docker", "AWS EC2/S3"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        className="group relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-neutral-900/80 to-neutral-800/40 backdrop-blur-xl hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header Gradient */}
        <div className="h-36 bg-gradient-to-r from-emerald-500/40 to-cyan-500/40 flex items-center justify-center">
          <h3 className="text-xl font-bold text-white text-center px-4">
            {project.title}
          </h3>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col justify-between h-[320px]">
          <div className="space-y-3">
            <p className="text-sm text-neutral-300 line-clamp-2">
              <span className="font-semibold text-emerald-400">Problem: </span>
              {project.problem}
            </p>
            <p className="text-sm text-neutral-300 line-clamp-2">
              <span className="font-semibold text-cyan-400">Solution: </span>
              {project.solution}
            </p>
          </div>

          {/* Stack Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-neutral-900 text-neutral-300 border border-white/10"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 3 && (
              <span className="px-3 py-1 text-xs rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                +{project.stack.length - 3}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="mt-6 flex items-center justify-between">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 text-sm font-medium"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <button
              onClick={() => setOpen(true)}
              className="text-sm text-neutral-300 hover:text-white transition"
            >
              View Details →
            </button>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex justify-center items-center bg-black/80 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="bg-[#0b0f1c] border border-white/10 rounded-3xl max-w-4xl w-full p-10 shadow-2xl overflow-y-auto max-h-[90vh]"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-3xl font-bold text-white">{project.title}</h4>
                <button
                  onClick={() => setOpen(false)}
                  className="text-neutral-400 hover:text-white transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Problem / Solution */}
              <div className="space-y-3">
                <p className="text-neutral-300 leading-relaxed">
                  <span className="font-semibold text-emerald-400">Problem: </span>
                  {project.problem}
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  <span className="font-semibold text-cyan-400">Solution: </span>
                  {project.solution}
                </p>
              </div>

              {/* Impact */}
              <ul className="mt-6 space-y-2 text-neutral-300 text-sm">
                {project.impact.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>

              {/* Stack */}
              <div className="mt-6 flex flex-wrap gap-3">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs bg-neutral-900 border border-white/10 text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-8 flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-gradient-to-r from-emerald-400 to-cyan-400 text-neutral-900 font-semibold shadow-lg hover:brightness-110 transition"
                >
                  <Github className="w-5 h-5" /> View on GitHub
                </a>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-5 py-3 border border-white/20 text-white hover:bg-white/10 transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
