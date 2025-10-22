import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Overview from './components/Overview';
import ProgressSummary from './components/ProgressSummary';
import layoutStyles from './styles/layoutStyles';
import { incomeData, navItems, progressData, statsCards } from './data/dashboardData';

const Dashboard = () => {
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );
  const isWideLayout = viewportWidth >= 1024;

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={layoutStyles.container}>
      <Header navItems={navItems} />
      <main
        style={{
          ...layoutStyles.main,
          padding: viewportWidth < 768 ? '0 1.25rem' : layoutStyles.main.padding,
          marginTop: viewportWidth < 768 ? '-1.5rem' : layoutStyles.main.marginTop
        }}
      >
        <div
          style={{
            ...layoutStyles.grid,
            gridTemplateColumns: isWideLayout ? '2fr 1fr' : '1fr'
          }}
        >
          <Overview
            statsCards={statsCards}
            incomeData={incomeData}
            viewportWidth={viewportWidth}
          />
          <ProgressSummary progressData={progressData} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
