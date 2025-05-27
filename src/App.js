import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import Dashboard from './components/dashboard.tsx';

function App() {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <BrowserRouter>
      <div> 
        {showDashboard ? (
          <Dashboard />
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
