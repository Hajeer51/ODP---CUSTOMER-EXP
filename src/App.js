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

function App() {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
 
  return (
    <BrowserRouter>
      <div>
        {showDashboard ? (
          <Routes>
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
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
            <Route path="/journeymap" element={<JourneyMap />} />
          </Routes>
        ) : showForgotPassword ? (
          <ForgotPasswordPage onBack={() => setShowForgotPassword(false)} />
        ) : (
          <LoginPage
            onForgotPassword={() => setShowForgotPassword(true)}
            onDashboard={() => setShowDashboard(true)}
          />
        )}
      </div>
    </BrowserRouter>
  );
}
 
export default App;
 