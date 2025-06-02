import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar.tsx';
import Sidebar from '../components/Sidebar.tsx';

const mockData = [
  { type: '📧', reference: 'HR-139', summary: 'Service Request', status: 'WAITING FOR SUPPORT', project: 'TEC', requester: 'John', date: '2025-05-08', time: '07:23', username: 'developer' },
  { type: '📧', reference: 'ED-138', summary: 'Service Request', status: 'SUCCESS', project: 'TEC', requester: 'John', date: '2025-02-19', time: '07:20', username: 'developer' },
  { type: '📧', reference: 'UD-137', summary: 'Service Request', status: 'PENDING', project: 'TEC', requester: 'John', date: '2025-04-30', time: '02:35', description: 'User access management', priority: 'Low', assignee: 'IT Support' },
  { type: '📧', reference: 'ED-136', summary: 'Service Request', status: 'ERROR', project: 'TEC', requester: 'John', date: '2024-11-27', time: '12:12', description: 'Email configuration issue', priority: 'High', assignee: 'Network Team' },
  { type: '📧', reference: 'SS-135', summary: 'Service Request', status: 'SUCCESS', project: 'CR', requester: 'Josh', date: '2025-05-27', time: '09:34', description: 'Software installation request', priority: 'Medium', assignee: 'Support Team' },
  { type: '📧', reference: 'SS-134', summary: 'Service Request', status: 'PENDING', project: 'CR', requester: 'Josh', date: '2025-05-27', time: '16:20', description: 'System backup request', priority: 'High', assignee: 'DBA Team' },
  { type: '📧', reference: 'CR-132', summary: 'Service Request', status: 'ERROR', project: 'CR', requester: 'Josh', date: '2025-05-27', time: '19:09', description: 'Critical system error', priority: 'High', assignee: 'System Team' },
  { type: '📧', reference: 'AD-127', summary: 'Service Request', status: 'WAITING FOR SUPPORT', project: 'CR', requester: 'Josh', date: '2025-05-27', time: '22:16', description: 'Account deactivation request', priority: 'Medium', assignee: 'Admin Team' },
  { type: '📧', reference: 'UD-126', summary: 'Service Request', status: 'WAITING FOR SUPPORT', project: 'TEC', requester: 'John', date: '2025-05-27', time: '03:30', description: 'User data export request', priority: 'Low', assignee: 'Support Team' },
  { type: '📧', reference: 'SS-125', summary: 'Service Request', status: 'PENDING', project: 'TEC', requester: 'John', date: '2025-05-27', time: '05:34', description: 'Security scan request', priority: 'High', assignee: 'Security Team' },
  { type: '📧', reference: 'ED-124', summary: 'Service Request', status: 'SUCCESS', project: 'TEC', requester: 'John', date: '2025-05-27', time: '11:48', description: 'Email template update', priority: 'Low', assignee: 'Support Team' },
  { type: '📧', reference: 'CR-123', summary: 'Service Request', status: 'ERROR', project: 'CR', requester: 'Josh', date: '2025-01-18', time: '19:59', description: 'Critical system failure', priority: 'High', assignee: 'System Team' },
  { type: '📧', reference: 'CR-122', summary: 'Service Request', status: 'WAITING FOR SUPPORT', project: 'CR', requester: 'Josh', date: '2025-02-17', time: '18:09', description: 'Customer report generation', priority: 'Medium', assignee: 'Report Team' },
  { type: '📧', reference: 'CR-123', summary: 'Service Request', status: 'PENDING', project: 'CR', requester: 'Josh', date: '2025-03-27', time: '15:30', description: 'Customer data update', priority: 'Low', assignee: 'Data Team' },
];

const getStatusStyle = (status) => {
  const base = {
    fontWeight: 'bold',
    borderRadius: '4px',
    padding: '2px 8px',
    display: 'inline-block',
    fontSize: '1em',
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

const TicketDetails = () => {
  const { reference } = useParams();
  const ticket = mockData.find(t => t.reference === reference);

  if (!ticket) {
    return <div>Ticket not found</div>;
  }

  // Format date
  const dateObj = new Date(ticket.date + 'T' + ticket.time);
  const formattedDate = dateObj.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: '2-digit' });
  const formattedTime = dateObj.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false });

  let statusMessage;
  switch ((ticket.status || '').toLowerCase()) {
    case 'waiting for support':
      statusMessage = 'This ticket is waiting.';
      break;
    case 'pending':
      statusMessage = 'This ticket is pending.';
      break;
    case 'error':
      statusMessage = 'This ticket has an error.';
      break;
    case 'success':
      statusMessage = 'This ticket was created successfully.';
      break;
    default:
      statusMessage = `This ticket was automatically created via the form submission by ${ticket.username || 'developer'}.`;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <div style={{ flex: 1, maxWidth: 1200, margin: '40px auto', padding: '0px' }}>
          {/* Breadcrumb */}
          <div style={{ fontSize: '1.05em', marginBottom: 70 }}>
            <Link to="/" style={{ color: '#0052cc', textDecoration: 'none', fontWeight: 500 }}>Help Center</Link>
            <span style={{ color: '#6b778c', margin: '0 8px' }}>/</span>
            <span style={{ color: '#0052cc', textDecoration: 'none', fontWeight: 500 }}>{ticket.project}</span>
            <span style={{ color: '#6b778c', margin: '0 8px' }}>/</span>
            <span style={{ color: '#0052cc', textDecoration: 'underline', fontWeight: 500 }}>{ticket.reference}</span>
          </div>
          <div style={{ display: 'flex', gap: 15, alignItems: 'flex-start' }}>
            {/* Main content */}
            <div style={{ flex: 2, minWidth: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <h1 style={{ fontSize: '2.1em', fontWeight: 700, margin: '0 0 24px 0', maxWidth: 700, width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>{ticket.summary}</h1>
              </div>
              {/* Card */}
              <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <div style={{ background: '#fff', border: '1px solid #e5e8ec', borderRadius: 6, padding: 24, marginBottom: 32, maxWidth: 700, width: '100%', margin: '0 auto' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#253858', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, marginRight: 12 }}>
                      {ticket.requester.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </div>
                    <span style={{ fontWeight: 600 }}>{ticket.requester}</span>
                    <span style={{ color: '#6b778c', marginLeft: 8, fontSize: 15 }}>
                      raised this on {dateObj.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: '2-digit' })} {ticket.time} AM
                    </span>
                    <span style={{ marginLeft: 'auto', color: '#0052cc', cursor: 'pointer', fontWeight: 500, fontSize: 15 }}>Hide details</span>
                  </div>
                  <div style={{ marginLeft: 52 }}>
                    <div style={{ fontWeight: 600, marginBottom: 4 }}>Body</div>
                    <div style={{ color: '#172b4d', whiteSpace: 'pre-line', fontSize: 16 }}>{ticket.body}</div>
                    <div style={{ color: '#172b4d', fontSize: 16, marginTop: 8 }}>
                      {statusMessage}
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <div style={{ maxWidth: 700, width: '100%', margin: '0 auto' }}>
                  <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 12, gap: 10 }}>Activity</div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <div style={{ maxWidth: 700, width: '100%', margin: '0 auto' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#253858', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 16 }}>
                      {ticket.requester.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </div>
                    <input type="text" placeholder="Add a comment" style={{ flex: 1, border: '1px solid #e5e8ec', borderRadius: 4, padding: '10px 14px', fontSize: 15, outline: 'none' }} />
                  </div>
                </div>
              </div>
            </div>
            {/* Sidebar */}
            <div style={{ flex: 0.5, minWidth: 100}}>
              <div style={{ marginBottom: 18 }}>
                <div style={{ fontWeight: 600, marginBottom: 4 }}>Status</div>
                <span style={getStatusStyle(ticket.status)}>{ticket.status}</span>
              </div>
              <div style={{ fontWeight: 600, marginBottom: 4 }}>Notifications on</div>
              <div style={{ color: '#42526e', marginBottom: 18 }}>
                <span style={{ fontSize: 18, marginRight: 6 }}>🔔</span>Notifications on
              </div>
              <div style={{ fontWeight: 600, marginBottom: 4 }}>Request type</div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 18 }}>
                <span style={{ background: '#fffbe6', border: '1.5px solid #ffab00', borderRadius: 4, padding: '2px 6px', marginRight: 8, fontSize: 18 }}>✉️</span>
                <span style={{ color: '#42526e' }}>Email request</span>
              </div>
              <div style={{ fontWeight: 600, marginBottom: 4 }}>Shared with</div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 18 }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#253858', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 15, marginRight: 8 }}>
                  {ticket.requester.split(' ').map(n => n[0]).join('').toUpperCase()}
                </div>
                <div>
                  <div style={{ fontWeight: 500 }}>{ticket.requester}</div>
                  <div style={{ color: '#6b778c', fontSize: 13 }}>Creator</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', color: '#0052cc', fontWeight: 500, cursor: 'pointer', fontSize: 16 }}>
                <span style={{ fontSize: 22, marginRight: 6 }}>+</span>Share
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails; 