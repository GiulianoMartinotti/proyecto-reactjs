import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getProduct } from "../../asyncMock";


export default function ItemDetailContainer() {
    const {id} = useParams(); 
    const [product, setProduct] = useState(null);


    useEffect(() => {
        setProduct(getProduct(id))

    },[]);


    return (
        <>
            <h1>Detalles</h1>
            <p>ID: {product?.id}</p>
            <h3>{product?.nombre}</h3>
            <img src="{product?.image}" alt="" />
            <p>Descripción: {product?.details}</p>
            <p>Precio: {product?.precio}</p>
        </>
    )
}