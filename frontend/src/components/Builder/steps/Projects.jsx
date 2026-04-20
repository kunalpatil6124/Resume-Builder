import { v4 as uuidv4 } from 'uuid';
import { Plus, Trash2 } from 'lucide-react';
import { useResume } from '../../../context/ResumeContext';
import SmartAssistantButton from '../../ui/SmartAssistantButton';
import { useState } from 'react';

const improveDescription = (text) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(text.length < 10 
        ? "Designed and developed a scalable application improving overall system performance." 
        : `Architected and implemented a robust solution involving ${text}, resulting in a significant increase in efficiency and user satisfaction.`
      );
    }, 600);
  });
};

export default function Projects() {
  const { resumeData, updateResumeData } = useResume();
  const projects = resumeData.projects;
  const [loadingIds, setLoadingIds] = useState({});

  const handleAdd = () => {
    updateResumeData('projects', [...projects, { id: uuidv4(), title: '', tech: '', description: '' }]);
  };

  const handleRemove = (id) => {
    updateResumeData('projects', projects.filter(item => item.id !== id));
  };

  const handleChange = (id, field, value) => {
    updateResumeData('projects', projects.map(item => item.id === id ? { ...item, [field]: value } : item));
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
        {projects.map((proj, idx) => (
          <div key={proj.id} className="p-4 border border-border rounded-lg bg-gray-50 dark:bg-muted relative group transition-all hover:border-border">
            <button 
              onClick={() => handleRemove(proj.id)}
              className="absolute top-4 right-4 text-gray-400 dark:text-secondary hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Trash2 size={16} />
            </button>
            <h4 className="text-sm font-semibold mb-3">Project #{idx + 1}</h4>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-foreground mb-1">Project Title</label>
                <input 
                  type="text" 
                  value={proj.title}
                  onChange={(e) => handleChange(proj.id, 'title', e.target.value)}
                  placeholder="e.g. E-Commerce Store"
                  className="w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm focus:ring-1 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-foreground mb-1">Technologies Used</label>
                <input 
                  type="text" 
                  value={proj.tech}
                  onChange={(e) => handleChange(proj.id, 'tech', e.target.value)}
                  placeholder="e.g. React, Node.js, MongoDB"
                  className="w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm focus:ring-1 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>
              <div className="col-span-2 relative">
                <label className="block text-xs font-medium text-foreground mb-1">Description</label>
                <textarea 
                  rows={4}
                  value={proj.description}
                  onChange={(e) => handleChange(proj.id, 'description', e.target.value)}
                  placeholder="What did you build? What problems did you solve?"
                  className="w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm focus:ring-1 focus:ring-primary focus:border-transparent outline-none resize-none pb-10"
                />
                <SmartAssistantButton onImprove={() => handleImprove(proj.id, proj.description)} isLoading={loadingIds[proj.id]} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={handleAdd}
        className="w-full py-3 border-2 border-dashed border-border rounded-lg text-sm font-semibold text-secondary hover:text-primary hover:border-primary flex justify-center items-center gap-2 transition-colors"
      >
        <Plus size={16} /> Add Project
      </button>
    </div>
  );
}
