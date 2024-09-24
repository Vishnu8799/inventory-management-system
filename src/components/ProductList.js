import React from 'react';
import { NavLink } from 'react-router-dom';


const ProductList = ({ products, onDelete, onEdit }) => {
  return (
    <div>
      <h2>Product List</h2>
      <NavLink to="/dashboard/add-product">Add Product</NavLink>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Brand Name</th>
            <th>Product Name</th>
            <th>Product Model</th>
            <th>Quantity</th>
            <th>Supplier Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.category}</td>
              <td>{product.brandName}</td>
              <td>{product.productName}</td>
              <td>{product.productModel}</td>
              <td>{product.quantity}</td>
              <td>{product.supplierName}</td>
              <td>{product.status}</td>
              <td>
                <button onClick={() => onEdit(product)}>Edit</button>
                <button onClick={() => onDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
