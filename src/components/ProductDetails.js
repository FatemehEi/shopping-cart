import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from "./ProductDetails.module.css";
import { ProductContext } from '../context/ProductContextProvider';

const ProductDetails = (props) => {
    
    const id = props.match.params.id;
    const data = useContext(ProductContext);
    const product = data[id - 1];
    const {image, title, description, price, category} = product;
    
    return (
        <div className={styles.container}> 
            <img className={styles.image} src={image} alt="product"></img>
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}><span>Category: </span>{category}</p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{price} $</span>
                    <Link to="/products">Back to shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;