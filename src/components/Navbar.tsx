import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav>
      <ul>
        <li><Link to="/" className="link">Home</Link></li>
        <li className="user-menu">
          <button className="user-button" onClick={toggleDropdown}>
            <i className='bx bxs-user-circle'></i>
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/profile" className="dropdown-item">
                <i className='bx bxs-user'></i>
                Profile
              </Link>
              <Link to="/settings" className="dropdown-item">
                <i className='bx bxs-cog'></i>
                Settings
              </Link>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">
                <i className='bx bxs-log-out'></i>
                Logout
              </a>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar; 