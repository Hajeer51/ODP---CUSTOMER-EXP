import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.tsx';
import Sidebar from '../components/Sidebar.tsx';
import '../styles/Dashboard.css';

// Copy usersData array from UserManagementPage
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

// Mock logs data
const userLogs = [
  { action: 'Login', date: '2024-06-01 09:00' },
  { action: 'Password Change', date: '2024-06-02 10:15' },
  { action: 'Logout', date: '2024-06-02 18:30' },
];

// Helper to get initials
function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

const UserDetailsPage = () => {
  const { email } = useParams();
  const navigate = useNavigate();
  // Find user by email
  const user = usersData.find(u => u.email === email);

  if (!user) {
    return <div style={{ padding: 40 }}><h2>User not found</h2></div>;
  }

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar />
        <main className="main-content" style={{ background: '#f4f6fb', minHeight: '100vh', padding: 32, display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
          <div style={{ width: '100%', maxWidth: 600, marginTop: 48 }}>
            {/* User Info Card */}
            <div style={{ background: '#fff', borderRadius: 24, boxShadow: '0 8px 32px #0002', padding: 32, marginBottom: 32, animation: 'fadeIn 0.7s' }}>
              <button onClick={() => navigate(-1)} style={{ marginBottom: 24, background: '#eee', border: 'none', borderRadius: 8, padding: '8px 18px', cursor: 'pointer' }}>← Back</button>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 16 }}>
                <div style={{ flex: 1 }}>
                  <h1 style={{ fontSize: 32, fontWeight: 800, margin: 0 }}>{user.name}
                    {/* Status badge */}
                    <span style={{ marginLeft: 16, background: '#86bc42', color: '#fff', borderRadius: 8, padding: '4px 14px', fontSize: 16, fontWeight: 600, verticalAlign: 'middle', letterSpacing: 1 }}>Active</span>
                  </h1>
                  <div style={{ color: '#888', fontSize: 18, marginTop: 4, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span role="img" aria-label="email">✉️</span> {user.email}
                  </div>
                </div>
              </div>
              <div style={{ fontSize: 18, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}><span role="img" aria-label="phone">📞</span><b>Phone:</b> {user.phone}</div>
              <div style={{ fontSize: 18, marginBottom: 0, display: 'flex', alignItems: 'center', gap: 8 }}><span role="img" aria-label="calendar">🗓️</span><b>Signed Up:</b> {user.signedUp}</div>
            </div>
            {/* User Logs Card */}
            <div style={{ background: '#fff', borderRadius: 24, boxShadow: '0 8px 32px #0002', padding: 32, animation: 'fadeIn 1.2s' }}>
              <h2 style={{ fontSize: 24, margin: '0 0 12px 0' }}>User Logs</h2>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 16 }}>
                <thead>
                  <tr style={{ background: '#f4f6fb' }}>
                    <th style={{ textAlign: 'left', padding: 10 }}>Action</th>
                    <th style={{ textAlign: 'left', padding: 10 }}>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {userLogs.map((log, idx) => (
                    <tr key={idx} style={{ background: idx % 2 === 0 ? '#fafbfc' : '#fff' }}>
                      <td style={{ padding: 10 }}>{log.action}</td>
                      <td style={{ padding: 10 }}>{log.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

// Add fadeIn animation
const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: none; }
}`;
document.head.appendChild(style);

export default UserDetailsPage; 