import React from 'react';
import Navbar from '../components/Navbar.tsx';
import Sidebar from '../components/Sidebar.tsx';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, TooltipProps } from 'recharts';

const CustomTooltip = ({ active, payload, label }: TooltipProps<any, any>) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
        <p style={{ margin: 0, fontWeight: 'bold' }}>{`Month: ${label}`}</p>
        <p style={{ margin: 0 }}>{`Products: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const productTimelineData = [
  { name: 'Jan', value: 10 },
  { name: 'Feb', value: 20 },
  { name: 'Mar', value: 15 },
  { name: 'Apr', value: 25 },
  { name: 'May', value: 22 },
  { name: 'Jun', value: 30 },
  { name: 'Jul', value: 28 },
];

const usageOverviewData = [
  { name: 'Service A', value: 80 },
  { name: 'Service B', value: 60 },
  { name: 'Service C', value: 40 },
  { name: 'Service D', value: 30 },
];

const productsData = [
  { productName: 'Cloud Hosting - Standard', status: 'Active', activationDate: '2020-03-10', monthlyFee: 150, renewalDate: '2025-03-10' },
  { productName: 'Managed Security - Advanced', status: 'Active', activationDate: '2021-07-01', monthlyFee: 250, renewalDate: '2025-07-01' },
  { productName: 'Colocation Services - Rack 1', status: 'Active', activationDate: '2019-01-15', monthlyFee: 500, renewalDate: '2025-01-15' },
  { productName: 'Data Backup & Recovery - 1TB', status: 'Active', activationDate: '2022-05-20', monthlyFee: 100, renewalDate: '2025-05-20' },
  { productName: 'Network Connectivity - 1Gbps', status: 'Active', activationDate: '2020-11-11', monthlyFee: 300, renewalDate: '2025-11-11' },
  { productName: 'Disaster Recovery as a Service', status: 'Inactive', activationDate: '2023-01-01', monthlyFee: 0, renewalDate: 'N/A' },
  { productName: 'Hybrid Cloud Solution', status: 'Active', activationDate: '2022-09-10', monthlyFee: 400, renewalDate: '2025-09-10' },
];

const progressColors = ['#00a09d', '#5cb85c', '#f0ad4e', '#d9534f'];

const billingData = [
  { date: '2023-01-15', invoice: 'INV-001', amount: 1200, status: 'Paid' },
  { date: '2023-02-10', invoice: 'INV-002', amount: 800, status: 'Pending' },
  { date: '2023-03-05', invoice: 'INV-003', amount: 2500, status: 'Overdue' },
  { date: '2023-04-20', invoice: 'INV-004', amount: 1500, status: 'Paid' },
  { date: '2023-05-12', invoice: 'INV-005', amount: 950, status: 'Pending' },
  { date: '2023-06-01', invoice: 'INV-006', amount: 3200, status: 'Paid' },
  { date: '2023-07-18', invoice: 'INV-007', amount: 1100, status: 'Overdue' },
  { date: '2023-08-25', invoice: 'INV-008', amount: 600, status: 'Paid' },
  { date: '2023-09-03', invoice: 'INV-009', amount: 1800, status: 'Pending' },
  { date: '2023-10-10', invoice: 'INV-010', amount: 2100, status: 'Paid' },
  { date: '2023-11-01', invoice: 'INV-011', amount: 750, status: 'Overdue' },
  { date: '2023-12-15', invoice: 'INV-012', amount: 1300, status: 'Paid' },
];

const CustomerAccountPage = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage] = React.useState(5); // 5 items per page
  const [selectedTab, setSelectedTab] = React.useState('Billing');

  // Logic for displaying current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = billingData.slice(indexOfFirstItem, indexOfLastItem);

  // Logic for rendering page numbers
  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(billingData.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleExportCsv = () => {
    const headers = ["Date", "Invoice #", "Amount", "Status"];
    const rows = billingData.map(item => [
      item.date,
      item.invoice,
      item.amount,
      item.status
    ]);

    let csvContent = headers.join(",") + "\n";
    rows.forEach(rowArray => {
      let row = rowArray.join(",");
      csvContent += row + "\n";
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "billing_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar />
        <main className="main-content" style={{ padding: '20px' }}>
          {/* Top Section: Customer Header */}
          <div style={{ background: 'linear-gradient(90deg, #0c8145 0%, #006f8b 100%)', padding: '32px 40px 24px 40px', display: 'flex', alignItems: 'center', gap: 18, borderRadius: 24, boxShadow: '0 8px 32px #0002', marginBottom: '15px' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h1 style={{ fontSize: 34, fontWeight: 800, color: '#fff', margin: 0, letterSpacing: 1 }}>OBC - Services and Products</h1>
              <div style={{ color: '#e0e0e0', fontSize: 17, fontWeight: 400, marginTop: 4 }}>Account is: 12345678 | Last Billing Date: 2023-03-01</div>
            </div>
            <div style={{ flex: 1 }} />
            <span style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#fff', padding: '8px 18px', borderRadius: '25px', fontWeight: 'bold', fontSize: '1rem', border: '1px solid rgba(255, 255, 255, 0.4)' }}>ACTIVE</span>
          </div>

          {/* Stats Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '20px', marginTop: '15px' }}>
            {/* Balance Card */}
            <div style={{ borderRadius: '8px', padding: '12px', backgroundColor: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out', minHeight: '90px' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <div style={{ fontSize: '0.8rem', color: '#666' }}>Balance</div>
                <span style={{ fontSize: '1.2rem', color: '#00a09d' }}>📊</span>
              </div>
              <div style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#e74c3c', display: 'flex', alignItems: 'center', gap: '8px' }}>
                -10,500 OMR
                <span style={{ backgroundColor: '#e0ffe0', color: '#0c8145', padding: '4px 8px', borderRadius: '12px', fontSize: '0.7rem', fontWeight: 'bold' }}>Credit</span>
              </div>
            </div>

            {/* Account Age Card */}
            <div style={{ borderRadius: '8px', padding: '12px', backgroundColor: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out', minHeight: '90px' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <div style={{ fontSize: '0.8rem', color: '#666' }}>Account Age</div>
                <span style={{ fontSize: '1.2rem', color: '#00a09d' }}>⏳</span>
              </div>
              <div style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#333' }}>6 y 8 mo</div>
            </div>

            {/* Days Since Last Billing Card */}
            <div style={{ borderRadius: '8px', padding: '12px', backgroundColor: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out', minHeight: '90px' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <div style={{ fontSize: '0.8rem', color: '#666' }}>Days Since Last Billing</div>
                <span style={{ fontSize: '1.2rem', color: '#00a09d' }}>🗓️</span>
              </div>
              <div style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#333' }}>105 days</div>
            </div>

            {/* Currency Card */}
            <div style={{ borderRadius: '8px', padding: '12px', backgroundColor: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out', minHeight: '90px' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <div style={{ fontSize: '0.8rem', color: '#666' }}>Number of Products</div>
                <span style={{ fontSize: '1.2rem', color: '#00a09d' }}>📦</span>
              </div>
              <div style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#333' }}>5</div>
            </div>
          </div>

          {/* Charts Section */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '20px', marginTop: '30px' }}>
            {/* Product Timeline Chart */}
            <div style={{ borderRadius: '8px', padding: '20px', backgroundColor: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', transition: 'background-color 0.2s ease-in-out' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9f9f9'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#333', marginBottom: '15px' }}>Product Timeline</h3>
              <div style={{ padding: '10px 0' }}>
                <ResponsiveContainer width="100%" height={150}>
                  <LineChart data={productTimelineData}>
                    <XAxis dataKey="name" stroke="#888" tick={{ fill: '#555', fontWeight: 'bold' }} />
                    <YAxis stroke="#888" tick={{ fill: '#555', fontWeight: 'bold' }} />
                    <Tooltip content={CustomTooltip} />
                    <Line type="monotone" dataKey="value" stroke="#00a09d" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Usage Overview Chart */}
            <div style={{ borderRadius: '8px', padding: '20px', backgroundColor: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#333', marginBottom: '15px' }}>Usage Overview</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '10px 0' }}>
                {usageOverviewData.map((data, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '5px 0', borderRadius: '5px', transition: 'background-color 0.2s ease-in-out, transform 0.2s ease-in-out' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f9f9f9'; e.currentTarget.style.transform = 'scale(1.01)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.transform = 'scale(1)'; }}>
                    <span style={{ fontSize: '0.9rem', color: '#333', fontWeight: 'bold', width: '80px' }}>{data.name}</span>
                    <div style={{ flex: 1, height: '14px', backgroundColor: '#f0f0f0', borderRadius: '7px' }}>
                      <div style={{ width: `${data.value}%`, height: '100%', backgroundColor: progressColors[index % progressColors.length], borderRadius: '7px' }}></div>
                    </div>
                    <span style={{ fontSize: '0.8rem', color: '#666', width: '40px', textAlign: 'right' }}>{`${data.value}%`}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tabs Section and Extract to CSV Button */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '2px solid #eee', marginBottom: '20px', marginTop: '20px' }}>
            <div style={{ display: 'flex' }}>
              <button onClick={() => setSelectedTab('Billing')} style={{ padding: '10px 20px', border: 'none', borderBottom: selectedTab === 'Billing' ? '2px solid #00a09d' : 'none', backgroundColor: 'transparent', cursor: 'pointer', fontSize: '1.1rem', fontWeight: 'bold', color: selectedTab === 'Billing' ? '#00a09d' : '#666' }}>Billing</button>
              <button onClick={() => setSelectedTab('Products')} style={{ padding: '10px 20px', border: 'none', borderBottom: selectedTab === 'Products' ? '2px solid #00a09d' : 'none', backgroundColor: 'transparent', cursor: 'pointer', fontSize: '1.1rem', fontWeight: 'bold', color: selectedTab === 'Products' ? '#00a09d' : '#666' }}>Products</button>
            </div>
            <button onClick={handleExportCsv} style={{ backgroundColor: 'transparent', color: '#00a09d', border: '1px solid #00a09d', borderRadius: '8px', padding: '10px 20px', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold', boxShadow: 'none', transition: 'background-color 0.2s ease-in-out, transform 0.2s ease-in-out' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#e6f4ea'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 160, 157, 0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>Extract to CSV</button>
          </div>

          {/* Table Section */}
          {selectedTab === 'Billing' && (
            <div style={{ border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f8f8f8' }}>
                    <th style={{ padding: '15px', textAlign: 'left', borderBottom: '1px solid #eee' }}>Date</th>
                    <th style={{ padding: '15px', textAlign: 'left', borderBottom: '1px solid #eee' }}>Invoice #</th>
                    <th style={{ padding: '15px', textAlign: 'right', borderBottom: '1px solid #eee' }}>Amount</th>
                    <th style={{ padding: '15px', textAlign: 'left', borderBottom: '1px solid #eee' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Example Table Row (can be dynamically populated later) */}
                  {currentItems.map((item, index) => (
                    <tr key={index} style={{ transition: 'background-color 0.2s ease-in-out', backgroundColor: index % 2 === 0 ? '#fff' : '#f9f9f9' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e6f4ea'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#fff' : '#f9f9f9'}>
                      <td style={{ padding: '15px', borderBottom: '1px solid #eee' }}>{item.date}</td>
                      <td style={{ padding: '15px', borderBottom: '1px solid #eee' }}>{item.invoice}</td>
                      <td style={{ padding: '15px', textAlign: 'right', borderBottom: '1px solid #eee' }}>OMR {item.amount.toLocaleString()}</td>
                      <td style={{ padding: '15px', borderBottom: '1px solid #eee' }}><span style={{ backgroundColor: item.status === 'Paid' ? '#d4edda' : item.status === 'Pending' ? '#ffeeba' : '#f8d7da', color: item.status === 'Paid' ? '#155724' : item.status === 'Pending' ? '#856404' : '#721c24', padding: '5px 10px', borderRadius: '15px', fontSize: '0.8rem', fontWeight: 'bold' }}>{item.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {selectedTab === 'Products' && (
            <div style={{ border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f8f8f8' }}>
                    <th style={{ padding: '15px', textAlign: 'left', borderBottom: '1px solid #eee' }}>Product Name</th>
                    <th style={{ padding: '15px', textAlign: 'left', borderBottom: '1px solid #eee' }}>Status</th>
                    <th style={{ padding: '15px', textAlign: 'left', borderBottom: '1px solid #eee' }}>Activation Date</th>
                    <th style={{ padding: '15px', textAlign: 'right', borderBottom: '1px solid #eee' }}>Monthly Fee</th>
                    <th style={{ padding: '15px', textAlign: 'left', borderBottom: '1px solid #eee' }}>Renewal Date</th>
                  </tr>
                </thead>
                <tbody>
                  {productsData.slice(indexOfFirstItem, indexOfLastItem).map((item, index) => (
                    <tr key={index} style={{ transition: 'background-color 0.2s ease-in-out', backgroundColor: index % 2 === 0 ? '#fff' : '#f9f9f9' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e6f4ea'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#fff' : '#f9f9f9'}>
                      <td style={{ padding: '15px', borderBottom: '1px solid #eee' }}>{item.productName}</td>
                      <td style={{ padding: '15px', borderBottom: '1px solid #eee' }}><span style={{ backgroundColor: item.status === 'Active' ? '#d4edda' : '#f8d7da', color: item.status === 'Active' ? '#155724' : '#721c24', padding: '5px 10px', borderRadius: '15px', fontSize: '0.8rem', fontWeight: 'bold' }}>{item.status}</span></td>
                      <td style={{ padding: '15px', borderBottom: '1px solid #eee' }}>{item.activationDate}</td>
                      <td style={{ padding: '15px', textAlign: 'right', borderBottom: '1px solid #eee' }}>OMR {item.monthlyFee.toLocaleString()}</td>
                      <td style={{ padding: '15px', borderBottom: '1px solid #eee' }}>{item.renewalDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '20px' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              {selectedTab === 'Billing' && pageNumbers.map(number => (
                <button key={number} onClick={() => paginate(number)} style={{ padding: '8px 15px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: currentPage === number ? '#00a09d' : '#fff', color: currentPage === number ? '#fff' : '#333', cursor: 'pointer' }}>
                  {number}
                </button>
              ))}
              {selectedTab === 'Products' &&
                Array.from({ length: Math.ceil(productsData.length / itemsPerPage) }, (_, i) => i + 1).map(number => (
                  <button key={number} onClick={() => paginate(number)} style={{ padding: '8px 15px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: currentPage === number ? '#00a09d' : '#fff', color: currentPage === number ? '#fff' : '#333', cursor: 'pointer' }}>
                    {number}
                  </button>
                ))
              }
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CustomerAccountPage; 