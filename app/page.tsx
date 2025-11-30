'use client';

import Hero from '@/components/sections/Hero';
import Brands from '@/components/sections/Brands';
import Features from '@/components/sections/Features';
import Workflow from '@/components/sections/Workflow';
import Integrations from '@/components/sections/Integrations';
import PowerFeatures from '@/components/sections/PowerFeatures';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/sections/Footer';
import Header from '@/components/sections/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <Hero />
      <Brands />
      <Features />
      <Workflow />
      <Integrations />
      <PowerFeatures />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  );
}
