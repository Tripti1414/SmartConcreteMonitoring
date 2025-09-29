// src/components/AlertsPanel.jsx
import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import "./AlertsPanel.css";

function AlertsPanel({ stress, strain, vibration, thresholds }) {
  const prevAlerts = useRef([]); // prevent duplicate toasts

  // Use thresholds from props or default values
  const stressLimit = thresholds?.stress ?? 40;
  const strainLimit = thresholds?.strain ?? 350;
  const vibrationLimit = thresholds?.vibration ?? 3;

  // Build alerts array
  const alerts = [];
  if (stress > stressLimit)
    alerts.push({ message: `⚠ Stress too high! (${stress} > ${stressLimit})`, type: "high" });
  if (strain > strainLimit)
    alerts.push({ message: `⚠ Strain too high! (${strain} > ${strainLimit})`, type: "high" });
  if (vibration > vibrationLimit)
    alerts.push({ message: `⚠ Vibration too high! (${vibration} > ${vibrationLimit})`, type: "medium" });

  // Trigger toast notifications for new alerts only
  useEffect(() => {
    alerts.forEach((alert) => {
      if (!prevAlerts.current.includes(alert.message)) {
        toast(alert.message, {
          style: {
            background: "white",
            color: "black",
            borderBottom: alert.type === "high" ? "3px solid red" : "3px solid orange",
            fontWeight: "bold",
            borderRadius: "8px",
            padding: "10px",
          },
          autoClose: 2000,
          pauseOnHover: true,
          closeButton: true,
        });
      }
    });
    prevAlerts.current = alerts.map((a) => a.message);
  }, [stress, strain, vibration, alerts]);

  return (
    <div className="alerts-panel">
      <h4>Alerts</h4>
      {alerts.length === 0 ? (
        <p className="normal">All systems normal ✅</p>
      ) : (
        alerts.map((alert, index) => (
          <p
            key={index}
            className={alert.type === "high" ? "alert-high" : "alert-medium"}
          >
            {alert.message}
          </p>
        ))
      )}
    </div>
  );
}

export default AlertsPanel;
