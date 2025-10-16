import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, Eye, Target, Bell, Search } from 'lucide-react';

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
      title: 'Total income',
      value: '$23,602',
      change: '3%',
      trend: 'up',
      icon: DollarSign,
    },
    {
      title: 'Website visitors',
      value: '7,517',
      change: '2%',
      trend: 'up',
      icon: Eye,
    },
    {
      title: 'Total Outcome',
      value: '$5,319',
      change: '5%',
      trend: 'up',
      icon: Target,
    }
  ];

  const progressData = [
    { name: 'Sales analytics dashboard', progress: 40, color: '#6366f1' },
    { name: 'Travel landing page', progress: 35, color: '#a855f7' },
    { name: 'Saas brand guideline', progress: 70, color: '#ec4899' },
    { name: 'Point of sales mobile app', progress: 85, color: '#9ca3af' }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f5f5f7',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    },
    header: {
      background: 'linear-gradient(135deg, #2d1b4e 0%, #3d2463 50%, #2d1b4e 100%)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      paddingBottom: '3rem'
    },
    headerOverlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(135deg, rgba(61, 36, 99, 0.6) 0%, transparent 100%)',
      clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 100%)'
    },
    headerContent: {
      position: 'relative',
      zIndex: 10,
      padding: '1.5rem 2.5rem'
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '3.5rem'
    },
    navLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '3rem'
    },
    logo: {
      width: '42px',
      height: '42px',
      background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    },
    logoInner: {
      width: '20px',
      height: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.35)',
      borderRadius: '3px',
      transform: 'rotate(45deg)'
    },
    navItems: {
      display: 'flex',
      gap: '0.5rem'
    },
    navButton: {
      padding: '0.5rem 1.25rem',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s',
      fontSize: '0.95rem',
      fontWeight: '400'
    },
    navButtonActive: {
      backgroundColor: 'transparent',
      color: 'white',
      fontWeight: '500'
    },
    navButtonInactive: {
      backgroundColor: 'transparent',
      color: 'rgba(255, 255, 255, 0.5)'
    },
    navRight: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    },
    searchWrapper: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    },
    searchIcon: {
      position: 'absolute',
      left: '12px',
      pointerEvents: 'none'
    },
    searchInput: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      border: 'none',
      padding: '0.6rem 1rem 0.6rem 2.5rem',
      borderRadius: '8px',
      width: '200px',
      outline: 'none',
      fontSize: '0.9rem'
    },
    bellButton: {
      position: 'relative',
      padding: '0.5rem',
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '8px'
    },
    bellDot: {
      position: 'absolute',
      top: '6px',
      right: '6px',
      width: '7px',
      height: '7px',
      backgroundColor: '#ef4444',
      borderRadius: '50%'
    },
    avatar: {
      width: '38px',
      height: '38px',
      background: 'linear-gradient(135deg, #ec4899 0%, #a855f7 100%)',
      borderRadius: '50%',
      border: '2px solid rgba(255, 255, 255, 0.2)'
    },
    welcome: {
      paddingBottom: '0'
    },
    welcomeTitle: {
      fontSize: '2rem',
      fontWeight: '600',
      marginBottom: '0.5rem',
      letterSpacing: '-0.02em'
    },
    welcomeSubtitle: {
      color: 'rgba(255, 255, 255, 0.6)',
      fontSize: '0.95rem'
    },
    main: {
      padding: '0 2.5rem',
      marginTop: '-2.5rem',
      position: 'relative',
      zIndex: 20
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '16px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      padding: '1.75rem',
      marginBottom: '1.5rem'
    },
    cardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1.75rem'
    },
    cardTitle: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#1a1a1a'
    },
    seeDetailButton: {
      color: '#8b5cf6',
      fontSize: '0.85rem',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      textDecoration: 'none',
      fontWeight: '400'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1.25rem',
      marginBottom: '2rem'
    },
    statCard: {
      padding: '1.25rem',
      borderRadius: '12px',
      backgroundColor: '#fafafa',
      border: '1px solid #f0f0f0'
    },
    statHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '0.75rem'
    },
    statIconWrapper: {
      width: '44px',
      height: '44px',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '0.75rem'
    },
    statValue: {
      fontSize: '1.75rem',
      fontWeight: '700',
      color: '#1a1a1a',
      marginBottom: '0.25rem',
      letterSpacing: '-0.02em'
    },
    statLabel: {
      fontSize: '0.85rem',
      color: '#737373',
      fontWeight: '400'
    },
    statBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.25rem',
      padding: '0.25rem 0.5rem',
      borderRadius: '6px',
      fontSize: '0.8rem',
      fontWeight: '500'
    },
    chartHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1.5rem'
    },
    chartTitle: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#1a1a1a'
    },
    chartButtons: {
      display: 'flex',
      gap: '0.5rem'
    },
    chartButton: {
      padding: '0.4rem 1rem',
      borderRadius: '20px',
      fontSize: '0.85rem',
      border: 'none',
      cursor: 'pointer',
      fontWeight: '400',
      transition: 'all 0.2s'
    },
    chartButtonActive: {
      backgroundColor: '#f3e8ff',
      color: '#8b5cf6'
    },
    chartButtonInactive: {
      backgroundColor: 'transparent',
      color: '#999'
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
      width: '10px',
      height: '10px',
      borderRadius: '50%'
    },
    progressName: {
      fontSize: '0.875rem',
      color: '#525252',
      fontWeight: '400'
    },
    progressValue: {
      fontSize: '0.875rem',
      fontWeight: '600',
      color: '#1a1a1a'
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
                    onMouseLeave={(e) => e.target.style.color = activeNav === item ? 'white' : 'rgba(255, 255, 255, 0.5)'}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div style={styles.navRight}>
              <div style={styles.searchWrapper}>
                <Search size={16} color="rgba(255, 255, 255, 0.6)" style={styles.searchIcon} />
                <input
                  type="text"
                  placeholder="Search"
                  style={styles.searchInput}
                />
              </div>
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
        <div style={{display: 'grid', gridTemplateColumns: window.innerWidth >= 1024 ? '2fr 1fr' : '1fr', gap: '1.5rem'}}>
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
                      transform: hoveredStat === index ? 'translateY(-2px)' : 'translateY(0)',
                      boxShadow: hoveredStat === index ? '0 4px 12px rgba(0, 0, 0, 0.08)' : 'none',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={() => setHoveredStat(index)}
                    onMouseLeave={() => setHoveredStat(null)}
                  >
                    <div style={styles.statHeader}>
                      <div style={{
                        ...styles.statBadge, 
                        backgroundColor: card.trend === 'up' ? '#dcfce7' : '#fee2e2',
                        color: card.trend === 'up' ? '#16a34a' : '#dc2626'
                      }}>
                        {card.trend === 'up' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                        <span>{card.change}</span>
                      </div>
                    </div>
                    <div style={{
                      ...styles.statIconWrapper, 
                      backgroundColor: index === 0 ? '#f3e8ff' : index === 1 ? '#fce7f3' : '#f3e8ff'
                    }}>
                      <card.icon size={20} color={index === 0 ? '#9333ea' : index === 1 ? '#db2777' : '#9333ea'} />
                    </div>
                    <p style={styles.statValue}>{card.value}</p>
                    <p style={styles.statLabel}>{card.title}</p>
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
                
                <ResponsiveContainer width="100%" height={280}>
                  <AreaChart data={incomeData}>
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
                <div style={{position: 'relative', width: '200px', height: '200px'}}>
                  <svg style={{transform: 'rotate(-90deg)'}} viewBox="0 0 200 200">
                    {progressData.map((item, index) => {
                      const radius = 88 - (index * 16);
                      const circumference = 2 * Math.PI * radius;
                      const offset = circumference - (item.progress / 100) * circumference;
                      return (
                        <circle
                          key={index}
                          cx="100"
                          cy="100"
                          r={radius}
                          stroke={item.color}
                          strokeWidth="10"
                          fill="none"
                          strokeDasharray={circumference}
                          strokeDashoffset={offset}
                          strokeLinecap="round"
                          opacity={0.9}
                        />
                      );
                    })}
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