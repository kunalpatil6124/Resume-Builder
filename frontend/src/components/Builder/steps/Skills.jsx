import { useState } from 'react';
import { X } from 'lucide-react';
import { useResume } from '../../../context/ResumeContext';

export default function Skills() {
  const { resumeData, updateResumeData } = useResume();
  const skills = resumeData.skills;
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const newSkill = inputValue.trim();
      if (newSkill && !skills.includes(newSkill)) {
        updateResumeData('skills', [...skills, newSkill]);
      }
      setInputValue('');
    }
  };

  const removeSkill = (skillToRemove) => {
    updateResumeData('skills', skills.filter(skill => skill !== skillToRemove));
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <label className="block text-sm font-medium text-foreground mb-1.5">Core Skills</label>
        <p className="text-xs text-secondary mb-3">Type a skill and press Enter or Comma to add it as a tag.</p>
        
        <div className="w-full rounded-md border border-border bg-white p-2 min-h-[100px] focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent transition flex flex-wrap gap-2 items-start cursor-text">
          {skills.map((skill, idx) => (
            <div key={idx} className="bg-gray-100 border border-gray-200 text-sm px-3 py-1 rounded-full flex items-center gap-1.5 animate-in fade-in zoom-in duration-200">
              {skill}
              <button 
                onClick={() => removeSkill(skill)}
                className="text-gray-400 hover:text-gray-700 bg-white rounded-full p-0.5 pointer-events-auto"
              >
                <X size={12} />
              </button>
            </div>
          ))}
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={skills.length >= 10}
            placeholder={skills.length >= 10 ? "Max 10 skills reached" : skills.length === 0 ? "e.g. React, Node.js" : ""}
            className="flex-1 min-w-[150px] bg-transparent outline-none text-sm py-1 border-none !ring-0 disabled:opacity-50"
          />
        </div>
      </div>
    </div>
  );
}
