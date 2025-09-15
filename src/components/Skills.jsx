import React from "react";
import { motion } from "framer-motion";
import { Server, Database, Cloud, Shield } from "lucide-react";

// ===== DATA =====
const SKILL_GROUPS = [
  {
    title: "Backend",
    icon: Server,
    items: [
      "Java 17",
      "Spring Boot 3",
      "REST APIs",
      "Microservices",
      "Hibernate/JPA",
      "Spring Security (JWT/OAuth2)",
      "Resilience4j",
      "Design Patterns",
    ],
  },
  {
    title: "Data & Messaging",
    icon: Database,
    items: [
      "PostgreSQL / MySQL",
      "SQL tuning & indexing",
      "Redis caching",
      "Kafka / RabbitMQ",
      "Outbox & Saga",
      "Idempotency",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    items: [
      "Docker",
      "CI/CD (Jenkins, GH Actions)",
      "Kubernetes (basics)",
      "AWS (EC2, RDS, S3)",
      "Linux",
    ],
  },
  {
    title: "Testing & Security",
    icon: Shield,
    items: [
      "JUnit 5 / Mockito",
      "Testcontainers",
      "Integration & Contract tests",
      "OWASP Top-10",
      "API Gateway & RBAC",
    ],
  },
];

// ===== Motion Variants =====
const fadeUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-20"
      aria-label="Skills"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      <motion.div
        variants={list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-10 md:grid-cols-2 lg:grid-cols-4"
      >
        {SKILL_GROUPS.map((group) => (
          <motion.div
            key={group.title}
            variants={fadeUp}
            whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
            className="relative rounded-3xl p-8 bg-gradient-to-br from-emerald-900/30 via-cyan-900/20 to-transparent 
                       border border-white/10 backdrop-blur-2xl shadow-lg
                       hover:shadow-[0_0_40px_#22c55eaa] transition-all duration-300"
          >
            {/* Icon with glowing ring */}
            <div className="relative flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-400 blur-lg opacity-70 animate-pulse"></div>
                <div className="relative rounded-full p-3 bg-black/60 border border-white/10 shadow-md">
                  <group.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="font-semibold text-white text-xl tracking-wide">
                {group.title}
              </h3>
            </div>

            {/* Skill tags instead of list */}
            <div className="mt-6 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <motion.span
                  key={item}
                  whileHover={{ scale: 1.08 }}
                  className="px-3 py-1.5 text-xs font-medium rounded-full
                             border border-emerald-400/40 text-emerald-200
                             bg-emerald-500/10 backdrop-blur-sm
                             shadow-inner shadow-emerald-900/40
                             transition"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
