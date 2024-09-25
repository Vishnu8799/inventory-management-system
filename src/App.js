import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import Sidebar from "./components/Sidebar";

function App() {
  const [products, setProducts] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication state

  const handleLogout = () => {
    // Perform any additional logout logic here
    setIsAuthenticated(false); // Update authentication state
    console.log("User logged out"); // Optional: Log the action
  };

  return (
    <Router>
      <div className="app-container">
        {isAuthenticated && <Sidebar onLogout={handleLogout} />}{" "}
        {/* Conditionally render Sidebar */}
        <div className="content">
          <Routes>
            <Route
              path="/login"
              element={<Login setIsAuthenticated={setIsAuthenticated} />}
            />
            <Route path="/home" element={<Home products={products} />} />
            <Route
              path="/product-list"
              element={
                <ProductList products={products} setProducts={setProducts} />
              }
            />
            <Route
              path="/add-product"
              element={<AddProduct setProducts={setProducts} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
