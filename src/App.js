import './App.css';
import {Route, Switch, Redirect} from "react-router-dom";

//context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';

//components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';

import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
        <Switch>
          <Route path="/cart" component={ShopCart} />
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products" component={Store} />
          <Redirect to="/products" />
        </Switch>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
