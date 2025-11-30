'use client';

import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$19',
      description: 'Perfect for individuals sparking creativity',
      features: [
        'Create up to 5 interactive demos',
        'Image & video support',
        'Community support',
        '1GB cloud storage',
        'Basic engagement tracking'
      ],
      buttonText: 'Ignite Your Ideas',
      buttonVariant: 'outline' as const
    },
    {
      name: 'Professional',
      price: '$49',
      description: 'Ideal for growing teams scaling impact',
      features: [
        'Everything in Starter',
        'Unlimited demos',
        'Advanced interactive elements',
        'Priority support',
        '10GB cloud storage',
        'Detailed analytics dashboard',
        'Team collaboration',
        'Custom branding'
      ],
      buttonText: 'Elevate Your Work',
      buttonVariant: 'default' as const,
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$79',
      description: 'For organizations driving transformation',
      features: [
        'Everything in Professional',
        'Unlimited storage',
        'Dedicated account manager',
        'Advanced analytics & insights',
        'Single sign-on (SSO)',
        'Custom enterprise contracts',
        'Full API access',
        'White-label experiences'
      ],
      buttonText: 'Transform Your Business',
      buttonVariant: 'outline' as const
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Unleash Your Creativity
            <br />
            With The Right Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pick the perfect plan to bring your interactive visions to life. Start free and upgrade as you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl p-8 border-2 hover:shadow-xl transition-all duration-500 ${
                plan.popular ? 'border-blue-600 shadow-lg scale-105' : 'border-gray-200'
              }`}
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.2}s both`
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-600 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </div>

              <Button
                className={`w-full rounded-full mb-6 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                    : ''
                }`}
                variant={plan.buttonVariant}
              >
                {plan.buttonText}
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
