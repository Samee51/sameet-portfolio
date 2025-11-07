"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "Next.js", level: 90 },
      { name: "React.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "JavaScript", level: 88 },
      { name: "HTML5/CSS3", level: 90 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Supabase", level: 75 },
      { name: "Prisma", level: 70 },
      { name: "Node.js", level: 65 },
      { name: "REST APIs", level: 80 },
      { name: "PostgreSQL", level: 70 },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Figma", level: 75 },
      { name: "Fabric.js", level: 60 },
      { name: "Shadcn", level: 85 },
      { name: "Git", level: 80 },
      { name: "React Hook Form", level: 85 },
      { name: "Zod", level: 80 },
    ],
  },
];

const SkillBar = ({
  skill,
  delay,
}: {
  skill: { name: string; level: number };
  delay: number;
}) => (
  <motion.div
    className="mb-4"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.6 }}
  >
    <div className="flex justify-between items-center mb-2">
      <span className="text-neutral-400 font-medium">{skill.name}</span>
      <span className="text-neutral-400 text-sm">{skill.level}%</span>
    </div>
    <div className="w-full bg-secondary rounded-full h-2">
      <motion.div
        className="bg-gradient-to-r from-accent to-white/50 h-2 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${skill.level}%` }}
        transition={{ duration: 1, delay: delay + 0.3, ease: "easeOut" }}
      />
    </div>
  </motion.div>
);

export default function SkillsContent() {
  return (
    <div className="h-full">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <h1 className="text-4xl lg:text-5xl font-bold mb-2 text-gradient">
          Skills & Technologies
        </h1>
        <motion.p
          className="text-neutral-400 text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          My technical expertise across different domains
        </motion.p>
      </motion.div>

      {/* Skills Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col lg:flex-row gap-6 mb-8"
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ 
              scale: 1.02, 
              y: -5, 
              transition: { duration: 0.3, ease: "easeInOut" } 
            }}
            transition={{ 
              delay: 0.6 + categoryIndex * 0.2, 
              duration: 0.8,
              ease: "easeOut" 
            }}
            className="bg-primary/30 p-6 flex-1 rounded-2xl border border-white/20 backdrop-blur-sm hover:border-white/40 transition-all duration-300"
          >
            <motion.h3 
              className="text-xl font-bold text-white mb-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + categoryIndex * 0.2 }}
            >
              {category.name}
            </motion.h3>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skillIndex}
                  skill={skill}
                  delay={0.8 + categoryIndex * 0.2 + skillIndex * 0.1}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Technical Proficiencies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="bg-primary/30 rounded-2xl p-8 border border-white/20 backdrop-blur-sm"
      >
        <motion.h3 
          className="text-2xl font-bold text-white mb-6 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          Technical Proficiencies
        </motion.h3>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          {[
            { value: "95%", label: "Frontend Development" },
            { value: "85%", label: "UI/UX Design" },
            { value: "80%", label: "Performance Optimization" },
            { value: "75%", label: "Backend Integration" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/30 transition-colors"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 1.8 + index * 0.1,
                duration: 0.6,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="text-2xl font-bold text-white mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + index * 0.1 }}
              >
                {item.value}
              </motion.div>
              <motion.div 
                className="text-neutral-400 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 + index * 0.1 }}
              >
                {item.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Additional Skills Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.4 }}
        className="mt-8 text-center"
      >
        <motion.p
          className="text-neutral-400 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6 }}
        >
          Continuously learning and adapting to new technologies to deliver 
          <span className="text-white font-semibold"> cutting-edge solutions</span> 
          {" "}with modern development practices.
        </motion.p>
      </motion.div>
    </div>
  );
}