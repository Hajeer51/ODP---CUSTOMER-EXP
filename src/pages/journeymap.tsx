import React from 'react';
import Navbar from '../components/Navbar.tsx';
import Sidebar from '../components/Sidebar.tsx';
import '../styles/JourneyMap.css';

const JourneyMap: React.FC = () => {
  return (
    <div className="journey-map-page">
      <Navbar />
      <div className="journey-map-layout">
        <Sidebar />
        <main className="journey-map-main">
          <div className="journey-map-header">
            <h1>Customer Journey Map</h1>
            
          </div>
          
          <div className="journey-map-content">
            <div className="journey-map-timeline">
              <div className="timeline-container">
                <div className="timeline-arrows">
                  {[
                    { stage: 'Awareness', color: '#E5D3B3', textColor: '#232323' },
                    { stage: 'Interest', color: '#169ba6', textColor: '#232323' },
                    { stage: 'Retention', color: '#de350b', textColor: '#fff' },
                    { stage: 'Purchase', color: '#f1c40f', textColor: '#232323' },
                    { stage: 'Advocacy', color: '#0095ff', textColor: '#fff' }
                  ].map((stage, index) => (
                    <div key={stage.stage} className="timeline-arrow-group">
                      <svg width="180" height="60" viewBox="0 0 180 60" className="timeline-arrow">
                        <polygon 
                          points="0,0 150,0 170,30 150,60 0,60 20,30" 
                          fill={stage.color}
                          className="arrow-shape"
                        />
                        <text 
                          x="50%" 
                          y="50%" 
                          dominantBaseline="middle" 
                          textAnchor="middle" 
                          fill={stage.textColor} 
                          fontSize="18" 
                          fontWeight="bold"
                        >
                          {stage.stage}
                        </text>
                      </svg>
                      <svg width="20" height="12" viewBox="0 0 20 12" className="arrow-pointer">
                        <polygon points="10,12 0,0 20,0" fill={stage.color} />
                      </svg>
                    </div>
                  ))}
                </div>
                
                <div className="timeline-connector"></div>
                
                <div className="timeline-stages">
                  {[
                    { title: 'ONBOARDING COMPLETE', date: '15 June 2024', stage: 'awareness' },
                    { title: 'First Support Ticket', date: '2 August 2024', stage: 'interest' },
                    { title: 'Sent CES Survey', date: '3 August 2024', stage: 'purchase' },
                    { title: 'Renewal Contract Signed', date: '15 September 2024', stage: 'retention' },
                    { title: 'Meeting Held', date: '16 September 2024', stage: 'advocacy' }
                  ].map((stage, index) => (
                    <div key={index} className={`timeline-stage ${stage.stage}`}>
                      <div className="stage-content">
                        <h3 className="stage-title">{stage.title}</h3>
                        <p className="stage-date">{stage.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="journey-map-sidebar">
              <div className="expansion-panel">
                <h2>Expansion Opportunity</h2>
                <div className="expansion-content">
                  <div className="expansion-item">
                    <span className="icon">📅</span>
                    <div className="item-content">
                      <strong>Date</strong>
                      <p>5 May 2025</p>
                    </div>
                  </div>
                  <div className="expansion-item">
                    <span className="icon">👤</span>
                    <div className="item-content">
                      <strong>Owner</strong>
                      <p>Ahmed (CSM)</p>
                    </div>
                  </div>
                  <div className="expansion-item">
                    <span className="icon">📝</span>
                    <div className="item-content">
                      <strong>Notes</strong>
                      <p>Customer asked about adding 50 new users</p>
                    </div>
                  </div>
                  <div className="expansion-item">
                    <span className="icon">➡️</span>
                    <div className="item-content">
                      <strong>Next Step</strong>
                      <p>Book upsell demo meeting</p>
                    </div>
                  </div>
                  <div className="expansion-item">
                    <span className="icon">🎟️</span>
                    <div className="item-content">
                      <strong>Related Ticket</strong>
                      <p>#4567 — Inquiry about additional seats</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default JourneyMap;
