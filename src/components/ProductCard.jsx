import { Link } from 'react-router-dom'
import './ProductCard.css'

export default function ProductCard({ product }) {

    return (
        <>
            <article className='productos'>
                <h3>
                    {product.name}
                </h3>
                <img className='imagenes-productos' src={product.image} alt={product.name} />
                <p>${product.price}</p>
                <p>{product.category}</p>
                <button>
                <Link to={`/product/${product.id}`}>Mas detalles</Link>
                </button>
            </article>
        </>
    )
}


