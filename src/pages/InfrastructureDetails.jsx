import React from 'react';
import Navbar from '../components/Navbar.tsx';
import Sidebar from '../components/Sidebar.tsx';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, AreaChart, Area } from 'recharts';

// Mock data for VMs chart (Total VMs vs time)
const cpuData = [
  { time: '02:00', 'Total VMs': 40 },
  { time: '04:10', 'Total VMs': 45 },
  { time: '06:20', 'Total VMs': 49 },
  { time: '08:30', 'Total VMs': 55 },
  { time: '10:40', 'Total VMs': 56 },
  { time: '12:50', 'Total VMs': 59 },
  { time: '14:00', 'Total VMs': 62 },
  { time: '16:10', 'Total VMs': 67 },
  { time: '18:20', 'Total VMs': 71 },
  { time: '20:30', 'Total VMs': 72 },
  { time: '22:40', 'Total VMs': 75 },
  { time: '00:50', 'Total VMs': 78 },
];

// Mock data for Memory chart
const memoryData = [
  { time: '07:00', consumed: 20 },
  { time: '09:10', consumed: 25 },
  { time: '11:20', consumed: 25 },
  { time: '13:30', consumed: 35 },
  { time: '15:40', consumed: 35 },
  { time: '17:50', consumed: 45 },
  { time: '19:00', consumed: 50 },
  { time: '21:10', consumed: 53 },
  { time: '23:20', consumed: 59 },
  { time: '01:30', consumed: 65 },
  { time: '03:40', consumed: 67 },
  { time: '05:50', consumed: 71 },
  { time: '08:00', consumed: 75 },
  { time: '10:10', consumed: 78 },
  { time: '12:20', consumed: 80 },
  { time: '14:30', consumed: 85 },
  
];

// Storage pie chart data
const storagePieData = [
  { name: 'Used', value: 60 },
  { name: 'Free', value: 40 },
];
const STORAGE_COLORS = ['#0088FE', '#00C49F'];

// Bar chart data for Total Servers
const totalServersData = [
  { month: 'Jan', servers: 50 },
  { month: 'Feb', servers: 60 },
  { month: 'Mar', servers: 70 },
  { month: 'Apr', servers: 80 },
  { month: 'May', servers: 90 },
  { month: 'Jun', servers: 100 },
];

// Total servers doughnut chart data
const totalServersDoughnutData = [
  { name: 'Used', value: 76 },
  { name: 'Free', value: 24 },
];
const SERVER_COLORS = ['#FF5630', '#FFAB00', '#36B37E'];

// Memory pie chart data
const memoryPieData = [
  { name: 'Used', value: 10 },
  { name: 'Free', value: 90 },
];
const MEMORY_COLORS = ['#8884d8', '#00C49F'];

// VM pie chart data
const vmPieData = [
  { name: 'Used', value: 76 },
  { name: 'Free', value: 24 },
];
const VM_COLORS = ['#FF5630', '#FFAB00'];

// Server(VMs) pie chart data
const serverPieData = [
  { name: 'Used', value: 44 },
  { name: 'Free', value: 56 },
];
const SERVER_COLORS2 = ['#8884d8', '#00C49F'];

const cardStyle = {
  background: '#fff',
  borderRadius: '12px',
  padding: '32px 24px',
  boxShadow: '0 4px 24px rgba(9,30,66,0.08)',
  border: '1px solid #e5e8ec',
  marginBottom: '32px',
  minWidth: 0,
};

const sectionTitleStyle = {
  fontSize: '24px',
  fontWeight: 700,
  color: '#253858',
  marginBottom: '32px',
  letterSpacing: '-0.5px',
};

const chartTitleStyle = {
  fontSize: '18px',
  fontWeight: 600,
  color: '#172B4D',
  marginBottom: '16px',
  textAlign: 'center',
  letterSpacing: '-0.5px',
};

const InfrastructureDetails = () => (
  <>
    <style>{`
      .dashboard-container, .dashboard-content, .main-content, .body-container {
        box-sizing: border-box;
      }
      @media (max-width: 1200px) {
        .body-container { max-width: 100% !important; }
      }
      @media (max-width: 900px) {
        .dashboard-container, .dashboard-content, .main-content {
          padding: 0 !important;
        }
        .body-container {
          padding: 0 0.5rem !important;
        }
        h2, h3 {
          font-size: 1.1em !important;
        }
        table {
          font-size: 0.95em !important;
        }
        .pie-card, .line-card {
          max-width: 100% !important;
          min-width: 0 !important;
        }
      }
      @media (max-width: 400px) {
        .body-container {
          padding: 0 0.2rem !important;
        }
        .pie-card, .line-card {
          padding: 1rem 0.5rem !important;
        }
      }
    `}</style>
    <div className="dashboard-container" style={{ background: '#f4f6fa', minHeight: '100vh', boxSizing: 'border-box' }}>
      <Navbar />
      <div className="dashboard-content" style={{ background: '#f4f6fa', boxSizing: 'border-box' }}>
        <Sidebar />
        <main className="main-content" style={{
          flex: 1,
          padding: '0',
          marginTop: '0px',
          marginLeft: '240px',
          backgroundColor: '#f4f6fa',
          minHeight: 'calc(100vh - 64px)',
          boxSizing: 'border-box',
        }}>
          <div className="body-container" style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0px',
            boxSizing: 'border-box',
          }}>
            <h2 style={sectionTitleStyle}>Infrastructure Details</h2>
            {/* Pie Charts Row: CPU, Memory & Storage */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              margin: '0 0 24px 0',
              width: '100%',
              overflowX: 'auto',
              boxSizing: 'border-box',
            }}>
              {/* CPU Pie Chart Card */}
              <div className="pie-card" style={{ ...cardStyle, maxWidth: '400px', textAlign: 'center', margin: 0 }}>
                <div style={chartTitleStyle}>CPU</div>
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie
                      data={totalServersDoughnutData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={3}
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {totalServersDoughnutData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={SERVER_COLORS[index % SERVER_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '2px', background: SERVER_COLORS[0] }} />
                    <span>Used</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '2px', background: SERVER_COLORS[1] }} />
                    <span>Free</span>
                  </div>
                </div>
              </div>
              {/* Memory Pie Chart Card */}
              <div className="pie-card" style={{ ...cardStyle, maxWidth: '400px', textAlign: 'center', margin: 0 }}>
                <div style={chartTitleStyle}>Memory</div>
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie
                      data={memoryPieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={3}
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {memoryPieData.map((entry, index) => (
                        <Cell key={`cell-mem-${index}`} fill={MEMORY_COLORS[index % MEMORY_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '2px', background: MEMORY_COLORS[0] }} />
                    <span>Used</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '2px', background: MEMORY_COLORS[1] }} />
                    <span>Free</span>
                  </div>
                </div>
              </div>
              {/* Storage Pie Chart Card */}
              <div className="pie-card" style={{ ...cardStyle, maxWidth: '400px', textAlign: 'center', margin: 0 }}>
                <div style={chartTitleStyle}>Storage</div>
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie
                      data={storagePieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={3}
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {storagePieData.map((entry, index) => (
                        <Cell key={`cell-storage-${index}`} fill={STORAGE_COLORS[index % STORAGE_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '2px', background: STORAGE_COLORS[0] }} />
                    <span>Used</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '2px', background: STORAGE_COLORS[1] }} />
                    <span>Free</span>
                  </div>
                </div>
              </div>
            </div>
            {/* VM Line Chart & Pie Chart Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '24px',
              marginBottom: '24px',
              width: '100%',
              overflowX: 'auto',
              boxSizing: 'border-box',
            }}>
              {/* VM Line Chart Card */}
              <div className="line-card" style={cardStyle}>
                <div style={chartTitleStyle}>VM</div>
                <ResponsiveContainer width="100%" height={420} minHeight={220}>
                  <LineChart data={cpuData} margin={{ top: 16, right: 32, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" tickFormatter={v => v} />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={36} />
                    <Line type="monotone" dataKey="Total VMs" stroke="#8884d8" name="Total VMs" dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              {/* VM Pie Chart Card */}
              <div className="pie-card" style={{ ...cardStyle, maxWidth: '500px', textAlign: 'center', margin: 0 }}>
                <div style={chartTitleStyle}>VM Usage</div>
                <ResponsiveContainer width="100%" height={350} minHeight={180}>
                  <PieChart>
                    <Pie
                      data={vmPieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={3}
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {vmPieData.map((entry, index) => (
                        <Cell key={`cell-vm-${index}`} fill={VM_COLORS[index % VM_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '2px', background: VM_COLORS[0] }} />
                    <span>Used</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '2px', background: VM_COLORS[1] }} />
                    <span>Free</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Server(VMs) Line Chart & Pie Chart Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '24px',
              marginBottom: '24px',
              width: '100%',
              overflowX: 'auto',
              boxSizing: 'border-box',
            }}>
              {/* Server(VMs) Line Chart Card */}
              <div className="line-card" style={cardStyle}>
                <div style={chartTitleStyle}>Server</div>
                <ResponsiveContainer width="100%" height={500} minHeight={220}>
                  <LineChart data={memoryData} margin={{ top: 16, right: 32, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" tickFormatter={v => v} />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={36} />
                    <Line type="monotone" dataKey="consumed" stroke="#82ca9d" name="Consumed" dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              {/* Server(VMs) Pie Chart Card */}
              <div className="pie-card" style={{ ...cardStyle, maxWidth: '500px', textAlign: 'center', margin: 0 }}>
                <div style={chartTitleStyle}>Server Usage</div>
                <ResponsiveContainer width="100%" height={350} minHeight={180}>
                  <PieChart>
                    <Pie
                      data={serverPieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={3}
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {serverPieData.map((entry, index) => (
                        <Cell key={`cell-server-${index}`} fill={SERVER_COLORS2[index % SERVER_COLORS2.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '2px', background: SERVER_COLORS2[0] }} />
                    <span>Used</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '2px', background: SERVER_COLORS2[1] }} />
                    <span>Free</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Resource Table */}
            <div style={{
              background: '#fff',
              borderRadius: '12px',
              boxShadow: '0 4px 24px rgba(9,30,66,0.08)',
              border: '1px solid #e5e8ec',
              margin: '0 0 24px 0',
              width: '100%',
              padding: '32px 24px',
              boxSizing: 'border-box',
            }}>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#172B4D', marginBottom: '24px' }}>Resource Overview</h3>
              <div style={{ 
                width: '100%',
                overflowX: 'scroll',
                overflowY: 'auto',
                maxHeight: '300px', // This will show approximately 4 rows
                WebkitOverflowScrolling: 'touch'
              }}>
                <table style={{ 
                  width: '100%', 
                  borderCollapse: 'collapse', 
                  minWidth: '800px'
                }}>
                  <thead style={{ position: 'sticky', top: 0, background: '#f4f5f7', zIndex: 1 }}>
                    <tr style={{ background: '#f4f5f7' }}>
                      <th style={{ padding: '12px 16px', textAlign: 'left', color: '#6B778C', fontWeight: 500 }}>Username</th>
                      <th style={{ padding: '12px 16px', textAlign: 'left', color: '#6B778C', fontWeight: 500 }}>Email</th>
                      <th style={{ padding: '12px 16px', textAlign: 'left', color: '#6B778C', fontWeight: 500 }}>VPN</th>
                      <th style={{ padding: '12px 16px', textAlign: 'left', color: '#6B778C', fontWeight: 500 }}>Vpn Start</th>
                      <th style={{ padding: '12px 16px', textAlign: 'left', color: '#6B778C', fontWeight: 500 }}>Vpn End</th>
                      <th style={{ padding: '12px 16px', textAlign: 'left', color: '#6B778C', fontWeight: 500 }}>Reset VPN password</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                    { username: 'jdoe', email: 'jdoe@example.com', vpn: 'Enabled', start: '2024-05-01', end: '2025-05-01' },
                    { username: 'asmith', email: 'asmith@example.com', vpn: 'Disabled', start: '2023-12-15', end: '2024-12-15' },
                    { username: 'mjane', email: 'mjane@example.com', vpn: 'Enabled', start: '2024-03-10', end: '2025-03-10' },
                    { username: 'bwilliams', email: 'bwilliams@example.com', vpn: 'Enabled', start: '2024-01-20', end: '2025-01-20' },
                    { username: 'tjohnson', email: 'tjohnson@example.com', vpn: 'Disabled', start: '2024-02-05', end: '2025-02-05' },
                    { username: 'knguyen', email: 'knguyen@example.com', vpn: 'Enabled', start: '2024-06-01', end: '2025-06-01' },
                    { username: 'lmartin', email: 'lmartin@example.com', vpn: 'Enabled', start: '2023-11-10', end: '2024-11-10' },
                    { username: 'dlee', email: 'dlee@example.com', vpn: 'Disabled', start: '2024-04-12', end: '2025-04-12' },
                    { username: 'swhite', email: 'swhite@example.com', vpn: 'Enabled', start: '2024-07-22', end: '2025-07-22' },
                    { username: 'rpatel', email: 'rpatel@example.com', vpn: 'Disabled', start: '2023-09-01', end: '2024-09-01' },
                    { username: 'amurphy', email: 'amurphy@example.com', vpn: 'Enabled', start: '2024-08-15', end: '2025-08-15' },
                    { username: 'cchavez', email: 'cchavez@example.com', vpn: 'Enabled', start: '2024-03-30', end: '2025-03-30' },
                    { username: 'jwalker', email: 'jwalker@example.com', vpn: 'Disabled', start: '2023-10-05', end: '2024-10-05' }
                    
                    ].map((row, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid #e5e8ec', background: idx % 2 === 0 ? '#fff' : '#f9fafb' }}>
                        <td style={{ padding: '12px 16px', color: '#253858', fontWeight: 500 }}>{row.username}</td>
                        <td style={{ padding: '12px 16px', color: '#42526e' }}>{row.email}</td>
                        <td style={{ padding: '12px 16px' }}>
                          <span style={{
                            display: 'inline-block',
                            padding: '2px 10px',
                            borderRadius: '4px',
                            fontWeight: 600,
                            color: row.vpn === 'Enabled' ? '#36B37E' : row.vpn === 'Disabled' ? '#FFAB00' : '#FF5630',
                            background: row.vpn === 'Enabled' ? '#E3FCEF' : row.vpn === 'Disabled' ? '#FFFAE6' : '#FFEBE6',
                          }}>{row.vpn}</span>
                        </td>
                        <td style={{ padding: '12px 16px', color: '#253858' }}>{row.start}</td>
                        <td style={{ padding: '12px 16px', color: '#253858' }}>{row.end}</td>
                        <td style={{ padding: '12px 16px' }}>
                          <button
                            style={{
                              background: '#0052cc',
                              color: '#fff',
                              border: 'none',
                              borderRadius: '4px',
                              padding: '6px 16px',
                              fontWeight: 500,
                              fontSize: '14px',
                              cursor: 'pointer',
                              transition: 'background 0.2s',
                            }}
                            onClick={() => alert('Reset VPN password for ' + row.username)}
                          >
                            Reset
                          </button>
                        </td>
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
  </>
);

export default InfrastructureDetails; 