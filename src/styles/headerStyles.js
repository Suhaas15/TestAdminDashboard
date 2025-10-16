const headerStyles = {
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
    display: 'grid',
    gridTemplateColumns: 'auto 1fr auto',
    alignItems: 'center',
    marginBottom: '3.5rem',
    columnGap: '2rem'
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
    justifyContent: 'center',
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
  }
};

export default headerStyles;
