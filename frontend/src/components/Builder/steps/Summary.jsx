import { useState } from 'react';
import { useResume } from '../../../context/ResumeContext';
import SmartAssistantButton from '../../ui/SmartAssistantButton';

// Mock AI function as per instructions, simulating string parsing/replacing for premium effect
const improveText = (text) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!text || text.length < 10) resolve("Results-driven professional with a proven track record of exceeding goals and delivering value through innovative problem-solving and cross-functional collaboration.");
      else {
        resolve(`Highly motivated professional with expertise in ${text}. Demonstrated ability to streamline operations, increase efficiency, and drive impactful results in fast-paced environments.`);
      }
    }, 600);
  });
};

export default function Summary() {
  const { resumeData, updateResumeData } = useResume();
  const summary = resumeData.summary;
  const [loading, setLoading] = useState(false);

  const handleImprove = async () => {
    setLoading(true);
    const betterText = await improveText(summary);
    updateResumeData('summary', betterText);
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <label className="block text-sm font-medium text-foreground mb-1.5">Professional Summary</label>
        <p className="text-xs text-secondary mb-3">Write 3-4 lines summarizing your expertise, experience, and career goals.</p>
        <div className="relative">
          <textarea 
            rows={5}
            maxLength={400}
            value={summary}
            onChange={(e) => updateResumeData('summary', e.target.value)}
            placeholder="e.g. A passionate web developer with 3+ years of experience in React and Node.js..."
            className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none pb-10"
          />
          <SmartAssistantButton onImprove={handleImprove} isLoading={loading} />
        </div>
        <div className="text-right text-xs text-gray-500 mt-1">
          {summary.length} / 400 characters Limit
        </div>
      </div>
    </div>
  );
}
