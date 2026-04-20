import { useResume } from '../../context/ResumeContext';
import Templates from '../Templates'; // we will create this

export default function PreviewPanel() {
  const { activeTemplate, atsScore } = useResume();

  return (
    <div className="flex-1 overflow-y-auto w-full relative flex justify-center py-8 hide-scrollbar print:overflow-visible print:py-0 print:block">
      {/* ATS Score Indicator */}
      <div className="fixed top-[80px] right-6 no-print z-50">
        <div className="bg-background border border-border px-4 py-2 rounded-full shadow-sm flex items-center gap-2">
          <div className={`w-2.5 h-2.5 rounded-full ${atsScore >= 80 ? 'bg-green-500' : atsScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
          <span className="text-sm font-semibold text-foreground">ATS Score: {atsScore}%</span>
        </div>
      </div>

      <div className="resume-preview-wrapper shadow-soft">
        <Templates template={activeTemplate} />
      </div>
    </div>
  );
}
