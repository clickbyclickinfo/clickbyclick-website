'use client';

import { motion } from 'framer-motion';
import { Slack, Mail, Calendar, MessageSquare, FileText, Video, Database, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Integrations() {
  const integrations = [
    { name: 'Slack', icon: Slack, color: 'from-pink-500 to-rose-500' },
    { name: 'Gmail', icon: Mail, color: 'from-red-500 to-orange-500' },
    { name: 'Calendar', icon: Calendar, color: 'from-blue-500 to-cyan-500' },
    { name: 'Chat', icon: MessageSquare, color: 'from-green-500 to-emerald-500' },
    { name: 'Docs', icon: FileText, color: 'from-yellow-500 to-orange-500' },
    { name: 'Video', icon: Video, color: 'from-purple-500 to-pink-500' },
    { name: 'Database', icon: Database, color: 'from-indigo-500 to-blue-500' },
    { name: 'Share', icon: Share2, color: 'from-teal-500 to-cyan-500' },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-4 gap-4">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                className={`aspect-square rounded-2xl bg-gradient-to-br ${integration.color} flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <integration.icon className="w-8 h-8 text-white" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Integrate Your Demo
              <br />
              With Any Tool
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Supercharge your workflow by connecting ClickByClick with your favorite tools. Embed demos directly in Notion, Slack, or any platform.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full"
                >
                  Explore integrations
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
