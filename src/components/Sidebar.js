import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './index.css';

const Sidebar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();  // Trigger logout
    localStorage.removeItem("user"); // Remove user data from localStorage (if used)
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <div className="sidebar">
      <ul style={{ height: '80px' }}>
        <li style={{ fontSize: '20px', fontWeight: 'bold' }}>Inventory Management</li>
      </ul>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/product-list">Product List</Link></li>
        {/* <li><Link to="/add-product">Add Product</Link></li> */}
        <li><Link to="/login" onClick={handleLogout}>Logout</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
