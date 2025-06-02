import React, { useState } from 'react';
import Navbar from '../components/Navbar.tsx';
import Sidebar from '../components/Sidebar.tsx';
import '../styles/Dashboard.css';
import { useNavigate } from 'react-router-dom';

const BRAND_GREEN = '#0c8145';
const BRAND_TEAL = '#169ba6';
const BRAND_LIGHT_GREEN = '#86bc42';
const BRAND_GRAY = '#d6d6d6';

const usersData = [
  { name: 'Ahmed Ali', email: 'ahmed.ali@omandatapark.com', phone: '9123-4567', signedUp: '2024-06-01' },
  { name: 'Sara Mohammed', email: 'sara.mohammed@omandatapark.com', phone: '9234-5678', signedUp: '2024-06-01' },
  { name: 'Khalid Saeed', email: 'khalid.saeed@omandatapark.com', phone: '9345-6789', signedUp: '2024-06-01' },
  { name: 'Fatima Hassan', email: 'fatima.hassan@omandatapark.com', phone: '9456-7890', signedUp: '2024-06-01' },
  { name: 'Yousef Salem', email: 'yousef.salem@omandatapark.com', phone: '9567-8901', signedUp: '2024-06-01' },
  { name: 'Mona Al Lawati', email: 'mona.allawati@omandatapark.com', phone: '9678-9012', signedUp: '2024-06-01' },
  { name: 'Hassan Al Balushi', email: 'hassan.albalushi@omandatapark.com', phone: '9789-0123', signedUp: '2024-06-01' },
  { name: 'Layla Al Zadjali', email: 'layla.alzadjali@omandatapark.com', phone: '9890-1234', signedUp: '2024-06-01' },
  { name: 'Omar Al Hinai', email: 'omar.alhinai@omandatapark.com', phone: '9901-2345', signedUp: '2024-06-01' },
  { name: 'Salim Al Farsi', email: 'salim.alfarsi@omandatapark.com', phone: '9012-3456', signedUp: '2024-06-01' },
  { name: 'Aisha Al Shukaili', email: 'aisha.alshukaili@omandatapark.com', phone: '9123-4568', signedUp: '2024-06-01' },
  { name: 'Majid Al Amri', email: 'majid.alamri@omandatapark.com', phone: '9234-5679', signedUp: '2024-06-01' },
  { name: 'Rashid Al Habsi', email: 'rashid.alhabsi@omandatapark.com', phone: '9345-6790', signedUp: '2024-06-01' },
  { name: 'Samira Al Riyami', email: 'samira.alriyami@omandatapark.com', phone: '9456-7891', signedUp: '2024-06-01' },
  { name: 'Nasser Al Rawahi', email: 'nasser.alrawahi@omandatapark.com', phone: '9567-8902', signedUp: '2024-06-01' },
  { name: 'Huda Al Kindi', email: 'huda.alkindi@omandatapark.com', phone: '9678-9013', signedUp: '2024-06-01' },
  { name: 'Talal Al Busaidi', email: 'talal.albusaidi@omandatapark.com', phone: '9789-0124', signedUp: '2024-06-01' },
  { name: 'Maha Al Harrasi', email: 'maha.alharrasi@omandatapark.com', phone: '9890-1235', signedUp: '2024-06-01' },
  { name: 'Zahra Al Siyabi', email: 'zahra.alsiyabi@omandatapark.com', phone: '9901-2346', signedUp: '2024-06-01' },
  { name: 'Ali Al Shamsi', email: 'ali.alshamsi@omandatapark.com', phone: '9012-3457', signedUp: '2024-06-01' },
];

const UserManagementPage = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const users = usersData.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar />
        <main className="main-content" style={{ background: '#f4f6fb', minHeight: '100vh', padding: '32px 20px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '100%', margin: '0 auto', background: '#fff', borderRadius: 24, boxShadow: '0 8px 32px #0002', padding: 0, overflow: 'hidden' }}>
            {/* Gradient header with icon */}
            <div style={{ background: `linear-gradient(90deg, ${BRAND_GREEN} 0%, ${BRAND_TEAL} 100%)`, padding: '32px 40px 24px 40px', display: 'flex', alignItems: 'center', gap: 18 }}>
              <div>
                <h1 style={{ fontSize: 34, fontWeight: 800, color: '#fff', margin: 0, letterSpacing: 1 }}>User Management</h1>
                <div style={{ color: '#e0e0e0', fontSize: 17, fontWeight: 400, marginTop: 4 }}>Manage your organization users and their access</div>
              </div>
              <div style={{ flex: 1 }} />
              <button style={{ background: `linear-gradient(90deg, ${BRAND_TEAL} 0%, ${BRAND_GREEN} 100%)`, color: '#fff', border: 'none', borderRadius: 16, padding: '12px 32px', fontSize: 18, fontWeight: 700, cursor: 'pointer', boxShadow: `0 2px 8px ${BRAND_TEAL}33` }}>+ Add User</button>
            </div>
            {/* Action bar */}
            <div style={{ display: 'flex', gap: 16, alignItems: 'center', padding: '24px 40px 0 40px' }}>
              <button style={{ background: BRAND_LIGHT_GREEN, border: 'none', color: '#fff', fontWeight: 600, fontSize: 17, borderRadius: 10, padding: '10px 22px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, boxShadow: `0 1px 4px ${BRAND_LIGHT_GREEN}22` }}>
                <span role="img" aria-label="import">⭳</span> Import
              </button>
              <button style={{ background: BRAND_GRAY, border: 'none', color: '#333', fontWeight: 600, fontSize: 17, borderRadius: 10, padding: '10px 22px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, boxShadow: `0 1px 4px ${BRAND_GRAY}22` }}>
                <span role="img" aria-label="export">⭱</span> Export
              </button>
              <div style={{ flex: 1 }} />
              {/* Search bar with icon */}
              <div style={{ position: 'relative', width: 320 }}>
                <span style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: BRAND_TEAL, fontSize: 20 }}>🔍</span>
                <input
                  type="text"
                  placeholder="Search user..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  style={{ width: '100%', padding: '12px 16px 12px 44px', borderRadius: 12, border: `1.5px solid ${BRAND_TEAL}`, fontSize: 17, background: '#f9fafd', outline: 'none', boxShadow: `0 1px 4px ${BRAND_TEAL}11` }}
                />
              </div>
            </div>
            {/* Table */}
            <div style={{ padding: '32px 40px 40px 40px' }}>
              <div style={{ overflowX: 'auto', borderRadius: 16, boxShadow: `0 1px 8px ${BRAND_GRAY}33` }}>
                <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, fontSize: 17, background: '#fff', borderRadius: 16, overflow: 'hidden' }}>
                  <thead>
                    <tr style={{ background: `linear-gradient(90deg, #f4f6fb 0%, ${BRAND_GRAY} 100%)` }}>
                      <th style={{ padding: '18px 10px', textAlign: 'left', fontWeight: 700, color: BRAND_GREEN, letterSpacing: 0.5 }}>Name</th>
                      <th style={{ padding: '18px 10px', textAlign: 'left', fontWeight: 700, color: BRAND_GREEN, letterSpacing: 0.5 }}>Email</th>
                      <th style={{ padding: '18px 10px', textAlign: 'left', fontWeight: 700, color: BRAND_GREEN, letterSpacing: 0.5 }}>Phone</th>
                      <th style={{ padding: '18px 10px', textAlign: 'left', fontWeight: 700, color: BRAND_GREEN, letterSpacing: 0.5, position: 'relative' }}>
                        <span title="The date the user registered in the system." style={{ cursor: 'help', borderBottom: `1px dotted ${BRAND_GREEN}` }}>Signed Up</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.length === 0 && (
                      <tr>
                        <td colSpan={5} style={{ textAlign: 'center', padding: 32, color: '#aaa', fontSize: 20 }}>No users found.</td>
                      </tr>
                    )}
                    {users.map((user, idx) => (
                      <tr
                        key={idx}
                        style={{
                          background: idx % 2 === 0 ? '#f9fafd' : '#fff',
                          transition: 'background 0.2s',
                          cursor: 'pointer',
                        }}
                        onClick={() => navigate(`/user-management/${encodeURIComponent(user.email)}`)}
                        onMouseOver={e => (e.currentTarget.style.background = BRAND_GRAY)}
                        onMouseOut={e => (e.currentTarget.style.background = idx % 2 === 0 ? '#f9fafd' : '#fff')}
                      >
                        <td style={{ padding: '16px 10px', fontWeight: 500 }}>{user.name}</td>
                        <td style={{ padding: '16px 10px' }}>{user.email}</td>
                        <td style={{ padding: '16px 10px' }}>{user.phone}</td>
                        <td style={{ padding: '16px 10px' }}>{user.signedUp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserManagementPage; 