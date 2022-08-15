import React from 'react';
import { shorten } from '../helper/functions';

const Product = ({productData}) => {
    return (
        <div>
            <img src={productData.image} alt="product" style={{width: "200px"}} />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                <a href='#'>details</a>
                <div>
                    <button>add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;