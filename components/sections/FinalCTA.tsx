'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function FinalCTA() {
  const benefits = [
    'Free 14-day trial',
    'No credit card required',
    'Cancel anytime',
    '24/7 support'
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 bg-grid-white/10"></div>
          <div className="relative z-10 p-12 md:p-20 text-center text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Turn Your Screenshots Into
              <br />
              Interactive Masterpieces
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join thousands of creators who are already transforming their static images into engaging experiences.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full group"
              >
                Get started free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full"
                onClick={() => {
                  // Calendly integration
                  if (typeof window !== 'undefined') {
                    const script = document.createElement('script');
                    script.src = 'https://assets.calendly.com/assets/external/widget.js';
                    script.async = true;
                    document.head.appendChild(script);
                    
                    script.onload = () => {
                      // @ts-ignore
                      window.Calendly.initPopupWidget({ url: 'https://calendly.com/your-calendly-url' });
                    };
                  }
                }}
              >
                Schedule a demo
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 relative">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl mx-auto mb-3"></div>
                  <div className="h-2 bg-gray-100 rounded w-3/4 mx-auto"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
