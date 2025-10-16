import { DollarSign, Eye, Target } from 'lucide-react';

export const incomeData = [
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
  { month: 'Dec', value: 22800 }
];

export const navItems = ['Home', 'Employee', 'Timeline', 'Report', 'Task'];

export const statsCards = [
  {
    title: 'Total income',
    value: '$23,602',
    change: '3%',
    trend: 'up',
    icon: DollarSign
  },
  {
    title: 'Website visitors',
    value: '7,517',
    change: '2%',
    trend: 'up',
    icon: Eye
  },
  {
    title: 'Total Outcome',
    value: '$5,319',
    change: '5%',
    trend: 'up',
    icon: Target
  }
];

export const progressData = [
  { name: 'Sales analytics dashboard', progress: 40, color: '#6366f1' },
  { name: 'Travel landing page', progress: 35, color: '#a855f7' },
  { name: 'Saas brand guideline', progress: 70, color: '#ec4899' },
  { name: 'Point of sales mobile app', progress: 85, color: '#9ca3af' }
];
