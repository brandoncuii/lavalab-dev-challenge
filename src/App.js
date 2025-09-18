import './App.css';
import Layout from './components/Layout';
import InventoryList from './components/InventoryList';

function App() {
  return (
    <div className="App">
      <Layout>
        <InventoryList />
      </Layout>
    </div>
  );
}

export default App; 