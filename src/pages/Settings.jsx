  // src/pages/Settings.jsx
  import React, { useContext, useState, useEffect } from "react";
  import { SensorContext } from "../context/SensorContext";
  import { AuthContext } from "../context/AuthContext";
  import "./Settings.css";

  function Settings() {
    const { user, login, logout } = useContext(AuthContext);
    const { thresholds, setThresholds, alertSettings, setAlertSettings } =
      useContext(SensorContext);

    const [localThresholds, setLocalThresholds] = useState(thresholds);
    const [localAlerts, setLocalAlerts] = useState(alertSettings);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
      setLocalThresholds(thresholds);
      setLocalAlerts(alertSettings);
    }, [thresholds, alertSettings]);

    const handleLogin = (e) => {
      e.preventDefault();
      const logged = login(email, password);
      if (!logged) return alert("Invalid credentials");
    };

    if (!user) {
      return (
        <div className="login-settings">
          <h2>Admin Login Required</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      );
    }

    return (
      <div className="settings-page">
  <button className="logout-btn" onClick={logout}>
    🔒 Logout
  </button>
        <h2>System Settings</h2>

        <div className="settings-section">
          <h3>Sensor Thresholds</h3>
          <div className="thresholds-grid">
            {Object.entries(localThresholds).map(([key, value]) => (
              <div key={key} className="threshold-card">
                <label>{key.replace(/_/g, " ").toUpperCase()}</label>
                <input
                  type="number"
                  value={value}
                  onChange={(e) =>
                    setLocalThresholds({ ...localThresholds, [key]: Number(e.target.value) })
                  }
                />
              </div>
            ))}
          </div>
        </div>

        <div className="settings-section">
          <h3>Alert & Notification Settings</h3>
          <div className="alerts-grid">
            {Object.entries(localAlerts).map(([key, value]) => (
              <div key={key} className="alert-card">
                {typeof value === "boolean" ? (
                  <label>
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={(e) =>
                        setLocalAlerts({ ...localAlerts, [key]: e.target.checked })
                      }
                    />
                    {key.toUpperCase()}
                  </label>
                ) : (
                  <label>
                    {key.toUpperCase()}
                    <input
                      type="number"
                      min="1"
                      value={value}
                      onChange={(e) =>
                        setLocalAlerts({ ...localAlerts, [key]: Number(e.target.value) })
                      }
                    />
                  </label>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="settings-buttons">
          <button
            className="save-btn"
            onClick={() => {
              setThresholds(localThresholds);
              setAlertSettings(localAlerts);
              alert("Saved!");
            }}
          >
            Save Changes
          </button>
          <button
            className="reset-btn"
            onClick={() => {
              setLocalThresholds({
                stress: 40,
                strain: 350,
                vibration: 3,
                temperature: 50,
                humidity: 90,
                moisture: 70,
                crack_length: 5,
                corrosion_rate: 1,
              });
              setLocalAlerts({ email: true, sms: false, inApp: true, repeatMinutes: 10 });
            }}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }

  export default Settings;
