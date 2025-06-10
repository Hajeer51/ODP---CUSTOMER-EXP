import React from 'react';
import Navbar from '../components/Navbar.tsx'; // Explicitly use .tsx extension
import Sidebar from '../components/Sidebar.tsx'; // Explicitly use .tsx extension
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'; // Import Recharts components and XAxis, YAxis, Tooltip
import AccessSourceChart from '../components/AccessSourceChart.tsx'; // Import the new ECharts component
import { Link } from 'react-router-dom'; // Import Link
import ContactCardList from '../components/ContactCardList.tsx'; // Import the new ContactCardList component

// Mock data for customer growth chart
const customerGrowthData = [
  { name: 'Jan', customers: 980 },
  { name: 'Feb', customers: 1420 },
  { name: 'Mar', customers: 1200 },
  { name: 'Apr', customers: 1500 },
  { name: 'May', customers: 1550 },
];

const AccountDetailsPage = () => {
  return (
    <div className="dashboard-container"> {/* Use dashboard container class */}
      <Navbar />
      <div className="dashboard-content"> {/* Use dashboard content class */}
        <Sidebar />
        <main className="main-content">
          <h1>Account Details</h1> {/* Main Page Title */}

          {/* Top Section: Stats and Charts */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px', marginBottom: '40px' }}> {/* Increased gap and bottom margin */}

            {/* Access Source Chart */}
            <div className="account-details-card hover-effect" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '30px', borderRadius: '15px', border: 'none', boxShadow: '0 6px 20px rgba(0,0,0,0.05)', backgroundColor: '#ffffff' }}> {/* White background and subtle shadow */}
               <AccessSourceChart /> {/* Replaced Health Score chart with ECharts component */}
               <div style={{ fontSize: '1.2rem', fontWeight: '700', color: '#333', marginTop: '10px' }}>Health Score</div>
            </div>

            {/* Customer Growth Chart */}
            <div className="account-details-card hover-effect" style={{ padding: '30px', borderRadius: '15px', border: 'none', boxShadow: '0 6px 20px rgba(0,0,0,0.05)', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center' }}> {/* White background and subtle shadow */}
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={customerGrowthData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="name" stroke="#00a09d" /> {/* Styled XAxis with teal */}
                  <YAxis stroke="#00a09d" domain={[800, 'auto']} /> {/* Styled YAxis with teal, starting from 800 */}
                  <Tooltip />
                  <Line type="monotone" dataKey="customers" stroke="#4CAF50" strokeWidth={3} dot={{ stroke: '#4CAF50', strokeWidth: 2, r: 5 }} activeDot={{ r: 7, stroke: '#4CAF50', strokeWidth: 2 }} /> {/* Styled Line and dots with darker teal/green color */}
                </LineChart>
              </ResponsiveContainer>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#333' , marginTop: '20px', textAlign: 'center' }}>Customer Growth</h3> {/* Dark grey text for title */}
            </div>

            {/* Total Customers Stat */}
            <div className="account-details-card hover-effect" style={{ padding: '30px', borderRadius: '15px', border: 'none', boxShadow: '0 6px 20px rgba(0,0,0,0.05)', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}> {/* White background and subtle shadow */}
               <div className="total-customers-number">1,508</div> {/* Teal color for number */}
               <div style={{ fontSize: '1.2rem', color: '#666', marginBottom: '10px' }}>Total Customers</div> {/* Light grey text */}
               <div style={{ fontSize: '1.1rem', color: '#00a09d', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '5px' }}>
                 <span style={{ fontSize: '1.2rem' }}>▲</span>+3.2% vs last month
               </div> {/* Teal color and bolder font for percentage */}
            </div>

          </div>

          {/* Contact Cards Grid */}
          <ContactCardList />

        </main>
      </div>
    </div>
  );
};

export default AccountDetailsPage; 