import React from 'react';
import { Link } from 'react-router-dom'; // For internal routing
import '../styles/Header.css'; // Import any necessary styles

function Header() {
  return (
    <header className="header">
      <img
        className="picture1"
        src="images/pexels-jill-wellington-3776939.jpg"
        alt="Sweet Treats"
      />
      <a href="./images/PXL_20231021_160809326~2.jpg" className="logo">
        "Sweet Treats"
      </a>
      <nav className="navbar">
        {/* Internal navigation */}
        <Link to="/about">About</Link> {/* Internal Link */}
        
        {/* External Register link */}
        <a
          href="http://localhost:5050/users/new"
          target="_blank" /* Open in a new tab (optional) */
          rel="noopener noreferrer" /* Security attribute */
          className="register-button"
        >
          Register
        </a>
        
        <a
          href="http://localhost:5050/logins/new"
          target="_blank" /* Open in a new tab (optional) */
          rel="noopener noreferrer" /* Security attribute */
          className="login-button"
        >
          Login
        </a>
     
      </nav>
    </header>
  );
}

export default Header;
