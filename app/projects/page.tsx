"use client";
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: "AI-Powered Content Planner",
    description: "Intelligent social media and blog content planning platform with AI-driven suggestions and scheduling capabilities.",
    technologies: ["Next.js", "Tailwind CSS", "Langchain.js", "Supabase", "Prisma"],
    status: "Completed",
    liveUrl: "#",
    githubUrl: "#",
    image: "/projects/content-planner.jpg",
    accentColor: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Invoice Generator",
    description: "Modern invoice creation tool with PDF export, template management, and client database.",
    technologies: ["Next.js", "Tailwind CSS", "PDFKit", "Fabric.js", "Supabase"],
    status: "Completed",
    liveUrl: "#",
    githubUrl: "#",
    image: "/projects/invoice-generator.jpg",
    accentColor: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "AI Image Caption Generator",
    description: "Upload images and generate intelligent captions using AI models with customization options.",
    technologies: ["Next.js", "Tailwind CSS", "Figma", "Shadcn", "AI APIs"],
    status: "Completed",
    liveUrl: "#",
    githubUrl: "#",
    image: "/projects/caption-generator.jpg",
    accentColor: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "AI Resume Builder",
    description: "AI-enhanced resume builder with real-time preview, ATS optimization, and professional templates.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React Hook Form", "Zod", "Framer Motion", "PDF-Lib"],
    status: "In Progress",
    liveUrl: "#",
    githubUrl: "#",
    image: "/projects/resume-builder.jpg",
    accentColor: "from-orange-500/20 to-red-500/20"
  }
]

export default function ProjectsContent() {
  return (
    <div className="h-full">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h1 className="text-4xl lg:text-5xl font-bold mb-2 text-gradient">
          Projects
        </h1>
        <motion.p
          className="text-neutral-300 text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Showcasing my latest work with modern technologies
        </motion.p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.4, ease: "easeOut" }
            }}
            transition={{ 
              delay: 0.4 + index * 0.2,
              duration: 0.6,
              ease: "easeOut"
            }}
            className="group relative bg-primary/30 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-white/10 flex flex-col h-full"
          >
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            {/* Project Image with Unique Animation */}
            <div className="relative h-48 overflow-hidden flex-shrink-0">
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent z-10"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Placeholder for project image - replace with actual images */}
              <motion.div 
                className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.div
                  className="text-4xl text-white/40 font-bold"
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 0.8, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title.split(' ')[0]}
                </motion.div>
              </motion.div>

              {/* Status Badge */}
              <motion.span 
                className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold border backdrop-blur-sm z-20 ${
                  project.status === 'Completed' 
                    ? 'bg-green-500/20 text-green-400 border-green-500/30 hidden'
                    : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                }`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.2 }}
                whileHover={{ scale: 1.1 }}
              >
                {project.status}
              </motion.span>
            </div>

            {/* Content Section */}
            <div className="p-6 relative z-10 flex flex-col flex-grow">
              {/* Project Title */}
              <motion.h3 
                className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.2 }}
              >
                {project.title}
              </motion.h3>
              
              {/* Project Description */}
              <motion.p 
                className="text-neutral-300 mb-4 leading-relaxed text-sm group-hover:text-white/80 transition-colors duration-300 flex-grow"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.2 }}
              >
                {project.description}
              </motion.p>

              {/* Technologies */}
              <motion.div 
                className="flex flex-wrap gap-2 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 + index * 0.2 }}
              >
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="px-3 py-1 bg-white/10 text-neutral-300 rounded-full text-xs border border-white/20 hover:border-white/40 transition-all duration-300 group-hover:bg-white/20 group-hover:text-white"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: 1 + index * 0.2 + techIndex * 0.05,
                      duration: 0.4 
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      y: -2
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* Action Buttons - Now at the bottom */}
              <motion.div 
                className="flex gap-3 mt-auto"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.2 }}
              >
                <motion.a
                  href={project.liveUrl}
                  className="flex items-center gap-2 lg:px-4 px-2 py-2.5 bg-white text-gray-900 rounded-xl transition-all duration-300 border border-white shadow-lg hover:shadow-xl hover:shadow-white/30 font-semibold text-sm flex-1 justify-center group/btn"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink size={16} />
                  Live Demo
                  <ArrowUpRight size={14} className="opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                </motion.a>
                <motion.a
                  href={project.githubUrl}
                  className="flex items-center gap-2 px-4 py-2.5 bg-white/10 text-white rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40 hover:bg-white/20 font-semibold text-sm flex-1 justify-center group/btn"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github size={16} />
                  Code
                  <ArrowUpRight size={14} className="opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                </motion.a>
              </motion.div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12 transform" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}