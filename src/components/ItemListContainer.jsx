import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { getCategory, getProducts } from '../../asyncMock';
import ProductCard from './ProductCard';
import { useParams } from 'react-router-dom';
import Portada from './Portada';

export default function ItemListContainer() {

    const [products, setProducts] = useState(null);
    const { catId } = useParams();

    useEffect(() => {
        if (!catId) {
            getProducts().then((response) => setProducts(response));
        } else {
            getCategory(catId).then((response) => setProducts(response));
        }
    }, [catId]);


    return (
        <>
            <div className='greeting'>¡Bienvenidos a Tienda del Sol!</div>
            <div className='imagen-portada'> 
            <Portada />
            </div>
            <div className='slogan'>¡Los MEJORES LENTES al MEJOR PRECIO!</div>

            <div className='contenedor-productos'>
                {products?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    );
}