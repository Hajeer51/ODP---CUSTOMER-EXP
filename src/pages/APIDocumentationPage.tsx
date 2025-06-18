import React from 'react';
import Navbar from '../components/Navbar.tsx';
import Sidebar from '../components/Sidebar.tsx';

const APIDocumentationPage = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar />
        <main className="main-content" style={{ padding: '40px', width: '100%' }}>
          <div style={{
            width: '100%',
            background: 'linear-gradient(90deg, rgb(12, 129, 69) 0%, rgb(22, 155, 166) 100%)',
            borderRadius: '12px',
            padding: '24px 32px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            color: '#fff',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px'
          }}>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 700, margin: 0, color: '#fff' }}>API Configuration</h1>
          </div>
          <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001', padding: 32, minHeight: 300 }}>
            <h2 style={{ color: '#0c8145', fontWeight: 600 }}>Welcome to the API Configuration Page</h2>
            <p style={{ color: '#333', fontSize: 18, marginTop: 16 }}>Here you can manage your API keys, view documentation, and configure integrations.</p>
            {/* Add your API configuration content here */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default APIDocumentationPage; 