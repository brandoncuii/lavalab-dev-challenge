import React, { useState } from 'react';
import '../styles/Layout.css';

function Layout({ children }) {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    return (
        <div className="layout">
        <div className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-header">
            <h2>Tally</h2>
            <button 
                className="collapse-btn"
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            >
                {sidebarCollapsed ? '→' : '←'}
            </button>
            </div>
            <nav className="nav-menu">
            <div className="nav-item active">
                <span className="nav-icon">📦</span>
                {!sidebarCollapsed && "Materials"}
            </div>
            <div className="nav-item">
                <span className="nav-icon">🏷️</span>
                {!sidebarCollapsed && "Products"}
            </div>
            <div className="nav-item">
                <span className="nav-icon">📋</span>
                {!sidebarCollapsed && "Fulfillment"}
            </div>
            <div className="nav-item">
                <span className="nav-icon">🔧</span>
                {!sidebarCollapsed && "Integrations"}
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