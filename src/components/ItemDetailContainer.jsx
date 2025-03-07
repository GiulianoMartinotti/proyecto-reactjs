// Imports
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css'
import { CartContext } from "../context/CartContext.jsx";
import {doc, getDoc} from "firebase/firestore";
import { db } from "../firebase/firebase.js";


// Declaraciones
export default function ProductDetail() {

    // Constantes que permiten trasladar la info de cada producto a la vista en detalle del mismo
    const  id  = useParams().id;
    const [product, setProduct] = useState(null);
    // *

    // Constantes que permiten trabajar con el carrito de compras
    const [cart, setCart, addItem] = useContext(CartContext);
    const handleClick = () => {
        addItem(product)
    }

    // Uso de useEffect para traer los productos
    useEffect(() => {
        const docRef = doc(db, "products", id);
        getDoc(docRef)
        .then((resp) => {
            setProduct(
                {...resp.data(), id: resp.id}
            );
        })
    }, [id]);



    return (
        <>
            <div className="detalles-del-producto">

                <div className="imagen-del-producto">
                    <img src={product?.image} alt="" />
                </div>

                <div className="información-del-producto">
                    <h1>Detalles:</h1>
                    <h3>{product?.name}</h3>
                    <p>ID: {id} </p>
                    <p>Categoria: {product?.category}</p>
                    <h4>Precio: ${product?.price}</h4>
                    <div className="descripcion-producto">
                        <h2>Descripción:</h2>
                        <p>{product?.description}</p>
                    </div>
                    <button className="btn-agregar-carrito" onClick={handleClick}>
                        Agregar al carrito
                    </button>
                </div>

            </div>
        </>
    );
}


