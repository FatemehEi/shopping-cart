import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContextProvider';
import Product from './shared/Product';
import styles from "./store.module.css";

const Store = () => {

    //const [products, setProducts] = useState([])
    const products = useContext(ProductContext)

    return (
        <div className={styles.container}>
            {products.map(item => <Product key={item.id} productData={item} />)}
        </div>
    );
};

export default Store;