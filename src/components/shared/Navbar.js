import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

//icon
import cartIcon from "../../assets/icons/shopping-cart3.svg";   

//contex
import { CartContext } from '../../context/CartContextProvider';

//styles
import styles from "./Navbar.module.css";

const Navbar = () => {

    const {state} = useContext(CartContext);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to="/product">Products</Link>
                <div className={styles.iconContainer}>
                    <Link to="/cart"><img src={cartIcon} alt="shopping cart"></img></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>            
        </div>
    );
};


export default Navbar;