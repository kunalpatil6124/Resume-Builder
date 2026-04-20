import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Decorative blurry flares */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100 dark:bg-blue-900/30 blur-3xl opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-100 dark:bg-indigo-900/30 blur-3xl opacity-50 z-0"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="bg-gray-900 dark:bg-gray-900 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden border border-gray-800"
        >
          {/* subtle pattern inside CTA */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Ready to upgrade your career?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Stop struggling with Word docs. Build a standout resume that bypasses ATS filters and lands you the interview. No credit card required.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/builder"
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-gray-900 shadow-xl hover:bg-gray-50 scale-100 hover:scale-105 transition-all text-center"
            >
              Start Creating Resume
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            Everything is stored locally on your device for maximum privacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
