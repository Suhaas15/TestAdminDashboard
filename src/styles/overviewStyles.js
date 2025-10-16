const overviewStyles = {
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
  statBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.25rem',
    padding: '0.25rem 0.5rem',
    borderRadius: '6px',
    fontSize: '0.8rem',
    fontWeight: '500'
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
  }
};

export default overviewStyles;
