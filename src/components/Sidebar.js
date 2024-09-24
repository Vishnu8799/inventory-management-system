import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css'

const Sidebar = ({ onLogout }) => {
  return (
    <div className="sidebar">
      <h2>Inventory System</h2>
      <ul>
        <li>
          <NavLink to="/dashboard">Home</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/product-list">Product List</NavLink>
        </li>
      </ul>
      <button onClick={onLogout} className="logout-btn">Logout</button>
    </div>
  );
};

export default Sidebar;
