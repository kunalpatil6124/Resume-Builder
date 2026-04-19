import { ResumeProvider } from './context/ResumeContext';
import Builder from './pages/Builder';
import Header from './components/Header';
import { Cpu } from 'lucide-react';

function App() {
  return (
    <ResumeProvider>
      <div className="min-h-screen bg-background flex flex-col font-sans print:bg-white print:min-h-0 print:h-auto">
        <Header />
        <main className="flex-1 overflow-hidden flex flex-col print:overflow-visible print:h-auto print:block">
          <Builder />
        </main>
        {/* Footer hidden on print */}
        <footer className="no-print py-2.5 bg-gray-50 border-t border-border flex items-center justify-center gap-2 text-[13px] font-medium text-gray-600">
          <Cpu size={14} className="text-gray-500" />
          <span>Designed By - Kunal Patil.</span>
        </footer>
      </div>
    </ResumeProvider>
  );
}

export default App;
