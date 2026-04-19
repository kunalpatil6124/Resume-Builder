import { v4 as uuidv4 } from 'uuid';
import { Plus, Trash2 } from 'lucide-react';
import { useResume } from '../../../context/ResumeContext';

export default function Education() {
  const { resumeData, updateResumeData } = useResume();
  const education = resumeData.education;

  const handleAdd = () => {
    updateResumeData('education', [...education, { id: uuidv4(), degree: '', college: '', year: '', score: '' }]);
  };

  const handleRemove = (id) => {
    updateResumeData('education', education.filter(item => item.id !== id));
  };

  const handleChange = (id, field, value) => {
    updateResumeData('education', education.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-4">
        {education.map((edu, idx) => (
          <div key={edu.id} className="p-4 border border-border rounded-lg bg-gray-50 relative group transition-all hover:border-gray-300">
            <button 
              onClick={() => handleRemove(edu.id)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Trash2 size={16} />
            </button>
            <h4 className="text-sm font-semibold mb-3">Education #{idx + 1}</h4>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-xs font-medium text-foreground mb-1">Degree / Course</label>
                <input 
                  type="text" 
                  value={edu.degree}
                  onChange={(e) => handleChange(edu.id, 'degree', e.target.value)}
                  placeholder="e.g. B.Tech in Computer Science"
                  className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm focus:ring-1 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-medium text-foreground mb-1">College / University</label>
                <input 
                  type="text" 
                  value={edu.college}
                  onChange={(e) => handleChange(edu.id, 'college', e.target.value)}
                  placeholder="e.g. MIT"
                  className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm focus:ring-1 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-foreground mb-1">Year</label>
                <input 
                  type="text" 
                  value={edu.year}
                  onChange={(e) => handleChange(edu.id, 'year', e.target.value)}
                  placeholder="e.g. 2020 - 2024"
                  className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm focus:ring-1 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-foreground mb-1">CGPA / Percentage</label>
                <input 
                  type="text" 
                  value={edu.score}
                  onChange={(e) => handleChange(edu.id, 'score', e.target.value)}
                  placeholder="e.g. 9.5 CGPA"
                  className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm focus:ring-1 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={handleAdd}
        className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-sm font-semibold text-gray-500 hover:text-primary hover:border-primary flex justify-center items-center gap-2 transition-colors"
      >
        <Plus size={16} /> Add Education
      </button>
    </div>
  );
}
