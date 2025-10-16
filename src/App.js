import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, Eye, Target, Bell } from 'lucide-react';

const Dashboard = () => {
  const [activeNav, setActiveNav] = useState('Home');
  const [activeFilter, setActiveFilter] = useState('All fields');
  const [hoveredStat, setHoveredStat] = useState(null);

  const incomeData = [
    { month: 'Jan', value: 18000 },
    { month: 'Feb', value: 19500 },
    { month: 'Mar', value: 17800 },
    { month: 'Apr', value: 21000 },
    { month: 'May', value: 22500 },
    { month: 'Jun', value: 23602 },
    { month: 'Jul', value: 21800 },
    { month: 'Aug', value: 20500 },
    { month: 'Sep', value: 19200 },
    { month: 'Oct', value: 21500 },
    { month: 'Nov', value: 23000 },
    { month: 'Dec', value: 22800 },
  ];

  const navItems = ['Home', 'Employee', 'Timeline', 'Report', 'Task'];

  const statsCards = [
    {
      title: 'Total Income',
      value: '$23,602',
      change: '+3%',
      trend: 'up',
      icon: DollarSign,
      color: '#f3e8ff',
      iconColor: '#9333ea'
    },
    {
      title: 'Website visitors',
      value: '7,517',
      change: '+2%',
      trend: 'up',
      icon: Eye,
      color: '#fce7f3',
      iconColor: '#db2777'
    },
    {
      title: 'Total Outcome',
      value: '$5,319',
      change: '+5%',
      trend: 'down',
      icon: Target,
      color: '#f3e8ff',
      iconColor: '#9333ea'
    }
  ];

  const progressData = [
    { name: 'Sales analytics dashboard', progress: 40, color: '#3b82f6' },
    { name: 'Travel landing page', progress: 35, color: '#a855f7' },
    { name: 'Saas brand guideline', progress: 70, color: '#f472b6' },
    { name: 'Point of sales mobile app', progress: 85, color: '#9ca3af' }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    },
    header: {
      background: 'linear-gradient(135deg, #581c87 0%, #7c3aed 50%, #581c87 100%)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    },
    headerOverlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.5) 0%, transparent 100%)',
      clipPath: 'polygon(0 0, 100% 0, 100% 60%, 0 100%)'
    },
    headerContent: {
      position: 'relative',
      zIndex: 10,
      padding: '1rem 2rem'
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '4rem'
    },
    navLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem'
    },
    logo: {
      width: '40px',
      height: '40px',
      background: 'linear-gradient(135deg, #a78bfa 0%, #ec4899 100%)',
      borderRadius: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    logoInner: {
      width: '24px',
      height: '24px',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      borderRadius: '0.25rem',
      transform: 'rotate(45deg)'
    },
    navItems: {
      display: 'flex',
      gap: '1.5rem'
    },
    navButton: {
      padding: '0.5rem 1rem',
      borderRadius: '0.5rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s',
      fontSize: '0.95rem'
    },
    navButtonActive: {
      backgroundColor: 'transparent',
      color: 'white',
      fontWeight: '500'
    },
    navButtonInactive: {
      backgroundColor: 'transparent',
      color: '#d8b4fe'
    },
    navRight: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    },
    searchInput: {
      backgroundColor: 'rgba(88, 28, 135, 0.5)',
      color: 'white',
      border: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '0.5rem',
      width: '256px',
      outline: 'none'
    },
    bellButton: {
      position: 'relative',
      padding: '0.5rem',
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '0.5rem'
    },
    bellDot: {
      position: 'absolute',
      top: '4px',
      right: '4px',
      width: '8px',
      height: '8px',
      backgroundColor: '#ef4444',
      borderRadius: '50%'
    },
    avatar: {
      width: '40px',
      height: '40px',
      background: 'linear-gradient(135deg, #ec4899 0%, #a855f7 100%)',
      borderRadius: '50%'
    },
    welcome: {
      paddingBottom: '2rem'
    },
    welcomeTitle: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem'
    },
    welcomeSubtitle: {
      color: '#d8b4fe'
    },
    main: {
      padding: '0 2rem',
      marginTop: '-2rem',
      position: 'relative',
      zIndex: 20
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '1.5rem'
    },
    gridLg: {
      '@media (min-width: 1024px)': {
        gridTemplateColumns: '2fr 1fr'
      }
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '1rem',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      padding: '1.5rem',
      marginBottom: '1.5rem'
    },
    cardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1.5rem'
    },
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#1f2937'
    },
    seeDetailButton: {
      color: '#9333ea',
      fontSize: '0.875rem',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      textDecoration: 'none'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1rem',
      marginBottom: '2rem'
    },
    statCard: {
      padding: '1rem',
      borderRadius: '0.75rem',
      border: '1px solid #f3f4f6'
    },
    statIconWrapper: {
      width: '40px',
      height: '40px',
      borderRadius: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '0.75rem'
    },
    statValue: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#111827'
    },
    statLabel: {
      fontSize: '0.875rem',
      color: '#6b7280',
      marginTop: '0.25rem'
    },
    statTrend: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem',
      fontSize: '0.875rem'
    },
    chartHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1rem'
    },
    chartTitle: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: '#1f2937'
    },
    chartButtons: {
      display: 'flex',
      gap: '0.5rem'
    },
    chartButton: {
      padding: '0.25rem 1rem',
      borderRadius: '9999px',
      fontSize: '0.875rem',
      border: 'none',
      cursor: 'pointer'
    },
    chartButtonActive: {
      backgroundColor: '#f3e8ff',
      color: '#9333ea'
    },
    chartButtonInactive: {
      backgroundColor: 'transparent',
      color: '#6b7280'
    },
    progressCircle: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '2rem'
    },
    progressList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    progressItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    progressItemLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    },
    progressDot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%'
    },
    progressName: {
      fontSize: '0.875rem',
      color: '#4b5563'
    },
    progressValue: {
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#111827'
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerOverlay}></div>
        
        <div style={styles.headerContent}>
          {/* Navigation */}
          <nav style={styles.nav}>
            <div style={styles.navLeft}>
              <div style={styles.logo}>
                <div style={styles.logoInner}></div>
              </div>
              <div style={styles.navItems}>
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveNav(item)}
                    style={{
                      ...styles.navButton,
                      ...(activeNav === item ? styles.navButtonActive : styles.navButtonInactive)
                    }}
                    onMouseEnter={(e) => e.target.style.color = 'white'}
                    onMouseLeave={(e) => e.target.style.color = activeNav === item ? 'white' : '#d8b4fe'}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div style={styles.navRight}>
              <input
                type="text"
                placeholder="Search"
                style={styles.searchInput}
              />
              <button style={styles.bellButton}>
                <Bell size={20} color="white" />
                <span style={styles.bellDot}></span>
              </button>
              <div style={styles.avatar}></div>
            </div>
          </nav>

          {/* Welcome Section */}
          <div style={styles.welcome}>
            <h1 style={styles.welcomeTitle}>Hello, Suhaas 👋</h1>
            <p style={styles.welcomeSubtitle}>Welcome onboard, great to see you there</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        <div style={{...styles.grid, display: 'grid', gridTemplateColumns: window.innerWidth >= 1024 ? '2fr 1fr' : '1fr'}}>
          {/* Overview Section */}
          <div>
            <div style={styles.card}>
              <div style={styles.cardHeader}>
                <h2 style={styles.cardTitle}>Overview</h2>
                <button style={styles.seeDetailButton}>See detail</button>
              </div>
              
              {/* Stats Cards */}
              <div style={styles.statsGrid}>
                {statsCards.map((card, index) => (
                  <div 
                    key={index} 
                    style={{
                      ...styles.statCard,
                      transform: hoveredStat === index ? 'translateY(-4px)' : 'translateY(0)',
                      boxShadow: hoveredStat === index ? '0 10px 20px rgba(0, 0, 0, 0.1)' : 'none',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={() => setHoveredStat(index)}
                    onMouseLeave={() => setHoveredStat(null)}
                  >
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                      <div>
                        <div style={{...styles.statIconWrapper, backgroundColor: card.color}}>
                          <card.icon size={20} color={card.iconColor} />
                        </div>
                        <p style={styles.statValue}>{card.value}</p>
                        <p style={styles.statLabel}>{card.title}</p>
                      </div>
                      <div style={{...styles.statTrend, color: card.trend === 'up' ? '#10b981' : '#ef4444'}}>
                        {card.trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                        <span>{card.change}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Income Chart */}
              <div>
                <div style={styles.chartHeader}>
                  <h3 style={styles.chartTitle}>Income</h3>
                  <div style={styles.chartButtons}>
                    {['All fields', 'Service', 'Product'].map((filter) => (
                      <button 
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        style={{
                          ...styles.chartButton,
                          ...(activeFilter === filter ? styles.chartButtonActive : styles.chartButtonInactive)
                        }}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>
                <div style={{marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.875rem'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <div style={{width: '12px', height: '12px', background: 'linear-gradient(180deg, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0.05) 100%)', border: '2px solid #8b5cf6', borderRadius: '2px'}}></div>
                    <span style={{color: '#6b7280'}}>Covered Period (Jan-Jun)</span>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <div style={{width: '12px', height: '12px', backgroundColor: 'white', border: '2px solid #d1d5db', borderRadius: '2px'}}></div>
                    <span style={{color: '#6b7280'}}>Remaining Period (Jul-Dec)</span>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={incomeData}>
                    <defs>
                      <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#ec4899" />
                        <stop offset="50%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                      <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.05} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" stroke="#9ca3af" style={{ fontSize: '12px' }} />
                    <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1f2937', 
                        border: 'none', 
                        borderRadius: '8px',
                        color: 'white'
                      }}
                      formatter={(value) => [`${value}`, 'Income']}
                    />
                    <defs>
                      <pattern id="stripePattern" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
                        <rect width="4" height="8" fill="#e9d5ff" />
                      </pattern>
                    </defs>
                    {/* Shaded area for covered portion */}
                    <rect 
                      x="0" 
                      y="0" 
                      width="48%" 
                      height="100%" 
                      fill="url(#areaGradient)" 
                      opacity="0.5"
                    />
                    {/* Vertical divider line */}
                    <line 
                      x1="48%" 
                      y1="0" 
                      x2="48%" 
                      y2="100%" 
                      stroke="#8b5cf6" 
                      strokeWidth="2" 
                      strokeDasharray="5,5"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="url(#colorGradient)" 
                      strokeWidth={3}
                      dot={{ fill: '#8b5cf6', r: 4 }}
                      activeDot={{ r: 8, fill: '#ec4899', stroke: '#fff', strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Work by Progress Section */}
          <div>
            <div style={styles.card}>
              <div style={styles.cardHeader}>
                <h2 style={styles.cardTitle}>Work by progress</h2>
                <button style={styles.seeDetailButton}>See detail</button>
              </div>

              {/* Circular Progress */}
              <div style={styles.progressCircle}>
                <div style={{position: 'relative', width: '192px', height: '192px'}}>
                  <svg style={{transform: 'rotate(-90deg)'}} viewBox="0 0 200 200">
                    {progressData.map((item, index) => {
                      const radius = 90 - (index * 15);
                      const circumference = 2 * Math.PI * radius;
                      const offset = circumference - (item.progress / 100) * circumference;
                      return (
                        <circle
                          key={index}
                          cx="100"
                          cy="100"
                          r={radius}
                          stroke={item.color}
                          strokeWidth="12"
                          fill="none"
                          strokeDasharray={circumference}
                          strokeDashoffset={offset}
                          strokeLinecap="round"
                        />
                      );
                    })}
                    <circle cx="100" cy="100" r="30" fill="white" />
                  </svg>
                </div>
              </div>

              {/* Progress List */}
              <div style={styles.progressList}>
                {progressData.map((item, index) => (
                  <div key={index} style={styles.progressItem}>
                    <div style={styles.progressItemLeft}>
                      <div style={{...styles.progressDot, backgroundColor: item.color}}></div>
                      <span style={styles.progressName}>{item.name}</span>
                    </div>
                    <span style={styles.progressValue}>{item.progress}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
