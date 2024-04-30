import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div style={{padding: "35px"}}>
      <h2>タイマー⏲</h2>
      <div　style={{marginTop: "15px" ,fontWeight: 'bold'}}>経過時間： {minutes}分{seconds}秒</div>
      <div style={{marginTop: "15px"}}>
        <button style={{ backgroundColor: "rgb(187, 243, 251)", color: "black", padding: "10px", borderRadius: "6px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)" }} onClick={handleStart}>スタート</button>
        <button style={{ marginLeft:"5px",backgroundColor: "rgb(187, 243, 251)", color: "black", padding: "10px", borderRadius: "6px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)" }} onClick={handleStop}>ストップ</button>
        <button style={{ marginLeft:"5px",backgroundColor: "rgb(187, 243, 251)", color: "black", padding: "10px", borderRadius: "6px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)" }} onClick={handleReset}>リセット</button>
      </div>
    </div>
  );
};

export default Timer;
