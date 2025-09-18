import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import InventoryList from './components/InventoryList';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Navigate to="/blanks" replace />} />
                    <Route path="/blanks" element={<InventoryList category="Blanks" />} />
                    <Route path="/products" element={<InventoryList category="Products" />} />
                    <Route path="/fulfillment" element={<InventoryList category="Fulfillment" />} />
                    <Route path="/integrations" element={<InventoryList category="Integrations" />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App; 