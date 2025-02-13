import { Link } from 'react-router-dom'
import './ProductCard.css'

export default function ProductCard({ product }) {
    return (
        <>
            <article className='productos'>
                <h3>
                    {product.nombre} - {product.id}
                </h3>
                <img src="{product.image}" alt="{product.nombre}" />
                <p>${product.precio}</p>
                <button>
                    <Link to= {'/product/${product.id}'}>Detalles</Link>
                </button>
            </article>
        </>
    )
}