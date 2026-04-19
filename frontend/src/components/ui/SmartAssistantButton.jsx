import { Sparkles } from 'lucide-react';

export default function SmartAssistantButton({ onImprove, isLoading }) {
  return (
    <button
      type="button"
      onClick={onImprove}
      disabled={isLoading}
      className="absolute right-2 bottom-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white p-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all disabled:opacity-75"
      title="Improve with AI Assistant"
    >
      <Sparkles size={14} />
      {isLoading ? 'Enhancing...' : 'Auto-Improve'}
    </button>
  );
}
