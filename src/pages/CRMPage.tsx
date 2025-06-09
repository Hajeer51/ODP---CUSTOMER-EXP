import React from 'react';
import Navbar from '../components/Navbar.tsx';
import Sidebar from '../components/Sidebar.tsx';

const CRMPage = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar />
        <main className="main-content">
          <h1>CRM Page</h1>
          {/* Content specific to CRM page goes here */}
          <p>Welcome to the CRM page for a specific customer.</p>
        </main>
      </div>
    </div>
  );
};

export default CRMPage; 