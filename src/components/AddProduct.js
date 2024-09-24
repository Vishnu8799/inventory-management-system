import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = ({ addProduct }) => {
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
    addProduct(productData);

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
    navigate('/dashboard/products');
  };

  return (
    <div>
      <h2>Add Product</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input
            type="text"
            value={productData.id}
            onChange={(e) => setProductData({ ...productData, id: e.target.value })}
            required
          />
        </div>
        <div>
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
        <div>
          <label>Brand Name:</label>
          <input
            type="text"
            value={productData.brandName}
            onChange={(e) => setProductData({ ...productData, brandName: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            value={productData.productName}
            onChange={(e) => setProductData({ ...productData, productName: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Product Model:</label>
          <input
            type="text"
            value={productData.productModel}
            onChange={(e) => setProductData({ ...productData, productModel: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            value={productData.quantity}
            onChange={(e) => setProductData({ ...productData, quantity: e.target.value })}
            required
            min="0"
          />
        </div>
        <div>
          <label>Supplier Name:</label>
          <input
            type="text"
            value={productData.supplierName}
            onChange={(e) => setProductData({ ...productData, supplierName: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Status:</label>
          <input
            type="text"
            value={productData.status}
            onChange={(e) => setProductData({ ...productData, status: e.target.value })}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
