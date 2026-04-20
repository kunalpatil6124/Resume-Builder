import { v4 as uuidv4 } from 'uuid';
import { Plus, Trash2 } from 'lucide-react';
import { useResume } from '../../../context/ResumeContext';

export default function Certifications() {
  const { resumeData, updateResumeData } = useResume();
  const certifications = resumeData.certifications;

  const handleAdd = () => {
    updateResumeData('certifications', [...certifications, { id: uuidv4(), name: '', issuer: '' }]);
  };

  const handleRemove = (id) => {
    updateResumeData('certifications', certifications.filter(item => item.id !== id));
  };

  const handleChange = (id, field, value) => {
    updateResumeData('certifications', certifications.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-4">
        {certifications.map((cert, idx) => (
          <div key={cert.id} className="p-4 border border-border rounded-lg bg-gray-50 dark:bg-muted relative group transition-all hover:border-border">
            <button 
              onClick={() => handleRemove(cert.id)}
              className="absolute top-4 right-4 text-gray-400 dark:text-secondary hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Trash2 size={16} />
            </button>
            <h4 className="text-sm font-semibold mb-3">Certification #{idx + 1}</h4>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-foreground mb-1">Certification Name</label>
                <input 
                  type="text" 
                  value={cert.name}
                  onChange={(e) => handleChange(cert.id, 'name', e.target.value)}
                  placeholder="e.g. AWS Certified Solutions Architect"
                  className="w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm focus:ring-1 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-foreground mb-1">Issuer</label>
                <input 
                  type="text" 
                  value={cert.issuer}
                  onChange={(e) => handleChange(cert.id, 'issuer', e.target.value)}
                  placeholder="e.g. Amazon Web Services"
                  className="w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm focus:ring-1 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={handleAdd}
        className="w-full py-3 border-2 border-dashed border-border rounded-lg text-sm font-semibold text-secondary hover:text-primary hover:border-primary flex justify-center items-center gap-2 transition-colors"
      >
        <Plus size={16} /> Add Certification
      </button>
    </div>
  );
}
