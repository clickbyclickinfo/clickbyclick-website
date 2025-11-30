'use client';

import { Layers, Zap, Target } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Layers,
      title: 'Step-by-Step Demo Builder',
      description: 'Turn your screenshots into magical walkthroughs. Our intuitive builder guides you through each step of creating engaging demos.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Interactive Clickable Elements',
      description: 'Transform static images into dynamic experiences. Add tooltips, hotspots, and callouts that respond to user interactions.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Export & Share Demos',
      description: 'Showcase your work anywhere. Publish to a link, embed in your website, or share directly with stakeholders.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Demo Creation
            <br />
            Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to create engaging, interactive demos and tutorials.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-gray-300 animate-bounce-in"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.2}s both`
              }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
