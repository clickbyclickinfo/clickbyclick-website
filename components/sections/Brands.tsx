'use client';

import { motion } from 'framer-motion';
import { 
  Chrome, 
  ShoppingCart, 
  Building, 
  Newspaper, 
  Heart, 
  Banknote, 
  BookOpen, 
  Plane 
} from 'lucide-react';

export default function Brands() {
  const brands = [
    { name: 'Microsoft', icon: Chrome },
    { name: 'Walmart', icon: ShoppingCart },
    { name: 'Marriott', icon: Building },
    { name: 'Dow Jones', icon: Newspaper },
    { name: 'Pfizer', icon: Heart },
    { name: 'HSBC', icon: Banknote },
    { name: 'Wall Street Journal', icon: BookOpen },
    { name: 'British Airways', icon: Plane },
  ];

  const duplicatedBrands = [...brands, ...brands, ...brands]; // Triple for smooth looping

  return (
    <section className="py-16 px-6 border-y border-gray-200 bg-white">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.p 
          className="text-center text-gray-500 mb-12 text-sm uppercase tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Trusted by Innovative Teams Worldwide
        </motion.p>
        <div className="overflow-hidden">
          <div className="flex gap-8">
            <motion.div 
              className="flex gap-8 animate-loop-scroll"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {duplicatedBrands.map((brand, index) => (
                <motion.div
                  key={`${brand.name}-${index}`}
                  className="flex flex-col items-center gap-2 min-w-[120px] opacity-60 hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <brand.icon className="w-8 h-8" />
                  <span className="text-xs font-medium text-center">{brand.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      <style jsx global>{`
        @keyframes loop-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.3333%);
          }
        }
        
        .animate-loop-scroll {
          display: flex;
          animation: loop-scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
}