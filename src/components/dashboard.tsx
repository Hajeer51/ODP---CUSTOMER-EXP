import React from 'react';
import Navbar from './Navbar.tsx';
import Sidebar from './Sidebar.tsx';


const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <Navbar />
            <div className="dashboard-content">
                <Sidebar />
                <main className="main-content">
                    {/* Main content area */}
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
