import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUser, FaChartBar, FaFlag, FaCog, FaHome, FaMoon, FaSun } from "react-icons/fa";
import "./sidebar.css";

const Sidebar = ({ toggleDarkMode, darkMode }) => {
  const location = useLocation();

  // ✅ Sidebar ko login page pe hide karne ka logic
  if (location.pathname === "/login") return null;

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>📌 Bobble AI</h2>
      </div>

      <div className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? <FaMoon /> : <FaSun />} Dark Mode
      </div>

      <nav className="nav-links">
        <Link to="/dashboard" className="nav-item">
          <FaHome className="nav-icon" /> Dashboard
        </Link>
        <Link to="/users" className="nav-item">
          <FaUser className="nav-icon" /> Users
        </Link>
        <Link to="/flagged" className="nav-item">
          <FaFlag className="nav-icon" /> Flagged Content
        </Link>
        <Link to="/analytics" className="nav-item">
          <FaChartBar className="nav-icon" /> Analytics
        </Link>
        <Link to="/settings" className="nav-item">
          <FaCog className="nav-icon" /> Settings
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
