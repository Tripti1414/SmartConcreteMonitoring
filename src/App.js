import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Sensors from "./pages/Sensors";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import HeroSection from "./components/HeroSection";
import Faq from "./pages/Faq";
import Terms from "./pages/Terms";
function App() {
  const [thresholds, setThresholds] = useState({
    stress: 40,
    strain: 350,
    vibration: 3,
  });

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
         
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <HeroSection/>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/sensors" element={<Sensors />} />
            <Route
              path="/settings"
              element={
                <ProtectedRoute roles={["admin"]}>
                  <Settings thresholds={thresholds} setThresholds={setThresholds} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/reports"
              element={
                <ProtectedRoute>
                  <Reports />
                </ProtectedRoute>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />
                        <Route path="/terms" element={<Terms />} />


            {/* ✅ Default route goes to dashboard, not login */}
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={2000}
            closeOnClick
            closeButton
            theme="colored"
          />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
