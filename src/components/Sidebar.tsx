import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';
import logo from '../assets/logo.png';
import { 
  MdDashboard,
  MdAccountCircle, 
  MdAssessment, 
  MdConfirmationNumber, 
  MdMap, 
  MdStorage, 
  MdSettings 
} from 'react-icons/md';

const Sidebar = () => {
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
        <li><Link to="#" className="link"><MdDashboard /> Overview</Link></li>
        <li><Link to="#" className="link"><MdAccountCircle /> Account Details</Link></li>
        <li><Link to="#" className="link"><MdConfirmationNumber /> Tickets</Link></li>
        <li><a href="#" className="link"><MdStorage /> Usage</a></li>
        <li><a href="#" className="link"><MdDashboard /> Servers</a></li>
        <li><a href="#" className="link"><MdMap /> Journey Map</a></li>
        <li><a href="#" className="link"><MdAssessment /> Survey</a></li>
        <div className="sidebar-divider"></div>
        <li><a href="#" className="link"><MdSettings /> API Configration</a></li>
      </ul>
      </div>
    </div>
  );
};

export default Sidebar;