'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Workflow() {
  const steps = [
    {
      title: 'Upload Your Screenshots',
      description: 'Drag and drop your screenshots or images. We support all major formats to help you create demos quickly.'
    },
    {
      title: 'Add Interactive Elements',
      description: 'Bring your images to life with clickable hotspots, animated tooltips, and engaging callouts that guide users step-by-step.'
    },
    {
      title: 'Publish & Share',
      description: 'Go live instantly! Share via link, embed in your website, or integrate with your favorite tools to reach your audience.'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Create Stunning Demos
            <br />
            In Just 3 Steps
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transform your static screenshots into engaging, interactive experiences with our simple workflow.
          </motion.p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="flex gap-4 group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.div 
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </motion.div>
                <div>
                  <motion.h3 
                    className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                  >
                    {step.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8">
                <motion.div 
                  className="bg-white rounded-xl shadow-lg p-6 mb-4"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-lg"></div>
                    <div className="flex-1">
                      <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Check className="w-5 h-5 text-green-500" />
                      </motion.div>
                      <div className="h-2 bg-gray-100 rounded flex-1"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: -10 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Check className="w-5 h-5 text-green-500" />
                      </motion.div>
                      <div className="h-2 bg-gray-100 rounded flex-1"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <div className="w-5 h-5 border-2 border-gray-300 rounded"></div>
                      </motion.div>
                      <div className="h-2 bg-gray-100 rounded flex-1"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="flex items-center justify-center gap-2 py-4 bg-white">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div 
                    key={i} 
                    className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  ></motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}