import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  "No hidden paywalls or premium subscriptions",
  "Applicant Tracking System (ATS) friendly formats",
  "Export as unlimited high-quality PDFs",
  "Designed by formatting experts",
  "Dark mode comfortable editing",
  "No accounts or passwords to remember",
  "Dynamic drag-and-drop sections",
  "Fast, browser-based performance"
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
              Why use our generator?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              We built this tool because we were tired of "free" resume builders that ask for payment at the very last step. We focus on providing a seamless, robust, and truly free experience for job seekers everywhere.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="text-blue-600 dark:text-blue-400 mt-1 shrink-0" size={20} />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-lighten animate-pulse" />
              <div className="absolute -inset-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-lighten animate-pulse" style={{ animationDelay: "1s" }} />
              <div className="relative h-full w-full bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden flex flex-col p-8">
                {/* Simulated interface components for visual interest */}
                <div className="w-1/2 h-8 bg-gray-100 dark:bg-gray-800 rounded mb-6"></div>
                <div className="space-y-4 flex-1">
                   <div className="w-full h-12 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded flex items-center px-4"><div className="w-4 h-4 rounded-full bg-blue-500 mr-3"></div><div className="w-32 h-3 bg-gray-200 dark:bg-gray-700 rounded"></div></div>
                   <div className="w-full h-12 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded flex items-center px-4"><div className="w-4 h-4 rounded-full bg-green-500 mr-3"></div><div className="w-40 h-3 bg-gray-200 dark:bg-gray-700 rounded"></div></div>
                   <div className="w-full h-12 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded flex items-center px-4"><div className="w-4 h-4 rounded-full bg-orange-500 mr-3"></div><div className="w-24 h-3 bg-gray-200 dark:bg-gray-700 rounded"></div></div>
                   <div className="w-full h-12 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded flex items-center px-4"><div className="w-4 h-4 rounded-full bg-purple-500 mr-3"></div><div className="w-36 h-3 bg-gray-200 dark:bg-gray-700 rounded"></div></div>
                </div>
                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800">
                   <div className="w-full h-12 bg-gray-900 dark:bg-white rounded flex items-center justify-center"><div className="w-24 h-3 bg-white dark:bg-gray-900 rounded"></div></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
