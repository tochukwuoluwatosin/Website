
import React from 'react';

interface BibTeXModalProps {
  bibtex: string;
  onClose: () => void;
}

const BibTeXModal: React.FC<BibTeXModalProps> = ({ bibtex, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-700 rounded-xl w-full max-w-2xl overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between p-4 border-b border-slate-800">
          <h3 className="text-lg font-semibold text-white">BibTeX Citation</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6">
          <pre className="mono bg-slate-950 p-4 rounded-lg text-sm text-emerald-300 overflow-x-auto border border-slate-800 whitespace-pre-wrap">
            {bibtex}
          </pre>
          <div className="mt-6 flex justify-end space-x-3">
            <button
              onClick={handleCopy}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-md text-sm font-medium transition-colors flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              <span>{copied ? 'Copied!' : 'Copy to Clipboard'}</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 border border-slate-700 text-slate-300 hover:bg-slate-800 rounded-md text-sm font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BibTeXModal;
