import { useState } from "react";
import "./Quiz.scss";
import { Question, resultInitialState, ResultInitialState } from "@/utils/constants";
import AnswerTimer from "../AnswerTimer/AnswerTimer";
import { TIMER } from "@/utils/constants";
import Result from "../Result/Result";

interface Props extends React.ComponentPropsWithoutRef<"div"> {
  questions: Question[];
}

export default function Quiz(props: Props) {
  const { questions } = props;

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answerIndex, setAnswerIndex] = useState<number | null>(null);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null);
  const [result, setResult] = useState<ResultInitialState>(resultInitialState);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [showAnswerTimer, setShowAnswerTimer] = useState<boolean>(true);
  const [inputAnswer, setInputAnswer] = useState<string>("");
  const [answers, setAnswers] = useState<string[]>([]);

  const { question, choices, type, correctAnswer } = questions[currentQuestion];
  const options: Array<string> = ["A", "B", "C", "D"];

  function onAnswerClick(answer: string, index: number) {
    setAnswerIndex(index);
    if (answer === correctAnswer) {
      setIsCorrectAnswer(true);
    } else {
      setIsCorrectAnswer(false);
    }
  }

  function onClickNext(finalAnswer: boolean) {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestion] = choices && answerIndex ? choices[answerIndex] : inputAnswer;
      return updatedAnswers;
    });
    // console.log(answers);
    setAnswerIndex(null);
    setShowAnswerTimer(false);
    setInputAnswer("");
    setResult((prevResult) =>
      finalAnswer
        ? { ...prevResult, score: prevResult.score + 5, correctAnswers: prevResult.correctAnswers + 1 }
        : { ...prevResult, incorrectAnswers: prevResult.incorrectAnswers + 1 },
    );

    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }

    setTimeout(() => {
      setShowAnswerTimer(true);
    });
  }

  function onTryAgain() {
    setResult(resultInitialState);
    setShowResult(false);
    setInputAnswer("");
    setAnswers([]);
  }

  function handleTimeUp() {
    setIsCorrectAnswer(false);
    onClickNext(false);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const input: string = e.target.value;

    setInputAnswer(input);

    if (input.toLowerCase() === correctAnswer) {
      setIsCorrectAnswer(true);
    } else {
      setIsCorrectAnswer(false);
    }
  }

  function getAnswerUI() {
    if (type === "FIB") {
      return <input value={inputAnswer} onChange={handleInputChange} placeholder="Answer..." />;
    }

    return (
      <ul className="answers-container">
        {choices?.map((answer, index) => {
          return (
            <li key={index} onClick={() => onAnswerClick(answer, index)} className={`answer-box ${answerIndex === index ? `selected-answer` : null}`}>
              <span className="option">{options[index]}</span>
              {answer}
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <>
      {!showResult ? (
        <div className="quiz-container">
          {showAnswerTimer && (
            <div className="questions-timer-container">
              <div className="questions-no-container">
                <span className="active-question-no">{currentQuestion + 1}</span>
                <span className="slash">/</span>
                <span className="total-questions-no">{questions.length}</span>
              </div>
              <AnswerTimer duration={TIMER} onTimeUp={handleTimeUp} />
            </div>
          )}
          <div className="question-container">
            <h2 className="question">{question}</h2>
          </div>
          <hr />
          {getAnswerUI()}
          <button
            className="question-button"
            onClick={() => (isCorrectAnswer !== null ? onClickNext(isCorrectAnswer) : null)}
            disabled={answerIndex === null && !inputAnswer}
          >
            {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      ) : (
        <Result answers={answers} questions={questions} result={result} onTryAgain={onTryAgain} />
      )}
    </>
  );
}
