import React from 'react';
import Dashboard from '../components/dashboard.tsx';
import '../styles/Dashboard.css';
import '../styles/Sidebar.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <Dashboard />
    </div>
  );
};

export default DashboardPage;