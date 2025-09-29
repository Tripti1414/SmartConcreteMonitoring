import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";
import heroImage from "../assets/image.png"; // Add your image in src/assets folder

function HeroSection() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <h1>🏗️ Smart Concrete Monitoring</h1>
          <p>Monitor concrete health in real-time with intelligent sensors and automated alerts to prevent structural failures.</p>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => navigate("/dashboard")}>
              View Dashboard
            </button>
            <button className="secondary-btn" onClick={() => navigate("/reports")}>
              Learn More
            </button>
          </div>

          {/* Feature Highlights */}
          <div className="hero-features">
            <div className="feature-box">⚡ Vibration Alerts</div>
            <div className="feature-box">📊 Stress & Strain</div>
            <div className="feature-box">🌡️ Temp & Humidity</div>
            <div className="feature-box">✅ Real-time Notifications</div>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-image">
          <img src={heroImage} alt="Smart Concrete Monitoring" />
        </div>
      </div>

      {/* Popup info card */}
      {showPopup && (
        <div className="hero-popup">
          <h3>Live Stats Available!</h3>
          <p>Quickly check real-time alerts and sensor data from your structures.</p>
          <button onClick={() => setShowPopup(false)}>✖ Close</button>
        </div>
      )}
    </section>
  );
}

export default HeroSection;
