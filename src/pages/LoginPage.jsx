import React, { useState, useEffect } from 'react';
import LoginForm from '../components/LoginForm';
import styles from '../styles/LoginPage.module.css';

const LoginPage = ({ onForgotPassword, onDashboard }) => {
  const [formVisible, setFormVisible] = useState(false);
  const [rightPanelVisible, setRightPanelVisible] = useState(false);
  const [bgImageVisible, setBgImageVisible] = useState(false);

  useEffect(() => {
    // 1. Background image fade in
    setBgImageVisible(true); // Starts immediately

    // 2. Left panel (form) animation
    const formTimer = setTimeout(() => {
      setFormVisible(true);
    }, 200); // Start form animation after 200ms

    // 3. Right panel content animation
    const rightPanelTimer = setTimeout(() => {
      setRightPanelVisible(true);
    }, 700); // Start right panel animation after 700ms (after form starts moving)

    // Cleanup timers
    return () => {
      clearTimeout(formTimer);
      clearTimeout(rightPanelTimer);
    };
  }, []); // Run once on component mount

  return (
    <div className={styles.loginPage}>
      {/* Left Panel - LoginForm */}
      <div
        className={styles.leftPanel}
        style={{
          opacity: formVisible ? 1 : 0,
          transform: `translateX(${formVisible ? '0' : '-50px'})`, // Slide from left
          transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
        }}
      >
        <LoginForm onDashboard={onDashboard} />
      </div>

      {/* Right Panel - Dashboard Info */}
      <div
        className={styles.rightPanel}
        style={{
          opacity: rightPanelVisible ? 1 : 0,
          transform: `translateY(${rightPanelVisible ? '0' : '20px'})`, // Slide up
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }}
      >
        <div className={styles.dashboardInfo}>
          <h1 className={styles.dashboardTitle}>
            <span
              className={styles.dashboard360}
              style={{
                opacity: rightPanelVisible ? 1 : 0,
                transform: `translateY(${rightPanelVisible ? '0' : '10px'})`,
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                transitionDelay: '0.2s',
                display: 'inline-block',
              }}
            >360</span><br />
            <span
              className={styles.dashboardCustomer}
              style={{
                opacity: rightPanelVisible ? 1 : 0,
                transform: `translateY(${rightPanelVisible ? '0' : '10px'})`,
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                transitionDelay: '0.4s',
                display: 'inline-block',
              }}
            >Customer Experience</span><br />
            <span
              className={styles.dashboardDashboard}
              style={{
                opacity: rightPanelVisible ? 1 : 0,
                transform: `translateY(${rightPanelVisible ? '0' : '10px'})`,
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                transitionDelay: '0.6s',
                display: 'inline-block',
              }}
            >Dashboard</span>
          </h1>
          <p className={styles.dashboardDesc}>
            <span
              style={{
                opacity: rightPanelVisible ? 1 : 0,
                transform: `translateX(${rightPanelVisible ? '0' : '-50px'})`,
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                transitionDelay: '0.8s',
                display: 'inline-block',
              }}
            >A 360-degree dashboard provides a comprehensive,</span><br />
            <span
              style={{
                opacity: rightPanelVisible ? 1 : 0,
                transform: `translateX(${rightPanelVisible ? '0' : '-50px'})`,
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                transitionDelay: '1.0s',
                display: 'inline-block',
              }}
            >all-in-one overview of key information.</span><br />
            <span
              style={{
                opacity: rightPanelVisible ? 1 : 0,
                transform: `translateX(${rightPanelVisible ? '0' : '-50px'})`,
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                transitionDelay: '1.2s',
                display: 'inline-block',
              }}
            >It brings together data from multiple sources for a holistic, real-time snapshot.</span>
          </p>
        </div>
      </div>

      {/* Background Image */}
      <img
        src={require('../assets/background.png')}
        alt="Background"
        className={styles.bgImage}
        style={{
          opacity: bgImageVisible ? 1 : 0,
          transition: 'opacity 1s ease-out',
        }}
      />
    </div>
  );
};

export default LoginPage; 