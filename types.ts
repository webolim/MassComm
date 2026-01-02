export enum QuestionType {
  MCQ = 'MCQ',
  OBJECTIVE = 'OBJECTIVE', // Fill in blanks, True/False, Match
  VSA = 'VSA', // 2 marks
  SA = 'SA', // 3 marks
  LA = 'LA', // 4 marks
}

export enum Module {
  ONE = 'Module 1 (Intro to Mass Comm)',
  TWO = 'Module 2 (Print Media)',
}

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  options?: string[]; // For MCQs
  subQuestions?: string[]; // For 2-part objectives
  answer?: string; // For marking scheme
  module: Module;
  marks: number;
}

export interface ExamPaper {
  id: number;
  title: string;
  sectionA: Question[]; // 16 marks (16 x 1)
  sectionB: Question[]; // 24 marks (12 x 2)
  sectionC_VSA: Question[]; // 14 marks (7 x 2)
  sectionC_SA: Question[]; // 18 marks (6 x 3)
  sectionC_LA: Question[]; // 8 marks (2 x 4)
}