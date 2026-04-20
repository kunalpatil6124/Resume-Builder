import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium border border-blue-100 dark:border-blue-800"
          >
            <Sparkles size={16} />
            <span>The easiest way to build a professional resume</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6"
          >
            Create Your ATS Friendly Resume <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              In Minutes.
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            Stand out from the crowd with a professionally designed, industry-standard resume. No signup required, absolutely free.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/builder"
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gray-900 px-8 py-3.5 text-base font-medium text-white shadow-lg hover:bg-gray-800 hover:shadow-xl dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 transition-all"
            >
              Start Creating Resume
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#how-it-works"
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full px-8 py-3.5 text-base font-medium text-gray-700 bg-white border border-gray-200 shadow-sm hover:bg-gray-50 hover:text-gray-900 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-white transition-all text-center"
            >
              See How It Works
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 relative max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-950 to-transparent z-10 h-full w-full rounded-2xl" />
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur pb-[50%] overflow-hidden shadow-2xl relative z-0">
            {/* Minimal mockup illustration representing the builder interface */}
            <div className="absolute top-0 left-0 w-full h-12 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center px-4 gap-2">
               <div className="w-3 h-3 rounded-full bg-red-400"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
               <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="absolute top-12 left-0 w-[30%] h-[calc(100%-3rem)] bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 p-6 flex flex-col gap-4">
              <div className="w-full h-4 bg-gray-200 dark:bg-gray-800 rounded"></div>
              <div className="w-3/4 h-4 bg-gray-200 dark:bg-gray-800 rounded"></div>
              <div className="w-full h-12 bg-blue-50 dark:bg-blue-900/30 rounded border border-blue-100 dark:border-blue-900 mt-4"></div>
              <div className="w-full h-12 bg-gray-50 dark:bg-gray-800 rounded border border-gray-100 dark:border-gray-700"></div>
              <div className="w-full h-12 bg-gray-50 dark:bg-gray-800 rounded border border-gray-100 dark:border-gray-700"></div>
            </div>
            <div className="absolute top-12 left-[30%] w-[70%] h-[calc(100%-3rem)] bg-gray-50 dark:bg-gray-950 p-8 flex items-center justify-center">
              <div className="w-[80%] h-[90%] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm rounded flex flex-col p-8 gap-4 shadow-lg">
                <div className="flex gap-4 items-center border-b border-gray-100 dark:border-gray-800 pb-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-800"></div>
                  <div className="flex flex-col gap-2 w-full">
                     <div className="w-1/3 h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                     <div className="w-1/4 h-3 bg-gray-100 dark:bg-gray-800 rounded"></div>
                  </div>
                </div>
                <div className="w-full h-3 bg-gray-100 dark:bg-gray-800 rounded mt-4"></div>
                <div className="w-full h-3 bg-gray-100 dark:bg-gray-800 rounded"></div>
                <div className="w-5/6 h-3 bg-gray-100 dark:bg-gray-800 rounded"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
