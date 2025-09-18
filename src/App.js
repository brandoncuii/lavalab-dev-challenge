import './App.css';
import { inventoryItems, categories } from './data/mockData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tally - Inventory Management</h1>
        <p>Inventory Items: {inventoryItems.length}</p>
        <p>Categories: {categories.length}</p>
        <div style={{ textAlign: 'left', maxWidth: '400px' }}>
          <h3>Sample Items:</h3>
          {inventoryItems.slice(0, 3).map(item => (
            <div key={item.id} style={{ marginBottom: '10px', fontSize: '14px' }}>
              <strong>{item.name}</strong> - Stock: {item.currentStock}/{item.targetStock} {item.unit}
              {item.status === 'low' && <span style={{ color: 'orange' }}> ⚠️ LOW</span>}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;