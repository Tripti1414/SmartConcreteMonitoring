import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      {/* Top Branding Section */}
      <div className="footer-top">
        <h2>🏗️ Smart Concrete Monitoring</h2>
        <p>Monitoring your infrastructure with precision & care ⚡</p>
      </div>

      {/* Middle Grid Section */}
      <div className="footer-middle">
        {/* Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <a href="/settings">⚙️ Settings</a>
          <a href="/reports">📊 Reports</a>
          <a href="/contact">📩 Contact</a>
          <a href="/about">ℹ️ About</a>
        </div>

        {/* Help & Support */}
        <div className="footer-column">
          <h4>Help Center</h4>
          <a href="/faq">❓ FAQ</a>
          <a href="/contact">🛠️ Technical Support</a>
          <a href="/about">📘 User Guides</a>
          <a href="Terms">📜 Terms & Conditions</a>
        </div>

        {/* Resources */}
        {/* <div className="footer-column">
          <h4>Resources</h4>
          <a href="/blogs">📰 Blogs</a>
          <a href="/case-studies">📂 Case Studies</a>
          <a href="/whitepapers">📑 Whitepapers</a>
          <a href="/partners">🤝 Our Partners</a>
        </div> */}

        {/* Contact & Newsletter */}
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p><FaEnvelope /> support@smartconcrete.com</p>
          <p><FaPhoneAlt /> +91 98765 34680</p>
          <p><FaMapMarkerAlt /> ludhiana, India</p>

          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>

          {/* Newsletter */}
          <div className="newsletter">
            <h5>📬 Subscribe to our Newsletter</h5>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Smart Concrete Monitoring | Made with ❤️ by Tripti Pal</p>
      </div>
    </footer>
  );
}

export default Footer;
