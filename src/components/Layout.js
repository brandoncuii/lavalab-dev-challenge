import React from 'react';
import '../styles/Layout.css';

function Layout({ children }) {
  return (
    <div className="layout">
      <div className="sidebar">
        <div className="logo">
          <h2>Tally</h2>
        </div>
        <nav className="nav-menu">
          <div className="nav-item active">
            <span className="nav-icon">📦</span>
            Materials
          </div>
          <div className="nav-item">
            <span className="nav-icon">🏷️</span>
            Products
          </div>
          <div className="nav-item">
            <span className="nav-icon">📋</span>
            Fulfillment
          </div>
          <div className="nav-item">
            <span className="nav-icon">🔧</span>
            Integrations
          </div>
        </nav>
      </div>
      <div className="main-content">
        {children}
      </div>
    </div>
  );
}

export default Layout;