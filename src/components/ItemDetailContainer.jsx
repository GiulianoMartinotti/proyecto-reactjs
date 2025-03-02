import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../asyncMock";


export default function ItemDetailContainer() {

    const { id } = useParams();
    const [product, setProduct] = useState(null);


    useEffect(() => {
        setProduct(getProduct(id))
    }, []);



    return (
        <>
            <div className="detalles-container">
                <div className="imagen-del-producto">
                    <img src={product?.img} alt="" />
                </div>
            </div>
        </>
    );
}
