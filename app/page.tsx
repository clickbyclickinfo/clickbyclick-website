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
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "ClickByClick",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "An interactive demo creation tool that allows users to build step-by-step, clickable demonstrations using images and videos.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "120"
            }
          })
        }}
      />
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
    </>
  );
}