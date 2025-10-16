import React from 'react';
import Header from './components/Header';
import Overview from './components/Overview';
import ProgressSummary from './components/ProgressSummary';
import layoutStyles from './styles/layoutStyles';
import { incomeData, navItems, progressData, statsCards } from './data/dashboardData';

const Dashboard = () => {
  const isWideLayout = typeof window !== 'undefined' && window.innerWidth >= 1024;

  return (
    <div style={layoutStyles.container}>
      <Header navItems={navItems} />
      <main style={layoutStyles.main}>
        <div
          style={{
            ...layoutStyles.grid,
            gridTemplateColumns: isWideLayout ? '2fr 1fr' : '1fr'
          }}
        >
          <Overview statsCards={statsCards} incomeData={incomeData} />
          <ProgressSummary progressData={progressData} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
