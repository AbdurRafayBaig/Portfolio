"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Arabic-Urdu Morphological Dictionary",
    description:
      "A full-featured linguistic dictionary system for Arabic–Urdu with root-based, lemma-based, and pattern-based morphological search. Includes word segmentation, POS tagging, and database-backed word management.",
    tags: ["Java", "Swing", "Database", "OOP"],
    github: "https://github.com/AbdurRafayBaig/Arabic-Urdu-Morphological-Dictionary-.git",
    image: "/projects/dictionary.jpg",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    title: "Price Prediction App",
    description:
      "A car price prediction application using Flutter for frontend and Python for backend logic. Allows users to input car features and get predicted prices using ML-style prediction workflow.",
    tags: ["Flutter", "Python", "ML"],
    github: "https://github.com/AbdurRafayBaig/Price-Prediction.git",
    image: "/projects/price-prediction.jpg",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    title: "Ping Pong Assembly Game",
    description:
      "A classic two-player Ping Pong game built entirely in 8086 Assembly language. Uses low-level hardware concepts, registers, screen handling, and timing logic.",
    tags: ["Assembly", "8086", "Game Dev"],
    github: "https://github.com/AbdurRafayBaig/Ping-Pong-Assembly-Game.git",
    image: "/projects/pingpong.jpg",
    gradient: "from-yellow-600 to-orange-600",
  },
  {
    title: "Contact Book Management System",
    description:
      "A C++ terminal-based contact management system allowing users to add, edit, delete, search, and store contacts persistently with clean OOP design.",
    tags: ["C++", "OOP", "File Handling"],
    github: "https://github.com/AbdurRafayBaig/Contact-Book-Management-System.git",
    image: "/projects/contactbook.jpg",
    gradient: "from-green-600 to-teal-600",
  },
  {
    title: "Quote Generator App",
    description:
      "A modern quote generator web application with beautiful UI, light/dark mode, and dynamic quote generation. Built with React and TypeScript.",
    tags: ["React", "TypeScript", "UI/UX"],
    github: "https://github.com/AbdurRafayBaig/Quote_Generator_App.git",
    image: "/projects/quote.jpg",
    gradient: "from-pink-600 to-rose-600",
  },
  {
    title: "Blog Summarizer App",
    description:
      "A web-based application that summarizes blog articles using a provided URL. Simplifies reading long articles by generating concise summaries.",
    tags: ["TypeScript", "API", "Web"],
    github: "https://github.com/AbdurRafayBaig/Blog_Summarizer_App.git",
    image: "/projects/blog.jpg",
    gradient: "from-indigo-600 to-purple-600",
  },
  {
    title: "Game Store Web Application",
    description:
      "A complete database-driven online game store where users can create accounts, browse games, manage cart, and simulate purchases.",
    tags: ["HTML", "CSS", "JavaScript", "Database"],
    github: "https://github.com/AbdurRafayBaig/Game-Store.git",
    image: "/projects/gamestore.jpg",
    gradient: "from-red-600 to-orange-600",
  },
  {
    title: "Mini Operating System Simulator",
    description:
      "A C++ based OS simulation system demonstrating core operating system concepts like process handling and memory management in a Linux environment.",
    tags: ["C++", "Linux", "Systems"],
    github: "https://github.com/AbdurRafayBaig/Mini_Operating_System.git",
    image: "/projects/os.jpg",
    gradient: "from-slate-600 to-zinc-600",
  },
  {
    title: "Mini Instagram",
    description:
      "A console-based social media simulation implementing users, posts, and interactions using core DSA concepts with efficient data handling.",
    tags: ["C++", "DSA", "OOP"],
    github: "https://github.com/AbdurRafayBaig/Mini-Instagram.git",
    image: "/projects/instagram.jpg",
    gradient: "from-fuchsia-600 to-pink-600",
  },
  {
    title: "SQE Automation Framework",
    description:
      "A software quality engineering automation framework for automating test cases and validating application behavior with QA workflows.",
    tags: ["Automation", "Testing", "QA"],
    github: "https://github.com/AbdurRafayBaig/SQE_Automation_Framework.git",
    image: "/projects/automation.jpg",
    gradient: "from-emerald-600 to-green-600",
  },
  {
    title: "SQE API Testing",
    description:
      "A project focused on testing REST APIs, validating responses, automating test flows, and verifying backend behavior professionally.",
    tags: ["API Testing", "REST", "QA"],
    github: "https://github.com/AbdurRafayBaig/SQE_API_TESTING.git",
    image: "/projects/api.jpg",
    gradient: "from-cyan-600 to-blue-600",
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                {/* Project Image */}
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 rounded-full bg-background/80 text-foreground backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-5">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex gap-3">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent"
                    >
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
                    >
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="sr-only">View Project</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
