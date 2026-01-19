"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Code } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Software Engineer",
    organization: "Professional Experience",
    period: "Present",
    description:
      "Experienced software engineer with hands-on background in full-stack development, systems programming, algorithm design, and software architecture. Building scalable applications and implementing best practices across diverse engineering tasks.",
    skills: ["Full-Stack", "Systems Programming", "Architecture", "Algorithms"],
  },
  {
    type: "work",
    title: "Web Development Intern",
    organization: "Tech Industry",
    period: "Current",
    description:
      "Building responsive user interfaces, refining front-end logic, and collaborating on real-world product features. Applying software engineering best practices throughout development workflows.",
    skills: ["HTML/CSS", "JavaScript", "React", "Responsive Design"],
  },
  {
    type: "skills",
    title: "Technical Expertise",
    organization: "Core Competencies",
    period: "Ongoing",
    description:
      "Strong foundation in programming languages, web technologies, and software concepts including OOP, Software Design & Architecture, Data Structures & Algorithms, and Operating Systems fundamentals.",
    skills: ["C++", "Python", "Java", "SQL", "Git/GitHub"],
  },
];

const programmingSkills = [
  { name: "C++", level: 90 },
  { name: "Python", level: 85 },
  { name: "Java", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "C#", level: 75 },
  { name: "SQL", level: 80 },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 px-4 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20" />

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, x: -30 }}
                    animate={
                      isInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -30 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="relative pl-12"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 w-3 h-3 rounded-full bg-primary transform -translate-x-1/2 mt-1.5 z-10">
                      <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                    </div>

                    <div className="p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            exp.type === "education"
                              ? "bg-blue-500/20 text-blue-400"
                              : exp.type === "skills"
                              ? "bg-purple-500/20 text-purple-400"
                              : "bg-green-500/20 text-green-400"
                          }`}
                        >
                          {exp.type === "education" ? (
                            <GraduationCap className="w-5 h-5" />
                          ) : exp.type === "skills" ? (
                            <Code className="w-5 h-5" />
                          ) : (
                            <Briefcase className="w-5 h-5" />
                          )}
                        </div>
                        <p className="text-sm text-primary font-mono">
                          {exp.period}
                        </p>
                      </div>
                      <h3 className="text-lg font-semibold mb-1">{exp.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {exp.organization}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills Bars */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <h3 className="text-xl font-semibold mb-6">Programming Languages</h3>
              <div className="space-y-5">
                {programmingSkills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="text-lg font-semibold mb-4">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {["HTML", "CSS", "Figma", "Git", "GitHub", "Linux", "VMware", "R", "Assembly"].map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-3 py-1.5 rounded-full bg-secondary text-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
