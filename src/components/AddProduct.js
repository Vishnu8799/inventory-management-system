import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'; // Ensure you have your styles in this CSS file

const AddProduct = ({ products, setProducts }) => {
  const [productData, setProductData] = useState({
    id: '',
    category: '',
    brandName: '',
    productName: '',
    productModel: '',
    quantity: '',
    supplierName: '',
    status: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation to check if all fields are filled
    if (!productData.id || !productData.category || !productData.brandName || !productData.productName || !productData.productModel || !productData.quantity || !productData.supplierName || !productData.status) {
      setError('Please fill all the fields.');
      return;
    }

    // Call the addProduct function passed down as a prop
    setProducts((prevProducts) => [...prevProducts, productData]);
    navigate("/product-list", { state: { message: "Product added successfully!" } });
    
    // Clear form and navigate back to product list
    setProductData({
      id: '',
      category: '',
      brandName: '',
      productName: '',
      productModel: '',
      quantity: '',
      supplierName: '',
      status: '',
    });
  };

  return (
    <div className="add-product-container">
      <div style={{fontSize:'22px',display:'flex',justifyContent:'center'}}>Add Product</div>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ID:</label>
          <input
            type="text"
            value={productData.id}
            onChange={(e) => setProductData({ ...productData, id: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <select
            value={productData.category}
            onChange={(e) => setProductData({ ...productData, category: e.target.value })}
            required
          >
            <option value="">Select Category</option>
            <option value="Speaker">Speaker</option>
            <option value="Smartphone">Smartphone</option>
            <option value="Headset">Headset</option>
            <option value="iPod">iPod</option>
            <option value="Random Item">Random Item</option>
          </select>
        </div>
        <div className="form-group">
          <label>Brand Name:</label>
          <input
            type="text"
            value={productData.brandName}
            onChange={(e) => setProductData({ ...productData, brandName: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Product Name:</label>
          <input
            type="text"
            value={productData.productName}
            onChange={(e) => setProductData({ ...productData, productName: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Product Model:</label>
          <input
            type="text"
            value={productData.productModel}
            onChange={(e) => setProductData({ ...productData, productModel: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Quantity:</label>
          <input
            type="number"
            value={productData.quantity}
            onChange={(e) => setProductData({ ...productData, quantity: e.target.value })}
            required
            min="0"
          />
        </div>
        <div className="form-group">
          <label>Supplier Name:</label>
          <input
            type="text"
            value={productData.supplierName}
            onChange={(e) => setProductData({ ...productData, supplierName: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Status:</label>
          <input
            type="text"
            value={productData.status}
            onChange={(e) => setProductData({ ...productData, status: e.target.value })}
            required
          />
        </div>
        <div className="form-buttons">
          <button type="submit">Add Product</button>
          <button type="button" onClick={() => navigate("/product-list")}>Back</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
