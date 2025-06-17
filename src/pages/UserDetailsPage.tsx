import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.tsx';
import Sidebar from '../components/Sidebar.tsx';
import '../styles/Dashboard.css';
import { User, Mail, ArrowLeft } from 'lucide-react';

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
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

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
        <main style={{ flex: 1, padding: '2px 20px 40px 20px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
            <div style={{ 
              background: 'linear-gradient(to right, #00a09d, #006b69)', 
              padding: '25px 30px', 
              borderRadius: '15px', 
              color: 'white', 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '30px'
            }}> {/* Styled Header to match the image */}
              <div>
                <h1 style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '5px' }}>OBC - Services and Products</h1>
                <p style={{ fontSize: '1rem', opacity: '0.9' }}>Account is: 12345678 | Last Billing Date: 2023-03-01</p>
              </div>
              <button style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                border: '1px solid rgba(255, 255, 255, 0.5)', 
                padding: '8px 20px', 
                borderRadius: '20px', 
                color: 'white', 
                fontWeight: 'bold', 
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}>ACTIVE</button>
            </div>

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
              {/* Avatar - Overlapping */}
              <div style={{
                position: 'absolute',
                top: 45,
                left: 32,
                width: 90,
                height: 90,
                borderRadius: '50%',
                background: '#e6f4fa',
                border: '4px solid #fff',
                boxShadow: '0 2px 8px #0001',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2,
                transition: 'box-shadow 0.2s ease-in-out'
              }} onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 12px #0002'} onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 8px #0001'}>
                {/* Display Initials Instead of Icon */}
                <span style={{ fontWeight: 700, fontSize: 32, color: '#253858' }}>
                  {getInitials(user.name)}
                </span>
              </div>
              {/* Card Content */}
              <div style={{ padding: '64px 32px 32px 32px', width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8, marginLeft: 72 }}>
                  {editMode ? (
                    <input value={editName} onChange={e => setEditName(e.target.value)} style={{ fontWeight: 700, fontSize: 28, color: '#222', border: '1px solid #ccc', borderRadius: 8, padding: '4px 10px', width: 240, marginRight: 12 }} />
                  ) : (
                    <span style={{ fontWeight: 700, fontSize: 28, color: '#222' }}>{user.name}</span>
                  )}
                  <span style={{ background: '#86bc42', color: '#fff', borderRadius: 12, padding: '4px 16px', fontSize: 17, fontWeight: 600 }}>{user.role}</span>
                </div>

                {/* Information blocks below name/role - Arranged horizontally, Contact on Left, Account on Right */}
                <div style={{ display: 'flex', flexDirection: 'row', gap: 40, width: '100%', marginTop: 24, marginLeft: 72 }}>
                  {/* Contact Information Block (Left, Email above Phone) */}
                  <div style={{ flex: 1.5 }}>
                    <div style={{ fontWeight: 'bold', color: '#222', fontSize: 17, marginBottom: 8 }}>Contact Information</div>
                    <div style={{ display: 'flex', flexDirection: 'column', fontSize: 16, gap: 6 }}>
                      <span style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ color: '#6b778c', marginRight: 8 }}><Mail size={18} /></span>
                        <span style={{ color: '#444' }}>{user.email}</span>
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ color: '#6b778c', marginRight: 8 }}>📞</span>
                        <span style={{ color: '#444' }}>{user.phone}</span>
                      </span>
                      {/* Mock Password Field (Hidden) */}
                      <span style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ color: '#6b778c', marginRight: 8 }}>🔒</span> {/* Lock icon */}
                        <span style={{ color: '#444' }}>{editMode ? '********' : '********'}</span> {/* Masked password */}
                      </span>
                    </div>
                  </div>
                  {/* Account Details Block (Right) */}
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 'bold', color: '#222', fontSize: 17, marginBottom: 8 }}>Account Details</div>
                    <div style={{ display: 'flex', flexDirection: 'column', fontSize: 16, gap: 6 }}>
                      <span style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ color: '#6b778c', marginRight: 8 }}>📅</span>
                        <span style={{ color: '#444' }}>Created: {user.signedUp}</span>
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ color: '#6b778c', marginRight: 8 }}>🕒</span>
                        <span style={{ color: '#444' }}>Last login: {user.lastLogin}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {editMode && (
                  <div style={{ display: 'flex', gap: 12, marginTop: 24, marginLeft: 72 }}>
                    <button onClick={handleSave} style={{ background: '#0c8145', color: '#fff', border: 'none', borderRadius: 14, padding: '14px 32px', fontWeight: 700, fontSize: 20, cursor: 'pointer', boxShadow: '0 2px 8px #0c814522' }}>Save</button>
                    <button onClick={handleCancel} style={{ background: '#eee', color: '#333', border: 'none', borderRadius: 14, padding: '14px 32px', fontWeight: 700, fontSize: 20, cursor: 'pointer' }}>Cancel</button>
                  </div>
                )}
              </div>
              {/* Action Buttons - Positioned at Bottom Right */}
              {!editMode && (
                <div style={{
                  position: 'absolute',
                  right: 32,
                  bottom: 32,
                  display: 'flex',
                  gap: 12,
                  zIndex: 3
                }}>
                  {/* Edit Button - Styled as Green Outline */}
                  <button onClick={handleEdit} style={{
                    background: 'none',
                    color: '#0c8145',
                    border: '1px solid #0c8145',
                    borderRadius: 8,
                    padding: '10px 20px',
                    fontWeight: 600,
                    fontSize: 15,
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(12, 129, 69, 0.1)', // Subtle green shadow
                    transition: 'transform 0.1s ease-in-out',
                  }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
                    Edit
                  </button>
                   {/* Reset Password Button */}
                   <button style={{
                    background: 'none',
                    color: '#007bff',
                    border: '1px solid #007bff',
                    borderRadius: 8,
                    padding: '10px 20px', // Adjusted padding
                    fontWeight: 600,
                    fontSize: 15, // Adjusted font size
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(0, 123, 255, 0.1)',
                    transition: 'transform 0.1s ease-in-out',
                   }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={e => e.currentTarget.style.transform = 'none'}
                   onClick={() => {
                     if (window.confirm('Are you sure you want to reset the password?')) {
                       // Placeholder for actual password reset logic
                       console.log('Password reset initiated (placeholder)');
                       alert('Password reset functionality needs to be implemented.');
                     }
                   }}>
                    Reset Password
                   </button>
                   {/* Deactivate Button */}
                   <button style={{
                    background: 'none',
                    color: '#dc3545',
                    border: '1px solid #dc3545',
                    borderRadius: 8,
                    padding: '10px 20px', // Adjusted padding
                    fontWeight: 600,
                    fontSize: 15, // Adjusted font size
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(220, 53, 69, 0.1)',
                    transition: 'transform 0.1s ease-in-out',
                   }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
                    Deactivate
                   </button>
                </div>
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