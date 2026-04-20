import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ResumeProvider } from './context/ResumeContext';
import Builder from './pages/Builder';
import Header from './components/Header';
import { Cpu } from 'lucide-react';
import Landing from './pages/Landing';
import { useEffect } from 'react';

function BuilderLayout() {
  return (
    <ResumeProvider>
      <div className="min-h-screen bg-background dark:bg-gray-950 flex flex-col font-sans print:bg-white print:min-h-0 print:h-auto transition-colors duration-300">
        <Header />
        <main className="flex-1 overflow-hidden flex flex-col print:overflow-visible print:h-auto print:block">
          <Builder />
        </main>
        {/* Footer hidden on print */}
        <footer className="no-print py-2.5 bg-gray-50 border-t border-border flex items-center justify-center gap-2 text-[13px] font-medium text-gray-600 dark:bg-gray-950 dark:border-gray-800 dark:text-gray-400">
          <Cpu size={14} className="text-gray-500" />
          <span>Designed By - Kunal Patil.</span>
        </footer>
      </div>
    </ResumeProvider>
  );
}

function App() {
  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/builder" element={<BuilderLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
