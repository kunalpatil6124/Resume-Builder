import { useResume } from '../../../context/ResumeContext';
import { Plus, Trash2 } from 'lucide-react';

export default function Achievements() {
  const { resumeData, updateResumeData } = useResume();
  const achievements = resumeData.achievements;

  const handleAdd = () => {
    updateResumeData('achievements', [...achievements, '']);
  };

  const handleRemove = (index) => {
    updateResumeData('achievements', achievements.filter((_, idx) => idx !== index));
  };

  const handleChange = (index, value) => {
    const newAchievements = [...achievements];
    newAchievements[index] = value;
    updateResumeData('achievements', newAchievements);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-3">
        {achievements.map((ach, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className="flex-1">
              <input 
                type="text" 
                value={ach}
                onChange={(e) => handleChange(idx, e.target.value)}
                placeholder="e.g. Won 1st place in National Hackathon 2023"
                className="w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm focus:ring-1 focus:ring-primary focus:border-transparent outline-none"
              />
            </div>
            <button 
              onClick={() => handleRemove(idx)}
              className="text-gray-400 dark:text-secondary hover:text-red-500 p-2 transition-colors"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>

      <button 
        onClick={handleAdd}
        className="w-full py-3 border-2 border-dashed border-border rounded-lg text-sm font-semibold text-secondary hover:text-primary hover:border-primary flex justify-center items-center gap-2 transition-colors"
      >
        <Plus size={16} /> Add Achievement
      </button>
    </div>
  );
}
