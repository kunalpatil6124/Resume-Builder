import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';

import PersonalInfo from './steps/PersonalInfo';
import Summary from './steps/Summary';
import Education from './steps/Education';
import Skills from './steps/Skills';
import Projects from './steps/Projects';
import Experience from './steps/Experience';
import Achievements from './steps/Achievements';
import Certifications from './steps/Certifications';
import Extracurricular from './steps/Extracurricular';
import Additional from './steps/Additional';

const steps = [
  { id: 1, title: 'Personal Info', component: PersonalInfo },
  { id: 2, title: 'Summary', component: Summary },
  { id: 3, title: 'Education', component: Education },
  { id: 4, title: 'Skills', component: Skills },
  { id: 5, title: 'Experience', component: Experience },
  { id: 6, title: 'Projects', component: Projects },
  { id: 7, title: 'Achievements', component: Achievements },
  { id: 8, title: 'Certifications', component: Certifications },
  { id: 9, title: 'Extracurricular', component: Extracurricular },
  { id: 10, title: 'Additional', component: Additional }
];

export default function FormPanel() {
  const [currentStep, setCurrentStep] = useState(0);
  const CurrentComponent = steps[currentStep].component;

  const nextStep = () => setCurrentStep(p => Math.min(steps.length - 1, p + 1));
  const prevStep = () => setCurrentStep(p => Math.max(0, p - 1));

  return (
    <div className="flex flex-col h-full bg-background relative">
      {/* Progress Bar Header */}
      <div className="bg-background px-5 sm:px-8 pt-6 pb-4 border-b border-border">
        <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">
          {steps[currentStep].title}
        </h2>
        <div className="flex gap-1 h-1.5 w-full bg-muted rounded-full overflow-hidden">
          {steps.map((step, idx) => (
            <div 
              key={step.id} 
              className={`flex-1 transition-colors duration-300 ${idx <= currentStep ? 'bg-primary' : 'bg-muted'}`} 
            />
          ))}
        </div>
        <div className="flex justify-between mt-2 text-xs text-secondary font-medium uppercase tracking-wider">
          <span>Step {currentStep + 1} of {steps.length}</span>
          <span>{Math.round(((currentStep + 1) / steps.length) * 100)}% Completed</span>
        </div>
      </div>

      {/* Form Content */}
      <div className="flex-1 overflow-y-auto px-5 sm:px-8 relative hide-scrollbar">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="py-6"
          >
            <CurrentComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Footer */}
      <div className="bg-background border-t border-border px-5 sm:px-8 py-4 flex justify-between items-center z-10 box-shadow-soft-reverse">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className="px-4 py-2 text-sm font-medium text-secondary hover:text-foreground disabled:opacity-50 flex items-center gap-2 transition-colors"
        >
          <ChevronLeft size={16} />
          Back
        </button>
        <button
          onClick={currentStep === steps.length - 1 ? () => window.print() : nextStep}
          className="px-6 py-2 bg-foreground hover:bg-gray-800 dark:hover:bg-gray-200 text-background rounded-md text-sm font-medium flex items-center gap-2 transition-colors shadow-sm"
        >
          {currentStep === steps.length - 1 ? (
            <>Finish &amp; Download <CheckCircle size={16} /></>
          ) : (
            <>Next <ChevronRight size={16} /></>
          )}
        </button>
      </div>
    </div>
  );
}
