import React from 'react';
import Navbar from '../components/Navbar.tsx';
import Sidebar from '../components/Sidebar.tsx';
import '../styles/JourneyMap.css';


const JourneyMap: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="journey-map-wrapper">
          <Sidebar />
          <div style={{ flex: 2 }} className="journey-map-container" style={{ marginTop: '250px' }}>
            <div className="content">
              <h1>Journey Map</h1>
              <div className="journey-map-timeline">
                <div className="timeline">
                  <div className="timeline-event completed">
                    <div className="icon">✔️</div>
                    <div className="event-label">Onboarding Complete</div>
                    <div className="event-date">15 Jan 2025</div>
                  </div>
                  <div className="timeline-event support">
                    <div className="icon">⚠️</div>
                    <div className="event-label">First Support Ticket Opened</div>
                    <div className="event-date">5 Feb 2025</div>
                  </div>
                  <div className="timeline-event">
                    <div className="icon">📩</div>
                    <div className="event-label">Sent CES Survey</div>
                    <div className="event-date"></div>
                  </div>
                  <div className="timeline-event">
                    <div className="icon">📅</div>
                    <div className="event-label">CSAM Meeting Held</div>
                    <div className="event-date">30 Apr 2025</div>
                  </div>
                  <div className="timeline-event current">
                    <div className="icon">📄</div>
                    <div className="event-label">Renewal Contract Signed</div>
                    <div className="event-date">5 May 2025 <span className="today-badge">Today</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="expansion-opportunity-panel" style={{ marginTop: '100px' }}>
            <h2 style={{ marginTop: '100px' }}>Expansion Opportunity Identified</h2>
            <div className="expansion-details">
              <div><strong>Date</strong><br />5 May 2025</div>
              <div style={{ marginTop: '20px' }}><strong>Owner</strong><br />Ahmed (CSM)</div>
              <div style={{ marginTop: '20px' }}><strong>Notes</strong><br />Customer asked about adding 50 new users</div>
              <div style={{ marginTop: '20px' }}><strong>Suggested next step</strong><br />Book upsell demo meeting</div>
              <div style={{ marginTop: '20px' }}><strong>Related ticket</strong><br />#4567 — Inquiry about additional seats</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JourneyMap;
