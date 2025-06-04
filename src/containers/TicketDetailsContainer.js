import React from 'react';
import { useParams } from 'react-router-dom';
import TicketDetails from '../pages/TicketDetails';

// Assuming mockData is defined elsewhere or will be fetched
const mockData = [
  { type: '📧', reference: 'HR-139', summary: 'Service Request', status: 'WAITING FOR SUPPORT', project: 'TEC', requester: 'John', date: '2025-05-08', time: '07:23', username: 'developer', body: 'This is the body of HR-139 ticket.' },
  { type: '📧', reference: 'ED-138', summary: 'Service Request', status: 'SUCCESS', project: 'TEC', requester: 'John', date: '2025-02-19', time: '07:20', username: 'developer', body: 'This is the body of ED-138 ticket.' },
  { type: '📧', reference: 'UD-137', summary: 'Service Request', status: 'PENDING', project: 'TEC', requester: 'John', date: '2025-04-30', time: '02:35', description: 'User access management', priority: 'Low', assignee: 'IT Support', body: 'This is the body of UD-137 ticket.' },
  { type: '📧', reference: 'ED-136', summary: 'Service Request', status: 'ERROR', project: 'TEC', requester: 'John', date: '2024-11-27', time: '12:12', description: 'Email configuration issue', priority: 'High', assignee: 'Network Team', body: 'This is the body of ED-136 ticket.' },
  // Add other mock data as needed based on your actual data source
];

const getStatusStyle = (status) => {
  const base = {
    fontWeight: 'bold',
    borderRadius: '4px',
    padding: '2px 8px',
    display: 'inline-block',
    fontSize: '1em',
  };
  switch (status?.toLowerCase()) {
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

const TicketDetailsContainer = () => {
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
    <TicketDetails
      ticket={ticket}
      dateObj={dateObj}
      formattedDate={formattedDate}
      formattedTime={formattedTime}
      statusMessage={statusMessage}
      getStatusStyle={getStatusStyle}
    />
  );
};

export default TicketDetailsContainer; 