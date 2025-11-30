'use client';

import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by Product Teams &
            <br />
            Sales Professionals
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 border border-blue-200">
            <div className="flex gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
              "ClickByClick turned our boring screenshots into magical customer experiences. Our conversion rate skyrocketed by 75% after we started using interactive demos instead of static images."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full"></div>
              <div>
                <div className="font-bold text-lg">Michael Chen</div>
                <div className="text-gray-600">Sales Director at SaaSStart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
