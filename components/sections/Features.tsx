'use client';

import { motion } from 'framer-motion';
import { Layers, Zap, Target, Play, Users, Share2 } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Layers,
      title: 'Step-by-Step Demo Builder',
      description: 'Transform static images into engaging walkthroughs. Our intuitive builder guides you through each step of creating interactive demos.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Interactive Clickable Elements',
      description: 'Create dynamic experiences with tooltips, hotspots, and callouts that respond to user interactions for enhanced engagement.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Export & Share Demos',
      description: 'Publish to a link, embed in your website, or share directly with stakeholders. Showcase your work anywhere effortlessly.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Play,
      title: 'Video Integration',
      description: 'Combine images and videos to create rich, multimedia demos that effectively communicate your product features.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work seamlessly with your team to create, review, and refine demos together in real-time with collaborative editing.',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Share2,
      title: 'Analytics & Insights',
      description: 'Track engagement metrics and user interactions to understand how your audience interacts with your demos and improve accordingly.',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="features" className="py-24 px-6">
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
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Everything you need to create engaging, interactive demos and tutorials that wow your audience.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-gray-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              <motion.h3 
                className="text-2xl font-bold mb-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                {feature.title}
              </motion.h3>
              <motion.p 
                className="text-gray-600 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}