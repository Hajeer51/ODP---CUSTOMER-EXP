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
      <div className="main-layout">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="content-container">
          <div className="billing-payment-content">
            <div className="billing-header">
              Billing & Payment 
            </div>
            <div className="overview-card">
              <div className="overview-title">Customer Overview</div>
              <div className="overview-value">
                <span
                  style={{
                    color: "#0c814a",
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginBottom: "10px",
                    display: "block",
                    textAlign: "left"
                  }}
                >
                  $1,200.00
                </span>
                <span
                  style={{
                    color: "#000000",
                    fontSize: "16px",
                    fontWeight: "bold",
                    marginBottom: "10px",
                    display: "block",
                    textAlign: "left"
                  }}
                >
                  Active • Customer since 2022
                </span>
              </div>
            </div>
            <div className="billing-cards-row">
              <div className="billing-summary-card">
                <div className="card-title">Payment has been made</div>
                <div className="card-value">OMR 1,200.00</div>
                <div className="card-desc">As of today</div>
              </div>
              <div className="billing-summary-card">
                <div className="card-title">Last Payment</div>
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
              <div className="table-title">Payment History</div>
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPayment;
