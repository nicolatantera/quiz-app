import "./ScoreContainer.scss";
import { ResultInitialState } from "@/utils/constants";

interface Props extends React.ComponentPropsWithoutRef<"div"> {
  totalQuestions: number;
  result: ResultInitialState;
}

export default function ScoreContainer(props: Props) {
  const { totalQuestions, result } = props;

  return (
    <div className="score-container">
      <div className="option-score">
        <p>Questions</p>
        <span className="total-questions">{totalQuestions}</span>
      </div>
      <div className="option-score">
        <p>Score</p>
        <span className="total-score">{result.score}</span>
      </div>
      <div className="option-score">
        <p>Correct</p>
        <span className="correct-answers">{result.correctAnswers}</span>
      </div>
      <div className="option-score">
        <p>Incorrect</p>
        <span className="inorrect-answers">{result.incorrectAnswers}</span>
      </div>
    </div>
  );
}
