"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CircularNav() {
  const pathname = usePathname();
  return (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{
        rotate: 360,
        y: [0, -10, 0], // Floating effect
      }}
      transition={{
        rotate: { repeat: Infinity, duration: 60, ease: "linear" },
        y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
      }}
      className="relative  w-96 h-96 flex items-center justify-center"
    >
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.02, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Outer Circle */}
      <div className="absolute w-full h-full rounded-full border-2 border-white/30" />

      {/* Middle Circle */}
      <div className="absolute w-3/4 h-3/4 rounded-full border border-white/20" />

      {/* Navigation Items - Larger circles */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-24 h-24">
        <Link href={"/"}>
          <motion.button
            initial={{ rotate: 0 }}
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            className={`w-full h-full rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 z-30 backdrop-blur-sm border-2 ${
              pathname === "/"
                ? "bg-white text-black shadow-2xl shadow-white/50 border-white scale-110"
                : "bg-black/40 text-white border-white/30 hover:bg-white/20 hover:border-white/50"
            }`}
          >
            About
            {pathname === "/" && (
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(255,255,255,0.6)",
                    "0 0 40px rgba(255,255,255,0.8)",
                    "0 0 20px rgba(255,255,255,0.6)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </motion.button>
        </Link>
      </div>

      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 w-24 h-24">
        <Link href={"/experience"}>
          <motion.button
            initial={{ rotate: 0 }}
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            className={`w-full h-full rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 z-30 backdrop-blur-sm border-2 ${
              pathname === "/experience"
                ? "bg-white text-black shadow-2xl shadow-white/50 border-white scale-110"
                : "bg-black/40 text-white border-white/30 hover:bg-white/20 hover:border-white/50"
            }`}
          >
            Experience
            {pathname === "/experience" && (
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(255,255,255,0.6)",
                    "0 0 40px rgba(255,255,255,0.8)",
                    "0 0 20px rgba(255,255,255,0.6)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </motion.button>
        </Link>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-24">
        <Link href={"/projects"}>
          <motion.button
            initial={{ rotate: 0 }}
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            className={`w-full h-full rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 z-30 backdrop-blur-sm border-2 ${
              pathname === "/projects"
                ? "bg-white text-black shadow-2xl shadow-white/50 border-white scale-110"
                : "bg-black/40 text-white border-white/30 hover:bg-white/20 hover:border-white/50"
            }`}
          >
            Projects
            {pathname === "/projects" && (
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(255,255,255,0.6)",
                    "0 0 40px rgba(255,255,255,0.8)",
                    "0 0 20px rgba(255,255,255,0.6)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </motion.button>
        </Link>
      </div>

      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 w-24 h-24">
        <Link href={"/skills"}>
          <motion.button
            initial={{ rotate: 0 }}
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            className={`w-full h-full rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 z-30 backdrop-blur-sm border-2 ${
              pathname === "/skills"
                ? "bg-white text-black shadow-2xl shadow-white/50 border-white scale-110"
                : "bg-black/40 text-white border-white/30 hover:bg-white/20 hover:border-white/50"
            }`}
          >
            Skills
            {pathname === "/skills" && (
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(255,255,255,0.6)",
                    "0 0 40px rgba(255,255,255,0.8)",
                    "0 0 20px rgba(255,255,255,0.6)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </motion.button>
        </Link>
      </div>
      {/* Center Circle - Also counter-rotates */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        className="absolute w-10 h-10 rounded-full bg-gradient-to-br from-white to-gray-300 border-2 border-white/20 flex items-center justify-center shadow-2xl z-20"
      >
        <div className="w-6 h-6 rounded-full bg-black z-20"></div>
      </motion.div>
    </motion.div>
  );
}
