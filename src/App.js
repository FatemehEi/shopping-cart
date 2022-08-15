import './App.css';
import ProductContextProvider from './context/ProductContextProvider';
import Store from './components/Store';

function App() {
  return (
    <ProductContextProvider>
      <Store />
    </ProductContextProvider>
  );
}

export default App;
