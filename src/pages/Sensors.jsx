import React, { useContext } from "react";
import "./Sensors.css";
import { SensorContext } from "../context/SensorContext";

function Sensors({ thresholds }) {
  const { sensorData } = useContext(SensorContext);

  const getCardClass = (key, value) => {
    if (!thresholds) return "sensor-card normal";
    if (thresholds[key] && value > thresholds[key]) return "sensor-card alert";
    return "sensor-card normal";
  };

  return (
    <div className="sensors-page">
      <h2>Smart Concrete Sensors Overview</h2>
      <p className="timestamp">Last Updated: {sensorData.timestamp}</p>

      {/* Structural Sensors */}
      <div className="sensor-section">
        <h3>Structural Sensors</h3>
        <div className="sensor-cards">
          <div className={getCardClass("stress", sensorData.stress_MPa)}>
            <p className="sensor-key">Stress</p>
            <p className="sensor-value">{sensorData.stress_MPa} MPa</p>
          </div>
          <div className={getCardClass("strain", sensorData.strain_microstrain)}>
            <p className="sensor-key">Strain</p>
            <p className="sensor-value">{sensorData.strain_microstrain} µm/m</p>
          </div>
          <div className={getCardClass("vibration", sensorData.vibration_m_s2)}>
            <p className="sensor-key">Vibration</p>
            <p className="sensor-value">{sensorData.vibration_m_s2} m/s²</p>
          </div>
          <div className="sensor-card">
            <p className="sensor-key">Crack Length</p>
            <p className="sensor-value">{sensorData.crack_length_mm} mm</p>
          </div>
        </div>
      </div>

      {/* Environmental Sensors */}
      <div className="sensor-section">
        <h3>Environmental Sensors</h3>
        <div className="sensor-cards">
          <div className="sensor-card">
            <p className="sensor-key">Temperature</p>
            <p className="sensor-value">{sensorData.temperature_C} °C</p>
          </div>
          <div className="sensor-card">
            <p className="sensor-key">Humidity</p>
            <p className="sensor-value">{sensorData.humidity_pct} %</p>
          </div>
          <div className="sensor-card">
            <p className="sensor-key">Moisture</p>
            <p className="sensor-value">{sensorData.moisture_pct} %</p>
          </div>
          <div className="sensor-card">
            <p className="sensor-key">Permeability</p>
            <p className="sensor-value">{sensorData.permeability_e_minus12_m2} e-12 m²</p>
          </div>
        </div>
      </div>

      {/* Durability & Connectivity */}
      <div className="sensor-section">
        <h3>Durability & Connectivity</h3>
        <div className="sensor-cards">
          <div className="sensor-card">
            <p className="sensor-key">Corrosion Rate</p>
            <p className="sensor-value">{sensorData.corrosion_rate_mm_per_yr} mm/yr</p>
          </div>
          <div className="sensor-card">
            <p className="sensor-key">Battery Voltage</p>
            <p className="sensor-value">{sensorData.battery_voltage} V</p>
          </div>
          <div className="sensor-card">
            <p className="sensor-key">Signal Strength</p>
            <p className="sensor-value">{sensorData.signal_strength_dBm} dBm</p>
          </div>
          <div className={`sensor-card ${sensorData.anomaly ? "alert" : "normal"}`}>
            <p className="sensor-key">Status</p>
            <p className="sensor-value">{sensorData.status_flag}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sensors;
