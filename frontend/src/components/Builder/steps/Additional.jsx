import { useResume } from '../../../context/ResumeContext';

export default function Additional() {
  const { resumeData, updateResumeData, activeTemplate, setActiveTemplate } = useResume();
  const data = resumeData.additional;

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    updateResumeData('additional', { ...data, [e.target.name]: value });
  };

  return (
    <div className="flex flex-col gap-6">
      
      {/* Settings inside Additional Step for convenience to the user */}
      <div className="p-4 bg-gray-50 border border-border rounded-md mb-2">
        <h3 className="text-sm font-semibold mb-3">Resume Settings</h3>
        <div className="flex items-center gap-4">
          <label className="text-sm">Template Style:</label>
          <select 
            value={activeTemplate}
            onChange={(e) => setActiveTemplate(e.target.value)}
            className="rounded border border-border bg-white px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option value="clean">Clean Minimal (Default)</option>
            <option value="bold">Bold Serif Header</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Languages (Optional)</label>
        <input 
          type="text" 
          name="languages"
          value={data.languages}
          onChange={handleChange}
          placeholder="e.g. English (Native), Spanish (Conversational)"
          className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Hobbies (Optional)</label>
        <input 
          type="text" 
          name="hobbies"
          value={data.hobbies}
          onChange={handleChange}
          placeholder="e.g. Photography, Reading, Chess"
          className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
        />
      </div>

      <div className="mt-2 flex items-center gap-3">
        <input 
          type="checkbox" 
          id="declaration"
          name="declaration"
          checked={data.declaration}
          onChange={handleChange}
          className="w-4 h-4 text-primary bg-white border-gray-300 rounded focus:ring-primary disabled:opacity-50"
        />
        <label htmlFor="declaration" className="text-sm font-medium text-foreground cursor-pointer">
          Include Standard Declaration at the bottom
        </label>
      </div>
      <p className="text-xs text-gray-500 pl-7">
        "I hereby declare that the above-mentioned information is true to the best of my knowledge and belief."
      </p>

    </div>
  );
}
