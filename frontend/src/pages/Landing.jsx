import React from 'react';
import LandingNavbar from '../components/landing/LandingNavbar';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import HowItWorks from '../components/landing/HowItWorks';
import Benefits from '../components/landing/Benefits';
import Preview from '../components/landing/Preview';
import CTASection from '../components/landing/CTASection';
import LandingFooter from '../components/landing/LandingFooter';

export default function Landing() {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50 flex flex-col font-sans transition-colors duration-300 relative">
      <LandingNavbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <Benefits />
        <Preview />
        <CTASection />
      </main>
      <LandingFooter />
    </div>
  );
}
