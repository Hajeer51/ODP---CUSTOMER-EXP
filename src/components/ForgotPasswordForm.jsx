import React, { useState } from 'react';
import styles from '../styles/ForgotPasswordForm.module.css';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <img src={require('../assets/logo.png')} alt="Oman DataPark Logo" className={styles.logo} />
      <h2>Forgot Password</h2>
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
      <button type="submit" className={styles.signInBtn}>Send</button>
      <a href="#" onClick={(e) => { e.preventDefault(); navigate('/'); }} className={styles.backToLogin}>
        Back to Login
      </a>
    </form>
  );
};

export default ForgotPasswordForm; 