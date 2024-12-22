import { useEffect, useState } from "react";
import Quiz from "@/components/Quiz/Quiz";
import { quizQuestions, Question, QUESTION_AMOUNT } from "@/utils/constants";

export default function App() {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const shuffled: Question[] = [...quizQuestions.questions].sort(() => Math.random() - 0.5); // Shuffle the questions array
    setQuestions(shuffled.slice(0, QUESTION_AMOUNT)); // Select the first `count` questions
  }, []);

  return questions.length && <Quiz questions={questions} />;
}
