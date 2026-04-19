import { v4 as uuidv4 } from 'uuid';
import { Plus, Trash2 } from 'lucide-react';
import { useResume } from '../../../context/ResumeContext';
import SmartAssistantButton from '../../ui/SmartAssistantButton';
import { useState } from 'react';

const improveDescription = (text) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(text.length < 10 
        ? "Managed cross-functional teams to deliver high-quality outputs." 
        : `Spearheaded initiatives involving ${text}, optimizing workflows and boosting overall productivity metrics significantly.`
      );
    }, 600);
  });
};

export default function Experience() {
  const { resumeData, updateResumeData } = useResume();
  const experience = resumeData.experience;
  const [loadingIds, setLoadingIds] = useState({});

  const handleAdd = () => {
    updateResumeData('experience', [...experience, { id: uuidv4(), role: '', org: '', duration: '', description: '' }]);
  };

  const handleRemove = (id) => {
    updateResumeData('experience', experience.filter(item => item.id !== id));
  };

  const handleChange = (id, field, value) => {
    updateResumeData('experience', experience.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const handleImprove = async (id, desc) => {
    setLoadingIds(prev => ({ ...prev, [id]: true }));
    const better = await improveDescription(desc || "");
    handleChange(id, 'description', better);
    setLoadingIds(prev => ({ ...prev, [id]: false }));
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-4">
        {experience.map((exp, idx) => (
          <div key={exp.id} className="p-4 border border-border rounded-lg bg-gray-50 relative group transition-all hover:border-gray-300">
            <button 
              onClick={() => handleRemove(exp.id)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Trash2 size={16} />
            </button>
            <h4 className="text-sm font-semibold mb-3">Experience #{idx + 1}</h4>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-foreground mb-1">Job Role / Title</label>
                <input 
                  type="text" 
                  value={exp.role}
                  onChange={(e) => handleChange(exp.id, 'role', e.target.value)}
                  placeholder="e.g. Software Engineer"
                  className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm focus:ring-1 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-foreground mb-1">Organization / Company</label>
                <input 
                  type="text" 
                  value={exp.org}
                  onChange={(e) => handleChange(exp.id, 'org', e.target.value)}
                  placeholder="e.g. Google"
                  className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm focus:ring-1 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-medium text-foreground mb-1">Duration</label>
                <input 
                  type="text" 
                  value={exp.duration}
                  onChange={(e) => handleChange(exp.id, 'duration', e.target.value)}
                  placeholder="e.g. June 2021 - Present"
                  className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm focus:ring-1 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>
              <div className="col-span-2 relative">
                <label className="block text-xs font-medium text-foreground mb-1">Description / Key Responsibilities</label>
                <textarea 
                  rows={4}
                  maxLength={500}
                  value={exp.description}
                  onChange={(e) => handleChange(exp.id, 'description', e.target.value)}
                  placeholder="Describe your day-to-day tasks and measurable results."
                  className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm focus:ring-1 focus:ring-primary focus:border-transparent outline-none resize-none pb-10"
                />
                <SmartAssistantButton onImprove={() => handleImprove(exp.id, exp.description)} isLoading={loadingIds[exp.id]} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={handleAdd}
        disabled={experience.length >= 3}
        className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-sm font-semibold text-gray-500 hover:text-primary hover:border-primary disabled:opacity-50 disabled:hover:text-gray-500 disabled:hover:border-gray-300 flex justify-center items-center gap-2 transition-colors"
      >
        <Plus size={16} /> {experience.length >= 3 ? 'Max 3 Experiences Reached' : 'Add Experience'}
      </button>
    </div>
  );
}
