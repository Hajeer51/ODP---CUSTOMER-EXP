import React, { useState } from 'react';
import Navbar from '../components/Navbar.tsx';
import Sidebar from '../components/Sidebar.tsx';
import '../styles/JourneyMap.css';

// Dashboard-matching colors
const TIMELINE_GRADIENT = 'linear-gradient(90deg, #3a8d5c 0%, #3aa6a6 100%)';
const PILL_COLOR = '#3a8d5c';
const PILL_SELECTED_COLOR = '#3aa6a6';
const PILL_TEXT_COLOR = '#fff';

// SVG icons for each stage (simple, formal)
const stageVisuals = [
  { icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#3aa6a6" strokeWidth="2" fill="#eaf6f3" /><path d="M12 7v5l3 3" stroke="#3aa6a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>, color: '#eaf6f3', border: '#3aa6a6' }, // Awareness
  { icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="#3a8d5c" strokeWidth="2" fill="#f3f8f5" /><path d="M8 12h8" stroke="#3a8d5c" strokeWidth="2" strokeLinecap="round"/></svg>, color: '#f3f8f5', border: '#3a8d5c' }, // Interest
  { icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="#3aa6a6" strokeWidth="2" fill="#eaf6f3" /><path d="M8 8h8v8H8z" stroke="#3aa6a6" strokeWidth="2"/></svg>, color: '#eaf6f3', border: '#3aa6a6' }, // Retention
  { icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#3a8d5c" strokeWidth="2" fill="#f3f8f5" /><path d="M8 12h8" stroke="#3a8d5c" strokeWidth="2" strokeLinecap="round"/></svg>, color: '#f3f8f5', border: '#3a8d5c' }, // Purchase
  { icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#3aa6a6" strokeWidth="2" fill="#eaf6f3" /><path d="M9 12l2 2 4-4" stroke="#3aa6a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>, color: '#eaf6f3', border: '#3aa6a6' }, // Advocacy
];

const statusColors = {
  Completed: '#3a8d5c',
  'In Progress': '#f1c40f',
  Pending: '#b0b0b0',
};

const stages = [
  {
    stage: 'Awareness',
    title: 'ONBOARDING COMPLETE',
    date: '10 January 2023',
    description: 'Customer onboarding process completed successfully.',
    responsible: 'Sarah (Onboarding Specialist)',
    status: 'Completed',
    notes: 'All initial setup tasks, including system configuration and user onboarding, were completed successfully. The customer received a comprehensive welcome email that included key resources and contact information for ongoing support. A follow-up call is scheduled for next week to ensure smooth integration.',
    customerTier: 'Premium',
  },
  {
    stage: 'Interest',
    title: 'First Support Ticket',
    date: '2 August 2024',
    description: 'Customer submitted their first support ticket, indicating an initial query about the platform. The ticket is currently being reviewed and assigned to the most relevant support agent.',
    responsible: 'Ahmed (Support Agent)',
    status: 'In Progress',
    notes: 'Ticket #1234 was opened regarding login issues. The customer reported difficulty accessing their account after a password reset. Investigation is underway to identify the root cause and provide a resolution. Escalation to technical team may be required if basic troubleshooting fails.',
    customerTier: 'Standard',
  },
  {
    stage: 'Retention',
    title: 'Renewal Contract Signed',
    date: '15 September 2024',
    description: 'Customer successfully renewed their contract for an additional period, demonstrating continued satisfaction and commitment to our services. This renewal secures their partnership for the upcoming year.',
    responsible: 'Fatma (Account Manager)',
    status: 'Completed',
    notes: 'Renewal signed for 1 year, ensuring continued service. No discounts or special terms were applied in this renewal. Customer feedback was positive, and they expressed satisfaction with the current service level. Discussions around potential upsell opportunities for next quarter have begun.',
    customerTier: 'Premium',
  },
  {
    stage: 'Purchase',
    title: 'Sent CES Survey',
    date: '3 August 2024',
    description: 'Customer received the Customer Effort Score (CES) survey, designed to gather feedback on the ease of their recent interaction with our support team. Their input is valuable for improving our service delivery.',
    responsible: 'Omar (CSM)',
    status: 'Pending',
    notes: 'Awaiting customer response to the CES survey. The survey was sent via email immediately after their support interaction. We anticipate receiving feedback within 48 hours, which will be analyzed to identify areas for improvement in our customer support processes.',
    customerTier: 'Standard',
  },
  {
    stage: 'Advocacy',
    title: 'Meeting Held',
    date: '16 September 2024',
    description: 'Customer actively participated in an advocacy meeting, sharing their positive experiences with prospective clients. Their willingness to advocate highlights their high level of satisfaction and serves as a valuable testimonial.',
    responsible: 'Layla (Customer Success)',
    status: 'Completed',
    notes: 'Discussed expansion opportunities and gathered comprehensive feedback on product performance and areas for future development. The customer provided valuable insights into market trends and expressed interest in collaborating on a case study. They are highly engaged and willing to serve as a reference.',
    customerTier: 'Enterprise',
  }
];

const expansionDetails = {
  date: '5 May 2025',
  dateScheduledTime: '10:00 AM',
  owner: 'Ahmed Abdullah (CSM)',
  ownerEmailAddress: 'ahmed.csm@omandatapark.com',
  notes: 'Customer inquired about adding 50 new users and bulk license pricing, showing interest in advanced analytics features.',
  nextStep: 'Book upsell demo meeting',
  ticket: '#4567 — Inquiry about additional seats',
  opportunityType: 'Upsell',
  industry: 'Telecom',
  currentUsers: 120,
  requestedExpansion: '+50 users',
  estimatedValue: '3,500 OMR annually',
  cesScore: '9.2 / 10',
  lastContact: '12 May 2025',
  tags: '#HighPotential #Q2Target',
};

const JourneyMap: React.FC = () => {
  const [selectedStageIdx, setSelectedStageIdx] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const selectedStage = stages[selectedStageIdx];
  const visuals = stageVisuals[selectedStageIdx];
  const statusColor = statusColors[selectedStage.status] || '#b0b0b0';

  return (
    <div className="journey-map-page">
      <Navbar />
      <div className="journey-map-layout">
        <Sidebar />
        <main className="journey-map-main">
          <div className="journey-map-header">
            <h1>Customer Journey Map</h1>
          </div>
          {/* Row 1: Timeline Card (full width) */}
          <div className="timeline-row">
            <div className="timeline-card">
              <div className="infographic-timeline">
                <div className="infographic-timeline-line"></div>
                <div className="infographic-timeline-stages">
                  {stages.map((stage, idx) => {
                    const isSelected = selectedStageIdx === idx;
                    return (
                      <div
                        key={stage.stage}
                        className={`infographic-timeline-stage${isSelected ? ' selected' : ''}`}
                        onClick={() => setSelectedStageIdx(idx)}
                        style={{ zIndex: isSelected ? 2 : 1 }}
                      >
                        <div
                          className="infographic-timeline-pill"
                          style={{
                            background: isSelected ? PILL_SELECTED_COLOR : PILL_COLOR,
                            color: PILL_TEXT_COLOR,
                            border: isSelected ? `3px solid ${PILL_SELECTED_COLOR}` : 'none',
                            boxShadow: isSelected ? `0 0 0 4px #fff, 0 0 16px 4px ${PILL_SELECTED_COLOR}` : '0 2px 8px rgba(0,0,0,0.08)',
                          }}
                        >
                          <span className="infographic-timeline-label">{stage.stage}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* Row 2: Two Cards Side by Side */}
          <div className="details-row same-size-cards">
            {/* Card 2: Stage Details */}
            <div className="stage-details-card formal">
              <div className="stage-details-header-compact">
                <div className="stage-details-title-group" style={{ display: 'flex', alignItems: 'baseline', width: '100%', gap: '12px' }}>
                  <span className="stage-details-icon-formal" style={{ background: visuals.color, border: `1.5px solid ${visuals.border}` }}>{visuals.icon}</span>
                  <h2 className="stage-details-title-formal">{selectedStage.title}</h2>
                  <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px' }}>
                    <span className="stage-details-badge-formal" style={{ border: `1.5px solid ${visuals.border}`, color: visuals.border }}>{selectedStage.stage}</span>
                    <span className="stage-details-status-badge-formal" style={{ background: statusColor }}>{selectedStage.status}</span>
                  </div>
                </div>
                <div className="stage-details-meta-grid">
                  <div className="stage-details-meta-item">
                    <span className="icon">📅</span>
                    <span className="label">Date:</span> <span>{selectedStage.date}</span>
                  </div>
                  <div className="stage-details-meta-item">
                    <span className="icon">💼</span>
                    <span className="label">Customer Tier:</span> <span>{selectedStage.customerTier}</span>
                  </div>
                  <div className="stage-details-meta-item">
                    <span className="icon">👤</span>
                    <span className="label">Responsible:</span> <span>{selectedStage.responsible}</span>
                  </div>
                </div>
              </div>
              <div className="stage-details-divider"></div>
              <div className="stage-details-description-formal">{selectedStage.description}</div>
              <div className="stage-details-info-row" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                <span className="stage-details-info-label with-icon"><span className="icon">📝</span> Notes:</span>
                <p style={{ marginLeft: '28px', marginTop: '4px' }}>{selectedStage.notes}</p>
              </div>
            </div>
            {/* Card 3: Expansion Opportunity */}
            <div className="expansion-section">
              <div className="expansion-card">
                <h2 style={{ color: '#3aa6a6' }}>Expansion Opportunity</h2>
                <div className="expansion-content">
                  <div className="expansion-item">
                    <span className="icon">📅</span>
                    <div className="item-content">
                      <strong>Date</strong>
                      <p>{expansionDetails.date} <span style={{ color: '#888', fontSize: '0.9em' }}>{expansionDetails.dateScheduledTime}</span></p>
                    </div>
                  </div>
                  <div className="expansion-item">
                    <span className="icon">👤</span>
                    <div className="item-content">
                      <strong>Owner</strong>
                      <p>{expansionDetails.owner}</p>
                      <p style={{ fontSize: '0.9em', color: '#666' }}>{expansionDetails.ownerEmailAddress}</p>
                    </div>
                  </div>
                  <div className="expansion-item">
                    <span className="icon">📝</span>
                    <div className="item-content">
                      <strong>Notes</strong>
                      <p>{expansionDetails.notes}</p>
                    </div>
                  </div>
                  <div className="expansion-item">
                    <span className="icon">➡️</span>
                    <div className="item-content">
                      <strong>Next Step</strong>
                      <p>{expansionDetails.nextStep}</p>
                    </div>
                  </div>
                  <div className="expansion-item">
                    <span className="icon">🎟️</span>
                    <div className="item-content">
                      <strong>Related Ticket</strong>
                      <p>{expansionDetails.ticket}</p>
                    </div>
                  </div>
                </div>
                <div className="action-buttons" style={{ marginTop: '24px' }}>
                  <button className="action-button secondary">Send Proposal</button>
                  <button className="action-button tertiary">Mark as Closed</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

// Add rotation animation for the icon
const style = document.createElement('style');
style.innerHTML = `
  .rotate-icon {
    transform: rotate(90deg);
    transition: transform 0.2s ease-in-out;
  }
`;
document.head.appendChild(style);

export default JourneyMap;
