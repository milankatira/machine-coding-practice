import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const [inputHours, setInputHours] = useState<number>(0);
  const [inputMinutes, setInputMinutes] = useState<number>(0);
  const [inputSeconds, setInputSeconds] = useState<number>(0);

  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let timerId: NodeJS.Timeout;
    if (isActive && timeLeft > 0) {
      timerId = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    return () => clearTimeout(timerId);
  }, [isActive, timeLeft]);


  const handleStart = () => {
    const total = timeLeft > 0 ? timeLeft : inputHours * 3600 + inputMinutes * 60 + inputSeconds;
    if (total > 0) {
      setTimeLeft(total);
      setIsActive(true);
    }
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTimeLeft(0);
    setInputHours(0);
    setInputMinutes(0);
    setInputSeconds(0);
  };


  const format = (n: number) => String(n).padStart(2, '0');

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="countdown-timer bg-gray-800 min-h-screen flex flex-col items-center justify-center text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Countdown Timer</h1>

      <div className="time-inputs grid grid-cols-3 gap-4 mb-8">
        <div className="flex flex-col items-center">
          <label className="mb-2 text-lg">Hours</label>
          <input
            className="bg-gray-700 border border-gray-600 rounded-md p-2 text-center w-20 text-white"
            type="number"
            min={0}
            value={inputHours}
            onChange={e => setInputHours(+e.target.value)}
            disabled={isActive}
          />
        </div>
        <div className="flex flex-col items-center">
          <label className="mb-2 text-lg">Minutes</label>
          <input
            className="bg-gray-700 border border-gray-600 rounded-md p-2 text-center w-20 text-white"
            type="number"
            min={0} max={59}
            value={inputMinutes}
            onChange={e => setInputMinutes(+e.target.value)}
            disabled={isActive}
          />
        </div>
        <div className="flex flex-col items-center">
          <label className="mb-2 text-lg">Seconds</label>
          <input
            className="bg-gray-700 border border-gray-600 rounded-md p-2 text-center w-20 text-white"
            type="number"
            min={0} max={59}
            value={inputSeconds}
            onChange={e => setInputSeconds(+e.target.value)}
            disabled={isActive}
          />
        </div>
      </div>

      <div className="timer-display text-6xl font-mono mb-8">
        {format(hours)}:{format(minutes)}:{format(seconds)}
      </div>

      <div className="controls flex gap-4">
        {!isActive ? (
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors"
            onClick={handleStart}>
            Start
          </button>
        ) : (
          <button
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded transition-colors"
            onClick={handlePause}>
            Pause
          </button>
        )}
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
          onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;
