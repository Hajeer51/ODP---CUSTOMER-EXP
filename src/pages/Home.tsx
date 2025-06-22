import React, { useMemo } from 'react';
import Navbar from '../components/Navbar.tsx';
import Sidebar from '../components/Sidebar.tsx';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';
import OverallHealthScoreChart from '../components/OverallHealthScoreChart.tsx';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import ComputerIcon from '@mui/icons-material/Computer';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { useNavigate } from 'react-router-dom';
import { sectorDetails, sectors } from '../data/sectorData.tsx';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const overallMetrics = useMemo(() => {
    const allSectors = Object.values(sectorDetails);
    const totalCustomers = allSectors.reduce((sum, sector) => sum + sector.totalCustomers, 0);
    const totalHealthScore = allSectors.reduce((sum, sector) => sum + sector.healthScore, 0);
    const totalRevenue = allSectors.reduce((sum, sector) => sum + (sector.revenue || 0), 0);
    const averageHealthScore = totalHealthScore / allSectors.length;

    const aggregatedGrowth = allSectors[0].growthData.map((monthData, index) => {
      const totalCustomersForMonth = allSectors.reduce((sum, sector) => {
        return sum + (sector.growthData[index]?.customers || 0);
      }, 0);
      return {
        name: monthData.name,
        customers: totalCustomersForMonth,
      };
    });

    const newCustomers = aggregatedGrowth.length > 1 
      ? aggregatedGrowth[aggregatedGrowth.length - 1].customers - aggregatedGrowth[aggregatedGrowth.length - 2].customers 
      : 0;

    return {
      totalCustomers,
      averageHealthScore,
      totalRevenue,
      aggregatedGrowth,
      newCustomers,
    };
  }, []);

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar />
        <main className="main-content">
          <div style={{ padding: '24px', minHeight: '100vh', background: '#f8fafc' }}>
            <div style={{ padding: '0 24px' }}>
              {/* 3 Cards Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px', marginBottom: '40px' }}>
                {/* Health Score Card */}
                <div className="account-details-card hover-effect" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '30px', borderRadius: '15px', border: 'none', boxShadow: '0 6px 20px rgba(0,0,0,0.05)', backgroundColor: '#ffffff' }}>
                  <OverallHealthScoreChart healthScore={overallMetrics.averageHealthScore} />
                  <div style={{ fontSize: '1.2rem', fontWeight: '700', color: '#333', marginTop: '10px' }}>Overall Health Score</div>
                </div>
                {/* Total Revenue Card */}
                <div className="account-details-card hover-effect" style={{ padding: '30px', borderRadius: '15px', border: 'none', boxShadow: '0 6px 20px rgba(0,0,0,0.05)', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <div className="total-customers-number" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#169ba6' }}>
                    OMR {(overallMetrics.totalRevenue / 1000).toFixed(0)}K
                  </div>
                  <div style={{ fontSize: '1.2rem', color: '#666', marginBottom: '10px' }}>Total Revenue (Monthly)</div>
                  <div style={{ fontSize: '1.1rem', color: '#00a09d', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span style={{ fontSize: '1.2rem' }}>▲</span>All Sectors
                  </div>
                </div>
                {/* Total Customers Card */}
                <div className="account-details-card hover-effect" style={{ padding: '30px', borderRadius: '15px', border: 'none', boxShadow: '0 6px 20px rgba(0,0,0,0.05)', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '1.2rem', color: '#666', marginBottom: '8px' }}>Total Customers</div>
                    <div className="total-customers-number" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#169ba6' }}>
                      {overallMetrics.totalCustomers.toLocaleString()}
                    </div>
                    <div style={{ color: '#4CAF50', fontWeight: 'bold', marginTop: '4px' }}>
                      +{overallMetrics.newCustomers.toLocaleString()} This Month
                    </div>
                  </div>
                  <div style={{width: '100%', height: '60px', marginTop: '10px'}}>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={overallMetrics.aggregatedGrowth} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="customerGrowthGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#00a09d" stopOpacity={0.4}/>
                                    <stop offset="95%" stopColor="#00a09d" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <Tooltip
                                cursor={{ stroke: '#00a09d', strokeWidth: 1, strokeDasharray: '3 3' }}
                                contentStyle={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                    border: '1px solid #ddd',
                                    borderRadius: '10px',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                }}
                                labelStyle={{ display: 'none' }}
                                formatter={(value: number, name: string, props: any) => [`${(value as number).toLocaleString()}`, `Customers in ${props.payload.name}`]}
                            />
                            <Area
                                type="monotone"
                                dataKey="customers"
                                stroke="#00a09d"
                                strokeWidth={2}
                                fill="url(#customerGrowthGradient)"
                                dot={false}
                                activeDot={{ r: 5, stroke: '#fff', strokeWidth: 2, fill: '#00a09d' }}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              {/* Sectors Grid */}
              <h1 style={{ fontWeight: 800, fontSize: '2.2rem', marginBottom: 32, color: '#169ba6', letterSpacing: 1 }}>Sectors</h1>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '24px',
                  width: '100%',
                }}
              >
                {sectors.map((sector) => {
                  const details = sectorDetails[sector.label];
                  const healthScoreColor = details.healthScore > 90 ? '#4CAF50' : details.healthScore > 70 ? '#ffc107' : '#f44336';

                  return (
                    <div
                      key={sector.label}
                      onClick={() => navigate(`/dashboard?sector=${encodeURIComponent(sector.label)}`)}
                      style={{
                        background: '#fff',
                        borderRadius: '16px',
                        padding: '24px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                        cursor: 'pointer',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        border: '1px solid #e0e0e0',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '180px'
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-5px)';
                        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                          <div style={{ color: '#0c814a', marginRight: '12px' }}>{React.cloneElement(sector.icon, { style: { fontSize: 36 } })}</div>
                          <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#333' }}>{sector.label}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div>
                            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#169ba6' }}>{details.totalCustomers}</div>
                            <div style={{ fontSize: '0.9rem', color: '#666' }}>Customers</div>
                          </div>
                          <div>
                            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: healthScoreColor }}>{details.healthScore}</div>
                            <div style={{ fontSize: '0.9rem', color: '#666' }}>Health Score</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div style={{ background: '#e0e0e0', borderRadius: '4px', height: '6px', overflow: 'hidden', marginTop: '20px' }}>
                          <div style={{ width: `${details.healthScore}%`, background: healthScoreColor, height: '100%', borderRadius: '4px' }}></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home; 