import React from 'react';
import '../styles/navbar.scss';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <div className="logo-text">Logo</div>
        </div>
        <div className="nav-actions">
          <button className="btn-icon">
            <span className="material-icons-outlined">favorite_border</span>
          </button>
          <a href="#" className="btn-manage">Manage Booking</a>
        </div>
      </div>
    </nav>
  );
}
