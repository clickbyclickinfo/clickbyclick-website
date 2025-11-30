'use client';

import { Check } from 'lucide-react';

export default function Workflow() {
  const steps = [
    {
      title: 'Upload Your Content',
      description: 'Simply drag and drop your screenshots or images. We support all major formats to get you started quickly.'
    },
    {
      title: 'Add Interactive Elements',
      description: 'Bring your images to life with clickable hotspots, animated tooltips, and engaging callouts that guide users.'
    },
    {
      title: 'Publish & Share',
      description: 'Go live in seconds! Share via link, embed in your website, or integrate with your favorite tools.'
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Create Stunning Demos
              <br />
              In Just 3 Steps
            </h2>

            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-4 group"
                style={{
                  animation: `slideRight 0.6s ease-out ${index * 0.2}s both`
                }}
              >
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8">
                <div className="bg-white rounded-xl shadow-lg p-6 mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-lg"></div>
                    <div className="flex-1">
                      <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <div className="h-2 bg-gray-100 rounded flex-1"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <div className="h-2 bg-gray-100 rounded flex-1"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-gray-300 rounded"></div>
                      <div className="h-2 bg-gray-100 rounded flex-1"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 py-4 bg-white">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
