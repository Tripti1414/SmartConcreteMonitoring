import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h3>🏗️ Smart Concrete Monitoring</h3>
        <p>Monitoring your infrastructure with precision & care ⚡</p>
      </div>

      <div className="footer-middle">
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="/settings">Settings</a>
          <a href="/reports">Reports</a>
          <a href="/contact">Contact</a>
          <a href="/about">About</a>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>📧 Email: support@smartconcrete.com</p>
          <p>📞 Phone: +91 98765 43210</p>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Smart Concrete Monitoring. Made with ❤️ by Tripti Pal</p>
      </div>
    </footer>
  );
}

export default Footer;
