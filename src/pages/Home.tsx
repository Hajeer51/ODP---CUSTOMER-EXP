import React from 'react';
import Navbar from '../components/Navbar.tsx';
import Sidebar from '../components/Sidebar.tsx';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import AccessSourceChart from '../components/AccessSourceChart.tsx';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import ComputerIcon from '@mui/icons-material/Computer';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import HotelIcon from '@mui/icons-material/Hotel';

const customerGrowthData = [
  { name: 'Jan', customers: 980 },
  { name: 'Feb', customers: 1420 },
  { name: 'Mar', customers: 1200 },
  { name: 'Apr', customers: 1500 },
  { name: 'May', customers: 1550 },
];

const sectors = [
  { icon: <AccountBalanceIcon style={{ fontSize: 56 }} />, label: 'Government' },
  { icon: <LocalGasStationIcon style={{ fontSize: 56 }} />, label: 'Oil & Gas' },
  { icon: <NetworkCheckIcon style={{ fontSize: 56 }} />, label: 'Telecom' },
  { icon: <ComputerIcon style={{ fontSize: 56 }} />, label: 'IT & Data Centers' },
  { icon: <AccountBalanceWalletIcon style={{ fontSize: 56 }} />, label: 'Banking & Finance' },
  { icon: <HotelIcon style={{ fontSize: 56 }} />, label: 'Hospitality & Tourism' },
];

const Home: React.FC = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar />
        <main className="main-content">
          <div style={{ padding: '40px 0', minHeight: '100vh', background: '#f8fafc' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
              {/* 3 Cards Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px', marginBottom: '40px' }}>
                {/* Health Score Card */}
                <div className="account-details-card hover-effect" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '30px', borderRadius: '15px', border: 'none', boxShadow: '0 6px 20px rgba(0,0,0,0.05)', backgroundColor: '#ffffff' }}>
                  <AccessSourceChart healthScore={92} />
                  <div style={{ fontSize: '1.2rem', fontWeight: '700', color: '#333', marginTop: '10px' }}>Health Score</div>
                </div>
                {/* Customer Growth Card */}
                <div className="account-details-card hover-effect" style={{ padding: '30px', borderRadius: '15px', border: 'none', boxShadow: '0 6px 20px rgba(0,0,0,0.05)', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={customerGrowthData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <XAxis dataKey="name" stroke="#00a09d" />
                      <YAxis stroke="#00a09d" domain={[800, 'auto']} />
                      <Tooltip />
                      <Line type="monotone" dataKey="customers" stroke="#4CAF50" strokeWidth={3} dot={{ stroke: '#4CAF50', strokeWidth: 2, r: 5 }} activeDot={{ r: 7, stroke: '#4CAF50', strokeWidth: 2 }} />
                    </LineChart>
                  </ResponsiveContainer>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#333' , marginTop: '20px', textAlign: 'center' }}>Customer Growth</h3>
                </div>
                {/* Total Customers Card */}
                <div className="account-details-card hover-effect" style={{ padding: '30px', borderRadius: '15px', border: 'none', boxShadow: '0 6px 20px rgba(0,0,0,0.05)', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <div className="total-customers-number" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#169ba6' }}>1,508</div>
                  <div style={{ fontSize: '1.2rem', color: '#666', marginBottom: '10px' }}>Total Customers</div>
                  <div style={{ fontSize: '1.1rem', color: '#00a09d', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span style={{ fontSize: '1.2rem' }}>▲</span>+3.2% vs last month
                  </div>
                </div>
              </div>
              {/* Sectors Grid */}
              <h1 style={{ fontWeight: 800, fontSize: '2.2rem', marginBottom: 32, color: '#169ba6', letterSpacing: 1 }}>Sectors</h1>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '32px',
                  width: '100%',
                  justifyItems: 'center',
                }}
              >
                {sectors.map((sector, idx) => (
                  <div
                    key={sector.label}
                    style={{
                      background: idx % 2 === 0 ? 'linear-gradient(135deg, #3aa6a6 0%, #3a8d5c 100%)' : 'linear-gradient(135deg, #169ba6 0%, #3aa6a6 100%)',
                      borderRadius: 32,
                      width: 260,
                      height: 140,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 2px 16px rgba(25, 118, 210, 0.10)',
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: '1.2rem',
                      cursor: 'pointer',
                      transition: 'transform 0.18s, box-shadow 0.18s',
                      padding: 0,
                      margin: 0,
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.05)';
                      (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(25, 118, 210, 0.18)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
                      (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 16px rgba(25, 118, 210, 0.10)';
                    }}
                  >
                    <span style={{ fontSize: 56, marginBottom: 8 }}>{sector.icon}</span>
                    <span style={{ fontSize: 22, fontWeight: 800 }}>{sector.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home; 