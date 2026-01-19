"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  Bot,
  Code2,
  TestTube,
  GitBranch,
} from "lucide-react";

const skills = [
  {
    icon: Globe,
    title: "Web Development",
    description: "React, Next.js, HTML, CSS, Tailwind",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description: "Python, APIs, ChatGPT, Automation Scripts",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Code2,
    title: "Programming",
    description: "Python, Java, C++",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: TestTube,
    title: "Selenium & Testing",
    description: "Automated Testing Framework",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: GitBranch,
    title: "Git & GitHub",
    description: "Version Control & Collaboration",
    color: "from-gray-500 to-slate-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.title}
                variants={itemVariants}
                className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
                />
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4`}
                >
                  <skill.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
