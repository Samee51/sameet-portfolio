"use client";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Github,
  Linkedin,
  TwitterIcon,
  InstagramIcon,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full mt-4">
      <div className="flex flex-col lg:flex-row items-center gap-8 mb-8">
        {/* Animated Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-neutral-200 to-gray-300 border-4 border-white/20 overflow-hidden ">
            {/* Replace with your actual image */}
            <Image
              src="/sameet.png"
              alt="Sameet Multani"
              width={160}
              height={160}
              className="w-full h-full object-cover "
              priority // Optional: if this is above the fold
            />
          </div>

          {/* Floating animation */}
          <motion.div
            className="absolute -inset-4 rounded-full border-2 border-white/20"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Active dot */}
          <motion.div
            className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Name and Title */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-2 text-gradient">
            Sameet Multani
          </h1>
          <p className="text-xl text-neutral-300 mb-4">Frontend Developer</p>

          {/* Social Links - Upwork added as first link */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <motion.a
              href="https://www.upwork.com/freelancers/~01df3d04436a3bd6e6"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors flex items-center justify-center"
              title="Upwork Profile"
            >
              <Image
                height={20}
                width={20}
                src="/upwork.svg"
                alt="Upwork"
                className="invert brightness-0"
              />
            </motion.a>
            <motion.a
              href="https://github.com/Samee51"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              title="GitHub"
            >
              <Github size={20} className="text-white" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sameet-multani-1575571ab"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={20} className="text-white" />
            </motion.a>
            <motion.a
              href="https://x.com/sameetMultani2"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              title="Twitter"
            >
              <TwitterIcon size={20} className="text-white" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/sameet_multani2"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              title="Instagram"
            >
              <InstagramIcon size={20} className="text-white" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
      >
        <div className="flex items-center gap-3 text-neutral-400 bg-primary/30 p-4 rounded-2xl border border-white/20 hover:border-white/40 transition-colors ">
          <Mail className="text-white" size={18} />
          <span className=" tracking-wide">multanisameet222@gmail.com</span>
        </div>
        <div className="flex items-center gap-3 text-neutral-400 bg-primary/30 p-4 rounded-2xl border border-white/20 hover:border-white/40 transition-colors">
          <MapPin className="text-white" size={18} />
          <span className="tracking-wide">India</span>
        </div>
      </motion.div>

      {/* Concise Bio */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mb-8"
      >
        <p className="text-neutral-400 leading-relaxed text-center lg:text-left">
          I build{" "}
          <span className="text-white font-semibold">
            fast, modern web applications
          </span>{" "}
          using Next.js, React, and cutting-edge technologies. Passionate about
          creating exceptional user experiences with clean code and innovative
          solutions.
        </p>
      </motion.div>

      {/* Skills Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8"
      >
        {["Next.js", "React", "TypeScript", "Tailwind"].map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 + index * 0.1 }}
            className="text-center p-3 bg-white/5 rounded-xl border border-white/10 hover:border-white/30 transition-colors"
          >
            <span className="text-white text-sm font-medium">{skill}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className=""
      >
        <motion.a
          href="https://www.upwork.com/freelancers/~01df3d04436a3bd6e6"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className=" bg-white/20 p-4 hover:bg-white/20 rounded-lg transition-colors flex items-center justify-center"
          title="Upwork Profile "
        >
          {" "}
          <span className="me-3 text-xl font-semibold tracking-wider">Hire me on </span>{" "}
          <Image
            height={24}
            width={24}
            src="/upwork.svg"
            alt="Upwork"
            className="invert brightness-0 mt-2"
          />
        </motion.a>
      </motion.div>
    </div>
  );
}
