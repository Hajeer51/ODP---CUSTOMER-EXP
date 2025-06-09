import React from 'react';
import Navbar from '../components/Navbar.tsx'; // Explicitly use .tsx extension
import Sidebar from '../components/Sidebar.tsx'; // Explicitly use .tsx extension
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'; // Import Recharts components and XAxis, YAxis, Tooltip
import AccessSourceChart from '../components/AccessSourceChart.tsx'; // Import the new ECharts component
import { Link } from 'react-router-dom'; // Import Link

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
            <div className="account-details-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '30px', borderRadius: '15px', border: 'none', boxShadow: '0 15px 50px rgba(0, 0, 0, 0.08)', backgroundColor: '#e8f5e9' }}> {/* Light green background */}
               <AccessSourceChart /> {/* Replaced Health Score chart with ECharts component */}
            </div>

            {/* Customer Growth Chart */}
            <div className="account-details-card" style={{ padding: '30px', borderRadius: '15px', border: 'none', boxShadow: '0 15px 50px rgba(0, 0, 0, 0.08)', backgroundColor: '#e8f5e9', display: 'flex', flexDirection: 'column' }}> {/* Light green background */}
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={customerGrowthData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="name" stroke="#388e3c" /> {/* Styled XAxis with medium green */}
                  <YAxis stroke="#388e3c" domain={[800, 'auto']} /> {/* Styled YAxis with medium green, starting from 800 */}
                  <Tooltip />
                  <Line type="monotone" dataKey="customers" stroke="#1B5E20" strokeWidth={3} dot={{ stroke: '#1B5E20', strokeWidth: 2, r: 5 }} activeDot={{ r: 7, stroke: '#1B5E20', strokeWidth: 2 }} /> {/* Styled Line and dots with dark green color */}
                </LineChart>
              </ResponsiveContainer>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1b5e20' , marginTop: '20px', textAlign: 'center' }}>Customer Growth</h3> {/* Moved title below chart, adjusted margin and centered */}
            </div>

            {/* Total Customers Stat */}
            <div className="account-details-card" style={{ padding: '30px', borderRadius: '15px', border: 'none', boxShadow: '0 15px 50px rgba(0, 0, 0, 0.08)', backgroundColor: '#e8f5e9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}> {/* Light green background */}
               <div style={{ fontSize: '4rem', fontWeight: 'bold', color: '#1b5e20' }}>1,508</div> {/* Larger font with dark green color */}
               <div style={{ fontSize: '1.2rem', color: '#388e3c', marginBottom: '10px' }}>Total Customers</div> {/* Adjusted color and margin to a medium green */}
               <div style={{ fontSize: '1.1rem', color: '#1b5e20', fontWeight: '700' }}>+3.2% vs last month</div> {/* Dark green color and bolder font for percentage */}
            </div>

          </div>

          {/* Contact Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>

            {/* Mock Data for Contacts */}
            {[ /* Add your mock data here */
              { name: 'YourCompany, Joel Willis', title: 'Bayomer, United States', email: 'jest-willo@example.com', phone: '123-456-7890', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
              { name: 'Azure Interior, Coliten Diaz', title: 'Business Execu Ties Allura', email: 'colleen.als@example.com', phone: '987-654-3210', avatar: null },
              { name: 'Ready Mat, Billy Fox', title: 'Redrctor TSupervisor at Ready Mat', email: 'ryourname@example.com', phone: '555-123-4567', avatar: null },
              { name: 'Oman Oil Company', title: 'Muscat, Oman', email: 'info@oman-oil.com', phone: '111-222-3333', avatar: null },
              { name: 'Omantel', title: 'Muscat, Oman', email: 'contact@omantel.om', phone: '444-555-6666', avatar: null },
              { name: 'National Bank of Oman', title: 'Muscat, Oman', email: 'contact@nbo.om', phone: '777-888-9999', avatar: null },
               { name: 'Beth Evans', title: 'United States', email: 'bothovarie@example.com', phone: '123-123-1234', avatar: null },
               { name: 'Your logo', title: 'Vendor / Office Supplies', email: 'yourname@yourcompany.com', phone: '234-234-2345', avatar: null },
               { name: 'My Company', title: 'Sair Francsso, Unities', email: 'yourname@yourcompany.com', phone: '345-345-3456', avatar: null },


            ].map((contact, index) => (
              <Link to="/crm" key={index} style={{ textDecoration: 'none', color: 'inherit' }}> {/* Wrap card with Link and remove underline */}
                <div style={{ background: '#ffffff', borderRadius: '10px', boxShadow: '0 6px 20px rgba(0,0,0,0.05)', padding: '20px', display: 'flex', alignItems: 'center', gap: '15px', border: '1px solid #0c8145' }}> {/* White background and green border */}
                   {/* Avatar */}
                   <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#eeeeee', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                      <span style={{ fontSize: '1.6rem', fontWeight: '500', color: '#616161' }}>{contact.name.charAt(0)}</span> {/* Adjusted font weight and color for initial text */}
                   </div>
                   {/* Details */}
                   <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: '600', color: '#000000' }}>{contact.name}</div> {/* Black text for name */}
                      <div style={{ fontSize: '0.95rem', color: '#000000', display: 'flex', alignItems: 'center', gap: '5px' }}><span style={{ fontSize: '1.1rem', color: '#000000' }}>📍</span>{contact.title}</div> {/* Black text for title, added location icon */}
                      {contact.email && <div style={{ fontSize: '0.95rem', color: '#000000', display: 'flex', alignItems: 'center', gap: '5px' }}><span style={{ fontSize: '1.1rem', color: '#000000' }}>📧</span>{contact.email}</div>} {/* Black text for email, added email icon */}
                      {contact.phone && <div style={{ fontSize: '0.95rem', color: '#000000', display: 'flex', alignItems: 'center', gap: '5px' }}><span style={{ fontSize: '1.1rem', color: '#000000' }}>📞</span>{contact.phone}</div>} {/* Black text for phone, added phone icon and number */}
                   </div>
                   {/* Icons - Placeholder */}
                   <div style={{ display: 'flex', gap: '10px' }}>
                       {/* Add your icons here */}
                   </div>
                </div>
              </Link>
            ))}

          </div>

        </main>
      </div>
    </div>
  );
};

export default AccountDetailsPage; 