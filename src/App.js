import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';

function App() {
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  return (
    <div>
      {showForgotPassword ? (
        <ForgotPasswordPage onBack={() => setShowForgotPassword(false)} />
      ) : (
        <LoginPage onForgotPassword={() => setShowForgotPassword(true)} />
      )}
    </div>
  );
}

export default App;
