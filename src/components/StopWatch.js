// import "./styles.css";

import { useEffect, useState, useRef } from "react";

function StopWatch() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(59);
  const [hour, setHour] = useState(0);

  let tIns;

  useEffect(() => {
    tIns = setTimeout(() => {
      setSec(sec + 1);
      if (sec >= 60) {
        setMin(min + 1);
        setSec(0);
      } else if (min >= 60) {
        setHour(hour + 1);
        setMin(0);
      }
    }, 1000);
    return () => {
      clearTimeout(tIns);
    };
  }, [sec]);
  useEffect(() => {
    setMin(0);
    setHour(0);
    setSec(0);
    clearTimeout(tIns);
  }, []);

  function startTimer() {
    setSec(sec + 1);
    setMin(min);
    setHour(hour);
  }
  function resetTimer() {
    clearTimeout(tIns);
    setMin(0);
    setHour(0);
    setSec(0);
  }
  function stopTimer() {
    clearTimeout(tIns);
  }
  return (
    <div className="App">
      <h1>Stop Watch</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div>
          <h1>Hour : {hour} </h1>
        </div>
        <h1>Minute : {min} </h1>
        <h1>Second : {sec} </h1>
      </div>
      <button onClick={() => startTimer()}>Start</button>
      <button onClick={() => stopTimer()}>Stop</button>
      <button onClick={() => resetTimer()}>Reset</button>
    </div>
  );
}

export default StopWatch;
