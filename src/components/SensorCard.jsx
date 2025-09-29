// SensorCard.jsx
import React from "react";

function SensorCard({ sensor, value }) {
  return (
    <div className="sensor-card">
      <h3>{sensor}</h3>
      <p>{value}</p>
    </div>
  );
}

export default SensorCard; // ✅ default export
