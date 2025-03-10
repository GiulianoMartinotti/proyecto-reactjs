import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ProductCard from './ProductCard';
import { useParams } from 'react-router-dom';
import Portada from './Portada';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import ReactLoading from 'react-loading'

export default function ItemListContainer() {

    const [loading, setLoading] = useState(true)

    const [products, setProducts] = useState(null);
    const category = useParams().category;

    useEffect(() => {

        const productsRef = collection(db, "products");
        const porCat = category ? query(productsRef, where("category", "==", category)) : productsRef;

        getDocs(porCat)
            .then((resp) => {

                setProducts(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )
                setLoading(false);
            })

    }, [category])



    return (
        <>
            <div className='greeting'>¡Bienvenidos a Tienda del Sol!</div>
            <div className='imagen-portada'>
                <Portada />
            </div>
            <div className='slogan'>¡Los MEJORES LENTES al MEJOR PRECIO!</div>
            {loading ? (
                <ReactLoading className='loader' type="spin" color="grey" width="100px" height="50px" />
            ) : (
                <article className='contenedor-productos'>
                    {products?.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </article>
            )}
        </>
    );
}

