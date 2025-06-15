import React from 'react';
import Navbar from '../components/Navbar.tsx';
import Sidebar from '../components/Sidebar.tsx';
import { contacts } from '../components/ContactCardList.tsx';

const CRMPage = () => {
  const contactsLength = contacts.length; // Get the length of the contacts array
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar />
        <main className="main-content">
          <div style={{ padding: '20px', backgroundColor: '#f8f8f8', borderBottom: '1px solid #e0e0e0' }}>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '15px', color: '#333' }}>CRM</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <button style={{ backgroundColor: '#00a09d', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>CREATE</button>
              <button style={{ backgroundColor: '#e0e0e0', color: '#333', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>GENERATE LEADS</button>
              <button style={{ backgroundColor: '#e0e0e0', color: '#333', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>IMPORT</button>
              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '10px' }}>
                {/* Search Bar and Filters */}
                <div style={{ position: 'relative' }}>
                  <input type="text" placeholder="My CRM X Search..." style={{ padding: '8px 15px', borderRadius: '5px', border: '1px solid #ccc', width: '250px' }} />
                  {/* Assuming you might want an 'X' to clear search and a search icon */}
                </div>
                <button style={{ background: 'none', border: '1px solid #ccc', padding: '8px 12px', borderRadius: '5px', cursor: 'pointer' }}>▼ Filters</button>
                <button style={{ background: 'none', border: '1px solid #ccc', padding: '8px 12px', borderRadius: '5px', cursor: 'pointer' }}>≡ Group By</button>
                <button style={{ background: 'none', border: '1px solid #ccc', padding: '8px 12px', borderRadius: '5px', cursor: 'pointer' }}>★ Favorites</button>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', overflowX: 'auto', gap: '20px', padding: '20px', backgroundColor: '#f0f2f5' }}>
            {/* Lead Captured Column */}
            <div style={{ flex: '0 0 300px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', padding: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#333' }}>Lead Captured</h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <div style={{ width: '70%', height: '8px', backgroundColor: '#e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '40%', height: '100%', backgroundColor: '#4CAF50' }}></div>
                </div>
                <span style={{ marginLeft: '10px', fontSize: '0.9rem', fontWeight: 'bold' }}>OMR 80,000</span>
              </div>
              {/* Example Cards */}
              <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '5px', padding: '15px', marginBottom: '10px' }}>
                <div style={{ fontWeight: 'bold' }}>Quote for 150 carpets</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '5px' }}>• Product</div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>OMR 40,000.00</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                  </div>
                  {(() => {
                    const currentContact = contacts[0 % contactsLength];
                    return currentContact?.avatar && <img src={currentContact.avatar as string} alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />;
                  })()}
                </div>
              </div>
              <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '5px', padding: '15px', marginBottom: '10px' }}>
                <div style={{ fontWeight: 'bold' }}>New Lead from Website</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '5px' }}>• Marketing Campaign</div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>OMR 15,000.00</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                  </div>
                  {(() => {
                    const currentContact = contacts[19 % contactsLength];
                    return currentContact?.avatar && <img src={currentContact.avatar as string} alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />;
                  })()}
                </div>
              </div>
            </div>

            {/* Initial Contact Made Column */}
            <div style={{ flex: '0 0 300px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', padding: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#333' }}>Initial Contact Made</h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <div style={{ width: '70%', height: '8px', backgroundColor: '#e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '60%', height: '100%', backgroundColor: '#FFC107' }}></div>
                </div>
                <span style={{ marginLeft: '10px', fontSize: '0.9rem', fontWeight: 'bold' }}>OMR 51,300</span>
              </div>
              {/* Initial Contact Made Cards */}
              <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '5px', padding: '15px', marginBottom: '10px' }}>
                <div style={{ fontWeight: 'bold' }}>Global Solutions: Furnitures</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '5px' }}>• Product • Design</div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>OMR 3,800.00, Ready Mat</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                  </div>
                  {(() => {
                    const currentContact = contacts[2 % contactsLength];
                    return currentContact?.avatar && <img src={currentContact.avatar as string} alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />;
                  })()}
                </div>
              </div>
              <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '5px', padding: '15px', marginBottom: '10px' }}>
                <div style={{ fontWeight: 'bold' }}>Quote for 600 Chairs</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '5px' }}>• Product</div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>OMR 22,500.00</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                  </div>
                  {(() => {
                    const currentContact = contacts[3 % contactsLength];
                    return currentContact?.avatar && <img src={currentContact.avatar as string} alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />;
                  })()}
                </div>
              </div>
              <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '5px', padding: '15px', marginBottom: '10px' }}>
                <div style={{ fontWeight: 'bold' }}>Info about services</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '5px' }}>• Product</div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>OMR 25,000.00, Deco Addict</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                  </div>
                  {(() => {
                    const currentContact = contacts[4 % contactsLength];
                    return currentContact?.avatar && <img src={currentContact.avatar as string} alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />;
                  })()}
                </div>
              </div>
              <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '5px', padding: '15px', marginBottom: '10px' }}>
                <div style={{ fontWeight: 'bold' }}>Follow-up Call with Potential Client</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '5px' }}>• Communication</div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>OMR 10,000.00, New Client</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                  </div>
                  {(() => {
                    const currentContact = contacts[20 % contactsLength];
                    return currentContact?.avatar && <img src={currentContact.avatar as string} alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />;
                  })()}
                </div>
              </div>
            </div>

            {/* Needs Analysis Column */}
            <div style={{ flex: '0 0 300px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', padding: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#333' }}>Needs Analysis</h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <div style={{ width: '70%', height: '8px', backgroundColor: '#e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '80%', height: '100%', backgroundColor: '#4CAF50' }}></div>
                </div>
                <span style={{ marginLeft: '10px', fontSize: '0.9rem', fontWeight: 'bold' }}>OMR 79,100</span>
              </div>
              {/* Needs Analysis Cards */}
              <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '5px', padding: '15px', marginBottom: '10px' }}>
                <div style={{ fontWeight: 'bold' }}>Modern Open Space</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '5px' }}>• Information</div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>OMR 4,500.00</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                  </div>
                  {(() => {
                    const currentContact = contacts[5 % contactsLength];
                    return currentContact?.avatar && <img src={currentContact.avatar as string} alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />;
                  })()}
                </div>
              </div>
              <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '5px', padding: '15px', marginBottom: '10px' }}>
                <div style={{ fontWeight: 'bold' }}>Office Design and Architecture</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '5px' }}>• Consulting</div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>OMR 9,000.00, Ready Mat</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                  </div>
                  {(() => {
                    const currentContact = contacts[6 % contactsLength];
                    return currentContact?.avatar && <img src={currentContact.avatar as string} alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />;
                  })()}
                </div>
              </div>
              <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '5px', padding: '15px', marginBottom: '10px' }}>
                <div style={{ fontWeight: 'bold' }}>5 VP Chairs</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '5px' }}>• Services</div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>OMR 5,600.00, Azure Interior</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                  </div>
                  {(() => {
                    const currentContact = contacts[7 % contactsLength];
                    return currentContact?.avatar && <img src={currentContact.avatar as string} alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />;
                  })()}
                </div>
              </div>
              <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '5px', padding: '15px', marginBottom: '10px' }}>
                <div style={{ fontWeight: 'bold' }}>Need 20 Desks</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '5px' }}>• Consulting</div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>OMR 60,000.00</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                  </div>
                  {(() => {
                    const currentContact = contacts[8 % contactsLength];
                    return currentContact?.avatar && <img src={currentContact.avatar as string} alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />;
                  })()}
                </div>
              </div>
              <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '5px', padding: '15px', marginBottom: '10px' }}>
                <div style={{ fontWeight: 'bold' }}>Requirement Gathering for New System</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '5px' }}>• IT Solution</div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>OMR 25,000.00, Tech Corp</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                  </div>
                  {(() => {
                    const currentContact = contacts[21 % contactsLength];
                    return currentContact?.avatar && <img src={currentContact.avatar as string} alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />;
                  })()}
                </div>
              </div>
            </div>

            {/* Proposal Sent Column */}
            <div style={{ flex: '0 0 300px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', padding: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#333' }}>Proposal Sent</h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <div style={{ width: '70%', height: '8px', backgroundColor: '#e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '90%', height: '100%', backgroundColor: '#FFC107' }}></div>
                </div>
                <span style={{ marginLeft: '10px', fontSize: '0.9rem', fontWeight: 'bold' }}>OMR 19,800</span>
              </div>
              {/* Proposal Sent Cards */}
              <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '5px', padding: '15px', marginBottom: '10px' }}>
                <div style={{ fontWeight: 'bold' }}>Distributor Contract</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '5px' }}>• Information • Other</div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>OMR 19,800.00, Gemini Furniture</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                  </div>
                  {(() => {
                    const currentContact = contacts[9 % contactsLength];
                    return currentContact?.avatar && <img src={currentContact.avatar as string} alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />;
                  })()}
                </div>
              </div>
              <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '5px', padding: '15px', marginBottom: '10px' }}>
                <div style={{ fontWeight: 'bold' }}>Service Agreement Draft</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '5px' }}>• Documentation</div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>OMR 5,000.00, Client E</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                  </div>
                  {(() => {
                    const currentContact = contacts[14 % contactsLength];
                    return currentContact?.avatar && <img src={currentContact.avatar as string} alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />;
                  })()}
                </div>
              </div>
            </div>

            {/* Negotiation & Review Column */}
            <div style={{ flex: '0 0 300px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', padding: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#333' }}>Negotiation & Review</h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <div style={{ width: '70%', height: '8px', backgroundColor: '#e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '70%', height: '100%', backgroundColor: '#4CAF50' }}></div>
                </div>
                <span style={{ marginLeft: '10px', fontSize: '0.9rem', fontWeight: 'bold' }}>OMR 50,000</span>
              </div>
              <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '5px', padding: '15px', marginBottom: '10px' }}>
                <div style={{ fontWeight: 'bold' }}>Contract Discussion</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '5px' }}>• Legal • Finance</div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>OMR 10,000.00, Client A</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                  </div>
                  {(() => {
                    const currentContact = contacts[10 % contactsLength];
                    return currentContact?.avatar && <img src={currentContact.avatar as string} alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />;
                  })()}
                </div>
              </div>
              <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '5px', padding: '15px', marginBottom: '10px' }}>
                <div style={{ fontWeight: 'bold' }}>Pricing Adjustment Talk</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '5px' }}>• Finance</div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>OMR 40,000.00, Client F</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                  </div>
                  {(() => {
                    const currentContact = contacts[15 % contactsLength];
                    return currentContact?.avatar && <img src={currentContact.avatar as string} alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />;
                  })()}
                </div>
              </div>
            </div>

            {/* Management Approval Column */}
            <div style={{ flex: '0 0 300px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', padding: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#333' }}>Management Approval</h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <div style={{ width: '70%', height: '8px', backgroundColor: '#e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '85%', height: '100%', backgroundColor: '#FFC107' }}></div>
                </div>
                <span style={{ marginLeft: '10px', fontSize: '0.9rem', fontWeight: 'bold' }}>OMR 75,000</span>
              </div>
              <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '5px', padding: '15px', marginBottom: '10px' }}>
                <div style={{ fontWeight: 'bold' }}>Final Review by CEO</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '5px' }}>• Internal • Executive</div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>OMR 75,000.00, Client B</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                  </div>
                  {(() => {
                    const currentContact = contacts[11 % contactsLength];
                    return currentContact?.avatar && <img src={currentContact.avatar as string} alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />;
                  })()}
                </div>
              </div>
              <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '5px', padding: '15px', marginBottom: '10px' }}>
                <div style={{ fontWeight: 'bold' }}>Legal Team Sign-off</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '5px' }}>• Legal • Internal</div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>OMR 20,000.00, Client G</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                  </div>
                  {(() => {
                    const currentContact = contacts[16 % contactsLength];
                    return currentContact?.avatar && <img src={currentContact.avatar as string} alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />;
                  })()}
                </div>
              </div>
            </div>

            {/* Won / Contract Signed Column */}
            <div style={{ flex: '0 0 300px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', padding: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#333' }}>Won / Contract Signed</h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <div style={{ width: '70%', height: '8px', backgroundColor: '#e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '100%', height: '100%', backgroundColor: '#4CAF50' }}></div>
                </div>
                <span style={{ marginLeft: '10px', fontSize: '0.9rem', fontWeight: 'bold' }}>OMR 90,000</span>
              </div>
              <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '5px', padding: '15px', marginBottom: '10px' }}>
                <div style={{ fontWeight: 'bold' }}>New Cloud Service Deal</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '5px' }}>• Cloud • Service</div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>OMR 90,000.00, Client C</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                  </div>
                  {(() => {
                    const currentContact = contacts[12 % contactsLength];
                    return currentContact?.avatar && <img src={currentContact.avatar as string} alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />;
                  })()}
                </div>
              </div>
              <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '5px', padding: '15px', marginBottom: '10px' }}>
                <div style={{ fontWeight: 'bold' }}>Infrastructure Upgrade Project</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '5px' }}>• IT • Project</div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>OMR 65,000.00, Client H</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                  </div>
                  {(() => {
                    const currentContact = contacts[17 % contactsLength];
                    return currentContact?.avatar && <img src={currentContact.avatar as string} alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />;
                  })()}
                </div>
              </div>
            </div>

            {/* Lost / On Hold Column */}
            <div style={{ flex: '0 0 300px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', padding: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#333' }}>Lost / On Hold</h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <div style={{ width: '70%', height: '8px', backgroundColor: '#e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '10%', height: '100%', backgroundColor: '#d9534f' }}></div>
                </div>
                <span style={{ marginLeft: '10px', fontSize: '0.9rem', fontWeight: 'bold' }}>OMR 0</span>
              </div>
              <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '5px', padding: '15px', marginBottom: '10px' }}>
                <div style={{ fontWeight: 'bold' }}>Client Declined Offer</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '5px' }}>• Reason: Budget</div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>OMR 0.00, Client D</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ color: '#ccc' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                  </div>
                  {(() => {
                    const currentContact = contacts[13 % contactsLength];
                    return currentContact?.avatar && <img src={currentContact.avatar as string} alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />;
                  })()}
                </div>
              </div>
              <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '5px', padding: '15px', marginBottom: '10px' }}>
                <div style={{ fontWeight: 'bold' }}>Project On Hold - No Response</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '5px' }}>• Reason: Internal Delay</div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>OMR 0.00, Client I</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ color: '#ccc' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                  </div>
                  {(() => {
                    const currentContact = contacts[18 % contactsLength];
                    return currentContact?.avatar && <img src={currentContact.avatar as string} alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />;
                  })()}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CRMPage;