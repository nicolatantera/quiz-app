import { useEffect, useState, useRef } from "react";

import "./AnswerTimer.scss";

interface Props extends React.ComponentPropsWithoutRef<"div"> {
  duration: number;
  onTimeUp: () => void;
}

export default function AnswerTimer(props: Props) {
  const { duration, onTimeUp } = props;

  const [counter, setCounter] = useState<number>(0);
  const [progressLoaded, setProgressLoaded] = useState<number>(100);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); // To manage setTimeout

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCounter((cur) => cur + 1);
    }, 1000);

    // Clear the interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setProgressLoaded(100 - (100 * counter) / duration);

    if (counter >= duration) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      // Ensure only one timeout is active
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        onTimeUp();
      }, 1000); // Trigger `onTimeUp` immediately
    }
  }, [counter, duration, onTimeUp]);

  useEffect(() => {
    // Reset counter and progress when duration changes
    setCounter(0);
    setProgressLoaded(100);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, [duration]);

  return (
    <div className="timer-container">
      <div
        className="timer-progress"
        style={{
          width: `${progressLoaded}%`,
          backgroundColor: `${progressLoaded > 65 ? `lightgreen` : progressLoaded > 20 ? `orange` : `red`}`,
        }}
      ></div>
      <span
        className="text-timer"
        style={{
          color: `${progressLoaded > 47 ? `black` : progressLoaded > 20 ? `orange` : `red`}`,
        }}
      >
        {duration - counter}
      </span>
    </div>
  );
}
