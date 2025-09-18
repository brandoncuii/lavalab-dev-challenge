import React, { useState } from 'react';
import { inventoryItems } from '../data/mockData';
import redTshirt from '../assets/red-tshirt.png';
import blackTshirt from '../assets/black-tshirt.png';
import whiteTshirt from '../assets/white-tshirt.png';
import '../styles/InventoryList.css';

function InventoryList() {
  const [items, setItems] = useState(inventoryItems); // State to manage inventory items
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  


  const updateStock = (id, change) => { // Change based on button click
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? {
              ...item,
              currentStock: Math.max(0, item.currentStock + change),
              status: (item.currentStock + change) < item.targetStock ? 'low' : 'good'
            }
          : item
      )
    );
  };

  const getTShirtIcon = (color) => {
    const icons = {
      red: redTshirt,
      black: blackTshirt,
      white: whiteTshirt
    };
    return icons[color] || redTshirt;
  };

  return ( // Main Component
    <div className="inventory-container">
      <div className="inventory-header">
        <h3>Materials / Blanks</h3>
        <div className="header-controls">
          <div className="tabs">
            <button className="tab active">Inventory</button>
            <button className="tab">Order Queue</button>
          </div>
          <button className="add-new-btn">+ Add New</button>
        </div>
      </div>

      <div className="search-bar">
      <input 
        type="text" 
        placeholder="Search Materials" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="inventory-list">
        {filteredItems.map(item => (
          <div key={item.id} className="inventory-item">
            <div className="item-info">
                <img src={getTShirtIcon(item.color)} alt="t-shirt" className="item-icon" />
                <span className="item-name">{item.name}</span>
            </div>
            <div className="stock-controls">
              <button 
                className="stock-btn decrease"
                onClick={() => updateStock(item.id, -1)}
              >
                -
              </button>
              <div className={`stock-display ${item.status}`}>
                <div className="current-stock">{item.currentStock}</div>
                <div className="target-stock">{item.targetStock} {item.unit}</div>
              </div>
              <button 
                className="stock-btn increase"
                onClick={() => updateStock(item.id, 1)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InventoryList;