import { useEffect, useState } from "react";
import "./Leaderboard.scss";
import { ResultInitialState } from "@/utils/constants";

interface Props extends React.ComponentPropsWithoutRef<"div"> {
  result: ResultInitialState;
}

interface Score {
  name: string;
  score: number;
}

export default function Leaderboard(props: Props) {
  const { result } = props;

  const [name, setName] = useState<string>("");
  const [highScores, setHighScores] = useState<Score[]>([]);
  const [showScores, setShowScores] = useState<boolean>(false);

  function handleSave() {
    const score: Score = {
      name,
      score: result.score,
    };

    const newHighScores: Score[] = [...highScores, score].sort((a, b) => b.score - a.score);
    setHighScores(newHighScores);
    setShowScores(true);
    localStorage.setItem("highscores", JSON.stringify(newHighScores));
  }

  useEffect(() => {
    const storedScores = localStorage.getItem("highscores");
    setHighScores(storedScores ? JSON.parse(storedScores) : []);

    /* setShowScores(false);
    setHighScores([]); */
  }, []);

  return (
    <div className="leaderboard-container">
      {!showScores ? (
        <div className="enter-name-container">
          <h2>
            Enter your name below <br /> to save your score
          </h2>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name..." />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div className="leaderboard-table">
          <table>
            <thead>
              <tr>
                <th>Ranking</th>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {highScores.map((highScore, index) => {
                return (
                  <tr key={`${highScore.score}${highScore.name}${index}`}>
                    <td>{index + 1}</td>
                    <td>{highScore.name}</td>
                    <td>{highScore.score}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
