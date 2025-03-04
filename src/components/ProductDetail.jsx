import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../asyncMock.js";
import './ProductDetail.css'

export default function ProductDetail() {
    const { id } = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        setProduct(getProduct(id));
    }, []);




    return (
        <>
            <div className="detalles-del-producto">

                <div className="imagen-del-producto">
                    <img src={product?.image} alt="" />
                </div>

                <div className="información-del-producto">
                    <h1>Detalles</h1>
                    <h3>Nombre: {product?.name}</h3>
                    <p>ID: {id} </p>
                    <p>Descripcion: {product?.description}</p>
                    <p>Categoria: {product?.category}</p>
                    <p>Precio: ${product?.price}</p>
                </div>


            </div>
        </>
    );
}
