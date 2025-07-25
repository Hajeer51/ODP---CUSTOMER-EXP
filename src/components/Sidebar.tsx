import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Sidebar.css';
import logo from '../assets/logo.png';
import { 
  MdDashboard,
  MdAccountCircle, 
  MdSettings, 
  MdPeople
} from 'react-icons/md';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="logo" />
      </div>
      <div className="sidebar-content">
      <ul>
        <li>
          <h3 className='sidebar-title' style={{color: '#0c814a'}}>360-Dashboard</h3>
          <div className="search-box">
            <input 
              type="text" 
              placeholder="Search..." 
              className="search-input"
            />
          </div>
        </li>
        <li><Link to="/dashboard" className={`link ${location.pathname === '/dashboard' ? 'active-link' : ''}`}><MdDashboard /> Overview</Link></li>
        <div className="sidebar-divider"></div>
        <li><Link to="/api" className={`link ${location.pathname.startsWith('/api') ? 'active-link' : ''}`}><MdSettings /> API Configration</Link></li>
        <li><Link to="/user-management" className={`link ${['/user-management', '/user-details'].some(path => location.pathname.startsWith(path)) ? 'active-link' : ''}`}><MdPeople /> User Management</Link></li>

      </ul>
      </div>
    </div>
  );
};

export default Sidebar;