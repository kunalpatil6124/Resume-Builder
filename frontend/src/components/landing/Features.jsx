import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Zap, 
  Lock, 
  Download, 
  LayoutTemplate, 
  Smartphone 
} from 'lucide-react';

const featureList = [
  {
    title: "Real-time Preview",
    description: "See your changes instantly as you type. What you see is exactly what you get when you export.",
    icon: <Zap className="text-blue-600 dark:text-blue-400" size={24} />,
  },
  {
    title: "ATS-Friendly Architecture",
    description: "Features a single, meticulously designed template strictly tailored to bypass modern Applicant Tracking Systems.",
    icon: <LayoutTemplate className="text-indigo-600 dark:text-indigo-400" size={24} />,
  },
  {
    title: "Privacy First",
    description: "Your data never leaves your browser. We don't store your personal information on our servers.",
    icon: <Lock className="text-green-600 dark:text-green-400" size={24} />,
  },
  {
    title: "Full Customization",
    description: "Easily adjust colors, typography, spacing, and layout to match your personal brand.",
    icon: <Palette className="text-orange-600 dark:text-orange-400" size={24} />,
  },
  {
    title: "One-Click Export",
    description: "Download your pixel-perfect resume as a PDF instantly, ready to send to employers.",
    icon: <Download className="text-red-600 dark:text-red-400" size={24} />,
  },
  {
    title: "Mobile Responsive",
    description: "Build your resume on-the-go with an interface completely optimized for mobile devices.",
    icon: <Smartphone className="text-purple-600 dark:text-purple-400" size={24} />,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4"
          >
            Everything you need to craft the perfect resume
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Powerful tools wrapped in a simple, intuitive interface that gets out of your way and lets you focus on content.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
