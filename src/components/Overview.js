import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';
import cardStyles from '../styles/cardStyles';
import overviewStyles from '../styles/overviewStyles';

const Overview = ({ statsCards, incomeData }) => {
  const [activeFilter, setActiveFilter] = useState('All fields');
  const [hoveredStat, setHoveredStat] = useState(null);
  const [chartData, setChartData] = useState(() =>
    incomeData.map((item) => ({ ...item, value: 0 }))
  );
  const animationRef = useRef(null);

  const runAnimation = useCallback(() => {
    setChartData(incomeData.map((item) => ({ ...item, value: 0 })));
    animationRef.current = setTimeout(() => {
      setChartData(incomeData);
    }, 180);
  }, [incomeData]);

  useEffect(() => {
    runAnimation();
    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [runAnimation]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    if (animationRef.current) {
      clearTimeout(animationRef.current);
    }
    runAnimation();
  };

  return (
    <div style={cardStyles.card}>
      <div style={cardStyles.cardHeader}>
        <h2 style={cardStyles.cardTitle}>Overview</h2>
        <button style={cardStyles.seeDetailButton}>See detail</button>
      </div>

      <div style={overviewStyles.statsGrid}>
        {statsCards.map((card, index) => (
          <div
            key={card.title}
            style={{
              ...overviewStyles.statCard,
              transform: hoveredStat === index ? 'translateY(-2px)' : 'translateY(0)',
              boxShadow: hoveredStat === index ? '0 4px 12px rgba(0, 0, 0, 0.08)' : 'none',
              transition: 'all 0.2s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={() => setHoveredStat(index)}
            onMouseLeave={() => setHoveredStat(null)}
          >
            <div style={overviewStyles.statHeader}>
              <div
                style={{
                  ...overviewStyles.statBadge,
                  backgroundColor: card.trend === 'up' ? '#dcfce7' : '#fee2e2',
                  color: card.trend === 'up' ? '#16a34a' : '#dc2626'
                }}
              >
                {card.trend === 'up' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                <span>{card.change}</span>
              </div>
            </div>
            <div
              style={{
                ...overviewStyles.statIconWrapper,
                backgroundColor: index === 0 ? '#f3e8ff' : index === 1 ? '#fce7f3' : '#f3e8ff'
              }}
            >
              <card.icon size={20} color={index === 0 ? '#9333ea' : index === 1 ? '#db2777' : '#9333ea'} />
            </div>
            <p style={overviewStyles.statValue}>{card.value}</p>
            <p style={overviewStyles.statLabel}>{card.title}</p>
          </div>
        ))}
      </div>

      <div>
        <div style={overviewStyles.chartHeader}>
          <h3 style={overviewStyles.chartTitle}>Income</h3>
          <div style={overviewStyles.chartButtons}>
            {['All fields', 'Service', 'Product'].map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                style={{
                  ...overviewStyles.chartButton,
                  ...(activeFilter === filter ? overviewStyles.chartButtonActive : overviewStyles.chartButtonInactive)
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c084fc" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#c084fc" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
            <XAxis
              dataKey="month"
              stroke="#d1d5db"
              style={{ fontSize: '11px' }}
              axisLine={false}
              tickLine={false}
              dy={10}
            />
            <YAxis
              stroke="#d1d5db"
              style={{ fontSize: '11px' }}
              axisLine={false}
              tickLine={false}
              dx={-10}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#18181b',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                fontSize: '12px',
                padding: '8px 12px'
              }}
              formatter={(value) => [`$${value.toLocaleString()}`, 'Income']}
              labelStyle={{ color: '#a1a1aa' }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="url(#colorGradient)"
              strokeWidth={3}
              fill="url(#areaGradient)"
              dot={false}
              activeDot={{ r: 5, fill: '#ec4899', stroke: '#fff', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Overview;
