import React from 'react';
import Navbar from '../components/Navbar.tsx';
import Sidebar from '../components/Sidebar.tsx';

const InfrastructureDetails = () => (
  <div className="dashboard-container">
    <Navbar />
    <div className="dashboard-content">
      <Sidebar />
      <main className="main-content">
        <div style={{ padding: 32 }}>
          <h2>Infrastructure Details</h2>
          <p>This is the Infrastructure Details page.</p>
        </div>
      </main>
    </div>
  </div>
);

export default InfrastructureDetails; 