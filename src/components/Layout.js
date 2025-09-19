import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Layout.css';
import materialsIcon from '../assets/materials-icon.svg';
import productsIcon from '../assets/products-icon.svg';
import fulfillmentIcon from '../assets/fulfillment-icon.svg';
import integrationsIcon from '../assets/integrations-icon.svg';
import tallyLogo from '../assets/tally-icon.png';

function Layout({ children }) {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    const location = useLocation();

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
                <Link to="/blanks" className={`nav-item ${location.pathname === '/blanks' ? 'active' : ''}`}>
                    <img src={materialsIcon} alt="Materials" className="nav-icon" />
                    {!sidebarCollapsed && "Materials"}
                </Link>
                <Link to="/products" className={`nav-item ${location.pathname === '/products' ? 'active' : ''}`}>
                    <img src={productsIcon} alt="Products" className="nav-icon" />
                    {!sidebarCollapsed && "Products"}
                </Link>
                <Link to="/fulfillment" className={`nav-item ${location.pathname === '/fulfillment' ? 'active' : ''}`}>
                    <img src={fulfillmentIcon} alt="Fulfillment" className="nav-icon" />
                    {!sidebarCollapsed && "Fulfillment"}
                </Link>
                <Link to="/integrations" className={`nav-item ${location.pathname === '/integrations' ? 'active' : ''}`}>
                    <img src={integrationsIcon} alt="Integrations" className="nav-icon" />
                    {!sidebarCollapsed && "Integrations"}
                </Link>
            </nav>
        </div>
        <div className="main-content">
            {children}
        </div>
        </div>
    );
}

export default Layout;