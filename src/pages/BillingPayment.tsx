import React from "react";
import Navbar from "../components/Navbar.tsx";
import Sidebar from "../components/Sidebar.tsx";
import "../styles/BillingPayment.css";
import "../styles/Sidebar.css";
import "../styles/Navbar.css";

// Recharts imports
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

// Example payment progress data
const paymentData = [
  { month: "Jan", amount: 120 },
  { month: "Feb", amount: 200 },
  { month: "Mar", amount: 150 },
  { month: "Apr", amount: 180 },
  { month: "May", amount: 220 },
  { month: "Jun", amount: 170 },
  { month: "Jul", amount: 210 },
  { month: "Aug", amount: 240 },
  { month: "Sep", amount: 190 },
  { month: "Oct", amount: 230 },
  { month: "Nov", amount: 260 },
  { month: "Dec", amount: 250 }
];


const BillingPayment = () => {
  return (
    <div className="billing-payment-container">
      <Navbar />
      <Sidebar />
      <div className="main-layout">
        <div className="content-container">
          <div style={{
            width: '100%',
            background: 'linear-gradient(90deg, rgb(12, 129, 69) 0%, rgb(22, 155, 166) 100%)',
            borderRadius: '12px',
            padding: '24px 32px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '10px'
            
          }}>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 700, margin: 0, color: '#fff' }}>Billing & Payment</h1>
            <p style={{ fontSize: '1rem', margin: 0, color: '#fff' }}>Customer Overview</p>
            <p style={{ fontSize: '1rem', margin: 0, color: '#fff' }}>$1,200.00</p>
            <p style={{ fontSize: '1rem', margin: 0, color: '#fff' }}>Active • Customer since 2022</p>
          </div>
          <div className="billing-payment-content">
            <div className="billing-cards-row">
              <div className="billing-summary-card">
                <div className="card-icon-title-wrapper">
                  <span className="card-icon">💸</span>
                  <div className="card-title">Payment has been made</div>
                </div>
                <div className="card-value">OMR 1,200.00</div>
                <div className="card-desc">As of today</div>
              </div>
              <div className="billing-summary-card">
                <div className="card-icon-title-wrapper">
                  <span className="card-icon">🗓️</span>
                  <div className="card-title">Last Payment</div>
                </div>
                <div className="card-value">OMR 500.00</div>
                <div className="card-desc">Paid on 2025-06-01</div>
              </div>
            </div>

            <div className="payment-chart-section">
              <div className="payment-chart-title">Payment Progress</div>
              <ResponsiveContainer width="100%" height={180}>
                <LineChart data={paymentData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <CartesianGrid stroke="#eee" />
                  <Tooltip />
                  <Line type="monotone" dataKey="amount" stroke="#169ba6" strokeWidth={3} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="billing-table-section">
              <div className="table-title-wrapper">
                <div className="table-title">Payment History</div>
              </div>
              <table className="billing-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2025-06-01</td>
                    <td>Invoice #1234</td>
                    <td>OMR 500.00</td>
                    <td><span className="status paid">Paid</span></td>
                  </tr>
                  <tr>
                    <td>2025-05-01</td>
                    <td>Invoice #1229</td>
                    <td>OMR 700.00</td>
                    <td><span className="status paid">Paid</span></td>
                  </tr>
                  <tr>
                    <td>2025-04-01</td>
                    <td>Invoice #1220</td>
                    <td>OMR 600.00</td>
                    <td><span className="status overdue">Overdue</span></td>
                  </tr>
                  <tr>
                    <td>2025-03-01</td>
                    <td>Invoice #1215</td>
                    <td>OMR 450.00</td>
                    <td><span className="status paid">Paid</span></td>
                  </tr>
                  <tr>
                    <td>2025-02-01</td>
                    <td>Invoice #1210</td>
                    <td>OMR 300.00</td>
                    <td><span className="status paid">Paid</span></td>
                  </tr>
                  <tr>
                    <td>2025-01-01</td>
                    <td>Invoice #1205</td>
                    <td>OMR 800.00</td>
                    <td><span className="status overdue">Overdue</span></td>
                  </tr>
                  <tr>
                    <td>2024-12-01</td>
                    <td>Invoice #1200</td>
                    <td>OMR 950.00</td>
                    <td><span className="status paid">Paid</span></td>
                  </tr>
                </tbody>
              </table>
              <div className="pagination-controls">
                {/* <button className="pagination-button" disabled>&laquo; Previous</button> */}
                <span className="page-number selected">1</span>
                <span className="page-number">2</span>
                <span className="page-number">3</span>
                {/* <button className="pagination-button">Next &raquo;</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPayment;
