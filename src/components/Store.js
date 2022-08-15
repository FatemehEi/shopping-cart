import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContextProvider';
import Product from './shared/Product';
const Store = () => {

    //const [products, setProducts] = useState([])
    const products = useContext(ProductContext)

    return (
        <div style={{display: "flex", flexWrap:"wrap", justifyContent:"space-between"}}>
            {products.map(item => <Product key={item.id} productData={item} />)}
        </div>
    );
};

export default Store;