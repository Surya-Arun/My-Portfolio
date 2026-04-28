/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from "react";
import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Award, 
  Code2, 
  Terminal, 
  Database, 
  Cpu, 
  Download,
  GraduationCap,
  Briefcase,
  ChevronRight,
  Sparkles
} from "lucide-react";

const Section = ({ children, id, className = "" }: { children: ReactNode, id: string, className?: string }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`py-20 px-6 max-w-7xl mx-auto ${className}`}
  >
    {children}
  </motion.section>
);

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
        PS
      </span>
      <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
        {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-amber-400 transition-colors">
            {item}
          </a>
        ))}
      </div>
      <a 
        href="Palani_Surya_Resume.pdf" 
        download="Palani_Surya_Resume.pdf"
        className="px-4 py-2 bg-amber-400 text-black text-sm font-bold rounded-lg hover:bg-amber-300 transition-all flex items-center gap-2"
      >
        <Download size={16} />
        Resume
      </a>
    </div>
  </nav>
);

export default function App() {
  const skills = [
    { name: "Programming", items: ["Python", "JavaScript", "TypeScript"], icon: <Terminal className="text-amber-400" /> },
    { name: "Frontend", items: ["React.js", "TypeScript", "Tailwind CSS"], icon: <Code2 className="text-amber-400" /> },
    { name: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Flask"], icon: <Database className="text-amber-400" /> },
    { name: "AI & Tools", items: ["Gemini API", "Generative AI", "Google AI Studio", "Prompt Engineering"], icon: <Cpu className="text-amber-400" /> }
  ];

  const projects = [
    {
      title: "Recallio AI",
      tag: "Best Paper Award",
      tech: ["React", "Node.js", "MongoDB", "Gemini API"],
      desc: "A full-stack multimodal forensic platform for recruitment fraud detection. Integrated Gemini Vision for document forensics.",
      highlights: [
        "Interactive Chat Analysis and Resume Scan Detection",
        "Engineered explainable AI outputs for suspicious pattern detection",
        "Trust-scoring engine with 100+ behavioral patterns"
      ],
      github: "https://github.com/surya-arun/recallio",
      live: "#"
    },
    {
      title: "Outcome IQ",
      tag: "Best Paper Award",
      tech: ["React", "Node.js", "MongoDB Atlas"],
      desc: "Full-stack OBE analytics platform automating CO-PO attainment calculations and NBA/NAAC reporting.",
      highlights: [
        "Reduced manual evaluation effort by 90%",
        "16-section compliance PDF report generation",
        "Global subject context with real-time sync across 9 modules"
      ],
      github: "https://github.com/Surya-Arun/OutcomeIQ---OBE-System",
      live: "https://outcomeiq-obe-system.onrender.com/"
    },
    {
      title: "Malayalam Maram",
      tag: "Learning Platform",
      tech: ["React", "Vite", "Gemini API", "Web Speech API"],
      desc: "Tamil-to-Malayalam AI learning web app with 7 interactive modules and 100+ structured elements.",
      highlights: [
        "Structured grammar and vocabulary modules",
        "Cognate Transformer and Tense Master tools",
        "Interactive pronunciation and contextual practice"
      ],
      github: "https://github.com/surya-arun/malayalamaram",
      live: "#"
    }
  ];

  const otherWorks = [
    {
      title: "Event Connect",
      tag: "Event Planning",
      tech: ["Flask", "HTML/CSS", "JavaScript", "PostgreSQL"],
      desc: "Robust platform for event planners to manage logistics and real-time updates.",
      highlights: [
        "Efficient event coordination dashboard",
        "Real-time attendee management system",
        "Automated planner workflow optimizations"
      ],
      github: "https://github.com/Surya-Arun/EventConnect",
      live: "https://eventplanner-gxwu.onrender.com/"
    },
    {
      title: "Train Connect",
      tag: "Logistics App",
      tech: ["Flask", "Tailwind CSS", "Python", "SQL"],
      desc: "Streamlined operational app for train-based coordination and logistics management.",
      highlights: [
        "Simplified train operation tracking",
        "Coordination-focused user interface",
        "Data-driven operational efficiency"
      ],
      github: "https://github.com/Surya-Arun/Train-Connect",
      live: "https://railconnect.onrender.com/"
    },
    {
      title: "WildLens",
      tag: "Interactive Doc",
      tech: ["HTML5", "CSS3", "JavaScript"],
      desc: "Immersive digital wildlife documentary with interactive species storytelling.",
      highlights: [
        "Interactive species navigation maps",
        "High-performance media handling (pre-video phase)",
        "Educational storytelling architecture"
      ],
      github: "https://github.com/Surya-Arun/WildLens",
      live: "https://surya-arun.github.io/WildLens/"
    },
    {
      title: "Surya's Pencil",
      tag: "Artistic Portfolio",
      tech: ["Vanilla JS", "Creative Design"],
      desc: "A creative gallery showcasing traditional pencil artistry and manual sketches.",
      highlights: [
        "High-resolution digital art gallery",
        "Artistic career progression storytelling",
        "Minimalist aesthetic for manual arts"
      ],
      github: "https://github.com/Surya-Arun/Surya-Pencil",
      live: "https://surya-arun.github.io/Surya-Pencil/"
    }
  ];

  return (
    <div className="bg-[#0a0a0a] text-zinc-100 min-h-screen font-sans selection:bg-amber-400/30 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/10 border border-amber-400/20 rounded-full text-amber-400 text-xs font-bold tracking-wider uppercase"
          >
            <Sparkles size={14} /> Available for Opportunities
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-7xl font-bold tracking-tight leading-tight"
          >
            Palani <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">Surya</span> S
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-400 max-w-2xl leading-relaxed"
          >
            Final-year Computer Science Engineering student specializing in <span className="text-zinc-100 font-medium">Full-stack AI Application Development</span>. Building production-grade AI platforms using React, Node.js, and LLMs.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4 pt-4"
          >
            <a href="#contact" className="px-8 py-3 bg-amber-400 text-black font-bold rounded-xl hover:scale-105 transition-all">
              Hire Me
            </a>
            <a href="#projects" className="px-8 py-3 bg-white/5 border border-white/10 font-bold rounded-xl hover:bg-white/10 transition-all text-sm">
              Featured Work
            </a>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-64 h-64 md:w-80 md:h-80"
        >
          <div className="absolute inset-0 bg-amber-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="relative w-full h-full bg-zinc-900 border-4 border-amber-400/20 rounded-full overflow-hidden shadow-2xl shadow-amber-400/10">
             <img 
               src="profile1.jpeg" 
               alt="Portfolio Avatar"
               className="w-full h-full object-cover"
             />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-10 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "CGPA", val: "9.30" },
            { label: "Experience", val: "Intern" },
            { label: "Awards", val: "Best Paper" },
            { label: "Engineering", val: "CSE" },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-2xl font-bold text-amber-400 group-hover:scale-110 transition-transform">{stat.val}</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-black mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About & Skills */}
      <Section id="about">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-4">
              <span className="w-12 h-[1px] bg-amber-400"></span>
              The Profile
            </h2>
            <p className="text-zinc-400 leading-relaxed text-lg italic">
              Experienced in building production-grade AI platforms and creating real-world software that solves meaningful problems. Specializing in integrating Gemini SDKs into high-performance web environments.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-white/5 rounded-2xl border border-white/10 flex items-start gap-4 hover:border-amber-400/30 transition-colors">
                <GraduationCap className="text-amber-400 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-sm">Education</h4>
                  <p className="text-xs text-zinc-500">BE in Computer Science</p>
                  <p className="text-xs text-zinc-400 font-medium leading-relaxed">VV College of Engineering<br/>(2022-2026)</p>
                </div>
              </div>
              <div className="p-5 bg-white/5 rounded-2xl border border-white/10 flex items-start gap-4 hover:border-amber-400/30 transition-colors">
                <Briefcase className="text-amber-400 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-sm">Experience</h4>
                  <p className="text-xs text-zinc-500">Full Stack Intern</p>
                  <p className="text-xs text-zinc-400 font-medium leading-relaxed">Gateway Software Solutions<br/>July - Aug 2025</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-4 md:justify-end">
              Technical Stack
              <span className="w-12 h-[1px] bg-amber-400"></span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-3">
                  <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-zinc-500">
                    {skill.icon}
                    {skill.name}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map(item => (
                      <span key={item} className="px-3 py-1.5 bg-white/5 rounded-lg text-[11px] text-zinc-300 border border-white/10 hover:bg-amber-400 hover:text-black transition-all cursor-default">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Featured Projects (Resume Projects) */}
      <Section id="projects" className="bg-white/[0.01]">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4 italic">Featured AI Works</h2>
            <p className="text-zinc-500 uppercase text-xs tracking-[0.2em] font-bold">Research-grade Platforms & AI Integration</p>
          </div>
          <a href="https://github.com/surya-arun" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-zinc-400 hover:text-amber-400 transition-colors text-sm font-bold">
            All Repositories <ChevronRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -10 }}
              className="p-8 bg-[#111111] rounded-3xl border border-white/5 flex flex-col justify-between group h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/5 rotate-45 translate-x-12 -translate-y-12 group-hover:bg-amber-400/10 transition-colors"></div>
              <div>
                <div className="flex justify-between items-start mb-6">
                  {project.tag && (
                    <span className="px-3 py-1 bg-amber-400/10 text-amber-400 text-[10px] font-black uppercase tracking-tighter border border-amber-400/20 rounded-full">
                      {project.tag}
                    </span>
                  )}
                  <div className="flex gap-3 relative z-10">
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-zinc-600 hover:text-zinc-100 transition-colors">
                      <Github size={18} />
                    </a>
                    {project.live !== "#" && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="text-zinc-600 hover:text-zinc-100 transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-amber-400 transition-colors">{project.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>
                <div className="space-y-4 mb-8">
                  {project.highlights.map((h, j) => (
                    <div key={j} className="flex items-start gap-2 text-[11px] text-zinc-500 leading-relaxed italic">
                      <ChevronRight size={12} className="text-amber-400 mt-0.5 shrink-0" />
                      {h}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                {project.tech.map(t => (
                   <span key={t} className="text-[10px] font-mono font-medium text-zinc-600 bg-white/5 px-2 py-1 rounded tracking-tight">
                    #{t.toLowerCase().replace('.', '')}
                   </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* The Vault - Using Parity with Featured Works */}
      <Section id="gallery">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 italic">The Vault</h2>
          <p className="text-zinc-500 font-medium uppercase text-xs tracking-widest tracking-[0.2em]">Legacy Solutions & Web Engineering</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherWorks.map((project, i) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -10 }}
              className="p-8 bg-[#111111] rounded-3xl border border-white/5 flex flex-col justify-between group h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/5 rotate-45 translate-x-12 -translate-y-12 group-hover:bg-amber-400/10 transition-colors"></div>
              <div>
                <div className="flex justify-between items-start mb-6">
                  {project.tag && (
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-400 text-[10px] font-bold uppercase tracking-tighter border border-white/5 rounded-full">
                      {project.tag}
                    </span>
                  )}
                  <div className="flex gap-3 relative z-10">
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-zinc-600 hover:text-zinc-100 transition-colors">
                      <Github size={18} />
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-zinc-600 hover:text-zinc-100 transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-amber-400 transition-colors">{project.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>
                <div className="space-y-4 mb-8">
                  {project.highlights.map((h, j) => (
                    <div key={j} className="flex items-start gap-2 text-[11px] text-zinc-500 leading-relaxed italic">
                      <ChevronRight size={12} className="text-amber-400 mt-0.5 shrink-0" />
                      {h}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                {project.tech.map(t => (
                   <span key={t} className="text-[10px] font-mono font-medium text-zinc-600 bg-white/5 px-2 py-1 rounded tracking-tight">
                    #{t.toLowerCase().replace(' ', '')}
                   </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience & Achievements */}
      <Section id="experience" className="bg-white/[0.01]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-10">Professional Path</h2>
            <div className="relative pl-8 border-l border-white/10 space-y-12">
              <div className="relative">
                <div className="absolute -left-[41px] top-0 w-5 h-5 bg-amber-400 rounded-full border-4 border-[#0a0a0a]"></div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl">Full Stack Intern</h3>
                  <span className="text-xs font-mono bg-white/5 px-2 py-1 rounded text-zinc-500 tracking-tighter">JUL - AUG 2025</span>
                </div>
                <p className="text-amber-400 font-bold text-sm mb-4">Gateway Software Solutions (Onsite)</p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Developed and maintained full-stack web applications using React.js, Node.js with Express, and MongoDB Atlas. Focused on modular design and database optimization.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-10">Academic & Research</h2>
            <div className="space-y-4">
              {[
                { title: "Best Paper Award – Recallio AI", issuer: "Intl Conf on AI civic security (2026)" },
                { title: "Best Paper Award – Outcome IQ", issuer: "Innovative Engineering Solutions (2026)" },
                { title: "2nd Rank - Higher Secondary (HSC)", issuer: "95.83% Aggregate Score" },
                { title: "2nd Rank - Secondary (SSLC)", issuer: "96.33% Aggregate Score" },
                { title: "NPTEL - Python & Data Structures", issuer: "Computer Science Certification" },
                { title: "REST API Certified (Intermediate)", issuer: "HackerRank Professional" },
              ].map((cert, i) => (
                <div key={i} className="group p-5 bg-[#111111] border border-white/5 rounded-2xl flex items-center gap-5 hover:border-amber-400/20 transition-all">
                  <div className="w-12 h-12 bg-amber-400/10 rounded-xl flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-all">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm group-hover:text-amber-400 transition-colors">{cert.title}</h4>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-black mt-0.5">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="py-32">
        <div className="bg-amber-400 rounded-[3rem] p-12 md:p-24 text-center text-black space-y-10 overflow-hidden relative shadow-[0_0_100px_rgba(251,191,36,0.2)]">
          <div className="absolute top-0 right-0 w-80 h-80 bg-black/5 rounded-full -mr-40 -mt-40 blur-3xl"></div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
            Let's Shape <br />the AI Era.
          </h2>
          <p className="text-black/70 font-bold max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Interested in collaboration or looking for a full‑stack expert? Let's connect and discuss your next big idea.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
            <a href="mailto:suryajane575@gmail.com" className="px-12 py-5 bg-black text-white font-black rounded-2xl hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-2xl">
              <Mail size={20} /> suryajane575@gmail.com
            </a>
            <div className="flex justify-center gap-4">
              <a href="https://linkedin.com/in/surya-jane" target="_blank" rel="noreferrer" className="w-16 h-16 bg-black/10 rounded-2xl flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <Linkedin size={28} />
              </a>
              <a href="https://github.com/surya-arun" target="_blank" rel="noreferrer" className="w-16 h-16 bg-black/10 rounded-2xl flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <Github size={28} />
              </a>
            </div>
          </div>
        </div>
      </Section>

      <footer className="py-16 border-t border-white/5 text-center bg-black">
        <div className="max-w-xl mx-auto px-6 space-y-4">
          <p className="text-zinc-400 text-sm font-medium tracking-tight">
            Designed and Developed by <span className="text-amber-400">Palani Surya S</span>
          </p>
          <div className="flex justify-center gap-6 text-zinc-600">
             <a href="#home" className="hover:text-amber-400 transition-colors">Home</a>
             <a href="#projects" className="hover:text-amber-400 transition-colors">Work</a>
             <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </div>
          <p className="text-zinc-800 text-[10px] uppercase font-black tracking-[0.3em] pt-8">© 2025 ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    </div>
  );
}

