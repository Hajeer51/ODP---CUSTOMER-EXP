import React from 'react';
import Navbar from '../components/Navbar.tsx';
import Sidebar from '../components/Sidebar.tsx';

const CRMPage = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar />
        <main className="main-content">
          <div style={{ padding: '20px', backgroundColor: '#f8f8f8', borderBottom: '1px solid #e0e0e0' }}>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '15px', color: '#333' }}>Pipeline</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <button style={{ backgroundColor: '#00a09d', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>CREATE</button>
              <button style={{ backgroundColor: '#e0e0e0', color: '#333', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>GENERATE LEADS</button>
              <button style={{ backgroundColor: '#e0e0e0', color: '#333', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>IMPORT</button>
              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '10px' }}>
                {/* Search Bar and Filters */}
                <div style={{ position: 'relative' }}>
                  <input type="text" placeholder="My Pipeline X Search..." style={{ padding: '8px 15px', borderRadius: '5px', border: '1px solid #ccc', width: '250px' }} />
                  {/* Assuming you might want an 'X' to clear search and a search icon */}
                </div>
                <button style={{ background: 'none', border: '1px solid #ccc', padding: '8px 12px', borderRadius: '5px', cursor: 'pointer' }}>▼ Filters</button>
                <button style={{ background: 'none', border: '1px solid #ccc', padding: '8px 12px', borderRadius: '5px', cursor: 'pointer' }}>≡ Group By</button>
                <button style={{ background: 'none', border: '1px solid #ccc', padding: '8px 12px', borderRadius: '5px', cursor: 'pointer' }}>★ Favorites</button>
                <div style={{ marginLeft: '20px', display: 'flex', gap: '5px' }}>
                  <button style={{ background: '#e0e0e0', border: 'none', padding: '8px 12px', borderRadius: '5px' }}><span style={{ fontSize: '1.2em' }}>&#9776;</span></button> {/* Hamburger icon */}
                  <button style={{ background: 'none', border: 'none', padding: '8px 12px', borderRadius: '5px' }}><span style={{ fontSize: '1.2em' }}>&#9776;</span></button> {/* List icon */}
                  <button style={{ background: 'none', border: 'none', padding: '8px 12px', borderRadius: '5px' }}><span style={{ fontSize: '1.2em' }}>&#9776;</span></button> {/* Calendar icon */}
                  <button style={{ background: 'none', border: 'none', padding: '8px 12px', borderRadius: '5px' }}><span style={{ fontSize: '1.2em' }}>&#9776;</span></button> {/* Chart icon */}
                  <button style={{ background: 'none', border: 'none', padding: '8px 12px', borderRadius: '5px' }}><span style={{ fontSize: '1.2em' }}>&#9776;</span></button> {/* Bar chart icon */}
                  <button style={{ background: 'none', border: 'none', padding: '8px 12px', borderRadius: '5px' }}><span style={{ fontSize: '1.2em' }}>&#9776;</span></button> {/* Clock icon */}
                  <button style={{ background: 'none', border: 'none', padding: '8px 12px', borderRadius: '5px' }}><span style={{ fontSize: '1.2em' }}>&#9776;</span></button> {/* Map pin icon */}
                  <button style={{ background: 'none', border: 'none', padding: '8px 12px', borderRadius: '5px' }}><span style={{ fontSize: '1.2em' }}>&#9776;</span></button> {/* History icon */}
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', overflowX: 'auto', gap: '20px', padding: '20px', backgroundColor: '#f0f2f5' }}>
            {/* New Column */}
            <div style={{ flex: '0 0 300px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', padding: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#333' }}>New</h3>
                <span style={{ fontSize: '1.2rem', color: '#999', cursor: 'pointer' }}>+</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <div style={{ width: '70%', height: '8px', backgroundColor: '#e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '40%', height: '100%', backgroundColor: '#4CAF50' }}></div>
                </div>
                <span style={{ marginLeft: '10px', fontSize: '0.9rem', fontWeight: 'bold' }}>$80,000</span>
              </div>
              {/* Opportunity Card Placeholder */}
              <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '5px', padding: '15px', marginBottom: '10px' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 'bold', marginBottom: '5px' }}>Opportunity</div>
                <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px' }} />
                <div style={{ fontSize: '0.95rem', fontWeight: 'bold', marginTop: '10px', marginBottom: '5px' }}>Customer</div>
                <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px' }} />
                <div style={{ fontSize: '0.95rem', fontWeight: 'bold', marginTop: '10px', marginBottom: '5px' }}>Expected Revenue</div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#333' }}>$0.00</span>
                </div>
                <div style={{ display: 'flex', gap: '5px', marginTop: '10px' }}>
                  <span style={{ color: '#ffc107' }}>★</span>
                  <span style={{ color: '#ffc107' }}>★</span>
                  <span style={{ color: '#ccc' }}>★</span>
                  <span style={{ color: '#ccc' }}>★</span>
                  <span style={{ color: '#ccc' }}>★</span>
                </div>
                <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                  <button style={{ backgroundColor: '#00a09d', color: 'white', padding: '8px 15px', borderRadius: '5px', border: 'none', cursor: 'pointer', fontSize: '0.9rem' }}>ADD</button>
                  <button style={{ backgroundColor: '#6c757d', color: 'white', padding: '8px 15px', borderRadius: '5px', border: 'none', cursor: 'pointer', fontSize: '0.9rem' }}>EDIT</button>
                  <button style={{ background: 'none', border: 'none', color: '#dc3545', padding: '8px 15px', cursor: 'pointer', fontSize: '0.9rem' }}>DISCARD</button>
                </div>
              </div>
              {/* Example Cards */}
              <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '5px', padding: '15px', marginBottom: '10px' }}>
                <div style={{ fontWeight: 'bold' }}>Quote for 150 carpets</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '5px' }}>• Product</div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>$ 40,000.00</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                  </div>
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                </div>
              </div>
              <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '5px', padding: '15px', marginBottom: '10px' }}>
                <div style={{ fontWeight: 'bold' }}>Quote for 12 Tables</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '5px' }}>• Product</div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>$ 40,000.00</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                  </div>
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                </div>
              </div>
            </div>

            {/* Qualified Column */}
            <div style={{ flex: '0 0 300px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', padding: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#333' }}>Qualified</h3>
                <span style={{ fontSize: '1.2rem', color: '#999', cursor: 'pointer' }}>+</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <div style={{ width: '70%', height: '8px', backgroundColor: '#e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '60%', height: '100%', backgroundColor: '#FFC107' }}></div>
                </div>
                <span style={{ marginLeft: '10px', fontSize: '0.9rem', fontWeight: 'bold' }}>$51,300</span>
              </div>
              {/* Qualified Cards */}
              <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '5px', padding: '15px', marginBottom: '10px' }}>
                <div style={{ fontWeight: 'bold' }}>Global Solutions: Furnitures</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '5px' }}>• Product • Design</div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>$ 3,800.00, Ready Mat</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                  </div>
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                </div>
              </div>
              <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '5px', padding: '15px', marginBottom: '10px' }}>
                <div style={{ fontWeight: 'bold' }}>Quote for 600 Chairs</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '5px' }}>• Product</div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>$ 22,500.00</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                  </div>
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                </div>
              </div>
              <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '5px', padding: '15px', marginBottom: '10px' }}>
                <div style={{ fontWeight: 'bold' }}>Info about services</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '5px' }}>• Product</div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>$ 25,000.00, Deco Addict</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                  </div>
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                </div>
              </div>
            </div>

            {/* Proposition Column */}
            <div style={{ flex: '0 0 300px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', padding: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#333' }}>Proposition</h3>
                <span style={{ fontSize: '1.2rem', color: '#999', cursor: 'pointer' }}>+</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <div style={{ width: '70%', height: '8px', backgroundColor: '#e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '80%', height: '100%', backgroundColor: '#4CAF50' }}></div>
                </div>
                <span style={{ marginLeft: '10px', fontSize: '0.9rem', fontWeight: 'bold' }}>$79,100</span>
              </div>
              {/* Proposition Cards */}
              <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '5px', padding: '15px', marginBottom: '10px' }}>
                <div style={{ fontWeight: 'bold' }}>Modern Open Space</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '5px' }}>• Information</div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>$ 4,500.00</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                  </div>
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                </div>
              </div>
              <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '5px', padding: '15px', marginBottom: '10px' }}>
                <div style={{ fontWeight: 'bold' }}>Office Design and Architecture</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '5px' }}>• Consulting</div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>$ 9,000.00, Ready Mat</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                  </div>
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                </div>
              </div>
              <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '5px', padding: '15px', marginBottom: '10px' }}>
                <div style={{ fontWeight: 'bold' }}>5 VP Chairs</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '5px' }}>• Services</div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>$ 5,600.00, Azure Interior</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                  </div>
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                </div>
              </div>
              <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '5px', padding: '15px', marginBottom: '10px' }}>
                <div style={{ fontWeight: 'bold' }}>Need 20 Desks</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '5px' }}>• Consulting</div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>$ 60,000.00</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                  </div>
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                </div>
              </div>
            </div>

            {/* Won Column */}
            <div style={{ flex: '0 0 300px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', padding: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#333' }}>Won</h3>
                <span style={{ fontSize: '1.2rem', color: '#999', cursor: 'pointer' }}>+</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <div style={{ width: '70%', height: '8px', backgroundColor: '#e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '90%', height: '100%', backgroundColor: '#FFC107' }}></div>
                </div>
                <span style={{ marginLeft: '10px', fontSize: '0.9rem', fontWeight: 'bold' }}>$19,800</span>
              </div>
              {/* Won Cards */}
              <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '5px', padding: '15px', marginBottom: '10px' }}>
                <div style={{ fontWeight: 'bold' }}>Distributor Contract</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '5px' }}>• Information • Other</div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>$ 19,800.00, Gemini Furniture</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ffc107' }}>★</span>
                    <span style={{ color: '#ccc' }}>★</span>
                  </div>
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
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