import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import Cart from '../assets/img/icons8-shopping-cart-100.png';

export default function CartWidget() {

    const [cart, setCart] = useContext(CartContext);

    return (
        <>
        <img className='carrito' src={Cart} alt="" />
        <p>{cart.length}</p>
        </>
    );
}