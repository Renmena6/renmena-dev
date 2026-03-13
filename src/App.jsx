import React from "react"
import { ArrowUpRight, Github, Mail } from "lucide-react"

// IMPORTACIÓN DE IMÁGENES DESDE ASSETS
import fotoPerfil from "./assets/ren.png"
import imgGensite from "./assets/gensite-web.png"
import imgCava from "./assets/cava-arch.png"

// Componente Tag optimizado
const Tag = ({ children }) => (
  <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider border border-black/10 bg-gray-100/50">
    {children}
  </span>
)

// Componente ProjectCard
const ProjectCard = ({ title, desc, tech, image, demo, github }) => (
  <div className="border-r border-b border-black/10 group bg-white flex flex-col">
    <div className="p-4 border-b border-black/10 flex justify-between items-center bg-white">
      <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
        Featured Project
      </span>

      <div className="flex gap-4">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <Github size={16} className="opacity-40 hover:opacity-100 hover:text-black transition-all" />
        </a>
        <a href={demo} target="_blank" rel="noopener noreferrer">
          <ArrowUpRight size={18} className="opacity-40 hover:opacity-100 hover:text-emerald-600 transition-all" />
        </a>
      </div>
    </div>

    <div className="aspect-video overflow-hidden bg-gray-200 border-b border-black/5">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
      />
    </div>

    <div className="p-6 grow flex flex-col">
      <h3 className="text-2xl font-black uppercase tracking-tighter mb-2 group-hover:text-emerald-600 transition-colors">
        {title}
      </h3>
      <p className="text-sm opacity-70 mb-6 leading-relaxed">
        {desc}
      </p>
      <div className="flex gap-2 flex-wrap mt-auto">
        {tech.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </div>
  </div>
)

function App() {
  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#1a1a1a] font-sans p-4 md:p-8 selection:bg-emerald-100 selection:text-emerald-900">
      
      <div className="max-w-6xl mx-auto border border-black/10 bg-white/60 backdrop-blur-md shadow-xl">
        
        {/* NAVEGACIÓN */}
        <header className="grid grid-cols-1 md:grid-cols-4 border-b border-black/10">
          <div className="p-6 border-r border-black/10 bg-white">
            <h1 className="text-xl font-black uppercase tracking-tighter italic">
              Renzo Mena
            </h1>
            <p className="text-[10px] opacity-50 font-mono tracking-widest uppercase mt-1">
              Fullstack Dev — 2026
            </p>
          </div>

          <div className="col-span-2 p-6 flex items-center justify-center gap-10 text-[10px] font-black uppercase tracking-[0.2em]">
            <a href="#projects" className="hover:text-emerald-600 border-b-2 border-transparent hover:border-emerald-600 transition-all">Projects</a>
            <a href="#tech" className="hover:text-emerald-600 border-b-2 border-transparent hover:border-emerald-600 transition-all">Tech Stack</a>
            <a href="#contact" className="hover:text-emerald-600 border-b-2 border-transparent hover:border-emerald-600 transition-all">Contact</a>
          </div>

          <div className="p-6 border-l border-black/10 flex justify-end bg-white">
            <a
              href="mailto:renzomena.dev@gmail.com"
              className="p-2 border border-black/10 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all transform active:scale-95"
            >
              <Mail size={18} />
            </a>
          </div>
        </header>

        {/* HERO */}
        <section className="grid grid-cols-1 md:grid-cols-4 border-b border-black/10">
          <div className="col-span-3 p-10 md:p-20">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
              Building digital <br />
              <span className="text-emerald-600 italic">experiences</span> <br />
              that people use.
            </h2>
          </div>

          {/* PERFIL CON TU FOTO REAL */}
          <div className="p-8 border-l border-black/10 flex flex-col items-center justify-center bg-[#fcfaf7]/50">
            <div className="relative mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full blur opacity-20"></div>
              <img
                src={fotoPerfil}
                alt="Renzo Mena Profile"
                className="relative w-28 h-28 rounded-full object-cover border-2 border-white shadow-lg"
              />
            </div>
            <p className="text-xs text-center font-medium leading-relaxed opacity-70 max-w-[180px]">
              Especializado en arquitecturas escalables y diseño de interfaces de alto impacto.
            </p>
          </div>
        </section>

        {/* TECNOLOGÍAS */}
        <section id="tech" className="grid grid-cols-2 md:grid-cols-5 border-b border-black/10 bg-gray-50/30">
          {["React", "Tailwind", "MongoDB", "Node.js", "PostgreSQL"].map((tech) => (
            <div
              key={tech}
              className="p-10 border-r border-black/10 text-center font-black uppercase text-[11px] tracking-[0.2em] hover:bg-emerald-600 hover:text-white transition-all cursor-default"
            >
              {tech}
            </div>
          ))}
        </section>

        {/* PROYECTOS CON TUS IMÁGENES REALES */}
        <section id="projects" className="grid grid-cols-1 md:grid-cols-2">
          <ProjectCard
            title="GenSite"
            desc="Generador de sitios web dinámicos con enfoque en la automatización de componentes y optimización SEO."
            image={imgGensite}
            tech={["React", "Tailwind", "Node.js"]}
            demo="https://gensite-web.vercel.app/"
            github="#"
          />
          <ProjectCard
            title="Cava Arch"
            desc="Sistema de catálogo y landing para bodegas premium con diseño minimalista y alta fidelidad visual."
            image={imgCava}
            tech={["React", "Vite", "Framer Motion"]}
            demo="https://cava-arch.vercel.app/"
            github="#"
          />
        </section>

        {/* FOOTER */}
        <footer id="contact" className="grid grid-cols-2 md:grid-cols-4 bg-white">
          {[
            { name: "Github", link: "#" },
            { name: "LinkedIn", link: "#" },
            { name: "Twitter", link: "#" },
            { name: "Download CV", link: "#" }
          ].map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 border-r border-black/10 text-center text-[11px] font-black uppercase tracking-[0.3em] hover:bg-emerald-600 hover:text-white transition-all last:border-r-0"
            >
              {social.name}
            </a>
          ))}
        </footer>
      </div>

      <div className="max-w-6xl mx-auto py-6 flex justify-between items-center opacity-30 text-[9px] font-mono uppercase tracking-widest">
        <span>Villa Constitución, AR</span>
        <span>All rights reserved — 2026</span>
      </div>
    </div>
  )
}

export default App