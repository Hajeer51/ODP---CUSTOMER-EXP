import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.tsx';
import Sidebar from '../components/Sidebar.tsx';
import '../styles/Dashboard.css';
import { User, Mail } from 'lucide-react';

// Mock logs data
const userLogs = [
  { action: 'Login', date: '2024-06-01 09:00', ip: '192.168.1.10', device: 'Chrome/Windows', status: 'Success' },
  { action: 'Password Change', date: '2024-06-02 10:15', ip: '192.168.1.10', device: 'Chrome/Windows', status: 'Success' },
  { action: 'Logout', date: '2024-06-02 18:30', ip: '192.168.1.10', device: 'Chrome/Windows', status: 'Success' },
  { action: 'Failed Login', date: '2024-06-03 08:00', ip: '192.168.1.11', device: 'Safari/iPhone', status: 'Failed' },
  { action: 'Login', date: '2024-06-04 09:10', ip: '192.168.1.12', device: 'Edge/Windows', status: 'Success' },
  { action: 'Password Reset', date: '2024-06-04 10:20', ip: '192.168.1.12', device: 'Edge/Windows', status: 'Success' },
  { action: 'Login', date: '2024-06-05 07:45', ip: '192.168.1.13', device: 'Firefox/Linux', status: 'Success' },
  { action: 'Failed Login', date: '2024-06-05 08:01', ip: '192.168.1.14', device: 'Chrome/Android', status: 'Failed' },
  { action: 'Login', date: '2024-06-06 09:00', ip: '192.168.1.15', device: 'Chrome/Windows', status: 'Success' },
  { action: 'Logout', date: '2024-06-06 17:30', ip: '192.168.1.15', device: 'Chrome/Windows', status: 'Success' },
  { action: 'Login', date: '2024-06-07 09:00', ip: '192.168.1.16', device: 'Safari/Mac', status: 'Success' },
  { action: 'Password Change', date: '2024-06-07 10:15', ip: '192.168.1.16', device: 'Safari/Mac', status: 'Success' },
  { action: 'Logout', date: '2024-06-07 18:30', ip: '192.168.1.16', device: 'Safari/Mac', status: 'Success' },
  { action: 'Failed Login', date: '2024-06-08 08:00', ip: '192.168.1.17', device: 'Edge/Windows', status: 'Failed' },
  { action: 'Login', date: '2024-06-09 09:00', ip: '192.168.1.18', device: 'Chrome/Windows', status: 'Success' },
  { action: 'Password Reset', date: '2024-06-09 10:20', ip: '192.168.1.18', device: 'Chrome/Windows', status: 'Success' },
  { action: 'Login', date: '2024-06-10 07:45', ip: '192.168.1.19', device: 'Firefox/Linux', status: 'Success' },
  { action: 'Failed Login', date: '2024-06-10 08:01', ip: '192.168.1.20', device: 'Chrome/Android', status: 'Failed' },
  { action: 'Login', date: '2024-06-11 09:00', ip: '192.168.1.21', device: 'Chrome/Windows', status: 'Success' },
  { action: 'Logout', date: '2024-06-11 17:30', ip: '192.168.1.21', device: 'Chrome/Windows', status: 'Success' },
  { action: 'Login', date: '2024-06-12 09:00', ip: '192.168.1.22', device: 'Safari/Mac', status: 'Success' },
  { action: 'Password Change', date: '2024-06-12 10:15', ip: '192.168.1.22', device: 'Safari/Mac', status: 'Success' },
  { action: 'Logout', date: '2024-06-12 18:30', ip: '192.168.1.22', device: 'Safari/Mac', status: 'Success' },
  { action: 'Failed Login', date: '2024-06-13 08:00', ip: '192.168.1.23', device: 'Edge/Windows', status: 'Failed' },
];

// Helper to get initials
function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

const roles = ['developer', 'superadmin', 'admin', 'user'];
const lastLogins = ['2 hours ago', '3 hours ago', '1 day ago', '5 days ago', 'just now', '10 minutes ago', 'yesterday'];
function getRandom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

// usersData definition moved here
const usersData = [
  { name: 'Ahmed Ali', email: 'ahmed.ali@omandatapark.com', phone: '9123-4567', signedUp: '2024-06-01', status: 'Active', avatar: '', role: getRandom(roles), lastLogin: getRandom(lastLogins), profileCompletion: 80 },
  { name: 'Sara Mohammed', email: 'sara.mohammed@omandatapark.com', phone: '9234-5678', signedUp: '2024-06-01', status: 'Active', avatar: '', role: getRandom(roles), lastLogin: getRandom(lastLogins), profileCompletion: 80 },
  { name: 'Khalid Saeed', email: 'khalid.saeed@omandatapark.com', phone: '9345-6789', signedUp: '2024-06-01', status: 'Active', avatar: '', role: getRandom(roles), lastLogin: getRandom(lastLogins), profileCompletion: 80 },
  { name: 'Fatima Hassan', email: 'fatima.hassan@omandatapark.com', phone: '9456-7890', signedUp: '2024-06-01', status: 'Active', avatar: '', role: getRandom(roles), lastLogin: getRandom(lastLogins), profileCompletion: 80 },
  { name: 'Yousef Salem', email: 'yousef.salem@omandatapark.com', phone: '9567-8901', signedUp: '2024-06-01', status: 'Active', avatar: '', role: getRandom(roles), lastLogin: getRandom(lastLogins), profileCompletion: 80 },
  { name: 'Mona Al Lawati', email: 'mona.allawati@omandatapark.com', phone: '9678-9012', signedUp: '2024-06-01', status: 'Active', avatar: '', role: getRandom(roles), lastLogin: getRandom(lastLogins), profileCompletion: 80 },
  { name: 'Hassan Al Balushi', email: 'hassan.albalushi@omandatapark.com', phone: '9789-0123', signedUp: '2024-06-01', status: 'Active', avatar: '', role: getRandom(roles), lastLogin: getRandom(lastLogins), profileCompletion: 80 },
  { name: 'Layla Al Zadjali', email: 'layla.alzadjali@omandatapark.com', phone: '9890-1234', signedUp: '2024-06-01', status: 'Active', avatar: '', role: getRandom(roles), lastLogin: getRandom(lastLogins), profileCompletion: 80 },
  { name: 'Omar Al Hinai', email: 'omar.alhinai@omandatapark.com', phone: '9901-2345', signedUp: '2024-06-01', status: 'Active', avatar: '', role: getRandom(roles), lastLogin: getRandom(lastLogins), profileCompletion: 80 },
  { name: 'Salim Al Farsi', email: 'salim.alfarsi@omandatapark.com', phone: '9012-3456', signedUp: '2024-06-01', status: 'Active', avatar: '', role: getRandom(roles), lastLogin: getRandom(lastLogins), profileCompletion: 80 },
  { name: 'Aisha Al Shukaili', email: 'aisha.alshukaili@omandatapark.com', phone: '9123-4568', signedUp: '2024-06-01', status: 'Active', avatar: '', role: getRandom(roles), lastLogin: getRandom(lastLogins), profileCompletion: 80 },
  { name: 'Majid Al Amri', email: 'majid.alamri@omandatapark.com', phone: '9234-5679', signedUp: '2024-06-01', status: 'Active', avatar: '', role: getRandom(roles), lastLogin: getRandom(lastLogins), profileCompletion: 80 },
  { name: 'Rashid Al Habsi', email: 'rashid.alhabsi@omandatapark.com', phone: '9345-6790', signedUp: '2024-06-01', status: 'Active', avatar: '', role: getRandom(roles), lastLogin: getRandom(lastLogins), profileCompletion: 80 },
  { name: 'Samira Al Riyami', email: 'samira.alriyami@omandatapark.com', phone: '9456-7891', signedUp: '2024-06-01', status: 'Active', avatar: '', role: getRandom(roles), lastLogin: getRandom(lastLogins), profileCompletion: 80 },
  { name: 'Nasser Al Rawahi', email: 'nasser.alrawahi@omandatapark.com', phone: '9567-8902', signedUp: '2024-06-01', status: 'Active', avatar: '', role: getRandom(roles), lastLogin: getRandom(lastLogins), profileCompletion: 80 },
  { name: 'Huda Al Kindi', email: 'huda.alkindi@omandatapark.com', phone: '9678-9013', signedUp: '2024-06-01', status: 'Active', avatar: '', role: getRandom(roles), lastLogin: getRandom(lastLogins), profileCompletion: 80 },
  { name: 'Talal Al Busaidi', email: 'talal.albusaidi@omandatapark.com', phone: '9789-0124', signedUp: '2024-06-01', status: 'Active', avatar: '', role: getRandom(roles), lastLogin: getRandom(lastLogins), profileCompletion: 80 },
  { name: 'Maha Al Harrasi', email: 'maha.alharrasi@omandatapark.com', phone: '9890-1235', signedUp: '2024-06-01', status: 'Active', avatar: '', role: getRandom(roles), lastLogin: getRandom(lastLogins), profileCompletion: 80 },
  { name: 'Zahra Al Siyabi', email: 'zahra.alsiyabi@omandatapark.com', phone: '9901-2346', signedUp: '2024-06-01', status: 'Active', avatar: '', role: getRandom(roles), lastLogin: getRandom(lastLogins), profileCompletion: 80 },
  { name: 'Ali Al Shamsi', email: 'ali.alshamsi@omandatapark.com', phone: '9012-3457', signedUp: '2024-06-01', status: 'Active', avatar: '', role: getRandom(roles), lastLogin: getRandom(lastLogins), profileCompletion: 80 },
];

const UserDetailsPage = () => {
  const { email } = useParams();
  const navigate = useNavigate();
  // Find user by email
  const [user, setUser] = useState(usersData.find(u => u.email === email) || usersData[0]);
  const [editMode, setEditMode] = useState(false);
  const [editName, setEditName] = useState(user.name);
  const [editPhone, setEditPhone] = useState(user.phone);
  const [hoveredRow, setHoveredRow] = useState(null);

  const handleEdit = () => setEditMode(true);
  const handleCancel = () => {
    setEditName(user.name);
    setEditPhone(user.phone);
    setEditMode(false);
  };
  const handleSave = () => {
    setUser({ ...user, name: editName, phone: editPhone });
    setEditMode(false);
  };

  // Export logs as CSV
  function exportLogsAsCSV() {
    const headers = ['Action', 'Date', 'IP Address', 'Device', 'Status'];
    const rows = userLogs.map(log => [log.action, log.date, log.ip, log.device, log.status]);
    let csvContent = headers.join(',') + '\n' + rows.map(r => r.map(x => `"${x}"`).join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'user-logs.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  if (!user) {
    return <div style={{ padding: 40 }}><h2>User not found</h2></div>;
  }

  return (
    <div className="dashboard-container" style={{ background: '#f4f6fb', minHeight: '100vh' }}>
      <Navbar />
      <div className="dashboard-content" style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ flex: 1, padding: '40px 0', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '100%', maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Back Button */}
            <button onClick={() => navigate('/user-management')} style={{ background: '#eee', color: '#555', border: 'none', borderRadius: 8, padding: '6px 18px', fontWeight: 500, fontSize: 14, cursor: 'pointer', marginBottom: 18, boxShadow: '0 1px 4px #0001', alignSelf: 'flex-start' }}>← Back</button>
            {/* User Profile Card - Full Width */}
            <div style={{
              width: '100%',
              background: '#fff',
              borderRadius: 24,
              boxShadow: '0 4px 24px #0001',
              overflow: 'hidden',
              position: 'relative',
              minHeight: 420,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: 0,
              marginBottom: 16
            }}>
              {/* Banner */}
              <div style={{
                width: '100%',
                height: 90,
                background: 'linear-gradient(120deg, #0c8145 0%, #86bc42 100%)',
                position: 'relative',
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24
              }} />
              {/* Card Content */}
              <div style={{ padding: '56px 32px 32px 32px', width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, width: '100%' }}>
                  {editMode ? (
                    <input value={editName} onChange={e => setEditName(e.target.value)} style={{ fontWeight: 700, fontSize: 28, color: '#222', border: '1px solid #ccc', borderRadius: 8, padding: '4px 10px', width: 240, marginRight: 12 }} />
                  ) : (
                    <span style={{ fontWeight: 700, fontSize: 28, color: '#222' }}>{user.name}</span>
                  )}
                  <span style={{ background: '#86bc42', color: '#fff', borderRadius: 12, padding: '4px 16px', fontSize: 17, fontWeight: 600, marginLeft: 4 }}>{user.role}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', fontSize: 18, marginBottom: 6 }}>
                  <span style={{ fontWeight: 500, color: '#222', fontSize: 17 }}>Phone</span>
                  <span style={{ marginLeft: 12, color: '#444', fontSize: 17 }}>{user.phone}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', fontSize: 18, marginBottom: 6 }}>
                  <span style={{ fontWeight: 500, color: '#222', fontSize: 17 }}>Email</span>
                  <span style={{ marginLeft: 12, color: '#444', fontSize: 17 }}>{user.email}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', fontSize: 18, marginBottom: 6 }}>
                  <span style={{ fontWeight: 500, color: '#222', fontSize: 17 }}>Account Created:</span>
                  <span style={{ marginLeft: 12, color: '#444', fontSize: 17 }}>{user.signedUp}</span>
                </div>
                <div style={{ color: '#6b778c', fontSize: 16, margin: '18px 0 24px 0' }}>Last login: {user.lastLogin}</div>
                {editMode && (
                  <div style={{ display: 'flex', gap: 12 }}>
                    <button onClick={handleSave} style={{ background: '#0c8145', color: '#fff', border: 'none', borderRadius: 14, padding: '14px 32px', fontWeight: 700, fontSize: 20, cursor: 'pointer', boxShadow: '0 2px 8px #0c814522' }}>Save</button>
                    <button onClick={handleCancel} style={{ background: '#eee', color: '#333', border: 'none', borderRadius: 14, padding: '14px 32px', fontWeight: 700, fontSize: 20, cursor: 'pointer' }}>Cancel</button>
                  </div>
                )}
              </div>
              {/* Edit button absolutely positioned in bottom right */}
              {!editMode && (
                <button onClick={handleEdit} style={{
                  position: 'absolute',
                  right: 32,
                  bottom: 32,
                  background: 'linear-gradient(90deg, #0c8145 0%, #86bc42 100%)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 8,
                  padding: '10px 28px',
                  fontWeight: 600,
                  fontSize: 16,
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px #0c814522',
                  zIndex: 3
                }}>Edit</button>
              )}
            </div>
            {/* Logs Table - Full Width below card */}
            <div style={{ width: '100%', background: '#fff', borderRadius: 18, boxShadow: '0 4px 24px #0001', padding: 32, minWidth: 0, marginTop: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: 700, fontSize: 22, marginBottom: 24 }}>
                <span>User Logs</span>
                <button onClick={exportLogsAsCSV} style={{ background: 'linear-gradient(90deg, #0c8145 0%, #86bc42 100%)', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 28px', fontWeight: 600, fontSize: 16, cursor: 'pointer', boxShadow: '0 2px 8px #0c814522' }}>
                  Export Logs
                </button>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 16 }}>
                  <thead>
                    <tr style={{ background: '#f4f6fb' }}>
                      <th style={{ padding: '14px 10px', textAlign: 'left', fontWeight: 700, color: '#0c8145' }}>Action</th>
                      <th style={{ padding: '14px 10px', textAlign: 'left', fontWeight: 700, color: '#0c8145' }}>Date</th>
                      <th style={{ padding: '14px 10px', textAlign: 'left', fontWeight: 700, color: '#0c8145' }}>IP Address</th>
                      <th style={{ padding: '14px 10px', textAlign: 'left', fontWeight: 700, color: '#0c8145' }}>Device</th>
                      <th style={{ padding: '14px 10px', textAlign: 'left', fontWeight: 700, color: '#0c8145' }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userLogs.map((log, idx) => (
                      <tr
                        key={idx}
                        style={{
                          background: hoveredRow === idx ? '#e6ffed' : idx % 2 === 0 ? '#f9fafd' : '#fff',
                          transition: 'background 0.2s',
                          cursor: 'pointer',
                        }}
                        onMouseEnter={() => setHoveredRow(idx)}
                        onMouseLeave={() => setHoveredRow(null)}
                      >
                        <td style={{ padding: '12px 10px' }}>{log.action}</td>
                        <td style={{ padding: '12px 10px' }}>{log.date}</td>
                        <td style={{ padding: '12px 10px' }}>{log.ip}</td>
                        <td style={{ padding: '12px 10px' }}>{log.device}</td>
                        <td style={{ padding: '12px 10px', color: log.status === 'Success' ? '#0c8145' : '#de350b', fontWeight: 600 }}>{log.status}</td>
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

// Add fadeIn animation
const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: none; }
}`;
document.head.appendChild(style);

export default UserDetailsPage; 