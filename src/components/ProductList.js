import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const ProductList = ({ products, setProducts }) => {
  const [editIndex, setEditIndex] = useState(null); // Track which row is being edited
  const [editedProduct, setEditedProduct] = useState({}); // Store the edited product
  const navigate = useNavigate();

  // Handle Edit Button Click
  const handleEdit = (index, product) => {
    setEditIndex(index); // Set the index of the product being edited
    setEditedProduct({ ...product }); // Clone the product into editable state
  };

  // Handle Save Button Click
  const handleSave = (index) => {
    const updatedProducts = products.map((product, i) =>
      i === index ? editedProduct : product
    );
    setProducts(updatedProducts); // Save the edited product
    localStorage.setItem("inventory", JSON.stringify(updatedProducts)); // Save to localStorage
    setEditIndex(null); // Exit edit mode
  };

  // Handle Delete Button Click
  const handleDelete = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts); // Remove the product from the list
    localStorage.setItem("inventory", JSON.stringify(updatedProducts)); // Save to localStorage
  };

  // Handle Change in Input Fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = () => {
    navigate("/add-product");
  };

  return (
    <div className="home-container">
      <h2>Product List</h2>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button style={{ borderRadius: "10px" }} onClick={handleClick}>
          Add Product
        </button>
      </div>
      {products.length === 0 ? (
        <p className="no-data-message">No data found.</p>
      ) : (
        <table className="product-table">
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
            {products.map((product, index) => (
              <tr key={index}>
                {editIndex === index ? (
                  <>
                    <td>{product.id}</td>
                    <td>
                      <input
                        type="text"
                        name="category"
                        value={editedProduct.category || ""}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="brandName"
                        value={editedProduct.brandName || ""}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="productName"
                        value={editedProduct.productName || ""}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="productModel"
                        value={editedProduct.productModel || ""}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        name="quantity"
                        value={editedProduct.quantity || ""}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="supplierName"
                        value={editedProduct.supplierName || ""}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="status"
                        value={editedProduct.status || ""}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <button onClick={() => handleSave(index)}>Save</button>
                      <button onClick={() => setEditIndex(null)}>Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{product.id}</td>
                    <td>{product.category}</td>
                    <td>{product.brandName}</td>
                    <td>{product.productName}</td>
                    <td>{product.productModel}</td>
                    <td>{product.quantity}</td>
                    <td>{product.supplierName}</td>
                    <td>{product.status}</td>
                    <td>
                      <div
                        className="form-button"
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <button
                          style={{ borderRadius: "10px" }}
                          onClick={() => handleEdit(index, product)}
                        >
                          Edit
                        </button>
                        <button
                          style={{ borderRadius: "10px" }}
                          onClick={() => handleDelete(index)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductList;
