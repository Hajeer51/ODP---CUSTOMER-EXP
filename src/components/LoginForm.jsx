import React, { useState } from 'react';
import styles from '../styles/LoginPage.module.css';

const LoginForm = ({ onForgotPassword, onDashboard }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add authentication logic
    // For now, just show dashboard on any login attempt
    onDashboard();
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <img src={require('../assets/logo.png')} alt="Oman DataPark Logo" className={styles.logo} />
      <h2>Login to your account</h2>
      <label htmlFor="email">E-mail Address</label>
      <input
        id="email"
        type="email"
        placeholder="you@omandatapark.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        autoComplete="username"
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        autoComplete="current-password"
      />
      <div className={styles.forgotPassword}>
        <a href="#" onClick={(e) => { e.preventDefault(); onForgotPassword(); }}>Forgot Password?</a>
      </div>
      <button type="submit" className={styles.signInBtn}>Sign In</button>
      <div className={styles.signupText}>
       Don't have account ?<a href="#">Request account</a>
      </div>
    </form>
  );
};

export default LoginForm; 