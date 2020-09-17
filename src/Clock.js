import React, { useState } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const getCurrentTime = () => {
    setTime(new Date().toLocaleTimeString());
  }

  setInterval(
    getCurrentTime,
    1000
  );

  return (
    <div>
      <h1>Current time</h1>
      <h2>It's {time}</h2>
    </div>
  )
}

export default Clock
