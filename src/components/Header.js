import React, { useState } from 'react';
import { Bell, Search } from 'lucide-react';
import headerStyles from '../styles/headerStyles';

const Header = ({ navItems }) => {
  const [activeNav, setActiveNav] = useState('Home');

  return (
    <header style={headerStyles.header}>
      <div style={headerStyles.headerOverlay}></div>

      <div style={headerStyles.headerContent}>
        <nav style={headerStyles.nav}>
          <div style={headerStyles.logo}>
            <div style={headerStyles.logoInner}></div>
          </div>
          <div style={headerStyles.navItems}>
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveNav(item)}
                style={{
                  ...headerStyles.navButton,
                  ...(activeNav === item ? headerStyles.navButtonActive : headerStyles.navButtonInactive)
                }}
                onMouseEnter={(event) => {
                  event.target.style.color = 'white';
                }}
                onMouseLeave={(event) => {
                  event.target.style.color = activeNav === item ? 'white' : 'rgba(255, 255, 255, 0.5)';
                }}
              >
                {item}
              </button>
            ))}
          </div>
          <div style={headerStyles.navRight}>
            <div style={headerStyles.searchWrapper}>
              <Search size={16} color="rgba(255, 255, 255, 0.6)" style={headerStyles.searchIcon} />
              <input type="text" placeholder="Search" style={headerStyles.searchInput} />
            </div>
            <button style={headerStyles.bellButton}>
              <Bell size={20} color="white" />
              <span style={headerStyles.bellDot}></span>
            </button>
            <div style={headerStyles.avatar}></div>
          </div>
        </nav>

        <div style={headerStyles.welcome}>
          <h1 style={headerStyles.welcomeTitle}>Hello, Suhaas 👋</h1>
          <p style={headerStyles.welcomeSubtitle}>Welcome onboard, great to see you there</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
