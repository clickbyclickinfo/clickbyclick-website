'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200 transition-all duration-1000 animate-pulse-slow ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">New features available</span>
          </div>

          <h1
            className={`text-5xl md:text-7xl lg:text-8xl font-bold leading-tight transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Create Interactive Demos
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              With ClickByClick
            </span>
          </h1>

          <p
            className={`text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Transform static images into engaging, interactive experiences.
            <br />
            Wow your audience with clickable demos that guide them step-by-step.
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full group"
            >
              Get started free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg rounded-full"
            >
              Watch demo
            </Button>
          </div>

          <div
            className={`mt-16 relative transition-all duration-1000 delay-800 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white p-4 animate-bounce-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg mb-4"></div>
                    <h3 className="text-2xl font-bold mb-2">Interactive Demo Builder</h3>
                    <p className="text-gray-400">Create step-by-step walkthroughs with ease</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl p-8 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-400/30 to-purple-400/30"></div>
                  <div className="relative z-10 text-center text-white">
                    <div className="text-4xl mb-2">🖱️</div>
                    <h3 className="font-bold text-lg">Clickable Steps</h3>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 px-4">
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
