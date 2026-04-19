import { useResume } from '../../../context/ResumeContext';

export default function Extracurricular() {
  const { resumeData, updateResumeData } = useResume();
  const extracurricular = resumeData.extracurricular;

  return (
    <div className="flex flex-col gap-4">
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Extracurricular Activities</label>
        <p className="text-xs text-secondary mb-3">Add any sports, leadership roles, NCC, or volunteer work experience.</p>
        <textarea 
          rows={5}
          value={extracurricular}
          onChange={(e) => updateResumeData('extracurricular', e.target.value)}
          placeholder="e.g. Captain of the University Football Team (2022-2023)"
          className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
        />
      </div>
    </div>
  );
}
