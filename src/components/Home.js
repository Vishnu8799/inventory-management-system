import React from "react";
import "./index.css"; // Ensure you have your styles in this CSS file

const Home = ({ products }) => {
  return (
    <div className="home-container">
      <h2>Product Inventory</h2>
      <div>
        {products.length === 0 ? (
          <p className="no-data-message">No data found.</p>
        ) : (
          <table className="product-table">
            <thead>
              {products.map((product,index)=>(
              <tr key={index}>
              <th>ID</th>
              <th>Category</th>
              <th>Brand Name</th>
              <th>Product Name</th>
              <th>Product Model</th>
              <th>Quantity</th>
              <th>Supplier Name</th>
              <th>Status</th>
              </tr>
              ))}
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                 <td>{product.id}</td>
                    <td>{product.category}</td>
                    <td>{product.brandName}</td>
                    <td>{product.productName}</td>
                    <td>{product.productModel}</td>
                    <td>{product.quantity}</td>
                    <td>{product.supplierName}</td>
                    <td>{product.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Home;
