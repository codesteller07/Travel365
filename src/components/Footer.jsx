import React from 'react';
import '../styles/footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="logo-col">
            <div className="logo-text">Logo</div>
          </div>

          <div className="link-col">
            <h5>Company</h5>
            <ul>
              <li><a href="#">Terms and conditions</a></li>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Cookies policy</a></li>
            </ul>
          </div>

          <div className="link-col contact-col">
            <h5>Contact</h5>
            <div className="contact-info">
              <span className="material-icons-outlined text-sm">email</span>
              <a href="mailto:customers@travel365.co.uk">customers@travel365.co.uk</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © {new Date().getFullYear()} Travel365.com Ltd. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
