import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Rocket, Database, Shield, TrendingUp } from "lucide-react";
import useTypewriter from "../hooks/useTypewriter";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const keyword = useTypewriter(
    [
      "Java 17",
      "Spring Boot 3",
      "Apache Kafka",
      "Redis Caching",
      "Microservices at Scale",
      "System Design",
      "CI/CD Pipelines",
      "Observability",
      "Real-time ETAs",
      "Resilient Architectures",
    ],
    110,
    1500
  );

  const heroRef = useRef(null);

  return (
    <section
      id="about"
      className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-12 gap-12"
      aria-label="Hero Section"
      ref={heroRef}
    >
      {/* BACKGROUND DECORATION */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"></div>

      {/* LEFT CONTENT */}
      <motion.div
        variants={fade}
        initial="hidden"
        animate="show"
        className="md:col-span-7 relative z-10"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
          Backend Engineer <br />
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-300 bg-clip-text text-transparent">
            Java · Microservices · Scale
          </span>
        </h1>

        <p className="mt-6 text-lg text-neutral-300 max-w-2xl leading-relaxed">
          3+ years designing and delivering{" "}
          <span className="text-white font-semibold">
            high-throughput, low-latency
          </span>{" "}
          Java microservices. Specialized in{" "}
          <span className="text-white font-semibold">real-time systems</span>,{" "}
          <span className="text-white font-semibold">secure APIs</span>, and{" "}
          <span className="text-white font-semibold">
            scalable distributed architectures
          </span>{" "}
          for FinTech, Transport, and SaaS platforms.
        </p>

        {/* Keywords marquee replacement */}
        <motion.p
          className="mt-8 text-emerald-300 text-sm font-medium bg-neutral-900/40 px-3 py-2 rounded-xl inline-block shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Focus areas:{" "}
          <span
            className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
            aria-live="polite"
          >
            {keyword}
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-cyan-500 shadow-lg"
          >
            🚀 View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 rounded-xl text-sm font-semibold text-emerald-300 border border-emerald-400/50 bg-neutral-900/60 backdrop-blur-md"
          >
            🤝 Let’s Collaborate
          </motion.a>
        </div>

        {/* Trust Signals */}
        <p className="mt-6 text-xs text-neutral-400">
          Worked with city transport authorities, fintech firms, and SaaS startups
        </p>
      </motion.div>

      {/* RIGHT IMPACT HIGHLIGHTS */}
      <motion.div
        variants={fade}
        initial="hidden"
        animate="show"
        className="md:col-span-5 relative z-10"
      >
        <div className="grid gap-5">
          {/* PRIMARY Highlight */}
          <motion.div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/80 to-cyan-500/60 shadow-lg text-white">
            <div className="flex items-center gap-3 mb-2">
              <Rocket className="w-6 h-6 text-white" />
              <span className="text-sm font-semibold">System Scale</span>
            </div>
            <p className="text-lg font-bold">
              Handled{" "}
              <span className="text-2xl font-extrabold">500+ GPS signals/sec</span>{" "}
              in real-time fleet tracking
            </p>
          </motion.div>

          {/* Stat Grid */}
          <div className="grid grid-cols-2 gap-4">
            <StatCard
              icon={<Database className="w-5 h-5 text-emerald-300" />}
              title="40% Faster Queries"
              detail="via indexing & caching"
            />
            <StatCard
              icon={<Shield className="w-5 h-5 text-cyan-300" />}
              title="Secure APIs"
              detail="JWT · SSL/TLS · DDoS"
            />
            <StatCard
              icon={<TrendingUp className="w-5 h-5 text-yellow-300" />}
              title="3+ Years Exp"
              detail="Backend Engineering"
            />
            <StatCard
              icon={<Rocket className="w-5 h-5 text-pink-300" />}
              title="End-to-End Observability"
              detail="Prometheus & Grafana"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function StatCard({ icon, title, detail }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-4 rounded-xl bg-neutral-900/60 border border-white/10 shadow-md"
    >
      <div className="flex items-center gap-2 mb-1">
        {icon}
        <h4 className="text-sm font-semibold text-white">{title}</h4>
      </div>
      <p className="text-xs text-neutral-400">{detail}</p>
    </motion.div>
  );
}
