import { Question, QuestionType, Module } from '../types';

// Helper to generate IDs
const generateId = (prefix: string, index: number) => `${prefix}-${index}`;

// --- SECTION A: MCQs (1 Mark) ---
export const mcqQuestions: Question[] = [
  // Module 1
  {
    id: generateId('m1-mcq', 1),
    type: QuestionType.MCQ,
    text: "Communication is derived from the Latin word 'communis' which means:",
    options: ["To speak", "To share", "To listen", "To write"],
    answer: "B. To share",
    module: Module.ONE,
    marks: 1
  },
  {
    id: generateId('m1-mcq', 2),
    type: QuestionType.MCQ,
    text: "Which of the following is NOT one of the five senses used in communication?",
    options: ["Sight", "Smell", "Touch", "Intuition"],
    answer: "D. Intuition",
    module: Module.ONE,
    marks: 1
  },
  {
    id: generateId('m1-mcq', 3),
    type: QuestionType.MCQ,
    text: "When we communicate with ourselves, it is known as:",
    options: ["Interpersonal communication", "Intrapersonal communication", "Mass communication", "Group communication"],
    answer: "B. Intrapersonal communication",
    module: Module.ONE,
    marks: 1
  },
  {
    id: generateId('m1-mcq', 4),
    type: QuestionType.MCQ,
    text: "The 'Fourth Estate' refers to:",
    options: ["Legislature", "Executive", "Judiciary", "Media"],
    answer: "D. Media",
    module: Module.ONE,
    marks: 1
  },
  {
    id: generateId('m1-mcq', 5),
    type: QuestionType.MCQ,
    text: "What is the role of Development Communication?",
    options: ["To entertain", "To create sensation", "To prepare and distribute development messages", "To sell products"],
    answer: "C. To prepare and distribute development messages",
    module: Module.ONE,
    marks: 1
  },
  {
    id: generateId('m1-mcq', 6),
    type: QuestionType.MCQ,
    text: "SITE stands for:",
    options: ["Satellite Instructional Television Experiment", "Space Indian TV Experiment", "System for International TV Education", "None of the above"],
    answer: "A. Satellite Instructional Television Experiment",
    module: Module.ONE,
    marks: 1
  },
  {
    id: generateId('m1-mcq', 7),
    type: QuestionType.MCQ,
    text: "Media ethics includes:",
    options: ["Accuracy", "Confidentiality", "Protection of sources", "All of the above"],
    answer: "D. All of the above",
    module: Module.ONE,
    marks: 1
  },
  // Module 2
  {
    id: generateId('m2-mcq', 1),
    type: QuestionType.MCQ,
    text: "Gandhi ji started the 'Indian Opinion' newspaper in which year?",
    options: ["1903", "1904", "1905", "1899"],
    answer: "A. 1903",
    module: Module.TWO,
    marks: 1
  },
  {
    id: generateId('m2-mcq', 2),
    type: QuestionType.MCQ,
    text: "The first newspaper published in India was:",
    options: ["Udant Martand", "Bengal Gazette", "Times of India", "Madras Courier"],
    answer: "B. Bengal Gazette",
    module: Module.TWO,
    marks: 1
  },
  {
    id: generateId('m2-mcq', 3),
    type: QuestionType.MCQ,
    text: "Who is credited with the invention of the printing press with movable type?",
    options: ["James Hickey", "Johannes Gutenberg", "John Bogart", "Raja Ram Mohan Roy"],
    answer: "B. Johannes Gutenberg",
    module: Module.TWO,
    marks: 1
  },
  {
    id: generateId('m2-mcq', 4),
    type: QuestionType.MCQ,
    text: "News values consist of:",
    options: ["Timeliness", "Proximity", "Prominence", "All of the above"],
    answer: "D. All of the above",
    module: Module.TWO,
    marks: 1
  },
  {
    id: generateId('m2-mcq', 5),
    type: QuestionType.MCQ,
    text: "Which of the following is considered 'Hard News'?",
    options: ["A human interest story", "An accident report", "A feature on gardening", "A movie review"],
    answer: "B. An accident report",
    module: Module.TWO,
    marks: 1
  },
  {
    id: generateId('m2-mcq', 6),
    type: QuestionType.MCQ,
    text: "RNI stands for:",
    options: ["Registrar of Newspapers for India", "Radio News India", "Regional News Institute", "Reporter News Index"],
    answer: "A. Registrar of Newspapers for India",
    module: Module.TWO,
    marks: 1
  },
  {
    id: generateId('m2-mcq', 7),
    type: QuestionType.MCQ,
    text: "The oldest existing newspaper in India is:",
    options: ["Mumbai Samachar", "The Hindu", "Times of India", "Anandabazar Patrika"],
    answer: "A. Mumbai Samachar",
    module: Module.TWO,
    marks: 1
  },
  {
    id: generateId('m2-mcq', 8),
    type: QuestionType.MCQ,
    text: "Important elements of news structure (5Ws and 1H) include all EXCEPT:",
    options: ["What", "Where", "Which", "When"],
    answer: "C. Which (It is usually Who, What, When, Where, Why, How)",
    module: Module.TWO,
    marks: 1
  },
  {
    id: generateId('m2-mcq', 9),
    type: QuestionType.MCQ,
    text: "The 'Lead' in a news story refers to:",
    options: ["The headline", "The first paragraph", "The editor", "The conclusion"],
    answer: "B. The first paragraph",
    module: Module.TWO,
    marks: 1
  },
  {
    id: generateId('m2-mcq', 10),
    type: QuestionType.MCQ,
    text: "Tabloid and Broadsheet refer to:",
    options: ["Printing ink types", "Sizes of newspapers", "Types of journalists", "Distribution methods"],
    answer: "B. Sizes of newspapers",
    module: Module.TWO,
    marks: 1
  }
];

// --- SECTION B: Objective (2 Marks - usually 2 parts) ---
export const objectiveQuestions: Question[] = [
  // Module 1
  {
    id: generateId('m1-obj', 1),
    type: QuestionType.OBJECTIVE,
    text: "Fill in the blanks:",
    subQuestions: [
      "Communication without words is called ________ communication.",
      "________ is the sharing of experiences."
    ],
    answer: "i) Non-verbal, ii) Communication",
    module: Module.ONE,
    marks: 2
  },
  {
    id: generateId('m1-obj', 2),
    type: QuestionType.OBJECTIVE,
    text: "True or False:",
    subQuestions: [
      "Feedback is not essential in the communication process.",
      "Mass communication requires a mechanical device."
    ],
    answer: "i) False, ii) True",
    module: Module.ONE,
    marks: 2
  },
  {
    id: generateId('m1-obj', 3),
    type: QuestionType.OBJECTIVE,
    text: "Match the following:",
    subQuestions: [
      "i) Visual Communication -> a) Radio",
      "ii) Audio Communication -> b) Traffic Signals"
    ],
    answer: "i -> b, ii -> a",
    module: Module.ONE,
    marks: 2
  },
  {
    id: generateId('m1-obj', 4),
    type: QuestionType.OBJECTIVE,
    text: "Fill in the blanks:",
    subQuestions: [
      "The recipient of a message is called the ________.",
      "Anything that hinders communication is called ________."
    ],
    answer: "i) Receiver, ii) Noise",
    module: Module.ONE,
    marks: 2
  },
  // Module 2
  {
    id: generateId('m2-obj', 1),
    type: QuestionType.OBJECTIVE,
    text: "Fill in the blanks:",
    subQuestions: [
      "The first newspaper in India, Bengal Gazette, was published in the year ________.",
      "________ is known as the person who edits copies."
    ],
    answer: "i) 1780, ii) Editor/Sub-editor",
    module: Module.TWO,
    marks: 2
  },
  {
    id: generateId('m2-obj', 2),
    type: QuestionType.OBJECTIVE,
    text: "True or False:",
    subQuestions: [
      "Editorial opinion should be mixed with news reporting.",
      "A 'Scoop' is an exclusive story."
    ],
    answer: "i) False, ii) True",
    module: Module.TWO,
    marks: 2
  },
  {
    id: generateId('m2-obj', 3),
    type: QuestionType.OBJECTIVE,
    text: "Identify the odd one out:",
    subQuestions: [
      "i) Radio, Television, Newspaper, Internet (Find the Print Media)",
      "ii) Clarity, Bias, Objectivity, Accuracy (Find the negative trait)"
    ],
    answer: "i) Newspaper, ii) Bias",
    module: Module.TWO,
    marks: 2
  },
  {
    id: generateId('m2-obj', 4),
    type: QuestionType.OBJECTIVE,
    text: "Fill in the blanks regarding News Values:",
    subQuestions: [
      "________ refers to the nearness of an event.",
      "________ refers to stories that generate human emotion."
    ],
    answer: "i) Proximity, ii) Human Interest",
    module: Module.TWO,
    marks: 2
  },
  {
    id: generateId('m2-obj', 5),
    type: QuestionType.OBJECTIVE,
    text: "Match the personality with the paper:",
    subQuestions: [
      "i) Raja Ram Mohan Roy -> a) Young India",
      "ii) M.K. Gandhi -> b) Mirat-ul-Akhbar"
    ],
    answer: "i -> b, ii -> a",
    module: Module.TWO,
    marks: 2
  }
];

// --- SECTION C: VSA (2 Marks) ---
export const vsaQuestions: Question[] = [
  {
    id: 'vsa-1',
    type: QuestionType.VSA,
    text: "Define Communication in one sentence.",
    answer: "Communication is social interaction through messages or the sharing of experiences.",
    module: Module.ONE,
    marks: 2
  },
  {
    id: 'vsa-2',
    type: QuestionType.VSA,
    text: "Name the five senses used in communication.",
    answer: "Sight, Sound, Touch, Smell, Taste.",
    module: Module.ONE,
    marks: 2
  },
  {
    id: 'vsa-3',
    type: QuestionType.VSA,
    text: "What is 'Yellow Journalism'?",
    answer: "Journalism that is based upon sensationalism and crude exaggeration.",
    module: Module.TWO,
    marks: 2
  },
  {
    id: 'vsa-4',
    type: QuestionType.VSA,
    text: "List any two qualities of a good reporter.",
    answer: "News sense, Clarity, Objectivity, Curiosity, Integrity (Any two).",
    module: Module.TWO,
    marks: 2
  },
  {
    id: 'vsa-5',
    type: QuestionType.VSA,
    text: "Differentiate between 'News' and 'Information'.",
    answer: "Information is raw data (e.g., train schedule). News is information with added value like timeliness or impact (e.g., train schedule changed due to accident).",
    module: Module.TWO,
    marks: 2
  },
  {
    id: 'vsa-6',
    type: QuestionType.VSA,
    text: "What is meant by 'Convergent Media'?",
    answer: "The coming together of computing, telecommunications, and media in a digital environment.",
    module: Module.ONE,
    marks: 2
  },
  {
    id: 'vsa-7',
    type: QuestionType.VSA,
    text: "Who was Johannes Gutenberg?",
    answer: "He was a German inventor credited with inventing the movable type printing press in Europe around 1439.",
    module: Module.TWO,
    marks: 2
  }
];

// --- SECTION C: SA (3 Marks) ---
export const saQuestions: Question[] = [
  {
    id: 'sa-1',
    type: QuestionType.SA,
    text: "Explain the difference between Interpersonal and Mass Communication.",
    answer: "Interpersonal: Direct, face-to-face, instant feedback, small audience. Mass: Uses technology, large heterogeneous audience, delayed feedback.",
    module: Module.ONE,
    marks: 3
  },
  {
    id: 'sa-2',
    type: QuestionType.SA,
    text: "Describe the 'Inverted Pyramid' style of news writing.",
    answer: "A structure where the most important information (Lead/5Ws) is at the top, followed by supporting details, and the least important info at the bottom. Facilitates editing.",
    module: Module.TWO,
    marks: 3
  },
  {
    id: 'sa-3',
    type: QuestionType.SA,
    text: "What are the functions of Mass Communication? List three.",
    answer: "1. To Inform, 2. To Educate, 3. To Entertain (Also: Persuade, Socialize).",
    module: Module.ONE,
    marks: 3
  },
  {
    id: 'sa-4',
    type: QuestionType.SA,
    text: "Write a short note on the role of the 'Sub-Editor'.",
    answer: "Checks facts, corrects grammar, ensures objectivity, writes headlines, decides layout, and polishes the reporter's copy.",
    module: Module.TWO,
    marks: 3
  },
  {
    id: 'sa-5',
    type: QuestionType.SA,
    text: "Discuss the importance of 'Feedback' in communication.",
    answer: "Feedback completes the loop, ensures the message was understood as intended, allows for clarification, and makes communication a two-way process.",
    module: Module.ONE,
    marks: 3
  },
  {
    id: 'sa-6',
    type: QuestionType.SA,
    text: "Briefly explain 'Development Communication'.",
    answer: "Using communication to promote social development. It aims to improve the quality of life, focusing on areas like agriculture, health, and sanitation (e.g., SITE experiment).",
    module: Module.ONE,
    marks: 3
  },
  {
    id: 'sa-7',
    type: QuestionType.SA,
    text: "What are the main criteria for 'News Values'? Explain any two.",
    answer: "Timeliness, Impact, Proximity, Prominence, Oddity. (Explain any two, e.g., Proximity: Local events matter more).",
    module: Module.TWO,
    marks: 3
  }
];

// --- SECTION C: LA (4 Marks) ---
export const laQuestions: Question[] = [
  {
    id: 'la-1',
    type: QuestionType.LA,
    text: "Discuss the role of Mass Media in a Democracy. Why is it called the Fourth Pillar?",
    answer: "Acts as a watchdog, bridges gap between govt and people, forms public opinion, highlights social issues, ensures accountability.",
    module: Module.ONE,
    marks: 4
  },
  {
    id: 'la-2',
    type: QuestionType.LA,
    text: "Trace the history of the Printing Press in India. Mention key newspapers.",
    answer: "Started by missionaries (1556). First paper Bengal Gazette (1780) by Hickey. Raja Ram Mohan Roy's contribution. Role in freedom struggle (Harijan, Young India). Growth of language press.",
    module: Module.TWO,
    marks: 4
  },
  {
    id: 'la-3',
    type: QuestionType.LA,
    text: "Explain the process of News Gathering. What are the different sources for a reporter?",
    answer: "Sources include: Press conferences, Police stations, Parliament/Assemblies, Interviews, Press releases, Observation, and Tips from contacts.",
    module: Module.TWO,
    marks: 4
  },
  {
    id: 'la-4',
    type: QuestionType.LA,
    text: "What is Non-Verbal Communication? Explain its various forms (Kinesics, Proxemics, etc.).",
    answer: "Communication without words. Includes Body language (Kinesics), Space (Proxemics), Touch (Haptics), Eye contact, and Paralinguistics (tone/pitch).",
    module: Module.ONE,
    marks: 4
  }
];
