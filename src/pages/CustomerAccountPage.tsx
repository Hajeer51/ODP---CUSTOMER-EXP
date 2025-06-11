import React from 'react';
import Navbar from '../components/Navbar.tsx';
import Sidebar from '../components/Sidebar.tsx';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const productTimelineData = [
  { name: 'Jan', value: 10 },
  { name: 'Feb', value: 20 },
  { name: 'Mar', value: 15 },
  { name: 'Apr', value: 25 },
  { name: 'May', value: 22 },
  { name: 'Jun', value: 30 },
  { name: 'Jul', value: 28 },
];

const usageOverviewData = [
  { name: 'Service A', value: 80 },
  { name: 'Service B', value: 60 },
  { name: 'Service C', value: 40 },
  { name: 'Service D', value: 30 },
];

const CustomerAccountPage = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar />
        <main className="main-content" style={{ padding: '20px' }}>
          {/* Top Section: Customer Header */}
          <div style={{ background: 'linear-gradient(90deg, #0c8145 0%, #169ba6 100%)', padding: '32px 40px 24px 40px', display: 'flex', alignItems: 'center', gap: 18, borderRadius: 24, boxShadow: '0 8px 32px #0002' }}>
            <div>
              <h1 style={{ fontSize: 34, fontWeight: 800, color: '#fff', margin: 0, letterSpacing: 1 }}>OBC - Services and Products</h1>
              <div style={{ color: '#e0e0e0', fontSize: 17, fontWeight: 400, marginTop: 4 }}>Account is: 12345678 | Last Billing Date: 2023-03-01</div>
            </div>
            <div style={{ flex: 1 }} />
            <button style={{ background: 'linear-gradient(90deg, #169ba6 0%, #0c8145 100%)', color: '#fff', border: 'none', borderRadius: 16, padding: '12px 32px', fontSize: 18, fontWeight: 700, cursor: 'pointer', boxShadow: '0 2px 8px #169ba633' }}>Manage Services</button>
          </div>

          {/* Stats Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '20px', marginTop: '40px' }}>
            {/* Balance Card */}
            <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '10px' }}>Balance</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#e74c3c' }}>-10,500 OMR</div>
            </div>

            {/* Account Age Card */}
            <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '10px' }}>Account Age</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>6 y 8 mo</div>
            </div>

            {/* Days Since Last Billing Card */}
            <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '10px' }}>Days Since</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>Last Billing</div>
            </div>

            {/* Currency Card */}
            <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '10px' }}>Currency</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>OMR</div>
            </div>
          </div>

          {/* Charts Section */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '20px' }}>
            {/* Product Timeline Chart */}
            <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#333', marginBottom: '15px' }}>Product Timeline</h3>
              <ResponsiveContainer width="100%" height={150}>
                <LineChart data={productTimelineData}>
                  <XAxis dataKey="name" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#00a09d" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Usage Overview Chart */}
            <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#333', marginBottom: '15px' }}>Usage Overview</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {usageOverviewData.map((data, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '0.9rem', color: '#666', width: '80px' }}>{data.name}</span>
                    <div style={{ flex: 1, height: '10px', backgroundColor: '#eee', borderRadius: '5px' }}>
                      <div style={{ width: `${data.value}%`, height: '100%', backgroundColor: '#00a09d', borderRadius: '5px' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div style={{ display: 'flex', borderBottom: '2px solid #eee', marginBottom: '20px' }}>
            <button style={{ padding: '10px 20px', border: 'none', borderBottom: '2px solid #00a09d', backgroundColor: 'transparent', cursor: 'pointer', fontSize: '1.1rem', fontWeight: 'bold', color: '#00a09d' }}>Billing</button>
            <button style={{ padding: '10px 20px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', fontSize: '1.1rem', fontWeight: 'bold', color: '#666' }}>Products</button>
            <button style={{ padding: '10px 20px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', fontSize: '1.1rem', fontWeight: 'bold', color: '#666' }}>Activity</button>
          </div>

          {/* Table Section */}
          <div style={{ border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#f8f8f8' }}>
                  <th style={{ padding: '15px', textAlign: 'left', borderBottom: '1px solid #eee' }}>Date</th>
                  <th style={{ padding: '15px', textAlign: 'left', borderBottom: '1px solid #eee' }}>Invoice #</th>
                  <th style={{ padding: '15px', textAlign: 'left', borderBottom: '1px solid #eee' }}>Amount</th>
                  <th style={{ padding: '15px', textAlign: 'left', borderBottom: '1px solid #eee' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {/* Example Table Row (can be dynamically populated later) */}
                <tr>
                  <td style={{ padding: '15px', borderBottom: '1px solid #eee' }}>2023-01-15</td>
                  <td style={{ padding: '15px', borderBottom: '1px solid #eee' }}>INV-001</td>
                  <td style={{ padding: '15px', borderBottom: '1px solid #eee' }}>OMR 1,200</td>
                  <td style={{ padding: '15px', borderBottom: '1px solid #eee' }}><span style={{ backgroundColor: '#d4edda', color: '#155724', padding: '5px 10px', borderRadius: '15px', fontSize: '0.8rem', fontWeight: 'bold' }}>Paid</span></td>
                </tr>
                <tr>
                  <td style={{ padding: '15px', borderBottom: '1px solid #eee' }}>2023-02-10</td>
                  <td style={{ padding: '15px', borderBottom: '1px solid #eee' }}>INV-002</td>
                  <td style={{ padding: '15px', borderBottom: '1px solid #eee' }}>OMR 800</td>
                  <td style={{ padding: '15px', borderBottom: '1px solid #eee' }}><span style={{ backgroundColor: '#ffeeba', color: '#856404', padding: '5px 10px', borderRadius: '15px', fontSize: '0.8rem', fontWeight: 'bold' }}>Pending</span></td>
                </tr>
                <tr>
                  <td style={{ padding: '15px', borderBottom: '1px solid #eee' }}>2023-03-05</td>
                  <td style={{ padding: '15px', borderBottom: '1px solid #eee' }}>INV-003</td>
                  <td style={{ padding: '15px', borderBottom: '1px solid #eee' }}>OMR 2,500</td>
                  <td style={{ padding: '15px', borderBottom: '1px solid #eee' }}><span style={{ backgroundColor: '#f8d7da', color: '#721c24', padding: '5px 10px', borderRadius: '15px', fontSize: '0.8rem', fontWeight: 'bold' }}>Overdue</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CustomerAccountPage; 