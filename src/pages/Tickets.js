import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.tsx';
import Sidebar from '../components/Sidebar.tsx';




const mockData = [
  { type: '📧', reference: 'HR-139', summary: 'Service Request', status: 'WAITING FOR SUPPORT', project: 'TEC', requester: 'John', date: '2024-12-27', time: '21:50' },
  { type: '📧', reference: 'ED-138', summary: 'Service Request', status: 'SUCCESS', project: 'TEC', requester: 'John', date: '2025-02-19', time: '07:20' },
  { type: '📧', reference: 'UD-137', summary: 'Service Request', status: 'PENDING', project: 'TEC', requester: 'John', date: '2025-04-30', time: '02:35' },
  { type: '📧', reference: 'ED-136', summary: 'Service Request', status: 'ERROR', project: 'TEC', requester: 'John', date: '2024-11-27', time: '12:12' },
  { type: '📧', reference: 'SS-135', summary: 'Service Request', status: 'SUCCESS', project: 'CR', requester: 'Josh', date: '2025-05-27', time: '09:34' },
  { type: '📧', reference: 'SS-134', summary: 'Service Request', status: 'PENDING', project: 'CR', requester: 'Josh', date: '2025-05-27', time: '16:20' },
  { type: '📧', reference: 'CR-132', summary: 'Service Request', status: 'ERROR', project: 'CR', requester: 'Josh', date: '2025-05-27', time: '19:09' },
  { type: '📧', reference: 'AD-127', summary: 'Service Request', status: 'WAITING FOR SUPPORT', project: 'CR', requester: 'Josh', date: '2025-05-27', time: '22:16' },
  { type: '📧', reference: 'UD-126', summary: 'Service Request', status: 'WAITING FOR SUPPORT', project: 'TEC', requester: 'John', date: '2025-05-27', time: '03:30' },
  { type: '📧', reference: 'SS-125', summary: 'Service Request', status: 'PENDING', project: 'TEC', requester: 'John', date: '2025-05-27', time: '05:34' },
  { type: '📧', reference: 'ED-124', summary: 'Service Request', status: 'SUCCESS', project: 'TEC', requester: 'John', date: '2025-05-27', time: '11:48' },
  { type: '📧', reference: 'CR-123', summary: 'Service Request', status: 'ERROR', project: 'CR', requester: 'Josh', date: '2025-01-18', time: '19:59' },
  { type: '📧', reference: 'CR-122', summary: 'Service Request', status: 'WAITING FOR SUPPORT', project: 'CR', requester: 'Josh', date: '2025-02-17', time: '18:09' },
  { type: '📧', reference: 'CR-123', summary: 'Service Request', status: 'PENDING', project: 'CR', requester: 'Josh', date: '2025-03-27', time: '15:30' },
];

const getStatusStyle = (status) => {
  const base = {
    fontWeight: 'bold',
    borderRadius: '4px',
    padding: '2px 8px',
    display: 'inline-block',
  };
  switch (status.toLowerCase()) {
    case 'success':
      return { ...base, background: '#e6ffed', color: '#00875a' };
    case 'pending':
      return { ...base, background: '#fffbe6', color: '#ffab00' };
    case 'error':
      return { ...base, background: '#ffebe6', color: '#de350b' };  
    case 'waiting for support':
      return { ...base, background: '#e9f2ff', color: '#0052cc' };
    default:
      return { ...base, background: '#f4f5f7', color: '#333' };
  }
};

const Tickets = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const filteredData = mockData.filter(row =>
    Object.values(row).some(val =>
      val.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar />
        <div style={{ 
          flex: 1,
          padding: '24px',
          marginTop: '64px',
          marginLeft: '240px', // Sidebar width
          backgroundColor: '#f4f5f7',
          minHeight: 'calc(100vh - 64px)'
        }}>
          <div style={{
            background: '#fff',
            border: '1px solid #e5e8ec',
            borderRadius: 8,
            boxShadow: '0 2px 8px rgba(9,30,66,0.06)',
            padding: '24px',
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              marginBottom: '24px' 
            }}>
              <h2 style={{ 
                fontSize: '24px', 
                fontWeight: 600, 
                color: '#172B4D',
                margin: 0 
              }}>Requests</h2>
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ 
                  padding: '8px 12px',
                  width: '300px',
                  fontSize: '14px',
                  border: '1px solid #e5e8ec',
                  borderRadius: '4px',
                  outline: 'none'
                }}
              />
            </div>
            <div style={{
              overflowX: 'auto',
              borderRadius: '4px',
              border: '1px solid #e5e8ec'
            }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                minWidth: '800px'
              }}>
                <thead>
                  <tr>
                    <th style={{ 
                      padding: '12px 16px', 
                      textAlign: 'left', 
                      background: '#f4f5f7', 
                      borderBottom: '2px solid #e5e8ec',
                      color: '#6B778C',
                      fontWeight: 500,
                      fontSize: '14px'
                    }}>Type</th>
                    <th style={{ 
                      padding: '12px 16px', 
                      textAlign: 'left', 
                      background: '#f4f5f7', 
                      borderBottom: '2px solid #e5e8ec',
                      color: '#6B778C',
                      fontWeight: 500,
                      fontSize: '14px'
                    }}>Reference</th>
                    <th style={{ 
                      padding: '12px 16px', 
                      textAlign: 'left', 
                      background: '#f4f5f7', 
                      borderBottom: '2px solid #e5e8ec',
                      color: '#6B778C',
                      fontWeight: 500,
                      fontSize: '14px'
                    }}>Summary</th>
                    <th style={{ 
                      padding: '12px 16px', 
                      textAlign: 'left', 
                      background: '#f4f5f7', 
                      borderBottom: '2px solid #e5e8ec',
                      color: '#6B778C',
                      fontWeight: 500,
                      fontSize: '14px'
                    }}>Status</th>
                    <th style={{ 
                      padding: '12px 16px', 
                      textAlign: 'left', 
                      background: '#f4f5f7', 
                      borderBottom: '2px solid #e5e8ec',
                      color: '#6B778C',
                      fontWeight: 500,
                      fontSize: '14px'
                    }}>Service project</th>
                    <th style={{ 
                      padding: '12px 16px', 
                      textAlign: 'left', 
                      background: '#f4f5f7', 
                      borderBottom: '2px solid #e5e8ec',
                      color: '#6B778C',
                      fontWeight: 500,
                      fontSize: '14px'
                    }}>Requester</th>
                    <th style={{ 
                      padding: '12px 16px', 
                      textAlign: 'left', 
                      background: '#f4f5f7', 
                      borderBottom: '2px solid #e5e8ec',
                      color: '#6B778C',
                      fontWeight: 500,
                      fontSize: '14px'
                    }}>Date</th>
                    <th style={{ 
                      padding: '12px 16px', 
                      textAlign: 'left', 
                      background: '#f4f5f7', 
                      borderBottom: '2px solid #e5e8ec',
                      color: '#6B778C',
                      fontWeight: 500,
                      fontSize: '14px'
                    }}>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((row, idx) => (
                    <tr key={idx} style={{ 
                      borderBottom: '1px solid #e5e8ec',
                      transition: 'background-color 0.2s',
                      ':hover': { backgroundColor: '#f4f5f7' }
                    }}>
                      <td style={{ padding: '12px 16px' }}><span style={{fontSize: '1.5em'}}>✉️</span></td>
                      <td style={{ padding: '12px 16px' }}>
                        <span
                          style={{ 
                            color: '#0052cc', 
                            textDecoration: 'underline', 
                            cursor: 'pointer',
                            fontWeight: 500
                          }}
                          onClick={() => navigate(`/tickets/${row.reference}`)}
                        >
                          {row.reference}
                        </span>
                      </td>
                      <td style={{ padding: '12px 16px', color: '#172B4D' }}>{row.summary}</td>
                      <td style={{ padding: '12px 16px' }}><span style={getStatusStyle(row.status)}>{row.status}</span></td>
                      <td style={{ padding: '12px 16px', color: '#172B4D' }}>{row.project}</td>
                      <td style={{ padding: '12px 16px', color: '#172B4D' }}>{row.requester}</td>
                      <td style={{ padding: '12px 16px', color: '#172B4D' }}>{row.date}</td>
                      <td style={{ padding: '12px 16px', color: '#172B4D' }}>{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;