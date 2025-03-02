import { Link } from 'react-router-dom'
import './ProductCard.css'

export default function ProductCard({ product }) {
    return (
        <>
            <article className='productos'>
                <h3>
                    {product.name} - {product.id}
                </h3>
                <img src={product.img} alt={product.name} />
                <p>${product.price}</p>
                <button>
                    <Link to='/product/${product.id}'>Detalles</Link>
                </button>
            </article>
        </>
    )
}