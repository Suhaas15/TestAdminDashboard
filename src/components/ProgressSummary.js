import React, { useEffect, useRef, useState } from 'react';
import cardStyles from '../styles/cardStyles';
import progressStyles from '../styles/progressStyles';

const ProgressSummary = ({ progressData }) => {
  const [animatedProgress, setAnimatedProgress] = useState(() =>
    progressData.map(() => 0)
  );
  const animationRef = useRef(null);

  useEffect(() => {
    if (animationRef.current) {
      clearTimeout(animationRef.current);
    }
    setAnimatedProgress(progressData.map(() => 0));
    animationRef.current = setTimeout(() => {
      setAnimatedProgress(progressData.map((item) => item.progress));
    }, 120);
    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [progressData]);

  return (
    <div style={cardStyles.card}>
      <div style={cardStyles.cardHeader}>
        <h2 style={cardStyles.cardTitle}>Work by progress</h2>
        <button style={cardStyles.seeDetailButton}>See detail</button>
      </div>

      <div style={progressStyles.progressCircle}>
        <div style={{ position: 'relative', width: '200px', height: '200px' }}>
          <svg style={{ transform: 'rotate(-90deg)' }} viewBox="0 0 200 200">
            {progressData.map((item, index) => {
              const radius = 88 - index * 16;
              const circumference = 2 * Math.PI * radius;
              const progress = animatedProgress[index] ?? 0;
              const offset = circumference - (progress / 100) * circumference;
              return (
                <circle
                  key={item.name}
                  cx="100"
                  cy="100"
                  r={radius}
                  stroke={item.color}
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                  opacity={progress > 0 ? 0.9 : 0.4}
                  style={{ transition: 'stroke-dashoffset 0.9s ease, opacity 0.9s ease' }}
                />
              );
            })}
          </svg>
        </div>
      </div>

      <div style={progressStyles.progressList}>
        {progressData.map((item) => (
          <div key={item.name} style={progressStyles.progressItem}>
            <div style={progressStyles.progressItemLeft}>
              <div style={{ ...progressStyles.progressDot, backgroundColor: item.color }}></div>
              <span style={progressStyles.progressName}>{item.name}</span>
            </div>
            <span style={progressStyles.progressValue}>{item.progress}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressSummary;
