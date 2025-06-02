import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Clear any authentication state here (e.g., localStorage, cookies, etc.)
    localStorage.removeItem('user');
    // Close the dropdown
    setIsDropdownOpen(false);
    // Redirect to login page
    navigate('/login');
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
        <li><Link to="/" className="link">Journey Map</Link></li>
        <li className="user-menu" ref={dropdownRef}>
          <button className="user-button" onClick={toggleDropdown} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: '#e6f4ee',
              color: '#0c814a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 600,
              fontSize: 16,
              marginRight: 8,
            }}>
              
            </div>
            <span style={{ color: '#222', fontWeight: 500, fontSize: 16, marginRight: 4 }}></span>
            <i className={`bx ${isDropdownOpen ? 'bxs-chevron-up' : 'bxs-chevron-down'}`} style={{ fontSize: '16px', color: '#222' }}></i>
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/settings" className="dropdown-item">
                <i className='bx bxs-cog'></i>
                Settings
              </Link>
              <div className="dropdown-divider"></div>
              <button onClick={handleLogout} className="dropdown-item" style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer' }}>
                <i className='bx bxs-log-out'></i>
                Logout
              </button>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar; 