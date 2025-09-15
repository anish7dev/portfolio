import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const EXPERIENCE = [
  {
    company: "DIMTS Ltd",
    role: "Assistant Engineer",
    period: "May 2022 – Present",
    bullets: [
      "Architected and implemented AIS-140 fleet tracking services handling 500+ GPS signals/sec with high reliability.",
      "Reduced database query latency by ~40% using indexing, prepared statements, and Redis caching strategies.",
      "Developed JWT-based authentication and observability dashboards (metrics, logs, tracing).",
      "Optimized microservices throughput with async Kafka pipelines and retry/idempotency.",
      "Ensured AIS-140 compliance and real-time ETA calculations for transport systems."
    ],
    techStack: ["Java 17", "Spring Boot 3", "Kafka", "MySQL", "Redis", "JWT", "Prometheus", "Grafana"]
  },
  {
    company: "Haltdos",
    role: "Software Trainee",
    period: "Feb 2022 – Apr 2022",
    bullets: [
      "Built SSL conversion APIs and security modules to improve encrypted network communications.",
      "Contributed to DDoS mitigation strategies and enhanced network reliability.",
      "Wrote integration tests and improved monitoring for key microservices."
    ],
    techStack: ["Java 11", "Spring Boot", "Network Security", "SSL/TLS", "DDoS Mitigation"]
  },
  {
    company: "Freelance / Open Source Projects",
    role: "Backend Developer & Contributor",
    period: "Jan 2021 – Jan 2022",
    bullets: [
      "Developed event-driven APIs for stock trading simulators processing up to 1M transactions/sec.",
      "Implemented caching and database optimization for low-latency real-time responses.",
      "Contributed bug fixes and features to multiple open-source Java microservices projects."
    ],
    techStack: ["Java 11", "Spring Boot", "PostgreSQL", "Redis", "Kafka", "Open Source"]
  }
];

// Motion variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-20">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      <div className="relative border-l border-white/20">
        {EXPERIENCE.map((exp, idx) => (
          <TimelineCard key={idx} exp={exp} idx={idx} />
        ))}

        {/* Animated timeline glowing line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute left-0 top-0 w-1 bg-gradient-to-b from-emerald-400 via-cyan-400 to-transparent rounded-full"
        />
      </div>
    </section>
  );
}

function TimelineCard({ exp, idx }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative pl-12 mb-14 group"
    >
      {/* Node marker */}
      <div className="absolute left-[-10px] top-2 w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center shadow-lg">
        <Briefcase className="w-3 h-3 text-black" />
      </div>

      {/* Card */}
      <div
        className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 
                   shadow-lg group-hover:shadow-[0_0_30px_#22c55e88] transition"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-xl font-bold text-white">
            {exp.role} <span className="text-emerald-300">· {exp.company}</span>
          </h3>
          <span className="text-sm text-neutral-400 mt-2 sm:mt-0">
            {exp.period}
          </span>
        </div>

        <ul className="mt-4 space-y-2 text-neutral-300 text-sm leading-relaxed">
          {exp.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold mt-1">▹</span>
              {b}
            </li>
          ))}
        </ul>

        {exp.techStack?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {exp.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 text-xs rounded-full border border-emerald-400/40 
                           text-emerald-200 bg-emerald-500/10 shadow-inner shadow-emerald-900/40"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
