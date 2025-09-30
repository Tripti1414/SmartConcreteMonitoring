import React from "react";
import "./Terms.css";

function Terms() {
  return (
    <div className="terms-container">
      <h1>Terms & Conditions</h1>
      <p>
        Welcome to Smart Concrete Monitoring. By accessing or using our platform,
        you agree to comply with these Terms & Conditions.
      </p>

      <div className="terms-section">
        <h2>1. User Accounts</h2>
        <p>
          Users must create accounts to access dashboards and reports. You are responsible
          for maintaining the confidentiality of your login credentials and for all activity
          under your account.
        </p>
      </div>

      <div className="terms-section">
        <h2>2. Usage Rules</h2>
        <p>
          The platform is to be used only for authorized purposes. Users must not manipulate
          sensor data, attempt unauthorized access, or misuse the system.
        </p>
      </div>

      <div className="terms-section">
        <h2>3. Data and Privacy</h2>
        <p>
          Your use of Smart Concrete Monitoring is subject to our <strong>Privacy Policy</strong>.
          We collect sensor data, reports, and login information as described therein.
        </p>
      </div>

      <div className="terms-section">
        <h2>4. Intellectual Property</h2>
        <p>
          All software, dashboards, reports, and content provided by Smart Concrete Monitoring
          are owned by us. Users may not copy, distribute, or reverse-engineer our platform.
        </p>
      </div>

      <div className="terms-section">
        <h2>5. Limitations of Liability</h2>
        <p>
          Smart Concrete Monitoring is not responsible for misinterpreted data, downtime, 
          sensor errors, or data loss. The platform provides estimates for monitoring purposes only.
        </p>
      </div>

      <div className="terms-section">
        <h2>6. Termination</h2>
        <p>
          We may suspend or terminate accounts that violate these terms. Users may close
          their accounts at any time.
        </p>
      </div>

      <div className="terms-section">
        <h2>7. Disclaimers</h2>
        <p>
          Data provided by the platform is not a guarantee of structural safety. Users
          should consult certified engineers before making critical decisions.
        </p>
      </div>

      <div className="terms-section">
        <h2>8. Governing Law</h2>
        <p>
          These Terms & Conditions are governed by the laws of India.
        </p>
      </div>

      <div className="terms-section">
        <h2>9. Changes to Terms</h2>
        <p>
          We may update these terms from time to time. Users should review them periodically.
        </p>
      </div>

      <div className="terms-section">
        <h2>10. Contact</h2>
        <p>
          For questions regarding these terms, please contact us at <strong>terms@smartconcrete.com</strong>.
        </p>
      </div>
    </div>
  );
}

export default Terms;
