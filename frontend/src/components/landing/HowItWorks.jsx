import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Start Instantly",
    description: "No need to pick from dozens of confusing templates. We use a single, highly optimized ATS-friendly format out of the box.",
  },
  {
    number: "02",
    title: "Fill in Your Details",
    description: "Add your personal information, experience, education, and skills using our clean and intuitive interface.",
  },
  {
    number: "03",
    title: "Customize & Preview",
    description: "Tweak colors, spacing, and layouts while seeing your changes in real-time. Make your resume uniquely yours.",
  },
  {
    number: "04",
    title: "Download PDF",
    description: "Export your finished resume as a high-quality PDF, completely free of charge, ready to submit for your dream job.",
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4"
          >
            How it works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Four simple steps to creating a resume that lands interviews.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[4.5rem] left-[10%] right-[10%] h-0.5 bg-gray-100 dark:bg-gray-800 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-900 border-[6px] border-blue-50 dark:border-blue-900/30 flex items-center justify-center shadow-sm mb-6 relative">
                  <span className="text-xl font-bold text-blue-600 dark:text-blue-400">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
