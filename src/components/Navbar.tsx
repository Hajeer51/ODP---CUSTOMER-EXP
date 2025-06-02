import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav>
      <ul>
        <li><Link to="/" className="link">Home</Link></li>
        <li className="user-menu" ref={dropdownRef}>
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
              <Link to="/login" className="dropdown-item">
                <i className='bx bxs-log-out'></i>
                Logout
              </Link>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar; 