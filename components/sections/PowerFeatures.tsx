'use client';

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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Demo Creation
            <br />
            Features
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-gray-600 overflow-hidden"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`}></div>

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
