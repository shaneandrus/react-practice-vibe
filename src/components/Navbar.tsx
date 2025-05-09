import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      {/* Navigation links using React Router's Link */}
      <Link to="/" className="navbar__logo">Project Dashboard</Link>
      <div className="navbar__links">
        <Link to="/">Home</Link>
        {/* Example: Could add more links here */}
      </div>
    </nav>
  );
};

export default Navbar; 