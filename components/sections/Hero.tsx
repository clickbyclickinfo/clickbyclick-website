'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <motion.section 
      className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 overflow-hidden relative min-h-screen flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-indigo-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-cyan-400 rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-blob-2 animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-violet-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-float animation-delay-3000"></div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-900/70 z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-20 w-full">
        <div className="text-center space-y-6 sm:space-y-8">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
            <span className="text-sm font-medium text-gray-700">New features available</span>
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Create Interactive Demos
            <br />
            <motion.span 
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent relative"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                repeatType: "reverse", 
                ease: "linear" 
              }}
            >
              With ClickByClick
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-sm"></span>
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Transform static images into engaging, interactive experiences.
            <br />
            Wow your audience with clickable demos that guide them step-by-step.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full group"
              >
                Get started free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full"
              >
                Watch demo
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-16 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white p-4 transform transition-all duration-500 hover:shadow-3xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div 
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 text-white relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                  <div className="relative z-10">
                    <motion.div 
                      className="w-12 h-12 bg-orange-500 rounded-lg mb-4 flex items-center justify-center"
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        repeatType: "reverse" 
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2">Interactive Demo Builder</h3>
                    <p className="text-gray-400">Create step-by-step walkthroughs with ease</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl p-8 flex items-center justify-center relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-400/30 to-purple-400/30 animate-pulse"></div>
                  <div className="relative z-10 text-center text-white">
                    <motion.div 
                      className="text-4xl mb-2"
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 5, 0]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        repeatType: "reverse" 
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                    </motion.div>
                    <h3 className="font-bold text-lg">Clickable Steps</h3>
                  </div>
                </motion.div>
              </div>
              <div className="flex items-center justify-between mt-4 px-4">
                <div className="flex gap-2">
                  {[1, 2, 3].map((i) => (
                    <motion.div 
                      key={i} 
                      className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold"
                      whileHover={{ scale: 1.2, rotate: i * 10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {i}
                    </motion.div>
                  ))}
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div 
                      key={i} 
                      className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      whileHover={{ scale: 1.5 }}
                      animate={{
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.1
                      }}
                    ></motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
