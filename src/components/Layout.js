import React, { useState } from 'react';
import '../styles/Layout.css';
import materialsIcon from '../assets/materials-icon.svg';
import productsIcon from '../assets/products-icon.svg';
import fulfillmentIcon from '../assets/fulfillment-icon.svg';
import integrationsIcon from '../assets/integrations-icon.svg';
import tallyLogo from '../assets/tally-icon.png';

function Layout({ children }) {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    return (
        <div className="layout">
        <div className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-header">
            <div 
                className="logo-container"
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            >
                <img src={tallyLogo} alt="Tally" className="logo-image" />
                {!sidebarCollapsed && <span className="logo-text">Tally</span>}
            </div>
            </div>
            <nav className="nav-menu">
                <div className="nav-item active">
                    <img src={materialsIcon} alt="Materials" className="nav-icon" />
                    {!sidebarCollapsed && "Materials"}
                </div>
                <div className="nav-item">
                    <img src={productsIcon} alt="Products" className="nav-icon" />
                    {!sidebarCollapsed && "Products"}
                </div>
                <div className="nav-item">
                    <img src={fulfillmentIcon} alt="Fulfillment" className="nav-icon" />
                    {!sidebarCollapsed && "Fulfillment"}
                </div>
                <div className="nav-item">
                    <img src={integrationsIcon} alt="Integrations" className="nav-icon" />
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