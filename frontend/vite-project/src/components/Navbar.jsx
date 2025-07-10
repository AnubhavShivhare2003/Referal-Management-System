import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const isLoggedIn = Boolean(localStorage.getItem('token'));

  const handleLogout = () => {
    localStorage.removeItem('token');
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