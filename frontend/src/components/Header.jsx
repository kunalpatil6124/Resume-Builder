import { FileText, Download, RefreshCw, Moon, Sun } from 'lucide-react';
import { useResume } from '../context/ResumeContext';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });
  
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };
  return (
    <header className="flex-none bg-white dark:bg-gray-900 border-b border-border dark:border-gray-800 px-4 sm:px-6 py-3 flex items-center justify-between no-print z-10 box-shadow-soft transition-colors duration-300">
      <Link to="/" className="flex items-center gap-2">
        <div className="bg-primary text-white dark:text-gray-900 p-1.5 rounded-md">
          <FileText size={20} />
        </div>
        <h1 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-white tracking-tight hidden sm:block">ResumeGiant</h1>
      </Link>
      <div className="flex items-center gap-2 sm:gap-4">
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 w-9 h-9 sm:w-10 sm:h-10 rounded-md transition-colors shadow-sm"
          title="Toggle Dark Mode"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button // Reset button added
          onClick={() => {
            if (window.confirm('Are you sure you want to reset all data? This cannot be undone.')) {
              localStorage.removeItem('resumeDraft');
              window.location.reload();
            }
          }}
          className="flex items-center gap-1.5 sm:gap-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 px-3 sm:px-4 py-2 rounded-md text-[13px] sm:text-sm font-medium transition-colors shadow-sm"
        >
          <RefreshCw size={16} />
          <span className="hidden sm:inline">Reset Form</span>
          <span className="sm:hidden">Reset</span>
        </button>
        <button 
          onClick={() => window.print()}
          className="flex items-center gap-1.5 sm:gap-2 bg-primary dark:bg-blue-600 hover:bg-gray-800 dark:hover:bg-blue-700 text-white px-3 sm:px-4 py-2 rounded-md text-[13px] sm:text-sm font-medium transition-colors shadow-sm cursor-pointer"
        >
          <Download size={16} />
          <span className="hidden sm:inline">Download PDF</span>
          <span className="sm:hidden">PDF</span>
        </button>
      </div>
    </header>
  );
}
