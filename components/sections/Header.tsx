'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <motion.div 
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div 
              className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-white font-bold text-lg">C</span>
            </motion.div>
            <motion.span 
              className="text-xl font-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              ClickByClick
            </motion.span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            <motion.a 
              href="#features" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Features
            </motion.a>
            <motion.a 
              href="#how-it-works" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              How It Works
            </motion.a>
            <motion.a 
              href="#pricing" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Pricing
            </motion.a>
            <motion.a 
              href="#testimonials" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Testimonials
            </motion.a>
            <motion.a 
              href="/blog" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Blog
            </motion.a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost">Sign in</Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-black hover:bg-gray-800">Get started</Button>
            </motion.div>
          </div>

          <motion.button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </motion.button>
        </motion.div>

        {isMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 pb-4 space-y-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.a 
              href="#features" 
              className="block text-gray-600 hover:text-gray-900"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Features
            </motion.a>
            <motion.a 
              href="#how-it-works" 
              className="block text-gray-600 hover:text-gray-900"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              How It Works
            </motion.a>
            <motion.a 
              href="#pricing" 
              className="block text-gray-600 hover:text-gray-900"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              Pricing
            </motion.a>
            <motion.a 
              href="#testimonials" 
              className="block text-gray-600 hover:text-gray-900"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              Testimonials
            </motion.a>
            <motion.a 
              href="/blog" 
              className="block text-gray-600 hover:text-gray-900"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              Blog
            </motion.a>
            <div className="flex flex-col gap-2 pt-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost">Sign in</Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-black hover:bg-gray-800">Get started</Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}