import React from 'react';
import Navbar from './Navbar.tsx';
import Sidebar from './Sidebar.tsx';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import '../styles/Dashboard.css';
import { useNavigate } from 'react-router-dom';





/* ── mock data ─────────────────────────────────────────── */
const billingData = {
  balance: 230,
  lastPayment: 8000,
  overdue: [100, 120, 90, 130, 150, 170, 160, 180],
};

const usageData = [
  { name: 'Jan', usage: 400 },
  { name: 'Feb', usage: 420 },
  { name: 'Mar', usage: 410 },
  { name: 'Apr', usage: 430 },
  { name: 'May', usage: 440 },
  { name: 'Jun', usage: 420 },
  { name: 'Jul', usage: 450 },
];

const productServices = [
  'Cloud Server(public VPS)',
  'Microsoft 365 / Office 365 tenancy',
  'Nebula AI (GPU-as-a-Service)',
  'Acronis Backup Cloud (Backup-as-a-Service)',
  'Managed Security Services (DDoS, WAF)',
];

export const supportDetails = [
  { reference: 'HR-139', summary: 'Service Request', status: 'WAITING FOR SUPPORT' },
  { reference: 'ED-138', summary: 'Service Request', status: 'SUCCESS' },
  { reference: 'UD-137', summary: 'Service Request', status: 'PENDING' },
  { reference: 'ED-136', summary: 'Service Request', status: 'ERROR' },
];

const ReferenceCell: React.FC<{ reference: string }> = ({ reference }) => {
  const navigate = useNavigate();
  return (
    <span 
      style={{ color: '#169ba6', textDecoration: 'underline', cursor: 'pointer' }}
      onClick={() => navigate(`/tickets/${reference}`)}
    >
      {reference}
    </span>
  );
};

/* ── component ─────────────────────────────────────────── */
const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="dashboard-container">
            <Navbar />
            <div className="dashboard-content">
                <Sidebar />
                <main className="main-content">
          <div className="dashboard-grid">
            {/* ─────────── Row 1 ─────────── */}
            {/* Customer header with responsive flex layout */}
            <div
              className="customer-header card"
              style={{
                gridColumn: '1 / 3',
                gridRow: '1',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '24px',
                padding: '24px 32px',
                borderRadius: '12px',
                backgroundColor: '#fff',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}
            >
              {/* Header Details (Left) */}
              <div
                className="header-details"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  minWidth: '200px',
                  flex: '1 1 60%'
                }}
              >
                <div style={{ fontSize: '1.3rem', fontWeight: 600, color: '#111' }}>
                  360 View Dashboard
                </div>
                <div style={{ fontSize: '1rem', color: '#0077b6', fontWeight: 500 }}>
                  Oman Broad Band
                </div>
                <div style={{ fontSize: '0.9rem', color: '#666' }}>
                  Account is : 12345678
                </div>
                <div style={{ fontSize: '0.9rem', color: '#666' }}>
                  Last Billing Date: 2023-11-20
                </div>
                <div style={{ fontSize: '0.9rem', color: '#666' }}>
                  Ali Alhabsi
                </div>
              </div>

              {/* Health Score (Right) */}
              <div
                className="health-score"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: '0 0 auto',
                  minWidth: '100px'
                }}
              >
                <div className="health-score-gauge" style={{ width: '80px', height: '50px' }}>
                  <svg width="80" height="50" viewBox="0 0 100 60">
                    <path
                      d="M 10 50 A 40 40 0 0 1 90 50"
                      fill="none"
                      stroke="#eee"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 10 50 A 40 40 0 0 1 90 50"
                      fill="none"
                      stroke="#27ae60"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray="125.66"
                      strokeDashoffset="25.13"
                    />
                    <text
                      x="50"
                      y="50"
                      textAnchor="middle"
                      fontSize="18"
                      fontWeight="bold"
                      fill="#000"
                      dominantBaseline="middle"
                    >80</text>
                  </svg>
                </div>
                <div style={{ marginTop: '6px', fontSize: '0.9rem', color: '#333' }}>
                  Health Score
                </div>
              </div>
            </div>

            {/* Billing */}
            <div
              className="billing-card card"
              style={{ gridColumn: '3', gridRow: '1' }}
            >
              <div className="billing-title">Billing & Payments</div>
              <div className="billing-row">
                Current Balance{' '}
                <span className="billing-amount">OMR {billingData.balance}</span>
              </div>
              <div className="billing-row">
                Last Payment{' '}
                <span className="billing-amount">{billingData.lastPayment}</span>
              </div>
              <div className="billing-row">Overdue</div>
              <ResponsiveContainer width="100%" height={36}>
                <LineChart
                  data={billingData.overdue.map((v, i) => ({
                    name: i,
                    value: v,
                  }))}
                >
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#169ba6"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Usage */}
            <div
              className="usage-card card"
              style={{ gridColumn: '4', gridRow: '1' }}
            >
              <div className="usage-title">Usage Insights</div>
              <ResponsiveContainer width="100%" height={36}>
                <LineChart data={usageData}>
                  <Line
                    type="monotone"
                    dataKey="usage"
                    stroke="#169ba6"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="usage-label">Compute Usage</div>
            </div>

            {/* ─────────── Row 2 ─────────── */}
            {/* Infrastructure overview */}
            <div
              className="products-section card infrastructure-card"
              style={{ gridColumn: '1 / 3', gridRow: '2', cursor: 'pointer' }}
              onClick={() => navigate('/infrastructure-details')}
            >
              {/* title */}
              <div style={{ display: 'flex', alignItems: 'baseline', width: '100%', marginTop: 0, marginBottom: 8 }}>
                <h3 className="card-title-accent" style={{ margin: 0 }}>
                  <span role="img" aria-label="infra" style={{marginRight: 8}}>🛠️</span>
                  Infrastructure overview
                </h3>
              </div>

              {/* Total servers block at the top */}
              <div>
                <div className="total-servers-header fs-h4 fw-semi">
                  <span>Total Servers</span>
                  <span style={{ fontWeight: 500, fontSize: '1.1em' }}>540</span>
                </div>
                {[{ label: 'Critical', colour: 'red', value: 231, width: '43%' },
                  { label: 'Warning', colour: 'yellow', value: 24, width: '5%' },
                  { label: 'Healthy', colour: 'green', value: 285, width: '52%' },
                ].map((r) => (
                  <div className="total-row" key={r.label}>
                    <span style={{
                      color: r.colour === 'yellow' ? '#f1c40f' : r.colour === 'red' ? '#e74c3c' : '#27ae60',
                      fontWeight: 600,
                    }}>{r.label}</span>
                    <div className="bar" style={{ background: '#eee', height: 16, borderRadius: 8 }}>
                      <div className={`bar-fill ${r.colour}`} style={{ width: r.width, height: 16, borderRadius: 8, background: r.colour === 'yellow' ? '#f1c40f' : r.colour === 'red' ? '#e74c3c' : '#27ae60' }} />
                    </div>
                    <span style={{ fontWeight: 600 }}>{r.value}</span>
                  </div>
                ))}
              </div>

              {/* New row: Gauge left, Compute/Storage right */}
              <div style={{ display: 'flex', flexDirection: 'row', gap: 24, marginTop: 24 }}>
                {/* Gauge left */}
                <div style={{ flex: '0 0 140px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div className="storage-gauge">
                    <svg width="96" height="96" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="46" stroke="#eee" strokeWidth="8" fill="none" />
                      <circle cx="50" cy="50" r="46" stroke="#169ba6" strokeWidth="8" fill="none" strokeDasharray="289" strokeDashoffset="115" strokeLinecap="round" />
                      <text x="50" y="55" textAnchor="middle" fontSize="1.5em" fontWeight="bold">60%</text>
                    </svg>
                  </div>
                </div>
                {/* Compute and Storage right */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'row', gap: 32 }}>
                  {/* Compute */}
                  <div style={{ flex: 1 }}>
                    <div className="infra-label" style={{ fontWeight: 700 }}>Compute (VMs)</div>
                    <div className="infra-big">540</div>
                    <div className="infra-mini-row">
                      <span className="infra-label" style={{ color: '#e74c3c', fontWeight: 600 }}>Critical</span>
                      <div className="bar"><div className="bar-fill red" style={{ width: '45%' }} /></div>
                      <span>251</span>
                    </div>
                    <div className="infra-mini-row">
                      <span className="infra-label" style={{ color: '#27ae60', fontWeight: 600 }}>Healthy</span>
                      <div className="bar"><div className="bar-fill green" style={{ width: '55%' }} /></div>
                      <span>285</span>
                    </div>
                  </div>
                  {/* Storage */}
                  <div style={{ flex: 1 }}>
                    <div className="infra-label" style={{ fontWeight: 700 }}>Storage</div>
                    <div className="infra-big">45</div>
                    <div className="infra-mini-row">
                      <span className="infra-label" style={{ color: '#169ba6', fontWeight: 600 }}>60 %</span>
                      <div className="bar"><div className="bar-fill cyan" style={{ width: '60%' }} /></div>
                    </div>
                    <div className="infra-label" style={{ color: '#888' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product & Services */}
            <div
              className="product-card card"
              style={{
                gridColumn: '3 / 5',
                gridRow: '2',
                alignItems: 'flex-start',
                cursor: 'pointer',
              }}
              onClick={() => navigate('/product-services')}
            >
              <div className="product-title-row" style={{ display: 'flex', alignItems: 'baseline', width: '100%', marginTop: 0, marginBottom: 8 }}>
                <h3 className="card-title-accent" style={{ margin: 0 }}>
                  <span role="img" aria-label="products" style={{marginRight: 8}}>📦</span>
                  Product &amp; Services
                </h3>
                <span className="product-total" style={{ marginLeft: 'auto', fontSize: '0.95rem', color: '#169ba6', fontWeight: 600 }}>
                  {productServices.length} items
                </span>
              </div>
              <ul className="product-list-grid" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {productServices.map((item, idx) => (
                  <li className="product-item" key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%' }}>
                    <span className="product-badge">P{idx + 1}</span>
                    <span className="product-name">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ─────────── Row 3 ─────────── */}
            {/* Support history */}
            <div
              className="support-history card"
              style={{ gridColumn: '1 / 3', gridRow: '3', cursor: 'pointer' }}
              onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                // Only navigate if the click is not on the table or its children
                if (!(e.target as HTMLElement).closest('table')) {
                  navigate('/tickets');
                }
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', width: '100%', marginTop: 0, marginBottom: 8 }}>
                <h3 className="card-title-accent" style={{ margin: 0 }}>
                  <span role="img" aria-label="support" style={{marginRight: 8}}>🛡️</span>
                  Support Interaction History
                </h3>
              </div>
              <table className="support-table" onClick={(e) => e.stopPropagation()}>
                <thead>
                  <tr>
                    <th>Reference</th>
                    <th>Summary</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {supportDetails.map((t) => (
                    <tr key={t.reference}>
                      <td>
                        <ReferenceCell reference={t.reference} />
                      </td>
                      <td>{t.summary}</td>
                      <td>
                        <span className={`status-chip ${t.status.replaceAll(' ', '-')}`}>
                          {t.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Satisfaction */}
            <div
              className="satisfaction card"
              style={{
                gridColumn: '3 / 5',
                gridRow: '3',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '0',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', width: '100%', marginTop: 0, marginBottom: 8 }}>
                <h3 className="card-title-accent" style={{ margin: 0 }}>
                  <span role="img" aria-label="score" style={{marginRight: 8}}>⭐</span>
                  Customer Experience Score
                </h3>
              </div>
              {/* First row: Main section title */}
              {/* Second row: All other content */}
              <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <div className="satisfaction-title fs-h4 fw-semi" style={{ marginBottom: 8 }}>Average satisfaction</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                  {/* Gauge */}
                  <div className="satisfaction-circle-visual">
                    <svg width="70" height="70" viewBox="0 0 70 70">
                      <circle
                        cx="35"
                        cy="35"
                        r="32"
                        stroke="#eee"
                        strokeWidth="6"
                        fill="none"
                      />
                      <circle
                        cx="35"
                        cy="35"
                        r="32"
                        stroke="#27ae60"
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray="201"
                        strokeDashoffset="60"
                        strokeLinecap="round"
                      />
                      <circle
                        cx="35"
                        cy="35"
                        r="32"
                        stroke="#f1c40f"
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray="201"
                        strokeDashoffset="120"
                        strokeLinecap="round"
                      />
                      <text
                        x="35"
                        y="38"
                        textAnchor="middle"
                        fontSize="1.3em"
                        fontWeight="bold"
                      >
                        4.2
                      </text>
                    </svg>
                    <div className="satisfaction-arg">Arg 9%</div>
                  </div>

                  {/* center */}
                  <div className="satisfaction-center">
                    <div className="satisfaction-score-main">4.2</div>
                    <div className="satisfaction-stars">★ ★ ★ ★ ☆</div>
                  </div>

                  {/* breakdown */}
                  <div className="satisfaction-breakdown-col">
                    <div>
                      <span style={{ fontWeight: 600 }}>60%</span> Promoters
                    </div>
                    <div>
                      <span style={{ fontWeight: 600 }}>30%</span> Passives
                    </div>
                    <div>
                      <span style={{ fontWeight: 600 }}>10%</span> Detractors
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

export default Dashboard;
