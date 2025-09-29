// src/pages/About.jsx
import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <h2>About Smart Concrete Monitoring</h2>

      <section className="about-section">
        <h3>What is Concrete?</h3>
        <p>
          Concrete is a composite material composed of fine and coarse aggregates 
          bonded together with a fluid cement that hardens over time. It is one of 
          the most widely used construction materials in the world due to its 
          durability, strength, and versatility.
        </p>
      </section>

      <section className="about-section">
        <h3>Importance of Monitoring Concrete Structures</h3>
        <p>
          Monitoring concrete structures is essential for safety and longevity. 
          Structural health monitoring helps detect early signs of damage, such as:
        </p>
        <ul>
          <li>Cracks and micro-cracks</li>
          <li>Excessive stress or strain</li>
          <li>Vibration and dynamic responses</li>
          <li>Corrosion of reinforcement</li>
          <li>Temperature, humidity, and moisture changes</li>
        </ul>
        <p>
          Regular monitoring can prevent catastrophic failures and extend the lifespan 
          of structures like bridges, buildings, dams, and tunnels.
        </p>
      </section>

      <section className="about-section">
        <h3>How Smart Concrete Monitoring Works</h3>
        <p>
          Smart Concrete Monitoring uses a network of sensors embedded in concrete or 
          attached to structures. These sensors measure various parameters:
        </p>
        <ul>
          <li>Stress (MPa)</li>
          <li>Strain (microstrain)</li>
          <li>Vibration (m/s²)</li>
          <li>Crack length (mm)</li>
          <li>Temperature (°C)</li>
          <li>Humidity (%)</li>
          <li>Moisture content (%)</li>
          <li>Permeability</li>
          <li>Corrosion rate (mm/yr)</li>
          <li>Battery voltage and signal strength</li>
        </ul>
        <p>
          Data from sensors is collected in real-time and analyzed to detect anomalies. 
          Alerts can be sent via email, SMS, or in-app notifications when thresholds are exceeded. 
          Historical data allows engineers to track trends, predict failures, and make informed decisions.
        </p>
      </section>

      <section className="about-section">
        <h3>Benefits of Smart Monitoring</h3>
        <ul>
          <li>Early detection of structural issues</li>
          <li>Improved safety for occupants and users</li>
          <li>Optimized maintenance schedules</li>
          <li>Extended lifespan of structures</li>
          <li>Cost savings through preventive actions</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
