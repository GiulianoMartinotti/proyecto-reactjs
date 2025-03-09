import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(carritoInicial);

    const addToCart = (product, cantidad) => {
        const itemAgregado = { ...product, cantidad };

        const newCart = [...cart];

        const onCart = cart.find((product) => product.id === itemAgregado.id);

        if (onCart) {
            onCart.cantidad += cantidad;
        } else {
            newCart.push(itemAgregado);
        }
        setCart(newCart);
    }

    const cantidadEnCarrito = () => {
        return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);
    }

    const cleanCart = () => {
        setCart([]);
    }

    const eliminarDelCarrito = (id) => {
        setCart(cart.filter(e => e.id !== id));
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(cart))
    }, [cart])



    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            cantidadEnCarrito,
            totalPrice,
            cleanCart,
            eliminarDelCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}