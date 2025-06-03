import React from 'react';
import Navbar from '../components/Navbar.tsx';
import Sidebar from '../components/Sidebar.tsx';
import '../styles/JourneyMap.css';


const JourneyMap: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container" style={{ backgroundColor: '#f5f5f5' }} >
        <div className="journey-map-wrapper">
          <Sidebar />
          <div className="journey-map-content-row">
            <div className="journey-map-section-container">
              <div className="journey-map-container" style={{ flex: 2 }}>
                <div className="content">
                  <h1>Journey Map</h1>
                  <div className="customer-journey-map">
                    <svg className="journey-wave" viewBox="0 0 1000 200" preserveAspectRatio="none">
                      {/* 5 colored corners */}
                      <path d="M0,100 Q100,0 200,100" fill="none" stroke="#E5D3B3" strokeWidth="44" />
                      <path d="M200,100 Q300,200 400,100" fill="none" stroke="#6EC6A6" strokeWidth="44" />
                      <path d="M400,100 Q500,0 600,100" fill="none" stroke="#F26D5B" strokeWidth="44" />
                      <path d="M600,100 Q700,200 800,100" fill="none" stroke="#F7D774" strokeWidth="44" />
                      <path d="M800,100 Q900,0 1000,100" fill="none" stroke="#232323" strokeWidth="44" />
                      {/* Dashed center line (overlays all) */}
                      <path d="M0,100 Q100,0 200,100 Q300,200 400,100 Q500,0 600,100 Q700,200 800,100 Q900,0 1000,100" fill="none" stroke="#fff" strokeWidth="4" strokeDasharray="24,18" />
                      {/* Stops */}
                    
                    </svg>
                    <div className="journey-stages">
                      <div className="stage awareness">
                        <div className="stage-title">ONBOARDING COMPLETE</div>
                        <p>15 June 2024</p>
                        
                      </div>
                      <div className="stage interest">
                        <div className="stage-title">First Support Ticket</div>
                        <p>2 August 2024</p>
                        
                      </div>
                      <div className="stage purchase">
                        <div className="stage-title">Send CES Servay</div>
                        <p>3 August 2024</p>
                       
                      </div>
                      <div className="stage retention">
                        <div className="stage-title">Renewal Contract Signed</div>
                        <p>15 September 2024</p>
                       
                      </div>
                      <div className="stage advocacy">
                        <div className="stage-title">Meeting Held</div>
                        <p>16 September 2024</p>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="journey-card-section-container">
              <div className="expansion-opportunity-panel" style={{ flex: 1 }}>
                <h2>Expansion Opportunity Identified</h2>
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
        </div>
      </div>
    </>
  );
};

export default JourneyMap;
