import { FileText, Download, RefreshCw } from 'lucide-react';
import { useResume } from '../context/ResumeContext';

export default function Header() {
  return (
    <header className="flex-none bg-white border-b border-border px-4 sm:px-6 py-3 flex items-center justify-between no-print z-10 box-shadow-soft">
      <div className="flex items-center gap-2">
        <div className="bg-primary text-white p-1.5 rounded-md">
          <FileText size={20} />
        </div>
        <h1 className="font-semibold text-base sm:text-lg text-foreground tracking-tight hidden sm:block">Resume Builder</h1>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <button // Reset button added
          onClick={() => {
            if (window.confirm('Are you sure you want to reset all data? This cannot be undone.')) {
              localStorage.removeItem('resumeDraft');
              window.location.reload();
            }
          }}
          className="flex items-center gap-1.5 sm:gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-3 sm:px-4 py-2 rounded-md text-[13px] sm:text-sm font-medium transition-colors shadow-sm"
        >
          <RefreshCw size={16} />
          <span className="hidden sm:inline">Reset Form</span>
          <span className="sm:hidden">Reset</span>
        </button>
        <button 
          onClick={() => window.print()}
          className="flex items-center gap-1.5 sm:gap-2 bg-primary hover:bg-gray-800 text-white px-3 sm:px-4 py-2 rounded-md text-[13px] sm:text-sm font-medium transition-colors shadow-sm"
        >
          <Download size={16} />
          <span className="hidden sm:inline">Download PDF</span>
          <span className="sm:hidden">PDF</span>
        </button>
      </div>
    </header>
  );
}
