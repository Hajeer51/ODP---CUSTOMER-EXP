import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import {  
  MdPerson
} from 'react-icons/md';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Clear any authentication state here (e.g., localStorage, cookies, etc.)
    localStorage.removeItem('user');
    // Close the dropdown
    setIsDropdownOpen(false);
    // Add a small delay to ensure localStorage is cleared before navigation
    setTimeout(() => {
      // Redirect to login page
      navigate('/login');
    }, 100);
  };

  const handleJourneyMapClick = () => {
    navigate('/journeymap');
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
        <li>
          <Link to="/" className={`link${location.pathname === '/' ? ' active-link' : ''}`} style={{
            fontFamily: 'Inter, SF Pro Text, Arial, sans-serif',
            fontWeight: 500,
            fontSize: '1.22rem',
            color: location.pathname === '/' ? '#0c8145' : '#000',
            letterSpacing: '0.01em',
            background: 'none',
            border: 'none',
            boxShadow: 'none',
            padding: '0.5rem 1.2rem',
            borderRadius: '8px',
            transition: 'color 0.2s, background 0.2s',
            textDecoration: 'none',
            position: 'relative',
          }}>Home</Link>
        </li>
        <li>
          <Link to="/journeymap" className={`link${location.pathname.startsWith('/journeymap') ? ' active-link' : ''}`} style={{
            fontFamily: 'Inter, SF Pro Text, Arial, sans-serif',
            fontWeight: 500,
            fontSize: '1.12rem',
            color: location.pathname.startsWith('/journeymap') ? '#0c8145' : '#000',
            background: location.pathname.startsWith('/journeymap') ? '#e6f4ea' : 'none',
            boxShadow: location.pathname.startsWith('/journeymap') ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
            borderRadius: '8px',
            padding: '12px 15px',
            transition: 'color 0.2s, background 0.2s',
            textDecoration: 'none',
            position: 'relative',
          }}>Journey Map</Link>
        </li>
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
                <MdPerson size={20} />
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
             <a href="/login" className="dropdown-item" style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer' }}>
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