import { ExamPaper, Question } from '../types';
import { mcqQuestions, objectiveQuestions, vsaQuestions, saQuestions, laQuestions } from '../data/questionBank';

// Utility to shuffle array
const shuffle = <T,>(array: T[]): T[] => {
  return [...array].sort(() => 0.5 - Math.random());
};

const generatePaper = (id: number): ExamPaper => {
  // Pattern:
  // Section A: 16 MCQs (1 Mark each) = 16
  // Section B: 12 Objectives (2 Marks each) = 24
  // Section C VSA: 7 Questions (2 Marks each) = 14
  // Section C SA: 6 Questions (3 Marks each) = 18
  // Section C LA: 2 Questions (4 Marks each) = 8
  // Total = 80 Marks

  // We loop mostly because our question bank is small for this demo, 
  // but in a real app with a huge DB, we would just slice.
  // Here we shuffle and pick.

  const shuffledMCQ = shuffle(mcqQuestions);
  const shuffledObj = shuffle(objectiveQuestions);
  const shuffledVSA = shuffle(vsaQuestions);
  const shuffledSA = shuffle(saQuestions);
  const shuffledLA = shuffle(laQuestions);

  // Helper to fill array if we don't have enough unique questions in bank (duplication fallback)
  const getQuestions = (source: Question[], count: number) => {
    let result: Question[] = [];
    let i = 0;
    while (result.length < count) {
      if (i >= source.length) i = 0; // Loop back if we run out
      result.push(source[i]);
      i++;
    }
    return result;
  };

  return {
    id,
    title: `Half Yearly Examination - Set ${String.fromCharCode(64 + id)}`,
    sectionA: getQuestions(shuffledMCQ, 16),
    sectionB: getQuestions(shuffledObj, 12),
    sectionC_VSA: getQuestions(shuffledVSA, 7),
    sectionC_SA: getQuestions(shuffledSA, 6),
    sectionC_LA: getQuestions(shuffledLA, 2),
  };
};

export const generateThreePapers = (): ExamPaper[] => {
  return [generatePaper(1), generatePaper(2), generatePaper(3)];
};