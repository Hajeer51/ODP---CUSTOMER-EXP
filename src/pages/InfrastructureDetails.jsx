import React, { useMemo } from 'react';
import Navbar from '../components/Navbar.tsx';
import Sidebar from '../components/Sidebar.tsx';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// Add more detailed data for VM chart
const cpuData = [
  { time: '00:00', 'Total VMs': 38 },
  { time: '02:00', 'Total VMs': 40 },
  { time: '04:00', 'Total VMs': 45 },
  { time: '06:00', 'Total VMs': 49 },
  { time: '08:00', 'Total VMs': 55 },
  { time: '10:00', 'Total VMs': 58 },
  { time: '12:00', 'Total VMs': 62 },
  { time: '14:00', 'Total VMs': 65 },
  { time: '16:00', 'Total VMs': 68 },
  { time: '18:00', 'Total VMs': 71 },
  { time: '20:00', 'Total VMs': 73 },
  { time: '22:00', 'Total VMs': 76 },
  { time: '00:00', 'Total VMs': 78 },
];

// Add more detailed data for Server chart
const memoryData = [
  { time: '00:00', consumed: 18 },
  { time: '02:00', consumed: 22 },
  { time: '04:00', consumed: 25 },
  { time: '06:00', consumed: 30 },
  { time: '08:00', consumed: 35 },
  { time: '10:00', consumed: 42 },
  { time: '12:00', consumed: 48 },
  { time: '14:00', consumed: 55 },
  { time: '16:00', consumed: 62 },
  { time: '18:00', consumed: 68 },
  { time: '20:00', consumed: 72 },
  { time: '22:00', consumed: 78 },
  { time: '00:00', consumed: 85 },
];

// Storage pie chart data
const storagePieData = [
  { name: 'Used', value: 60 },
  { name: 'Free', value: 40 },
];
const STORAGE_COLORS = ['#0088FE', '#00C49F'];

// Total servers doughnut chart data
const totalServersDoughnutData = [
  { name: 'Used', value: 76 },
  { name: 'Free', value: 24 },
];
const SERVER_COLORS = ['#FF5630', '#FFAB00'];

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
  borderRadius: '8px',
  padding: '12px',
  boxShadow: '0 2px 8px rgba(9,30,66,0.08)',
  border: '1px solid #e5e8ec',
  marginBottom: '12px',
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
  fontSize: '14px',
  fontWeight: 600,
  color: '#172B4D',
  marginBottom: '8px',
  textAlign: 'center',
  letterSpacing: '-0.5px',
};

const InfrastructureDetails = () => {
  // Memoize the data to prevent unnecessary recalculations
  const tableData = useMemo(() => [
    { username: 'Ahmad', email: 'aahmad@example.com', vpn: 'Enabled', start: '2024-05-01', end: '2025-05-01' },
    { username: 'Msaeed', email: 'msaeed@example.com', vpn: 'Disabled', start: '2023-12-15', end: '2024-12-15' },
    { username: 'Fatima', email: 'nfatima@example.com', vpn: 'Enabled', start: '2024-03-10', end: '2025-03-10' },
    { username: 'Ibrahim', email: 'kibrahim@example.com', vpn: 'Enabled', start: '2024-01-20', end: '2025-01-20' },
    { username: 'Laila', email: 'lali@example.com', vpn: 'Disabled', start: '2024-02-05', end: '2025-02-05' },
    { username: 'Amina', email: 'samina@example.com', vpn: 'Enabled', start: '2024-06-01', end: '2025-06-01' },
    { username: 'Hamid', email: 'yhamid@example.com', vpn: 'Enabled', start: '2023-11-10', end: '2024-11-10' },
    { username: 'Noor', email: 'dnoor@example.com', vpn: 'Disabled', start: '2024-04-12', end: '2025-04-12' },
    { username: 'Hana', email: 'rhana@example.com', vpn: 'Enabled', start: '2024-07-22', end: '2025-07-22' },
    { username: 'Tariq', email: 'ftariq@example.com', vpn: 'Disabled', start: '2023-09-01', end: '2024-09-01' },
    { username: 'Salim', email: 'zsalim@example.com', vpn: 'Enabled', start: '2024-08-15', end: '2025-08-15' },
    { username: 'Basim', email: 'bbasim@example.com', vpn: 'Enabled', start: '2024-03-30', end: '2025-03-30' },
    { username: 'Mustafa', email: 'hmustafa@example.com', vpn: 'Disabled', start: '2023-10-05', end: '2024-10-05' }
  ], []);

  // Memoize the chart data
  const chartData = useMemo(() => ({
    cpuData,
    memoryData,
    storagePieData,
    totalServersDoughnutData,
    memoryPieData,
    vmPieData,
    serverPieData
  }), []);

  // Memoize the styles
  const styles = useMemo(() => ({
    cardStyle,
    sectionTitleStyle,
    chartTitleStyle
  }), []);

  return (
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
              margin: '0 auto',
              padding: '24px',
              boxSizing: 'border-box',
            }}>
              <h2 style={styles.sectionTitleStyle}>Infrastructure Details</h2>
              
              {/* Top 3 Pie Charts Row */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
                marginBottom: '12px',
                width: '100%',
                boxSizing: 'border-box',
              }}>
                {/* CPU Pie Chart */}
                <div className="pie-card" style={{...styles.cardStyle, textAlign: 'center', margin: 0}}>
                  <div style={{...styles.chartTitleStyle, marginBottom: '8px', fontSize: '20px'}}>CPU</div>
                  <div style={{height: '420px'}}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={chartData.totalServersDoughnutData}
                          cx="50%"
                          cy="50%"
                          innerRadius={100}
                          outerRadius={150}
                          fill="#8884d8"
                          paddingAngle={2}
                          dataKey="value"
                          label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                          isAnimationActive={false}
                        >
                          {chartData.totalServersDoughnutData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={SERVER_COLORS[index % SERVER_COLORS.length]} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '1px', background: SERVER_COLORS[0] }} />
                      <span style={{ fontSize: '12px' }}>Used</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '1px', background: SERVER_COLORS[1] }} />
                      <span style={{ fontSize: '12px' }}>Free</span>
                    </div>
                  </div>
                </div>

                {/* Memory Pie Chart */}
                <div className="pie-card" style={{...styles.cardStyle, textAlign: 'center', margin: 0}}>
                  <div style={{...styles.chartTitleStyle, marginBottom: '8px', fontSize: '20px'}}>Memory</div>
                  <div style={{height: '420px'}}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={chartData.memoryPieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={100}
                          outerRadius={150}
                          fill="#8884d8"
                          paddingAngle={2}
                          dataKey="value"
                          label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                          isAnimationActive={false}
                        >
                          {chartData.memoryPieData.map((entry, index) => (
                            <Cell key={`cell-mem-${index}`} fill={MEMORY_COLORS[index % MEMORY_COLORS.length]} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '1px', background: MEMORY_COLORS[0] }} />
                      <span style={{ fontSize: '12px' }}>Used</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '1px', background: MEMORY_COLORS[1] }} />
                      <span style={{ fontSize: '12px' }}>Free</span>
                    </div>
                  </div>
                </div>

                {/* Storage Pie Chart */}
                <div className="pie-card" style={{...styles.cardStyle, textAlign: 'center', margin: 0}}>
                  <div style={{...styles.chartTitleStyle, marginBottom: '8px', fontSize: '20px'}}>Storage</div>
                  <div style={{height: '420px'}}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={chartData.storagePieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={100}
                          outerRadius={150}
                          fill="#8884d8"
                          paddingAngle={2}
                          dataKey="value"
                          label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                          isAnimationActive={false}
                        >
                          {chartData.storagePieData.map((entry, index) => (
                            <Cell key={`cell-storage-${index}`} fill={STORAGE_COLORS[index % STORAGE_COLORS.length]} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '1px', background: STORAGE_COLORS[0] }} />
                      <span style={{ fontSize: '12px' }}>Used</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '1px', background: STORAGE_COLORS[1] }} />
                      <span style={{ fontSize: '12px' }}>Free</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* VM Line Chart & Pie Chart Row */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
                marginBottom: '12px',
                width: '100%',
                boxSizing: 'border-box',
              }}>
                {/* VM Line Chart */}
                <div className="line-card" style={{...styles.cardStyle, height: 'auto', display: 'flex', flexDirection: 'column'}}>
                  <div style={{...styles.chartTitleStyle, marginBottom: '8px', fontSize: '14px'}}>VM Usage Over Time</div>
                  <div style={{height: '420px'}}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart 
                        data={chartData.cpuData} 
                        margin={{ top: 2, right: 2, left: 2, bottom: 2 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis 
                          dataKey="time" 
                          tickFormatter={v => v}
                          interval={0}
                          minTickGap={30}
                          height={20}
                          tick={{ fontSize: 10 }}
                        />
                        <YAxis 
                          width={30} 
                          tick={{ fontSize: 10 }}
                        />
                        <Tooltip />
                        <Line 
                          type="monotone" 
                          dataKey="Total VMs" 
                          stroke="#8884d8" 
                          name="Total VMs" 
                          dot={false}
                          isAnimationActive={false}
                          strokeWidth={1}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* VM Pie Chart */}
                <div className="pie-card" style={{...styles.cardStyle, height: 'auto', display: 'flex', flexDirection: 'column', textAlign: 'center', margin: 0}}>
                  <div style={{...styles.chartTitleStyle, marginBottom: '8px', fontSize: '14px'}}>VM Distribution</div>
                  <div style={{height: '420px'}}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={chartData.vmPieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={100}
                          outerRadius={150}
                          fill="#8884d8"
                          paddingAngle={2}
                          dataKey="value"
                          label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                          isAnimationActive={false}
                        >
                          {chartData.vmPieData.map((entry, index) => (
                            <Cell key={`cell-vm-${index}`} fill={VM_COLORS[index % VM_COLORS.length]} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '1px', background: VM_COLORS[0] }} />
                      <span style={{ fontSize: '12px' }}>Used</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '1px', background: VM_COLORS[1] }} />
                      <span style={{ fontSize: '12px' }}>Free</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Server Line Chart & Pie Chart Row */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
                marginBottom: '12px',
                width: '100%',
                boxSizing: 'border-box',
              }}>
                {/* Server Line Chart */}
                <div className="line-card" style={{...styles.cardStyle, height: 'auto', display: 'flex', flexDirection: 'column'}}>
                  <div style={{...styles.chartTitleStyle, marginBottom: '8px', fontSize: '14px'}}>Server Usage Over Time</div>
                  <div style={{height: '420px'}}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart 
                        data={chartData.memoryData} 
                        margin={{ top: 2, right: 2, left: 2, bottom: 2 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis 
                          dataKey="time" 
                          tickFormatter={v => v}
                          interval={0}
                          minTickGap={30}
                          height={20}
                          tick={{ fontSize: 10 }}
                        />
                        <YAxis 
                          width={30} 
                          tick={{ fontSize: 10 }}
                        />
                        <Tooltip />
                        <Line 
                          type="monotone" 
                          dataKey="consumed" 
                          stroke="#82ca9d" 
                          name="Consumed" 
                          dot={false}
                          isAnimationActive={false}
                          strokeWidth={1}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Server Pie Chart */}
                <div className="pie-card" style={{...styles.cardStyle, height: 'auto', display: 'flex', flexDirection: 'column', textAlign: 'center', margin: 0}}>
                  <div style={{...styles.chartTitleStyle, marginBottom: '8px', fontSize: '14px'}}>Server Distribution</div>
                  <div style={{height: '420px'}}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={chartData.serverPieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={100}
                          outerRadius={150}
                          fill="#8884d8"
                          paddingAngle={2}
                          dataKey="value"
                          label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                          isAnimationActive={false}
                        >
                          {chartData.serverPieData.map((entry, index) => (
                            <Cell key={`cell-server-${index}`} fill={SERVER_COLORS2[index % SERVER_COLORS2.length]} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '1px', background: SERVER_COLORS2[0] }} />
                      <span style={{ fontSize: '12px' }}>Used</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '1px', background: SERVER_COLORS2[1] }} />
                      <span style={{ fontSize: '12px' }}>Free</span>
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
                padding: '24px 16px',
                boxSizing: 'border-box',
              }}>
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#172B4D', marginBottom: '24px' }}>Resource Overview</h3>
                <div style={{ 
                  width: '100%',
                  overflowX: 'auto',
                  overflowY: 'auto',
                  maxHeight: '300px',
                  WebkitOverflowScrolling: 'touch'
                }}>
                  <table style={{ 
                    width: '100%', 
                    borderCollapse: 'collapse', 
                    minWidth: '800px'
                  }}>
                    <thead style={{ position: 'sticky', top: 0, background: '#f4f5f7', zIndex: 1 }}>
                      <tr style={{ background: '#f4f5f7' }}>
                        <th style={{ padding: '12px 16px', textAlign: 'left', color: '#6B778C', fontWeight: 500, whiteSpace: 'nowrap' }}>Username</th>
                        <th style={{ padding: '12px 16px', textAlign: 'left', color: '#6B778C', fontWeight: 500, whiteSpace: 'nowrap' }}>Email</th>
                        <th style={{ padding: '12px 16px', textAlign: 'left', color: '#6B778C', fontWeight: 500, whiteSpace: 'nowrap' }}>VPN</th>
                        <th style={{ padding: '12px 16px', textAlign: 'left', color: '#6B778C', fontWeight: 500, whiteSpace: 'nowrap' }}>Vpn Start</th>
                        <th style={{ padding: '12px 16px', textAlign: 'left', color: '#6B778C', fontWeight: 500, whiteSpace: 'nowrap' }}>Vpn End</th>
                        <th style={{ padding: '12px 16px', textAlign: 'left', color: '#6B778C', fontWeight: 500, whiteSpace: 'nowrap' }}>Reset VPN password</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((row, idx) => (
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
};

export default InfrastructureDetails;
