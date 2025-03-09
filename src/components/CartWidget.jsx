
import CartImage from '../assets/img/icons8-shopping-cart-100.png';
import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './CartWidget.css'


export default function CartWidget() {

    const { cantidadEnCarrito } = useContext(CartContext);



    return (
        <>
        <div>
            <Link to="/Cart">
            <img className='img-cart' src={CartImage} alt="" />
            <span className='num-cart'>{cantidadEnCarrito()}</span>
            </Link>
        </div>
        </>
    );
}