import Leaderboard from "../Leaderboard/Leaderboard";
import ScoreContainer from "../ScoreContainer/ScoreContainer";
import "./Result.scss";
import { ResultInitialState, Question } from "@/utils/constants";

interface Props extends React.ComponentPropsWithoutRef<"div"> {
  answers: Array<string>;
  questions: Question[];
  result: ResultInitialState;
  onTryAgain: () => void;
}

export default function Result(props: Props) {
  const { answers, questions, result, onTryAgain } = props;

  // console.log(answers);

  return (
    <div className="result-leaderboard-container">
      <div className="result-container">
        <h3>Result</h3>
        <ScoreContainer totalQuestions={questions.length} result={result} />

        <div className="see-more">
          <hr />
          <span className="see-more-text">See More</span>
        </div>

        <div className="shadow-top"></div>
        <ul className="questions-container">
          {questions.map((question, indexQuestions) => {
            return (
              <li key={indexQuestions} className="question-row">
                {indexQuestions + 1}. {question.question}
                {question.choices ? (
                  <div className="choices-container">
                    {question.choices?.map((choice, index) => {
                      return (
                        <div
                          key={index}
                          className={`choice-container ${
                            choice === question.correctAnswer ? `correct` : choice === answers[indexQuestions] ? `mine` : null
                          }`}
                        >
                          {choice}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="fill-blank-container">
                    {question.correctAnswer.toLowerCase() === answers[indexQuestions].toLowerCase() ? (
                      <div className="choice-container correct">{question.correctAnswer}</div>
                    ) : (
                      <>
                        <div className="choice-container correct">{question.correctAnswer}</div>
                        <div className="choice-container mine">{answers[indexQuestions]}</div>
                      </>
                    )}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
        <div className="shadow-bottom"></div>

        <button className="try-again" onClick={onTryAgain}>
          Try Again
        </button>
      </div>
      <Leaderboard result={result} />
    </div>
  );
}
