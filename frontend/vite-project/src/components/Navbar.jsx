import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem('token')));

  useEffect(() => {
    const handleStorage = () => setIsLoggedIn(Boolean(localStorage.getItem('token')));
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <nav className="navbar">
      {isLoggedIn && <Link className="navbar-link" to="/">Dashboard</Link>}
      <Link className="navbar-link" to="/refer">Refer Candidate</Link>
      {!isLoggedIn && <Link className="navbar-link" to="/login">Login</Link>}
      {!isLoggedIn && <Link className="navbar-link" to="/signup">Sign Up</Link>}
      {isLoggedIn && <button className="navbar-logout" onClick={handleLogout}>Logout</button>}
    </nav>
  );
};

export default Navbar;