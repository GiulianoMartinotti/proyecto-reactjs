import { createContext, useState } from "react";

export const CartContext=createContext();

export function CartProvider({children}){
    const [cart, setCart]=useState([]);

    const addItem = (product) => {
        setCart([...cart, product]);
    } 

    return(
        <CartContext.Provider value={[cart, setCart, addItem]}>
            {children}
        </CartContext.Provider>
    )
}