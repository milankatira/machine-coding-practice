
import { useState, useEffect } from 'react';
import './TrafficLight.css';

type LightColor = 'red' | 'yellow' | 'green';

const lightDurations: Record<LightColor, number> = {
  red: 4000,
  yellow: 1000,
  green: 3000,
};

const lightSequence: LightColor[] = ['green', 'yellow', 'red'];

const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState<LightColor>('green');

  useEffect(() => {
    const currentLightIndex = lightSequence.indexOf(activeLight);
    const nextLightIndex = (currentLightIndex + 1) % lightSequence.length;
    const nextLight = lightSequence[nextLightIndex];

    const timer = setTimeout(() => {
      setActiveLight(nextLight);
    }, lightDurations[activeLight]);

    return () => clearTimeout(timer);
  }, [activeLight]);

  return (
    <div className="traffic-light-container">
      <div className="traffic-light">
        <div className={`light red ${activeLight === 'red' ? 'active' : ''}`}></div>
        <div className={`light yellow ${activeLight === 'yellow' ? 'active' : ''}`}></div>
        <div className={`light green ${activeLight === 'green' ? 'active' : ''}`}></div>
      </div>
    </div>
  );
};

export default TrafficLight;
