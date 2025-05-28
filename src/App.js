import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import Dashboard from './components/dashboard.tsx';
import Tickets from './components/Tickets';
import TicketDetails from './components/TicketDetails';

function App() {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <BrowserRouter>
      <div> 
        {showDashboard ? (
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tickets" element={<Dashboard><Tickets /></Dashboard>} />
            <Route path="/tickets/:reference" element={<Dashboard><TicketDetails /></Dashboard>} />
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
