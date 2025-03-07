import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ProductCard from './ProductCard';
import { useParams } from 'react-router-dom';
import Portada from './Portada';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export default function ItemListContainer() {

    const [products, setProducts] = useState(null);
    const category = useParams().category;

    useEffect(() => {

        const productsRef = collection(db, "products");
        const porCat = category? query(productsRef, where("category", "==", category)) : productsRef;

        getDocs(porCat)
            .then((resp) => {

                setProducts(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )
            })

    }, [category])



    return (
        <>
            <div className='greeting'>¡Bienvenidos a Tienda del Sol!</div>
            <div className='imagen-portada'>
                <Portada />
            </div>
            <div className='slogan'>¡Los MEJORES LENTES al MEJOR PRECIO!</div>
            <article className='contenedor-productos'>
                {products?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </article>
        </>
    );
}

