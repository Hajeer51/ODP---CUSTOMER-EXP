import React from 'react';
import Navbar from '../components/Navbar.tsx'; // Explicitly use .tsx extension
import Sidebar from '../components/Sidebar.tsx'; // Explicitly use .tsx extension
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'; // Import Recharts components and XAxis, YAxis, Tooltip

// Mock data for customer growth chart
const customerGrowthData = [
  { name: 'Jan', customers: 1400 },
  { name: 'Feb', customers: 1420 },
  { name: 'Mar', customers: 1450 },
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>

            {/* Health Score */}
            <div className="account-details-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', backgroundColor: '#fff' }}> {/* Updated card styles */}
               {/* Semi-circular Gauge */}
              <div className="health-score-gauge" style={{ width: '100px', height: '60px', marginBottom: '15px' }}> {/* Adjusted margin */}
                 <svg width="100" height="60" viewBox="0 0 100 60">
                    {/* Background Semi-circle */}
                    <path
                      d="M 10 50 A 40 40 0 0 1 90 50"
                      fill="none"
                      stroke="#e0e0e0" // Lighter background stroke
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                    {/* Progress Semi-circle (78%) */}
                    <path
                      d="M 10 50 A 40 40 0 0 1 90 50"
                      fill="none"
                      stroke="#2ecc71" // Brighter green stroke
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray="125.66"
                      strokeDashoffset="27.64" /* 78% of 125.66 (half circle circumference) */
                    />
                    {/* Text Value */}
                    <text
                      x="50"
                      y="50"
                      textAnchor="middle"
                      fontSize="24" // Larger font size
                      fontWeight="bold"
                      fill="#333" // Darker text color
                      dominantBaseline="middle"
                    >78%</text>
                  </svg>
              </div>
              <div style={{ fontSize: '1rem', fontWeight: '600', color: '#555' }}>Health Score</div> {/* Adjusted text color */}
            </div>

            {/* Customer Growth Chart */}
            <div className="account-details-card" style={{ padding: '20px', borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', backgroundColor: '#fff', display: 'flex', flexDirection: 'column' }}> {/* Updated card styles and flex column */}
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#333', marginBottom: '15px' }}>Customer Growth</h3> {/* Adjusted title style and margin */}
              <ResponsiveContainer width="100%" height={150}>
                <LineChart data={customerGrowthData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}> {/* Added margin to chart */}
                  <XAxis dataKey="name" stroke="#ccc" /> {/* Styled XAxis */}
                  <YAxis stroke="#ccc" /> {/* Styled YAxis */}
                  <Tooltip />
                  <Line type="monotone" dataKey="customers" stroke="#2ecc71" strokeWidth={2} dot={{ stroke: '#2ecc71', strokeWidth: 2, r: 4 }} activeDot={{ r: 6, stroke: '#2ecc71', strokeWidth: 2 }} /> {/* Styled Line and dots */}
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Total Customers Stat */}
            <div className="account-details-card" style={{ padding: '20px', borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', backgroundColor: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}> {/* Updated card styles */}
               <div style={{ fontSize: '2.8rem', fontWeight: 'bold', color: '#333' }}>1,508</div> {/* Larger and darker font */}
               <div style={{ fontSize: '1rem', color: '#555', marginBottom: '5px' }}>Total Customers</div> {/* Adjusted color and margin */}
               <div style={{ fontSize: '1rem', color: '#2ecc71', fontWeight: '600' }}>+3.2% vs last month</div> {/* Brighter green color */}
            </div>

          </div>

          {/* Contact Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>

            {/* Mock Data for Contacts */}
            {[ /* Add your mock data here */
              { name: 'YourCompany, Joel Willis', title: 'Bayomer, United States', email: 'jest-willo@example.com', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
              { name: 'Azure Interior, Coliten Diaz', title: 'Business Execu Ties Allura', email: 'colleen.als@example.com', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
              { name: 'Ready Mat, Billy Fox', title: 'Redrctor TSupervisor at Ready Mat', email: 'ryourname@example.com', avatar: 'https://randomuser.me/api/portraits/men/33.jpg' },
              { name: 'Oman Oil Company', title: 'Muscat, Oman', email: 'info@oman-oil.com', avatar: null },
              { name: 'Omantel', title: 'Muscat, Oman', email: 'contact@omantel.om', avatar: null },
              { name: 'National Bank of Oman', title: 'Muscat, Oman', email: 'contact@nbo.om', avatar: null },
               { name: 'Beth Evans', title: 'United States', email: 'bothovarie@example.com', avatar: null },
               { name: 'lol', title: '', email: '', avatar: null },
               { name: 'Your logo', title: 'Vendor / Office Supplies', email: 'yourname@yourcompany.com', avatar: null },
               { name: 'My Company', title: 'Sair Francsso, Unities', email: 'yourname@yourcompany.com', avatar: null },


            ].map((contact, index) => (
              <div key={index} style={{ background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', padding: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                 {/* Avatar */}
                 <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                    {contact.avatar ? (
                       <img src={contact.avatar} alt={contact.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                       <span style={{ fontSize: '1.5rem', color: '#555' }}>{contact.name.charAt(0)}</span>
                    )}
                 </div>
                 {/* Details */}
                 <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: '600' }}>{contact.name}</div>
                    <div style={{ fontSize: '0.9rem', color: '#555' }}>{contact.title}</div>
                    {contact.email && <div style={{ fontSize: '0.9rem', color: '#0077b6' }}>{contact.email}</div>}
                 </div>
                 {/* Icons - Placeholder */}
                 <div style={{ display: 'flex', gap: '10px' }}>
                     {/* Add your icons here */}
                 </div>
              </div>
            ))}

          </div>

        </main>
      </div>
    </div>
  );
};

export default AccountDetailsPage; 