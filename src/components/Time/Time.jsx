import React, { useState, useEffect } from "react";
import "./time.css";

const Time = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          seconds = 59;
          minutes -= 1;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours -= 1;
        } else {
          clearInterval(timer);
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => (time < 10 ? `0${time}` : time); 

  return (
    <div className="timeBoxClass">
      <div className="timeBoxDay">
        <div className="timeBox">
          <h3>{formatTime(timeLeft.hours)}</h3>
          <p className="textTimeBox">hrs</p>
        </div>
        <span>:</span>
      </div>
      <div className="timeBoxDay">
        <div className="timeBox">
          <h3>{formatTime(timeLeft.minutes)}</h3>
          <p className="textTimeBox">mins</p>
        </div>
        <span>:</span>
      </div>
      <div className="timeBoxDay">
        <div className="timeBox">
          <h3>{formatTime(timeLeft.seconds)}</h3>
          <p className="textTimeBox">secs</p>
        </div>
      </div>
    </div>
  );
};

export default Time;
