'use client';

import { motion } from 'framer-motion';
import { Cloud, Zap, Shield, Layers, Globe, Lock } from 'lucide-react';

export default function PowerFeatures() {
  const features = [
    {
      icon: Cloud,
      title: 'Cloud-based Demo Creation',
      description: 'Access your creations from any device, anywhere. Never worry about losing your work with automatic cloud saving.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Lightning-Fast Publishing',
      description: 'Go from idea to published demo in record time. Our optimized engine delivers blazing-fast performance.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Secure Demo Sharing',
      description: 'Control who sees your demos with password protection, expiration dates, and detailed analytics.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Layers,
      title: 'Rich Interactive Elements',
      description: 'Engage your audience with animated tooltips, interactive hotspots, and customizable callouts.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Global Demo Delivery',
      description: 'Deliver seamless experiences worldwide with our ultra-fast global content delivery network.',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Lock,
      title: 'Real-Time Collaboration',
      description: 'Create together with your team in real-time. See changes instantly and collaborate seamlessly.',
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
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
            Powerful Demo Creation
            <br />
            Features
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-gray-600 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`}
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              ></motion.div>

              <div className="relative z-10">
                <motion.div 
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-400 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  {feature.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
