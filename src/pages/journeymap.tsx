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
                  <h1>Customer Journey Map</h1>
                  <div className="customer-journey-map" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', margin: '0' }}>
                    {/* Arrow row for journey stages with indicators below */}
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <svg width="180" height="60" viewBox="0 0 180 60" style={{ marginRight: '-10px', zIndex: 1 }}>
                          <polygon points="0,0 150,0 170,30 150,60 0,60 20,30" fill="#E5D3B3" />
                          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#232323" fontSize="18" fontWeight="bold">Awareness</text>
                        </svg>
                        <svg width="20" height="12" viewBox="0 0 20 12" style={{ marginTop: '-4px' }}>
                          <polygon points="10,12 0,0 20,0" fill="#E5D3B3" />
                        </svg>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <svg width="180" height="60" viewBox="0 0 180 60" style={{ marginRight: '-10px', zIndex: 1 }}>
                          <polygon points="0,0 150,0 170,30 150,60 0,60 20,30" fill="#86bc42" />
                          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#232323" fontSize="18" fontWeight="bold">Interest</text>
                        </svg>
                        <svg width="20" height="12" viewBox="0 0 20 12" style={{ marginTop: '-4px' }}>
                          <polygon points="10,12 0,0 20,0" fill="#86bc42" />
                        </svg>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <svg width="180" height="60" viewBox="0 0 180 60" style={{ marginRight: '-10px', zIndex: 1 }}>
                          <polygon points="0,0 150,0 170,30 150,60 0,60 20,30" fill="#de350b" />
                          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold">Purchase</text>
                        </svg>
                        <svg width="20" height="12" viewBox="0 0 20 12" style={{ marginTop: '-4px' }}>
                          <polygon points="10,12 0,0 20,0" fill="#de350b" />
                        </svg>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <svg width="180" height="60" viewBox="0 0 180 60" style={{ marginRight: '-10px', zIndex: 1 }}>
                          <polygon points="0,0 150,0 170,30 150,60 0,60 20,30" fill="#ffab00" />
                          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#232323" fontSize="18" fontWeight="bold">Retention</text>
                        </svg>
                        <svg width="20" height="12" viewBox="0 0 20 12" style={{ marginTop: '-4px' }}>
                          <polygon points="10,12 0,0 20,0" fill="#ffab00" />
                        </svg>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <svg width="180" height="60" viewBox="0 0 180 60" style={{ zIndex: 1 }}>
                          <polygon points="0,0 150,0 170,30 150,60 0,60 20,30" fill="#0048ff" />
                          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold">Advocacy</text>
                        </svg>
                        <svg width="20" height="12" viewBox="0 0 20 12" style={{ marginTop: '-4px' }}>
                          <polygon points="10,12 0,0 20,0" fill="#0048ff" />
                        </svg>
                      </div>
                    </div>
                    {/* Connector line under arrows */}
                    <div className="arrow-connector"></div>
                  </div>
                  <div className="journey-stages" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', width: '100%', margin: 0, gap: 0, padding: 0 }}>
                    <div className="stage awareness" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 0 }}>
                      <div className="stage-title">ONBOARDING COMPLETE</div>
                      
                      <p>15 June 2024</p>
                    </div>
                    <div className="stage interest" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 0 }}>
                      <div className="stage-title">First Support Ticket</div>
                     
                      <p>2 August 2024</p>
                    </div>
                    <div className="stage purchase" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 0 }}>
                      <div className="stage-title">Sent CES Survey</div>
                      
                      <p>3 August 2024</p>
                    </div>
                    <div className="stage retention" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 0 }}>
                      <div className="stage-title">Renewal Contract Signed</div>
                     
                      <p>15 September 2024</p>
                    </div>
                    <div className="stage advocacy" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 0 }}>
                      <div className="stage-title">Meeting Held</div>
                      <p>16 September 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="expansion-opportunity-panel" style={{ flex: 2 }}>
              <h2>Expansion Opportunity Identified</h2>
              <div className="expansion-details">
                <div className="detail-row"><span className="detail-icon icon-calendar"></span><div><strong>Date</strong><br />5 May 2025</div></div>
                <div className="detail-row"><span className="detail-icon icon-user"></span><div><strong>Owner</strong><br />Ahmed (CSM)</div></div>
                <div className="detail-row"><span className="detail-icon icon-note"></span><div><strong>Notes</strong><br />Customer asked about adding 50 new users</div></div>
                <div className="detail-row"><span className="detail-icon icon-next"></span><div><strong>Suggested next step</strong><br />Book upsell demo meeting</div></div>
                <div className="detail-row"><span className="detail-icon icon-ticket"></span><div><strong>Related ticket</strong><br />#4567 — Inquiry about additional seats</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JourneyMap;
