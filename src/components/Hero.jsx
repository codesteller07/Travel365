import React from 'react';
import '../styles/hero.scss';

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-bg">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbiHzgkSrD0FC4nA3ZBzXEBND_pTka_rjlTg4EPVX6ZNx4hmToQWhUSBASK02zsYkOvU6dZGlVP4hv9wcSjQGArm4dl9faE7dy4g3Ol_rMT-tMKB5yCns_YxRiTHBKHPpbZaCIV3NM0CN2nrpauNQQg5Tn8zgaOk442hWmh6srQK49aENsEA6-JWzELSqnLabFR2l31AG5TiZAIOGciruMgzQUODWu15prfYrdYST2SCR8I8IOERwePjM6t0XNGwtUHkVIOlKE6vk"
          alt="Cinque Terre Italy Evening"
        />
        <div className="overlay"></div>
      </div>

      <div className="hero-content">
        <h1>Millions of cheap flights. One simple search</h1>

        <div className="search-card">
          <h2>Book Accommodations</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <div className="icon">
                <span className="material-icons-outlined">search</span>
              </div>
              <input type="text" placeholder="Where to?" />
            </div>

            <div className="input-group">
              <div className="icon">
                <span className="material-icons-outlined">calendar_today</span>
              </div>
              <input type="text" placeholder="Check-in & Check-out" />
            </div>

            <div className="input-group">
              <div className="icon">
                <span className="material-icons-outlined">group</span>
              </div>
              <input type="text" placeholder="Add guests" />
            </div>

            <div className="tags">
              <span>Top rated</span>
              <span>Free cancellation</span>
              <span>Daily breakfast</span>
            </div>

            <button type="button" className="btn-search">
              <span className="material-icons-outlined" style={{ fontSize: '1.25rem' }}>search</span>
              Let's go
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
