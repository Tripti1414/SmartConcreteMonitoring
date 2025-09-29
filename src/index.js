import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { SensorProvider } from "./context/SensorContext"; // relative to src/
import { AuthProvider } from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <SensorProvider>
        <App />
      </SensorProvider>
    </AuthProvider>
  </React.StrictMode>,
);
