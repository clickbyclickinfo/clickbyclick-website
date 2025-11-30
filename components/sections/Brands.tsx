'use client';

import { Slack, Figma, Trello, Cloud, Box, Globe } from 'lucide-react';

export default function Brands() {
  const brands = [
    { name: 'Slack', icon: Slack },
    { name: 'Figma', icon: Figma },
    { name: 'Trello', icon: Trello },
    { name: 'Cloud', icon: Cloud },
    { name: 'Box', icon: Box },
    { name: 'Globe', icon: Globe },
  ];

  return (
    <section className="py-16 px-6 border-y border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-gray-500 mb-12 text-sm uppercase tracking-wider">
          Loved by Visionary Creators Worldwide
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="flex flex-col items-center gap-2 hover:opacity-100 transition-opacity"
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <brand.icon className="w-8 h-8" />
              <span className="text-xs font-medium">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
