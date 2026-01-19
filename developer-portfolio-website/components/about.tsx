"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <p className="text-muted-foreground leading-relaxed text-pretty">
                I am a passionate software developer specializing in web
                development, AI automation, and programming in Python, Java, and
                C++. I love building scalable applications, automating
                workflows, and solving real-world problems with technology.
              </p>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                My journey in software development has equipped me with a
                diverse skill set that spans from frontend technologies like
                React and Next.js to backend automation with Python and testing
                frameworks like Selenium.
              </p>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                {"I'm"} constantly exploring new technologies and methodologies
                to stay at the forefront of the ever-evolving tech landscape.
                Whether {"it's"} crafting elegant user interfaces or building
                robust automation pipelines, I bring dedication and creativity
                to every project.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="text-primary font-semibold mb-2">Currently</h3>
                <p className="text-sm text-muted-foreground">
                  Building web applications and exploring AI automation
                </p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="text-primary font-semibold mb-2">Focus</h3>
                <p className="text-sm text-muted-foreground">
                  Full-stack development, Python automation, and testing
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
