import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const mockData = [
  { type: '📧', reference: 'HR-139', summary: 'Service Request', status: 'WAITING FOR SUPPORT', project: 'TEC', requester: 'John', date: '2025-05-08', time: '07:23', username: 'developer' },
  { type: '📧', reference: 'ED-138', summary: 'Service Request', status: 'SUCCESS', project: 'TEC', requester: 'John', date: '2025-02-19', time: '07:20' },
  { type: '📧', reference: 'UD-137', summary: 'Service Request', status: 'PENDING', project: 'TEC', requester: 'John', date: '2025-04-30', time: '02:35' },
  { type: '📧', reference: 'ED-136', summary: 'Service Request', status: 'ERROR', project: 'TEC', requester: 'John', date: '2024-11-27', time: '12:12' },
  { type: '📧', reference: 'SS-135', summary: 'Service Request', status: 'SUCCESS', project: 'CR', requester: 'Josh', date: '2025-05-27', time: '09:34' },
  { type: '📧', reference: 'SS-134', summary: 'Service Request', status: 'PENDING', project: 'CR', requester: 'Josh', date: '2025-05-27', time: '16:20' },
  { type: '📧', reference: 'CR-132', summary: 'Service Request', status: 'ERROR', project: 'CR', requester: 'Josh', date: '2025-05-27', time: '19:09' },
  { type: '📧', reference: 'AD-127', summary: 'Service Request', status: 'WAITING FOR SUPPORT', project: 'CR', requester: 'Josh', date: '2025-05-27', time: '22:16' },
  { type: '📧', reference: 'UD-126', summary: 'Service Request', status: 'WAITING FOR SUPPORT', project: 'TEC', requester: 'John', date: '2025-05-27', time: '03:30' },
  { type: '📧', reference: 'SS-125', summary: 'Service Request', status: 'PENDING', project: 'TEC', requester: 'John', date: '2025-05-27', time: '05:34' },
  { type: '📧', reference: 'CR-124', summary: 'Service Request', status: 'SUCCESS', project: 'TEC', requester: 'John', date: '2025-05-27', time: '11:48' },
  { type: '📧', reference: 'CR-123', summary: 'Service Request', status: 'ERROR', project: 'CR', requester: 'Josh', date: '2025-01-18', time: '19:59' },
  { type: '📧', reference: 'CR-122', summary: 'Service Request', status: 'WAITING FOR SUPPORT', project: 'CR', requester: 'Josh', date: '2025-02-17', time: '18:09' },
  { type: '📧', reference: 'CR-123', summary: 'Service Request', status: 'PENDING', project: 'CR', requester: 'Josh', date: '2025-03-27', time: '15:30' },
];

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '40px',
  marginTop: '32px',
  fontFamily: 'Segoe UI, Arial, sans-serif',
};
const mainStyle = {
  flex: 2,
  background: '#fff',
  border: '1px solid #ddd',
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
  padding: '0',
  minWidth: '420px',
};
const sidebarStyle = {
  flex: 1,
  background: '#fff',
  border: '1px solid #ddd',
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
  padding: '32px 24px',
  minWidth: '320px',
  maxWidth: '400px',
  marginTop: '56px',
  marginLeft: '32px',
};
const headerStyle = {
  margin: '32px auto 0',
  maxWidth: '900px',
  padding: '0 8px',
};
const breadcrumbStyle = {
  color: '#0052cc',
  fontSize: '1em',
  marginBottom: '8px',
};
const titleStyle = {
  fontSize: '2.2em',
  fontWeight: 700,
  margin: '0 0 24px 0',
};
const avatarStyle = {
  width: 44,
  height: 44,
  borderRadius: '50%',
  background: '#253858',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 700,
  fontSize: '1.3em',
  marginRight: 16,
};
const userRowStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: 8,
  marginTop: 0,
};
const userNameStyle = { fontWeight: 700, fontSize: '1.1em' };
const subTextStyle = { color: '#555', fontSize: '1em', marginLeft: 4 };
const sectionTitleStyle = { fontWeight: 700, fontSize: '1.1em', margin: '24px 0 8px 0' };
const bodyBoxStyle = { background: '#f4f5f7', borderRadius: 8, padding: '16px', marginBottom: 16 };
const activityBoxStyle = { marginTop: 24 };
const commentAvatarStyle = { ...avatarStyle, width: 36, height: 36, fontSize: '1em', marginRight: 12 };
const commentBoxStyle = { width: '100%', padding: 8, fontSize: '1em', borderRadius: 4, border: '1px solid #ccc', marginTop: 8 };
const labelStyle = { fontWeight: 'bold', marginRight: 8 };
const rowStyle = { marginBottom: 16, display: 'flex', alignItems: 'center' };
const statusStyle = {
  fontWeight: 'bold',
  borderRadius: '4px',
  padding: '2px 8px',
  display: 'inline-block',
  fontSize: '1em',
};
const getStatusStyle = (status) => {
  switch (status.toLowerCase()) {
    case 'success':
      return { ...statusStyle, background: '#e6ffed', color: '#00875a' };
    case 'pending':
      return { ...statusStyle, background: '#fffbe6', color: '#ffab00' };
    case 'error':
      return { ...statusStyle, background: '#ffebe6', color: '#de350b' };
    case 'waiting for support':
      return { ...statusStyle, background: '#e9f2ff', color: '#0052cc' };
    default:
      return { ...statusStyle, background: '#f4f5f7', color: '#333' };
  }
};

const DetailsCard = () => {
  const { reference } = useParams();
  const ticket = mockData.find(row => row.reference === reference);
  const [comment, setComment] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem(`comment_${reference}`);
    if (saved) setComment(saved);
  }, [reference]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
    localStorage.setItem(`comment_${reference}`, e.target.value);
  };

  if (!ticket) return <div style={{textAlign:'center',marginTop:40}}>Ticket not found.</div>;

  // Get initials for avatar
  const initials = ticket.requester.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <>
      <div style={headerStyle}>
        <div style={breadcrumbStyle}>
          <span style={{color:'#0052cc',cursor:'pointer'}}>Help Center</span> / <span style={{color:'#0052cc',cursor:'pointer'}}>HR</span> / <span style={{color:'#253858',fontWeight:600}}> {ticket.reference}</span>
        </div>
        <div style={titleStyle}>Service Request</div>
      </div>
      <div style={containerStyle}>
        {/* Main Card */}
        <div style={mainStyle}>
          <div style={{padding:'32px'}}>
            {/* User info */}
            <div style={userRowStyle}>
              <div style={avatarStyle}>{initials}</div>
              <div>
                <span style={userNameStyle}>{ticket.requester}</span>
                <span style={subTextStyle}>raised this on {ticket.date} {ticket.time}</span>
              </div>
            </div>
            {/* Body section */}
            <div style={sectionTitleStyle}>Body</div>
            <div style={bodyBoxStyle}>
              <div><span style={labelStyle}>Username:</span> {ticket.username || 'developer'}</div>
              <div style={{marginTop:8}}>
                {ticket.status.toLowerCase() === 'waiting for support' && 'This ticket is waiting'}
                {ticket.status.toLowerCase() === 'pending' && 'This ticket is pending'}
                {ticket.status.toLowerCase() === 'error' && 'This ticket has an error'}
                {ticket.status.toLowerCase() === 'success' && 'This ticket was created successfully'}
              </div>
            </div>
            {/* Activity section */}
            <div style={sectionTitleStyle}>Activity</div>
            <div style={activityBoxStyle}>
              <div style={{display:'flex',alignItems:'flex-start'}}>
                <div style={commentAvatarStyle}>{initials}</div>
                <div style={{flex:1}}>
                  <textarea
                    id="comment"
                    value={comment}
                    onChange={handleCommentChange}
                    rows={3}
                    style={commentBoxStyle}
                    placeholder="Add a comment"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sidebar */}
        <div style={sidebarStyle}>
          <div style={{marginBottom:24}}>
            <div style={{fontWeight:600,marginBottom:4}}>Status</div>
            <span style={getStatusStyle(ticket.status)}>{ticket.status}</span>
          </div>
          <div style={{marginBottom:24}}>
            <span style={{display:'flex',alignItems:'center',gap:8}}>
              <span style={{fontSize:'1.2em'}}>🔔</span> Notifications on
            </span>
          </div>
          <div style={{marginBottom:24}}>
            <div style={{fontWeight:600,marginBottom:4}}>Request type</div>
            <span style={{display:'flex',alignItems:'center',gap:8}}>
              <span style={{fontSize:'1.2em',background:'#FFFAE6',borderRadius:4,padding:'2px 6px',marginRight:4}}>📧</span> Email request
            </span>
          </div>
          <div style={{marginBottom:24}}>
            <div style={{fontWeight:600,marginBottom:4}}>Shared with</div>
            <div style={{display:'flex',alignItems:'center',gap:8}}>
              <div style={avatarStyle}>{initials}</div>
              <div>
                <div style={{fontWeight:600}}>{ticket.requester}</div>
                <div style={{fontSize:'0.95em',color:'#888'}}>Creator</div>
              </div>
            </div>
          </div>
          <div style={{marginTop:24}}>
            <span style={{display:'flex',alignItems:'center',gap:8,cursor:'pointer',color:'#0052cc',fontWeight:600}}>
              <span style={{fontSize:'1.2em'}}>+</span> Share
            </span>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default DetailsCard; 