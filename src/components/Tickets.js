import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


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

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '20px',
};
const thtdStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  textAlign: 'left',
};
const thStyle = {
  ...thtdStyle,
  background: '#f4f5f7',
  fontWeight: 'bold',
};
const statusStyle = {
  background: '#e9f2ff',
  color: '#0052cc',
  fontWeight: 'bold',
  borderRadius: '4px',
  padding: '2px 8px',
  display: 'inline-block',
};

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
    
const Details = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const filteredData = mockData.filter(row =>
    Object.values(row).some(val =>
      val.toLowerCase().includes(search.toLowerCase())
    )
  );
  return (
    <div style={{ marginTop: '80px', display: 'flex', justifyContent: 'left', width: '100%' }}>
      <div style={{
        background: '#fff',
        border: '1px solid #e5e8ec',
        borderRadius: 8,
        boxShadow: '0 2px 8px rgba(9,30,66,0.06)',
        padding: 32,
        width: '100%',
        minHeight: '80vh',
        marginLeft: 0,
        marginRight: 0,
        boxSizing: 'border-box',
      }}>
        <h2>Requests</h2>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ marginBottom: '16px', padding: '8px', width: '300px', fontSize: '1em' }}
          />
        </div>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Type</th>
              <th style={thStyle}>Reference</th>
              <th style={thStyle}>Summary</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Service project</th>
              <th style={thStyle}>Requester</th>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Time</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, idx) => (
              <tr key={idx}>
                <td style={thtdStyle}><span style={{fontSize: '1.5em', color: '#ffab00'}}>✉️</span></td>
                <td style={thtdStyle}>
                  <span
                    style={{ color: '#0052cc', textDecoration: 'underline', cursor: 'pointer' }}
                    onClick={() => navigate(`/tickets/${row.reference}`)}
                  >
                    {row.reference}
                  </span>
                </td>
                <td style={thtdStyle}>{row.summary}</td>
                <td style={thtdStyle}><span style={getStatusStyle(row.status)}>{row.status}</span></td>
                <td style={thtdStyle}>{row.project}</td>
                <td style={thtdStyle}>{row.requester}</td>
                <td style={thtdStyle}>{row.date}</td>
                <td style={thtdStyle}>{row.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Details;
