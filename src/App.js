import './App.css';
import {Route, Switch, Redirect} from "react-router-dom";

//context
import ProductContextProvider from './context/ProductContextProvider';

//components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <ProductContextProvider>
      <Switch>
        <Route path="/products/:id" component={ProductDetails} />
        <Route path="/products" component={Store} />
        <Redirect to="/products" />
      </Switch>
    </ProductContextProvider>
  );
}

export default App;
