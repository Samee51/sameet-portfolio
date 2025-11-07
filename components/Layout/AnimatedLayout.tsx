// components/Layout/AnimatedLayout.tsx
'use client'

import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

interface AnimatedLayoutProps {
  children: React.ReactNode
  nav: React.ReactNode
}

export default function AnimatedLayout({
  children,
  nav,
}: AnimatedLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden relative">
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row">
        {/* Mobile Header with Burger Menu */}
        <div className="lg:hidden flex items-center justify-between py-4 px-4 sticky top-0 z-30 bg-primary/80 backdrop-blur-sm border-b border-white/10">
          <motion.h1 
            className="text-white font-bold text-xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Portfolio
          </motion.h1>
          
          {/* Burger Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Menu size={24} />
          </motion.button>
        </div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {/* Close Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-lg transition-colors z-50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <X size={24} />
              </motion.button>

              {/* Circular Navigation Centered */}
              <motion.div
                className="w-full h-full flex items-center justify-center p-8"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30,
                  delay: 0.1
                }}
              >
                <div className="scale-75">
                  {nav}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Left Content Area - Scrollable without scrollbar */}
        <div className="flex-1 lg:h-screen overflow-hidden">
          <div className="h-full pt-4 lg:pt-12 pb-4 lg:pb-12 md:px-4 lg:pl-12 lg:pr-6">
            <motion.div
              className="bg-secondary/30 backdrop-blur-md rounded-3xl md:border border-white/20 shadow-2xl h-full"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Scrollable container without scrollbar */}
              <div className="h-full overflow-y-auto scrollbar-hide">
                <div className="p-4 sm:p-6 lg:p-8 xl:p-12 min-h-full">
                  <AnimatePresence mode="wait">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="h-full"
                    >
                      {children}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Desktop Navigation - Side on large screens */}
        <div className="hidden lg:flex lg:w-[400px] xl:w-[500px] 2xl:w-[600px] h-screen items-center justify-center sticky top-0">
          <motion.div
            className="scale-90 lg:scale-100 xl:scale-110"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {nav}
          </motion.div>
        </div>

        {/* Mobile Spacer - Ensures content isn't hidden behind header */}
        <div className="lg:hidden h-16"></div>
      </div>
    </main>
  )
}