import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import './Cart.css';
import { Link } from "react-router-dom";

export default function Cart() {

    const { cart, totalPrice, cleanCart, eliminarDelCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        cleanCart();
    }


    return (
        <>
            <div className="contenedor-cart">
                {
                    cart.map((prod) => (
                        <div className="cart-prods" key={prod.id}>
                            <img className="cart-image" src={prod.image} alt="" />
                            <div className="cart-info">
                                <h3>{prod.name}</h3>
                                <p>Precio: ${prod.price}</p>
                                <p>Subtotal: ${prod.price * prod.cantidad}</p>
                                <p>Cantidad: {prod.cantidad}</p>
                            </div>
                            <button className="btn-eliminar" onClick={() => eliminarDelCarrito(prod.id)}>Eliminar Del Carrito</button>
                        </div>
                    ))
                }
                {
                    cart.length > 0 ?
                        <div className="total-clean">
                            <h2 className="total-price">Precio Total de Compra: ${totalPrice()}</h2>
                            <div className="clean-finalizar">
                                <button className="clean-cart" onClick={handleVaciar}>Vaciar Carrito</button>
                                <button className="btn-finalizar-compra">
                                    <Link to="/checkout">Finalizar Compra</Link>
                                </button>
                            </div>
                        </div> :
                        <div className="btn-empty">
                            <h2 className="empty-cart">El carrito se encuentra vacío</h2>
                            <Link to={"/"}>
                                <button className="btn-ver-prods">Ver productos</button>
                            </Link>
                        </div>


                }

            </div>
        </>
    )
}








