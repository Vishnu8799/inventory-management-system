import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import HomePage from './components/InventoryDashboard';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // For login status
  const [products, setProducts] = useState([]);

  // Handle login
  const handleLogin = () => setIsAuthenticated(true);
  
  // Handle logout
  const handleLogout = () => setIsAuthenticated(false);

  // Add product function
  const addProduct = (newProduct) => setProducts((prev) => [...prev, newProduct]);

  // Edit product function
  const editProduct = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((product) => (product.id === updatedProduct.id ? updatedProduct : product))
    );
  };

  // Delete product function
  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />} />
          
          <Route
            path="/dashboard/*"
            element={
              isAuthenticated ? (
                <div className="dashboard-layout">
                  <Sidebar onLogout={handleLogout} />
                  <div className="content">
                    <Routes>
                      <Route path="" element={<HomePage />} />
                      <Route
                        path="product-list"
                        element={
                          <ProductList
                            products={products}
                            onEdit={editProduct}
                            onDelete={deleteProduct}
                          />
                        }
                      />
                      <Route path="add-product" element={<AddProduct addProduct={addProduct} />} />
                    </Routes>
                  </div>
                </div>
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
