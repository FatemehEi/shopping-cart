import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

//icon
import cartIcon from "../../assets/icons/shopping-cart3.svg";   

//contex
import { CartContext } from '../../context/CartContextProvider';

const Navbar = () => {

    const {state} = useContext(CartContext);

    return (
        <div>
            <div>
                <Link to="/product">Products</Link>
                <div>
                    <Link to="/cart"><img src={cartIcon} alt="shopping cart" style={{width:"60px"}}></img></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>            
        </div>
    );
};


export default Navbar;