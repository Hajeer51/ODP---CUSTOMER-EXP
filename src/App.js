import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import Dashboard from './components/dashboard.tsx';
import Tickets from './pages/Tickets.js';
import TicketDetailsContainer from './containers/TicketDetailsContainer';
import InfrastructureDetails from './pages/InfrastructureDetails';
import DashboardPage from './pages/dashboardpage.tsx';
import UserManagementPage from './pages/UserManagementPage.tsx';
import UserDetailsPage from './pages/UserDetailsPage.tsx';
import JourneyMap from './pages/journeymap.tsx';
import AccountDetailsPage from './pages/AccountDetailsPage.tsx';
import CRMPage from './pages/CRMPage.tsx';
import CustomerAccountPage from './pages/CustomerAccountPage.tsx';
import BillingPayment from './pages/BillingPayment.tsx';
import SalesOrdersPage from './pages/SalesOrdersPage.tsx';
import APIDocumentationPage from './pages/APIDocumentationPage.tsx';

function App() {
  const [showDashboard, setShowDashboard] = useState(false);
 
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* API Documentation always accessible */}
          <Route path="/api" element={<APIDocumentationPage />} />
          {showDashboard ? (
            <>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/infrastructure-details" element={<InfrastructureDetails />} />
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/tickets/:reference" element={<TicketDetailsContainer />} />
              <Route path="/tickets/:reference/edit" element={<TicketDetailsContainer />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/user-management" element={<UserManagementPage />} />
              <Route path="/user-management/:email" element={<UserDetailsPage />} />
              <Route path="/account-details" element={<AccountDetailsPage />} />
              <Route path="/crm" element={<CRMPage />} />
              <Route path="/product-services" element={<CustomerAccountPage />} />
              <Route path="/sales-orders" element={<SalesOrdersPage />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
              <Route path="/journeymap" element={<JourneyMap />} />
              <Route path="/billing" element={<BillingPayment />} />
            </>
          ) : (
            <>
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/*" element={<LoginPage onDashboard={() => setShowDashboard(true)} />} />
            </>
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
 
export default App;
 