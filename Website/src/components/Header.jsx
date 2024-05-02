import React from 'react';
import '../styles/Header.css'; // Add your styles if needed

function Header() {
  return (
    <header className="header">
      <img className="picture1" src="images/pexels-jill-wellington-3776939.jpg" alt="Sweet Treats" />
      <a href="a" className="logo">"Sweet Treats"</a>
      <nav className="navbar">
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#product">product</a>
        <select>
          <option value="Products">Products</option>
          <option value="classes">Classes</option>
          <option value="fiat">Amazon</option>
          <option value="audi">Contact Us</option>
        </select>
      </nav>
    </header>
  );
}

export default Header;
