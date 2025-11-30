'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Head of Customer Success',
      company: 'Microsoft',
      content: 'ClickByClick transformed our static screenshots into engaging, interactive experiences. Our customer engagement increased by 75% after switching to step-by-step clickable demos.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'Walmart',
      content: 'As a product team, we saw a 40% reduction in support tickets after implementing ClickByClick demos. Customers could self-serve through our interactive walkthroughs.',
      rating: 5,
      avatar: 'MC'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Marketing Director',
      company: 'Marriott',
      content: 'The analytics dashboard helped us understand how customers interact with our product. We optimized our onboarding flow based on real user behavior data.',
      rating: 5,
      avatar: 'ER'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Sales Engineer',
      company: 'Dow Jones',
      content: 'Our sales cycle shortened by 30% since we started using ClickByClick for customized demos. Prospects can explore features relevant to their use case at their own pace.',
      rating: 4,
      avatar: 'DK'
    },
    {
      id: 5,
      name: 'Priya Sharma',
      role: 'UX Designer',
      company: 'Pfizer',
      content: 'Creating interactive prototypes has never been easier. The collaboration features allow our design and dev teams to iterate quickly on user flows.',
      rating: 5,
      avatar: 'PS'
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Training Specialist',
      company: 'HSBC',
      content: 'We replaced hours of video tutorials with interactive ClickByClick demos. Learner completion rates jumped from 45% to 89% in just one quarter.',
      rating: 5,
      avatar: 'JW'
    },
    {
      id: 7,
      name: 'Robert Davis',
      role: 'CTO',
      company: 'Wall Street Journal',
      content: 'ClickByClick has revolutionized how we onboard new clients. The interactive demos have reduced our implementation time by 50% while increasing client satisfaction scores.',
      rating: 5,
      avatar: 'RD'
    },
    {
      id: 8,
      name: 'Lisa Thompson',
      role: 'Product Owner',
      company: 'British Airways',
      content: 'The ability to create interactive walkthroughs has transformed our user documentation. Support requests dropped by 60% within the first month of implementation.',
      rating: 5,
      avatar: 'LT'
    }
  ];

  // Duplicate testimonials for seamless looping
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by Industry Leaders
            <br />
            Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how teams at top companies are transforming their customer experiences with interactive demos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[600px]">
          {/* Left Column - Scroll Top to Bottom */}
          <div className="overflow-hidden rounded-2xl bg-gradient-to-b from-blue-50 to-purple-50 p-6">
            <motion.div
              className="flex flex-col gap-6"
              animate={{ y: [0, -2000] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear"
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`left-${index}`}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 text-gray-300" />
                  </div>
                  
                  <blockquote className="text-gray-700 mb-4 text-sm leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{testimonial.name}</div>
                      <div className="text-gray-600 text-xs">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Scroll Bottom to Top */}
          <div className="overflow-hidden rounded-2xl bg-gradient-to-b from-purple-50 to-pink-50 p-6">
            <motion.div
              className="flex flex-col gap-6"
              animate={{ y: [-2000, 0] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear"
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`right-${index}`}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 text-gray-300" />
                  </div>
                  
                  <blockquote className="text-gray-700 mb-4 text-sm leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{testimonial.name}</div>
                      <div className="text-gray-600 text-xs">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}