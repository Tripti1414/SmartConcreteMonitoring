// src/pages/Dashboard.jsx
import React, { useContext } from "react";
import AlertsPanel from "../components/AlertsPanel";
import RealtimeChart from "../components/RealtimeChart";
import "./Dashboard.css";
import { SensorContext } from "../context/SensorContext";

function Dashboard() {
  const { sensorData, thresholds } = useContext(SensorContext);

  const getCardClass = (key, value) => {
    if (!thresholds) return "sensor-card normal";
    if (thresholds[key] && value > thresholds[key]) return "sensor-card alert";
    return "sensor-card normal";
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="dashboard-content">
        <div className="left-column">
<h2>🛰️ Sensor Overview</h2>
          <div className="sensor-cards">
            {Object.entries(sensorData).map(([key, value]) => {
              if (key === "anomaly") return null;
              return (
                <div key={key} className={getCardClass(key, value)}>
                  <p>{key.replace(/_/g, " ").toUpperCase()}</p>
                  <p>{value.toString()}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="right-column">
          <h2>

📊 Realtime Charts</h2>
          <div className="charts">
            <RealtimeChart type="Stress ⚡" value={sensorData.stress_MPa} />
            <RealtimeChart type="Strain 🔧" value={sensorData.strain_microstrain} />
            <RealtimeChart type="Vibration 🌊" value={sensorData.vibration_m_s2} />
            <RealtimeChart type="Temperature 🌡️" value={sensorData.temperature_C} />
            <RealtimeChart type="Humidity 💧" value={sensorData.humidity_pct} />
          </div>

          <AlertsPanel
            stress={sensorData.stress_MPa}
            strain={sensorData.strain_microstrain}
            vibration={sensorData.vibration_m_s2}
            thresholds={thresholds}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
