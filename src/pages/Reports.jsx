// src/pages/Reports.jsx
import React, { useContext, useState, useEffect } from "react";
import { SensorContext } from "../context/SensorContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import "./Reports.css";

function Reports() {
  const { sensorDataHistory } = useContext(SensorContext); // Array of historical sensor data
  const [filteredData, setFilteredData] = useState([]);
  const [dateRange, setDateRange] = useState({ from: "", to: "" });
  const [selectedSensors, setSelectedSensors] = useState([
    "stress_MPa",
    "strain_microstrain",
    "vibration_m_s2",
  ]);

  // Filter data by date range
  useEffect(() => {
    if (!sensorDataHistory) return;
    let data = sensorDataHistory;

    if (dateRange.from) {
      data = data.filter((d) => new Date(d.timestamp) >= new Date(dateRange.from));
    }
    if (dateRange.to) {
      data = data.filter((d) => new Date(d.timestamp) <= new Date(dateRange.to));
    }
    setFilteredData(data);
  }, [sensorDataHistory, dateRange]);

  // Download CSV function (all or filtered)
  const downloadCSV = (dataToDownload, filename = "sensor_report.csv") => {
    if (!dataToDownload || dataToDownload.length === 0) return;
    const headers = Object.keys(dataToDownload[0]).join(",");
    const rows = dataToDownload.map((row) => Object.values(row).join(",")).join("\n");
    const csvContent = "data:text/csv;charset=utf-8," + headers + "\n" + rows;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Helper to calculate summary metrics
  const calculateSummary = (key) => {
    if (!filteredData || filteredData.length === 0) return { max: 0, min: 0, avg: 0 };
    const values = filteredData.map((d) => d[key]);
    const max = Math.max(...values);
    const min = Math.min(...values);
    const avg = (values.reduce((a, b) => a + b, 0) / values.length).toFixed(2);
    return { max, min, avg };
  };

  return (
    <div className="reports-page">
      <h2>Sensor Reports</h2>

      {/* Date Filter */}
      <div className="filters">
        <div className="date-filter">
          <label>From: </label>
          <input
            type="date"
            value={dateRange.from}
            onChange={(e) => setDateRange({ ...dateRange, from: e.target.value })}
          />
          <label>To: </label>
          <input
            type="date"
            value={dateRange.to}
            onChange={(e) => setDateRange({ ...dateRange, to: e.target.value })}
          />
        </div>

        <div className="download-buttons">
          <button onClick={() => downloadCSV(filteredData, "filtered_sensor_report.csv")}>
            Download Filtered CSV
          </button>
          <button onClick={() => downloadCSV(sensorDataHistory, "full_sensor_report.csv")}>
            Download Full CSV
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="summary-cards">
        {selectedSensors.map((key) => {
          const { max, min, avg } = calculateSummary(key);
          return (
            <div key={key} className="summary-card">
              <h3>{key.replace(/_/g, " ").toUpperCase()}</h3>
              <p>Max: {max}</p>
              <p>Min: {min}</p>
              <p>Avg: {avg}</p>
            </div>
          );
        })}
      </div>

      {/* Sensor Trend Charts */}
      <div className="charts-section">
        {selectedSensors.map((key) => (
          <div key={key} className="chart-card">
            <h3>{key.replace(/_/g, " ").toUpperCase()} Trend</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={filteredData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="timestamp" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey={key}
                  stroke="#8884d8"
                  dot={false}
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
            <button
              onClick={() =>
                downloadCSV(
                  filteredData.map((row) => ({ timestamp: row.timestamp, [key]: row[key] })),
                  `${key}_trend.csv`
                )
              }
            >
              Download {key} CSV
            </button>
          </div>
        ))}
      </div>

      {/* Alerts Table */}
      <div className="alerts-table">
        <h3>Alert Events</h3>
        <button
          onClick={() =>
            downloadCSV(
              filteredData.filter((d) => d.anomaly),
              "alerts_report.csv"
            )
          }
        >
          Download Alerts CSV
        </button>
        <table>
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Sensor</th>
              <th>Value</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData
              .filter((d) => d.anomaly)
              .map((d, idx) => (
                <tr key={idx}>
                  <td>{d.timestamp}</td>
                  <td>{d.sensor_id || "N/A"}</td>
                  <td>{d.stress_MPa}</td>
                  <td>Alert</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Reports;
