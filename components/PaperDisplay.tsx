import React from 'react';
import { ExamPaper, Question } from '../types';

interface PaperDisplayProps {
  paper: ExamPaper;
  showAnswers: boolean;
}

const PaperDisplay: React.FC<PaperDisplayProps> = ({ paper, showAnswers }) => {
  return (
    <div className="bg-white shadow-lg p-8 mx-auto max-w-[210mm] min-h-[297mm] paper-font text-sm leading-relaxed mb-8 print:shadow-none print:w-full print:max-w-none">
      
      {/* Header */}
      <div className="text-center border-b-2 border-black pb-4 mb-6">
        <h1 className="text-xl font-bold uppercase tracking-wide">Sample Question Paper</h1>
        <h2 className="text-lg font-bold">Mass Communication (335)</h2>
        <h3 className="text-md font-semibold mt-1">Half Yearly Examination (Modules 1 & 2)</h3>
        <div className="flex justify-between mt-4 font-semibold text-sm">
          <span>Time: 3 Hours</span>
          <span>Maximum Marks: 80</span>
        </div>
      </div>

      {/* Instructions */}
      <div className="mb-6 text-xs italic border p-2 border-gray-300">
        <p className="font-bold">Note:</p>
        <ul className="list-disc pl-4 space-y-1">
          <li>This question paper consists of 43 questions in all.</li>
          <li>All questions are compulsory.</li>
          <li>Marks are given against each question.</li>
          <li>Section A consists of Q. No. 1 to 16 – Multiple Choice type questions (1 mark each).</li>
          <li>Section B consists of Q. No. 17 to 28 – Objective type questions (2 marks each).</li>
          <li>Section C consists of VSA (2 marks), SA (3 marks), and LA (4 marks) questions.</li>
        </ul>
      </div>

      {/* Section A */}
      <div className="mb-6">
        <h3 className="text-center font-bold bg-gray-100 p-1 mb-4 border border-gray-300 uppercase print:bg-transparent print:border-black">Section - A (Objective Part)</h3>
        <div className="space-y-4">
          {paper.sectionA.map((q, idx) => (
            <div key={idx} className="break-inside-avoid">
              <div className="flex justify-between">
                <p className="font-semibold pr-2">{idx + 1}.</p>
                <div className="flex-1">
                  <p>{q.text} <span className="float-right font-bold text-xs">[1]</span></p>
                  <div className="grid grid-cols-2 gap-2 mt-1 ml-2">
                    {q.options?.map((opt, oIdx) => (
                      <span key={oIdx} className="text-sm">{String.fromCharCode(65 + oIdx)}. {opt}</span>
                    ))}
                  </div>
                  {showAnswers && <p className="text-red-600 text-xs font-bold mt-1">Ans: {q.answer}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section B */}
      <div className="mb-6">
        <h3 className="text-center font-bold bg-gray-100 p-1 mb-4 border border-gray-300 uppercase print:bg-transparent print:border-black">Section - B (Objective Questions)</h3>
        <div className="space-y-4">
          {paper.sectionB.map((q, idx) => (
            <div key={idx} className="break-inside-avoid">
              <div className="flex justify-between">
                <p className="font-semibold pr-2">{17 + idx}.</p>
                <div className="flex-1">
                  <p>{q.text} <span className="float-right font-bold text-xs">[2]</span></p>
                  {q.subQuestions && (
                     <div className="ml-4 mt-1 space-y-1">
                       {q.subQuestions.map((sub, sIdx) => (
                         <p key={sIdx} className="text-sm">{String.fromCharCode(97 + sIdx)}) {sub}</p>
                       ))}
                     </div>
                  )}
                  {showAnswers && <p className="text-red-600 text-xs font-bold mt-1">Ans: {q.answer}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section C */}
      <div className="mb-6">
        <h3 className="text-center font-bold bg-gray-100 p-1 mb-4 border border-gray-300 uppercase print:bg-transparent print:border-black">Section - C (Subjective Questions)</h3>
        
        {/* VSA */}
        <div className="mb-4">
            <h4 className="font-bold underline text-sm mb-2">Very Short Answer (2 Marks)</h4>
            <div className="space-y-4">
                {paper.sectionC_VSA.map((q, idx) => (
                    <div key={idx} className="break-inside-avoid">
                    <div className="flex justify-between">
                        <p className="font-semibold pr-2">{29 + idx}.</p>
                        <div className="flex-1">
                        <p>{q.text} <span className="float-right font-bold text-xs">[2]</span></p>
                        {showAnswers && <p className="text-red-600 text-xs mt-1">Ans: {q.answer}</p>}
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>

        {/* SA */}
        <div className="mb-4">
            <h4 className="font-bold underline text-sm mb-2">Short Answer (3 Marks)</h4>
            <div className="space-y-4">
                {paper.sectionC_SA.map((q, idx) => (
                    <div key={idx} className="break-inside-avoid">
                    <div className="flex justify-between">
                        <p className="font-semibold pr-2">{36 + idx}.</p>
                        <div className="flex-1">
                        <p>{q.text} <span className="float-right font-bold text-xs">[3]</span></p>
                        {showAnswers && <p className="text-red-600 text-xs mt-1">Ans: {q.answer}</p>}
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>

        {/* LA */}
        <div className="mb-4">
            <h4 className="font-bold underline text-sm mb-2">Long Answer (4 Marks)</h4>
            <div className="space-y-4">
                {paper.sectionC_LA.map((q, idx) => (
                    <div key={idx} className="break-inside-avoid">
                    <div className="flex justify-between">
                        <p className="font-semibold pr-2">{42 + idx}.</p>
                        <div className="flex-1">
                        <p>{q.text} <span className="float-right font-bold text-xs">[4]</span></p>
                        {showAnswers && <p className="text-red-600 text-xs mt-1">Ans: {q.answer}</p>}
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

    </div>
  );
};

export default PaperDisplay;