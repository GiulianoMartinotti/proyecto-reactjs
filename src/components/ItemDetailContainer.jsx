// Imports
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css'
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.js";
import ItemCount from "./ItemCount/ItemCount";
import { CartContext } from "../context/CartContext.jsx";



export default function ProductDetail() {

    const { cart, addToCart } = useContext(CartContext);
    console.log(cart);


    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }
    const handleSumar = () => {
        cantidad < product.stock && setCantidad(cantidad + 1)
    }


    const id = useParams().id;
    const [product, setProduct] = useState(null);


    useEffect(() => {
        const docRef = doc(db, "products", id);
        getDoc(docRef)
            .then((resp) => {
                setProduct(
                    { ...resp.data(), id: resp.id }
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
                    <ItemCount
                        cantidad={cantidad}
                        handleSumar={handleSumar}
                        handleRestar={handleRestar}
                        handleAgregar={() => { addToCart(product, cantidad) }}
                    />
                </div>

            </div>
        </>
    );
}


