import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{padding: "15px"}}>
      <p style={{ fontWeight: 'bold',textAlign: 'right' }}>⌚ 現在時刻：{currentTime.toLocaleTimeString()}</p>
    </div>
  );
};

export default Clock;
