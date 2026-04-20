import { useState } from 'react';
import FormPanel from '../components/Builder/FormPanel';
import PreviewPanel from '../components/Builder/PreviewPanel';
import { Eye, Edit2 } from 'lucide-react';

export default function Builder() {
  const [showPreviewOnMobile, setShowPreviewOnMobile] = useState(false);

  return (
    <div className="flex flex-1 h-full overflow-hidden print:overflow-visible print:h-auto print:block relative">
      
      {/* Mobile Toggle Button (Floating Action Button) */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50 no-print">
        <button
          onClick={() => setShowPreviewOnMobile(!showPreviewOnMobile)}
          className="flex items-center gap-2 bg-foreground text-background px-4 py-3 rounded-full text-sm font-medium shadow-xl hover:bg-gray-800 transition-transform active:scale-95"
        >
          {showPreviewOnMobile ? <Edit2 size={16} /> : <Eye size={16} />}
          {showPreviewOnMobile ? 'Edit Form' : 'Live Preview'}
        </button>
      </div>

      {/* Left panel for the forms - hidden on print and toggled on mobile */}
      <div className={`w-full lg:w-1/2 flex-col h-full border-r border-border bg-background no-print ${showPreviewOnMobile ? 'hidden' : 'flex'}`}>
        <FormPanel />
      </div>
      
      {/* Right panel for live preview - takes full width on print or mobile toggle */}
      <div className={`${showPreviewOnMobile ? 'flex' : 'hidden'} lg:flex w-full lg:w-1/2 bg-muted h-full overflow-hidden print:flex print:w-full print:h-auto print:overflow-visible print:bg-white print:block`}>
        <PreviewPanel />
      </div>
    </div>
  );
}
