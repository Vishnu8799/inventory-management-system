import React from 'react';

const InventoryDashboard = () => {
  const inventoryData = [
    { productName: 'iPhone', productCode: 'P001', startingInventory: 100, inventoryReceived: 50, inventoryShipped: 30, inventoryInHand: 120 },
    { productName: 'MacBook', productCode: 'P002', startingInventory: 200, inventoryReceived: 100, inventoryShipped: 50, inventoryInHand: 250 },
    // Add more items here
  ];

  return (
    <div className="inventory-dashboard">
      <h2>Inventory Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Code</th>
            <th>Starting Inventory</th>
            <th>Inventory Received</th>
            <th>Inventory Shipped</th>
            <th>Inventory In Hand</th>
          </tr>
        </thead>
        <tbody>
          {inventoryData.map((item, index) => (
            <tr key={index}>
              <td>{item.productName}</td>
              <td>{item.productCode}</td>
              <td>{item.startingInventory}</td>
              <td>{item.inventoryReceived}</td>
              <td>{item.inventoryShipped}</td>
              <td>{item.inventoryInHand}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryDashboard;
