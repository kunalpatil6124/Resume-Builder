import React from 'react';
import { motion } from 'framer-motion';

export default function Preview() {
  return (
    <section className="py-24 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4"
          >
            Built for impact
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Clean, scannable layouts that recruiters love. No messy formatting, just pure content that stands out.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Aesthetic background decorations */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
          
          <div className="bg-gray-100 dark:bg-gray-900 rounded-3xl p-4 md:p-8 shadow-2xl border border-gray-200 dark:border-gray-800 backdrop-blur-sm flex flex-col md:flex-row gap-8">
            
            {/* Editor Side Mockup */}
            <div className="w-full md:w-1/3 flex flex-col gap-4">
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/3 mb-2"></div>
              <div className="w-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl p-4 shadow-sm flex flex-col gap-3">
                <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded w-1/4"></div>
                <div className="h-8 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded w-full"></div>
              </div>
              <div className="w-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl p-4 shadow-sm flex flex-col gap-3">
                <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded w-1/4"></div>
                <div className="h-8 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded w-full"></div>
                <div className="h-16 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded w-full mt-2"></div>
              </div>
              <div className="w-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl p-4 shadow-sm flex flex-col gap-3 opacity-50">
                <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded w-1/3"></div>
                <div className="h-8 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded w-full"></div>
              </div>
            </div>

            {/* Resume Preview Mockup A4ish ratio */}
            <div className="w-full md:w-2/3 bg-white dark:bg-gray-100 shadow-xl border border-gray-200 rounded-sm aspect-[1/1.414] p-8 md:p-12 relative overflow-hidden">
               {/* Content representation */}
               <div className="border-b-2 border-gray-900 pb-6 mb-6">
                 <div className="w-2/3 h-8 bg-gray-900 rounded mb-4 w-1/2"></div>
                 <div className="flex gap-4">
                   <div className="w-16 h-3 bg-gray-500 rounded"></div>
                   <div className="w-20 h-3 bg-gray-500 rounded"></div>
                   <div className="w-24 h-3 bg-gray-500 rounded"></div>
                 </div>
               </div>
               
               <div className="mb-6">
                 <div className="w-1/4 h-5 bg-gray-800 rounded mb-4"></div>
                 <div className="w-full h-2 bg-gray-300 rounded mb-2 w-full"></div>
                 <div className="w-full h-2 bg-gray-300 rounded mb-2 w-[90%]"></div>
                 <div className="w-full h-2 bg-gray-300 rounded mb-2 w-[95%]"></div>
               </div>

               <div className="mb-6">
                 <div className="w-1/4 h-5 bg-gray-800 rounded mb-4"></div>
                 <div className="flex justify-between mb-2">
                   <div className="w-1/3 h-4 bg-gray-900 rounded"></div>
                   <div className="w-1/6 h-4 bg-gray-500 rounded"></div>
                 </div>
                 <div className="w-1/4 h-3 bg-gray-600 rounded mb-3"></div>
                 
                 <div className="flex items-center gap-2 mb-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div><div className="h-2 bg-gray-300 rounded w-[85%]"></div></div>
                 <div className="flex items-center gap-2 mb-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div><div className="h-2 bg-gray-300 rounded w-[90%]"></div></div>
                 <div className="flex items-center gap-2 mb-4"><div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div><div className="h-2 bg-gray-300 rounded w-[70%]"></div></div>
                 
                 <div className="flex justify-between mb-2 mt-4">
                   <div className="w-1/3 h-4 bg-gray-900 rounded"></div>
                   <div className="w-1/6 h-4 bg-gray-500 rounded"></div>
                 </div>
                 <div className="w-1/4 h-3 bg-gray-600 rounded mb-3"></div>
                 <div className="flex items-center gap-2 mb-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div><div className="h-2 bg-gray-300 rounded w-[95%]"></div></div>
                 <div className="flex items-center gap-2 mb-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div><div className="h-2 bg-gray-300 rounded w-[80%]"></div></div>
               </div>

               {/* A shimmer sweep effect simulating it being interactive/active */}
               <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 animate-[shimmer_3s_infinite]" />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
