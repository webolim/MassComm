import React, { useState, useEffect } from 'react';
import { generateThreePapers } from './utils/paperGenerator';
import PaperDisplay from './components/PaperDisplay';
import { ExamPaper } from './types';
import { Printer, RefreshCw, Eye, EyeOff, FileText, CheckCircle2 } from 'lucide-react';

const App: React.FC = () => {
  const [papers, setPapers] = useState<ExamPaper[]>([]);
  const [activePaperIndex, setActivePaperIndex] = useState<number>(0);
  const [showAnswers, setShowAnswers] = useState<boolean>(false);
  const [isGenerating, setIsGenerating] = useState<boolean>(true);

  useEffect(() => {
    // Initial generation
    regenerate();
  }, []);

  const regenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
        setPapers(generateThreePapers());
        setActivePaperIndex(0);
        setIsGenerating(false);
    }, 600); // Fake loading for UX
  };

  const handlePrint = () => {
    window.print();
  };

  if (isGenerating || papers.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <RefreshCw className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-700">Generating Exam Papers...</h2>
          <p className="text-gray-500">Curating questions from Module 1 & 2</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-10 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <FileText className="w-6 h-6 text-blue-600 mr-2" />
              <span className="font-bold text-xl text-gray-800">ExamGen <span className="text-blue-600 text-sm font-normal ml-1">Mass Comm 335</span></span>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={regenerate}
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Regenerate Sets
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sidebar Controls */}
          <div className="lg:col-span-3 space-y-6 no-print">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Select Paper Set</h3>
              <div className="space-y-3">
                {papers.map((paper, idx) => (
                  <button
                    key={paper.id}
                    onClick={() => setActivePaperIndex(idx)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all ${
                      activePaperIndex === idx 
                        ? 'border-blue-500 bg-blue-50 text-blue-700 ring-1 ring-blue-500' 
                        : 'border-gray-200 hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <span className="font-medium">Set {String.fromCharCode(65 + idx)}</span>
                    {activePaperIndex === idx && <CheckCircle2 className="w-5 h-5" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Actions</h3>
              <div className="space-y-3">
                <button 
                  onClick={() => setShowAnswers(!showAnswers)}
                  className={`w-full flex items-center justify-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium ${
                      showAnswers 
                      ? 'bg-yellow-50 text-yellow-700 border-yellow-200 hover:bg-yellow-100' 
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {showAnswers ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
                  {showAnswers ? 'Hide Answers' : 'Show Marking Scheme'}
                </button>
                <button 
                  onClick={handlePrint}
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  <Printer className="w-4 h-4 mr-2" />
                  Print Paper
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-4 text-center">
                Use browser print to save as PDF.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <h4 className="text-sm font-bold text-blue-900 mb-2">Syllabus Coverage</h4>
                <ul className="text-xs text-blue-800 space-y-1 list-disc pl-4">
                    <li>Module 1: Introduction to Mass Comm</li>
                    <li>Module 2: Print Media</li>
                    <li>No Optional Modules (Redistributed)</li>
                    <li>Total Marks: 80</li>
                </ul>
            </div>
          </div>

          {/* Paper View */}
          <div className="lg:col-span-9">
            <PaperDisplay paper={papers[activePaperIndex]} showAnswers={showAnswers} />
          </div>

        </div>
      </main>
    </div>
  );
};

export default App;