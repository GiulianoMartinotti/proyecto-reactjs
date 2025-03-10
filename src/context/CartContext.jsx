import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

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
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "¡Agregado al carrito!",
            showConfirmButton: false,
            timer: 1000
        });
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

    const cleanCartAlert = () => {
        Swal.fire({
            title: "Está seguro que desea vaciar el carrito?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#6dbd45",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirmar",
            cancelButtonText: "No, conservar carrito"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "¡Hecho!",
                    text: "El carrito ahora se encuentra vacío",
                    icon: "success",
                    confirmButtonColor: "#6dbd45"
                });
                setCart([]);
            }
        });
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
            eliminarDelCarrito,
            cleanCartAlert
        }}>
            {children}
        </CartContext.Provider>
    )
}