"use client";

import { motion } from "framer-motion";
import { Calendar, Building2, Rocket, Target, Zap, TrendingUp } from 'lucide-react';

const experiences = [
  {
    company: "Infosonic Software Pvt Ltd",
    role: "Frontend Developer",
    period: "June 2024 - Aug 2025",
    icon: <Building2 size={20} />,
    projects: [
      {
        name: "Task Manager",
        icon: <Target size={16} />,
        achievements: [
          "Improved load time by 50% using code splitting",
          "Reduced table load time by 60% with TanStack Table",
        ],
      },
      {
        name: "Finex",
        icon: <TrendingUp size={16} />,
        achievements: [
          "Reduced API calls by 70% via sessionStorage caching",
          "Enhanced UX with manual save controls over auto-save",
        ],
      },
      {
        name: "Resolution Experts",
        icon: <Zap size={16} />,
        achievements: [
          "Reduced load time by 30-40% using lazy loading",
          "Built efficient search and pagination for large datasets",
        ],
      },
    ],
  },
];

export default function ExperienceContent() {
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
          Experience
        </h1>
        <motion.p
          className="text-neutral-300 text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          My professional journey and key achievements
        </motion.p>
      </motion.div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <motion.div
          className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/30 via-blue-500/30 to-transparent hidden md:block"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.3, duration: 0.8 }}
            className="relative mb-8 group"
          >
            {/* Timeline Dot */}
            <motion.div
              className="absolute left-4 w-4 h-4 ms-[1px] rounded-full bg-gradient-to-r from-purple-500 to-blue-500 border-4 border-primary z-10 hidden md:block"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6 + index * 0.3, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.2 }}
            />

            {/* Experience Card */}
            <motion.div
              className="md
        md:ml-12 bg-primary/30 backdrop-blur-sm rounded-3xl md:p-8 p-6 border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 group-hover:translate-x-2"
              whileHover={{ y: -5 }}
            >
              {/* Company Header */}
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
                <div className="flex items-center gap-4">
                  <motion.div
                    className="p-3 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl border border-purple-500/30"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {exp.icon}
                  </motion.div>
                  <div>
                    <motion.h3
                      className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.3 }}
                    >
                      {exp.company}
                    </motion.h3>
                    <motion.p
                      className="text-xl text-neutral-400"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + index * 0.3 }}
                    >
                      {exp.role}
                    </motion.p>
                  </div>
                </div>
                
                <motion.span
                  className="flex items-center gap-2 text-neutral-400 bg-white/10 px-4 py-2 rounded-full border border-white/20 mt-4 lg:mt-0 group-hover:bg-white/20 group-hover:text-white transition-all duration-300"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.3, type: "spring", stiffness: 200 }}
                >
                  <Calendar size={16} />
                  {exp.period}
                </motion.span>
              </div>

              {/* Projects */}
              <div className="">
                {exp.projects.map((project, projIndex) => (
                  <motion.div
                    key={projIndex}
                    className={`border-l-2 border-purple-500/50 pl-6 relative group/project ${projIndex !== 2 ? "pb-6" : ""} `}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + index * 0.3 + projIndex * 0.2 }}
                  >
                    {/* Project Icon */}
                    <motion.div
                      className="absolute -left-5 ms-[2px] p-2 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.icon}
                    </motion.div>

                    {/* Project Header */}
                    <motion.h4
                      className="text-lg font-semibold text-white mb-4 flex items-center gap-2 group-hover/project:text-green-400 transition-colors duration-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.4 + index * 0.3 + projIndex * 0.2 }}
                    >
                      {project.name}
                    
                    </motion.h4>

                    {/* Achievements */}
                    <ul className="space-y-3">
                      {project.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          className="text-neutral-400 flex items-start group/achievement"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 1.6 + index * 0.3 + projIndex * 0.2 + achIndex * 0.1,
                          }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.span
                            className="text-green-400 mr-3 mt-1 flex-shrink-0"
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            ▹
                          </motion.span>
                          <span className="group-hover/achievement:text-white transition-colors duration-300">
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute top-4 right-4 w-20 h-20 bg-purple-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Skills Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8 }}
        className="mt-6 bg-primary/30 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
      >
        <motion.h3
          className="text-2xl font-bold text-white mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          Key Impact Areas
        </motion.h3>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          {[
            { metric: "50-70%", label: "Performance Improvement" },
            { metric: "60%", label: "Load Time Reduction" },
            { metric: "70%", label: "API Call Optimization" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 1 + index * 0.2,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
            >
              <motion.div
                className="text-2xl font-bold text-white mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.6 + index * 0.2 }}
              >
                {item.metric}
              </motion.div>
              <motion.div
                className="text-neutral-400 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.8 + index * 0.2 }}
              >
                {item.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}