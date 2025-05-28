import React from 'react';
import Navbar from './Navbar.tsx';
import Sidebar from './Sidebar.tsx';

const Dashboard = ({ children }) => {
    return (
        <div className="dashboard-container">
            <Navbar />
            <div className="dashboard-content">
                <Sidebar />
                <main className="main-content">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
