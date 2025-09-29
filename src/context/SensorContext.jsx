import React, { createContext, useState, useEffect } from "react";
import Papa from "papaparse";

export const SensorContext = createContext();

export const SensorProvider = ({ children }) => {
  // Load thresholds & alerts from localStorage if available
  const storedThresholds = JSON.parse(localStorage.getItem("thresholds"));
  const storedAlerts = JSON.parse(localStorage.getItem("alertSettings"));

  // Real-time sensor data
  const [sensorData, setSensorData] = useState({
    timestamp: "",
    structure_id: "",
    sensor_id: "",
    location: "",
    stress_MPa: 0,
    strain_microstrain: 0,
    vibration_m_s2: 0,
    crack_length_mm: 0,
    temperature_C: 0,
    humidity_pct: 0,
    moisture_pct: 0,
    permeability_e_minus12_m2: 0,
    corrosion_rate_mm_per_yr: 0,
    battery_voltage: 0,
    signal_strength_dBm: 0,
    status_flag: "",
    anomaly: false,
  });

  // Historical data
  const [sensorDataHistory, setSensorDataHistory] = useState([]);

  // Thresholds for alerts
  const [thresholds, setThresholds] = useState(
    storedThresholds || {
      stress: 40,
      strain: 350,
      vibration: 3,
      temperature: 50,
      humidity: 90,
      moisture: 70,
      crack_length: 5,
      corrosion_rate: 1,
    }
  );

  // Alert preferences
  const [alertSettings, setAlertSettings] = useState(
    storedAlerts || {
      email: true,
      sms: false,
      inApp: true,
      repeatMinutes: 10,
    }
  );

  // Save thresholds and alerts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("thresholds", JSON.stringify(thresholds));
  }, [thresholds]);

  useEffect(() => {
    localStorage.setItem("alertSettings", JSON.stringify(alertSettings));
  }, [alertSettings]);

  // CSV streaming
  const [csvData, setCsvData] = useState([]);
  const [rowIndex, setRowIndex] = useState(0);

  // Load CSV once
  useEffect(() => {
    Papa.parse("/smart_concrete_dataset.csv", {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: (result) => setCsvData(result.data),
    });
  }, []);

  // Stream CSV row by row every 3 seconds
  useEffect(() => {
    if (csvData.length === 0) return;

    const interval = setInterval(() => {
      const row = csvData[rowIndex];
      setSensorData(row);
      setSensorDataHistory((prev) => [...prev, row]); // Append history

      setRowIndex((prevIndex) =>
        prevIndex + 1 < csvData.length ? prevIndex + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [csvData, rowIndex]);

  return (
    <SensorContext.Provider
      value={{
        sensorData,
        sensorDataHistory,
        thresholds,
        setThresholds,
        alertSettings,
        setAlertSettings,
      }}
    >
      {children}
    </SensorContext.Provider>
  );
};
