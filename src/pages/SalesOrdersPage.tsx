import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.tsx';
import Sidebar from '../components/Sidebar.tsx';
import '../styles/SalesOrdersPage.css';

const SalesOrdersPage = () => {
  const salesOrders = [
    {
      number: 'S00080',
      orderDate: '12/08/2022',
      customer: 'Deco Addict',
      salesperson: 'Mitchell Admin',
      company: 'US Company',
      total: 'OMR 115.00',
      invoiceStatus: 'Fully Invoiced',
      statusColor: '#28a745',
    },
    {
      number: 'S00079',
      orderDate: '12/08/2022',
      customer: 'Park Zaim',
      salesperson: 'Mitchell Admin',
      company: 'US Company',
      total: 'OMR 140.00',
      invoiceStatus: 'Nothing to Invoice',
      statusColor: '#6c757d',
    },
    {
      number: 'S00077',
      orderDate: '12/08/2022',
      customer: 'Abigail Peterson',
      salesperson: 'Mitchell Admin',
      company: 'US Company',
      total: 'OMR 437.00',
      invoiceStatus: 'To Invoice',
      statusColor: '#17a2b8',
    },
    {
      number: 'S00075',
      orderDate: '12/08/2022',
      customer: 'YourCompany, Marc Demo',
      salesperson: 'OdooBot',
      company: 'US Company',
      total: 'OMR 30.75',
      invoiceStatus: 'To Invoice',
      statusColor: '#17a2b8',
    },
    {
      number: 'S00063',
      orderDate: '12/08/2022',
      customer: 'Deco Addict',
      salesperson: 'Mitchell Admin',
      company: 'US Company',
      total: 'OMR 690.00',
      invoiceStatus: 'To Invoice',
      statusColor: '#17a2b8',
    },
    {
      number: 'S00051',
      orderDate: '12/08/2022',
      customer: 'Deco Addict',
      salesperson: 'OdooBot',
      company: 'US Company',
      total: 'OMR 12.50',
      invoiceStatus: 'To Invoice',
      statusColor: '#17a2b8',
    },
    {
      number: 'S00050',
      orderDate: '12/08/2022',
      customer: 'The Jackson Group',
      salesperson: 'OdooBot',
      company: 'US Company',
      total: 'OMR 14.00',
      invoiceStatus: 'To Invoice',
      statusColor: '#17a2b8',
    },
    {
      number: 'S00049',
      orderDate: '12/08/2022',
      customer: 'Deco Addict',
      salesperson: 'OdooBot',
      company: 'US Company',
      total: 'OMR 3,645.00',
      invoiceStatus: 'To Invoice',
      statusColor: '#17a2b8',
    },
    {
      number: 'S00062',
      orderDate: '12/08/2022',
      customer: 'Mitchell Admin',
      salesperson: 'Mitchell Admin',
      company: 'US Company',
      total: 'OMR 1,552.50',
      invoiceStatus: 'To Invoice',
      statusColor: '#17a2b8',
    },
    {
      number: 'S00061',
      orderDate: '12/08/2022',
      customer: 'YourCompany, Joel Willis',
      salesperson: 'Mitchell Admin',
      company: 'US Company',
      total: 'OMR 287.50',
      invoiceStatus: 'To Invoice',
      statusColor: '#17a2b8',
    },
    {
      number: 'S00060',
      orderDate: '12/08/2022',
      customer: 'YourCompany, Marc Demo',
      salesperson: 'Mitchell Admin',
      company: 'US Company',
      total: 'OMR 115.00',
      invoiceStatus: 'To Invoice',
      statusColor: '#17a2b8',
    },
    {
      number: 'S00059',
      orderDate: '12/08/2022',
      customer: 'YourCompany, Joel Willis',
      salesperson: 'Mitchell Admin',
      company: 'US Company',
      total: 'OMR 69.00',
      invoiceStatus: 'To Invoice',
      statusColor: '#17a2b8',
    },
    {
      number: 'S00058',
      orderDate: '12/08/2022',
      customer: 'Mitchell Admin',
      salesperson: 'Mitchell Admin',
      company: 'US Company',
      total: 'OMR 230.00',
      invoiceStatus: 'Fully Invoiced',
      statusColor: '#28a745',
    },
  ];

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar />
        <main className="main-content">
          {/* New Header Style */}
          <div style={{
            width: '100%',
            background: 'linear-gradient(90deg, rgb(12, 129, 69) 0%, rgb(22, 155, 166) 100%)',
            borderRadius: '12px',
            padding: '24px 32px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            color: '#fff',
            marginBottom: '24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '10px'
          }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
              <Link
                to="/crm"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.13)',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.10)',
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '1.2rem',
                  border: '1.5px solid rgba(255,255,255,0.25)',
                  transition: 'background 0.2s, box-shadow 0.2s, transform 0.15s',
                  cursor: 'pointer',
                  position: 'relative',
                }}
                title="Back to CRM"
                onMouseOver={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.22)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.18)';
                  e.currentTarget.style.transform = 'translateY(-1px) scale(1.08)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.13)';
                  e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.10)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="none" />
                  <path d="M15.5 5L9 12L15.5 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{
                  position: 'absolute',
                  left: '110%',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(0,0,0,0.7)',
                  color: '#fff',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  fontSize: '0.85rem',
                  whiteSpace: 'nowrap',
                  opacity: 0,
                  pointerEvents: 'none',
                  transition: 'opacity 0.2s',
                  zIndex: 10,
                }} className="back-tooltip">Back to CRM</span>
              </Link>
              <h1 style={{ fontSize: '2.2rem', fontWeight: 700, margin: 0, color: '#fff', letterSpacing: '0.5px' }}>Sales Orders</h1>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '18px', alignItems: 'center', marginTop: '4px' }}>
              <p style={{ fontSize: '1rem', margin: 0, color: '#fff', opacity: 0.95 }}>Oman Broad Band</p>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fff', opacity: 0.5, display: 'inline-block' }}></span>
              <p style={{ fontSize: '1rem', margin: 0, color: '#fff', opacity: 0.95 }}>Account is: 12345678</p>
            </div>
          </div>

          {/* Original Content after header */}
          <div style={{ padding: '20px', borderBottom: '1px solid #e0e0e0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
              <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#333' }}>Sales Orders</h1>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button style={{ backgroundColor: '#00a09d', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>CREATE</button>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.5rem', color: '#666' }}>&#x21E9;</button> {/* Download icon */}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ position: 'relative', flexGrow: 1 }}>
                <input type="text" placeholder="Search..." style={{ padding: '8px 15px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }} />
              </div>
              <button style={{ background: 'none', border: '1px solid #ccc', padding: '8px 12px', borderRadius: '5px', cursor: 'pointer' }}>▼ Filters</button>
              <button style={{ background: 'none', border: '1px solid #ccc', padding: '8px 12px', borderRadius: '5px', cursor: 'pointer' }}>≡ Group By</button>
              <button style={{ background: 'none', border: '1px solid #ccc', padding: '8px 12px', borderRadius: '5px', cursor: 'pointer' }}>★ Favorites</button>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginLeft: 'auto' }}>
                <span style={{ fontSize: '0.9rem', color: '#666' }}>1-66 / 66</span>
                <button style={{ background: 'none', border: '1px solid #ccc', padding: '5px 8px', borderRadius: '5px', cursor: 'pointer' }}>&lt;</button>
                <button style={{ background: 'none', border: '1px solid #ccc', padding: '5px 8px', borderRadius: '5px', cursor: 'pointer' }}>&gt;</button>
                <button style={{ background: 'none', border: '1px solid #ccc', padding: '5px 8px', borderRadius: '5px', cursor: 'pointer' }}>☰</button>
                <button style={{ background: 'none', border: '1px solid #ccc', padding: '5px 8px', borderRadius: '5px', cursor: 'pointer' }}>&#x25A1;</button>
                <button style={{ background: 'none', border: '1px solid #ccc', padding: '5px 8px', borderRadius: '5px', cursor: 'pointer' }}>&#x1F4C5;</button>
                <button style={{ background: 'none', border: '1px solid #ccc', padding: '5px 8px', borderRadius: '5px', cursor: 'pointer' }}>&#x1F5C4;</button>
                <button style={{ background: 'none', border: '1px solid #ccc', padding: '5px 8px', borderRadius: '5px', cursor: 'pointer' }}>&#x231B;</button>
              </div>
            </div>
          </div>
          <div style={{ padding: '20px', flexGrow: 1 }}>
            <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', overflowX: 'auto' }}>
              <div style={{ display: 'flex', padding: '10px 15px', borderBottom: '1px solid #eee', backgroundColor: '#f8f8f8', fontWeight: 'bold', fontSize: '0.9rem', color: '#555' }}>
                <div style={{ width: '30px', textAlign: 'center' }}><input type="checkbox" /></div>
                <div style={{ width: '80px', padding: '0 5px' }}>Number</div>
                <div style={{ width: '100px', padding: '0 5px' }}>Order Date</div>
                <div style={{ flex: 2, padding: '0 5px' }}>Customer</div>
                <div style={{ flex: 1.5, padding: '0 5px' }}>Salesperson</div>
                <div style={{ flex: 1.5, padding: '0 5px' }}>Company</div>
                <div style={{ width: '100px', textAlign: 'right', padding: '0 5px' }}>Total</div>
                <div style={{ width: '150px', padding: '0 5px' }}>Invoice Status</div>
                <div style={{ width: '30px' }}></div> {/* For the settings icon */}
              </div>
              {salesOrders.map((order, index) => (
                <div key={index} className="sales-order-row" style={{
                  display: 'flex',
                  padding: '10px 15px',
                  borderBottom: '1px solid #eee',
                  alignItems: 'center',
                  fontSize: '0.9rem',
                  color: '#333',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease-in-out',
                }}>
                  <div style={{ width: '30px', textAlign: 'center' }}><input type="checkbox" /></div>
                  <div style={{ width: '80px', padding: '0 5px', color: '#007bff' }}>{order.number}</div>
                  <div style={{ width: '100px', padding: '0 5px' }}>{order.orderDate}</div>
                  <div style={{ flex: 2, padding: '0 5px', color: '#007bff' }}>{order.customer}</div>
                  <div style={{ flex: 1.5, padding: '0 5px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span>{order.salesperson}</span>
                  </div>
                  <div style={{ flex: 1.5, padding: '0 5px' }}>{order.company}</div>
                  <div style={{ width: '100px', textAlign: 'right', padding: '0 5px' }}>
                    {order.total === 'OMR 230.00' ? (
                      <span style={{fontWeight: 'bold'}}>{order.total}</span>
                    ) : (
                      order.total
                    )}
                  </div>
                  <div style={{ width: '150px', padding: '0 5px' }}>
                    <span style={{ backgroundColor: order.statusColor, color: 'white', padding: '4px 8px', borderRadius: '15px', fontSize: '0.8rem' }}>{order.invoiceStatus}</span>
                  </div>
                  <div style={{ width: '30px', textAlign: 'center' }}>
                    <span style={{ color: '#666', cursor: 'pointer' }}>&#x2630;</span> {/* Settings icon */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SalesOrdersPage; 