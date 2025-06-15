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
    date: '15 June 2024',
    description: 'Customer onboarding process completed successfully.',
    responsible: 'Sarah (Onboarding Specialist)',
    status: 'Completed',
    notes: 'All initial setup tasks finished. Customer received welcome email.'
  },
  {
    stage: 'Interest',
    title: 'First Support Ticket',
    date: '2 August 2024',
    description: 'Customer submitted their first support ticket.',
    responsible: 'Ahmed (Support Agent)',
    status: 'In Progress',
    notes: 'Ticket #1234 opened regarding login issues.'
  },
  {
    stage: 'Retention',
    title: 'Renewal Contract Signed',
    date: '15 September 2024',
    description: 'Customer renewed their contract.',
    responsible: 'Fatma (Account Manager)',
    status: 'Completed',
    notes: 'Renewal signed for 1 year. No discounts applied.'
  },
  {
    stage: 'Purchase',
    title: 'Sent CES Survey',
    date: '3 August 2024',
    description: 'Customer received CES survey.',
    responsible: 'Omar (CSM)',
    status: 'Pending',
    notes: 'Awaiting customer response to survey.'
  },
  {
    stage: 'Advocacy',
    title: 'Meeting Held',
    date: '16 September 2024',
    description: 'Customer attended advocacy meeting.',
    responsible: 'Layla (Customer Success)',
    status: 'Completed',
    notes: 'Discussed expansion opportunities and feedback.'
  }
];

const expansionDetails = {
  date: '5 May 2025',
  owner: 'Ahmed (CSM)',
  notes: 'Customer asked about adding 50 new users',
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
              <div className="stage-details-header-formal">
                <span className="stage-details-icon-formal" style={{ background: visuals.color, border: `1.5px solid ${visuals.border}` }}>{visuals.icon}</span>
                <span className="stage-details-badge-formal" style={{ border: `1.5px solid ${visuals.border}`, color: visuals.border }}>{selectedStage.stage}</span>
                <span className="stage-details-status-badge-formal" style={{ background: statusColor }}>{selectedStage.status}</span>
              </div>
              <div className="stage-details-title-formal">{selectedStage.title}</div>
              <div className="stage-details-date-formal">{selectedStage.date}</div>
              <div className="stage-details-divider"></div>
              <div className="stage-details-description-formal">{selectedStage.description}</div>
              <div className="stage-details-info-row">
                <span className="stage-details-info-label">Responsible:</span> <span>{selectedStage.responsible}</span>
              </div>
              <div className="stage-details-info-row">
                <span className="stage-details-info-label">Notes:</span> <span>{selectedStage.notes}</span>
              </div>
              <div className="stage-details-watermark">
                <svg viewBox="0 0 90 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="90" height="40">
                  <ellipse cx="20" cy="20" rx="20" ry="20" fill="#3a8d5c" />
                  <ellipse cx="50" cy="20" rx="20" ry="20" fill="#3aa6a6" />
                  <ellipse cx="70" cy="20" rx="10" ry="10" fill="#1976d2" />
                </svg>
              </div>
            </div>
            {/* Card 3: Expansion Opportunity */}
            <div className="expansion-section">
              <div className="expansion-card">
                <h2>Expansion Opportunity</h2>
                <div className="expansion-content">
                  <div className="expansion-item">
                    <span className="icon">📅</span>
                    <div className="item-content">
                      <strong>Date</strong>
                      <p>{expansionDetails.date}</p>
                    </div>
                  </div>
                  <div className="expansion-item">
                    <span className="icon">👤</span>
                    <div className="item-content">
                      <strong>Owner</strong>
                      <p>{expansionDetails.owner}</p>
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
                {showDetails && (
                  <div className="expansion-details-card">
                    <h3>🔍 Expansion Opportunity Details</h3>
                    <ul>
                      <li><strong>Date:</strong> {expansionDetails.date}</li>
                      <li><strong>Owner:</strong> {expansionDetails.owner}</li>
                      <li><strong>Notes:</strong> {expansionDetails.notes}</li>
                      <li><strong>Next Step:</strong> {expansionDetails.nextStep}</li>
                      <li><strong>Related Ticket:</strong> {expansionDetails.ticket}</li>
                      <li><strong>Opportunity Type:</strong> {expansionDetails.opportunityType}</li>
                      <li><strong>Customer Industry:</strong> {expansionDetails.industry}</li>
                      <li><strong>Current Users:</strong> {expansionDetails.currentUsers}</li>
                      <li><strong>Requested Expansion:</strong> {expansionDetails.requestedExpansion}</li>
                      <li><strong>Estimated Value:</strong> {expansionDetails.estimatedValue}</li>
                      <li><strong>CES Score:</strong> {expansionDetails.cesScore}</li>
                      <li><strong>Last Contact:</strong> {expansionDetails.lastContact}</li>
                      <li><strong>Tags:</strong> {expansionDetails.tags}</li>
                    </ul>
                    <div className="action-buttons">
                      <button>Book Demo</button>
                      <button>Send Proposal</button>
                      <button>Mark as Closed</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default JourneyMap;
