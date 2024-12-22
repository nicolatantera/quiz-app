export const quizQuestions = {
  questions: [
    {
      question: "Which of the following is used in React.js to increase performance?",
      choices: ["Virtual DOM", "Original DOM", "Both A and B", "None of the above"],
      type: "MCQs",
      correctAnswer: "Virtual DOM",
    },
    {
      question: "______ provide a way to pass data from one component to another. Fill in the blank.",
      type: "FIB",
      correctAnswer: "props",
    },
    {
      question: "What is ReactJS?",
      choices: ["Server-side framework", "User Interface framework", "both a and b", "None of the above"],
      type: "MCQs",
      correctAnswer: "User Interface framework",
    },
    {
      question: "Identify the one which is used to pass data to components from outside",
      choices: ["Render with arguments", "setState", "PropTypes", "props"],
      type: "MCQs",
      correctAnswer: "props",
    },
    {
      question: "In which language is React.js written?",
      choices: ["Python", "Java", "C#", "JavaScript"],
      type: "MCQs",
      correctAnswer: "JavaScript",
    },
    {
      question: "What is Babel?",
      choices: ["JavaScript interpreter", "JavaScript transpiler", "JavaScript compiler", "None of the above"],
      type: "MCQs",
      correctAnswer: "JavaScript compiler",
    },
    {
      question: "Which of the following is used to manage the state in React applications?",
      choices: ["useState", "useEffect", "useReducer", "All of the above"],
      type: "MCQs",
      correctAnswer: "All of the above",
    },
    {
      question: "The keyword used to declare a constant variable in JavaScript is _______.",
      type: "FIB",
      correctAnswer: "const",
    },
    {
      question: "What is the default port for a React application?",
      choices: ["3000", "8080", "5000", "4000"],
      type: "MCQs",
      correctAnswer: "3000",
    },
    {
      question: "Which lifecycle method is invoked immediately after a component is mounted in a class component?",
      choices: ["componentDidMount", "componentDidUpdate", "componentWillUnmount", "render"],
      type: "MCQs",
      correctAnswer: "componentDidMount",
    },
    {
      question: "A _______ is a plain JavaScript function that returns a React element.",
      type: "FIB",
      correctAnswer: "functional component",
    },
    {
      question: "Which hook is used to perform side effects in React functional components?",
      choices: ["useState", "useContext", "useEffect", "useReducer"],
      type: "MCQs",
      correctAnswer: "useEffect",
    },
    {
      question: "The command to initialize a new Node.js project with a package.json file is _______.",
      type: "FIB",
      correctAnswer: "npm init",
    },
    {
      question: "Which of these is not a JavaScript data type?",
      choices: ["Boolean", "Undefined", "Element", "Symbol"],
      type: "MCQs",
      correctAnswer: "Element",
    },
    {
      question: "What does the acronym DOM stand for in web development?",
      choices: ["Document Oriented Model", "Data Object Model", "Document Object Model", "Data Oriented Model"],
      type: "MCQs",
      correctAnswer: "Document Object Model",
    },
    {
      question: "To install a specific version of a package using npm, the command format is _______.",
      type: "FIB",
      correctAnswer: "npm install package-name@version",
    },
    {
      question: "Which JavaScript method is used to filter an array based on a condition?",
      choices: ["map()", "filter()", "reduce()", "forEach()"],
      type: "MCQs",
      correctAnswer: "filter()",
    },
    {
      question: "In TypeScript, _______ is used to specify the type of a variable or function.",
      type: "FIB",
      correctAnswer: "type annotation",
    },
    {
      question: "Which of the following is true about JSX?",
      choices: [
        "JSX is a syntax extension for JavaScript.",
        "JSX allows embedding HTML-like syntax in JavaScript.",
        "JSX must be transpiled into JavaScript.",
        "All of the above",
      ],
      type: "MCQs",
      correctAnswer: "All of the above",
    },
    {
      question: "To clone a Git repository, the command used is _______.",
      type: "FIB",
      correctAnswer: "git clone",
    },
    {
      question: "Which of these is a method to create a new context in React?",
      choices: ["createContext()", "useContext()", "useState()", "useEffect()"],
      type: "MCQs",
      correctAnswer: "createContext()",
    },
    {
      question: "What does the keyword 'async' indicate in JavaScript?",
      choices: [
        "The function will always run in the background.",
        "The function returns a Promise.",
        "The function can only run once.",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "The function returns a Promise.",
    },
    {
      question: "Which tag is used to include an external JavaScript file in HTML?",
      type: "FIB",
      correctAnswer: "<script>",
    },
    {
      question: "What is the correct command to install React using npm?",
      choices: ["npm install react", "npm create react", "npm start react", "npm build react"],
      type: "MCQs",
      correctAnswer: "npm install react",
    },
    {
      question: "Which of the following HTTP methods is typically used to update a resource?",
      choices: ["GET", "POST", "PUT", "DELETE"],
      type: "MCQs",
      correctAnswer: "PUT",
    },
    {
      question: "In CSS, _______ is used to apply styles to elements based on their class.",
      type: "FIB",
      correctAnswer: "class selector",
    },
  ],
};

export interface Question {
  question: string;
  choices?: string[];
  type: string;
  correctAnswer: string;
}

export const resultInitialState = {
  score: 0,
  correctAnswers: 0,
  incorrectAnswers: 0,
};

export interface ResultInitialState {
  score: number;
  correctAnswers: number;
  incorrectAnswers: number;
}


export interface AnswersState {
  type: string;
  answer: string;
}

export const TIMER = 20;
export const QUESTION_AMOUNT = 5;
