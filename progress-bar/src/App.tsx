import { useEffect, useState } from 'react';
import './App.css'
function ProgressBar({ value, min = 0, max = 100 }) {
  const percentage = Math.min(Math.max(value, min), max);
  const percent = ((percentage - min) / (max - min)) * 100;

  let bgColor = 'green';
  if (percent < 50) bgColor = 'orange';
  else if (percent < 80) bgColor = 'blue';

  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{ width: `${percent}%`, backgroundColor: bgColor }}
      >
        {Math.round(percent)}%
      </div>
    </div>
  );
}

function App() {
  const [progress, setProgress] = useState(0);

  const updateProgress = (delta: number) => {
    setProgress((prev) => Math.max(0, Math.min(100, prev + delta)));
  };

  useEffect(() => {
    setProgress(60)
  }, [])

  return (
    <div className="app">
      <h2>Progress Bar Example</h2>
      <ProgressBar value={progress} />
      <div className="buttons">
        <button onClick={() => updateProgress(-10)}>Decrease</button>
        <button onClick={() => updateProgress(10)}>Increase</button>
      </div>
    </div>
  );
}

export default App;
