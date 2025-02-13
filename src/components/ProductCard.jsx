import './ProductCard.css'

export default function ProductCard({ product }) {
    return (
        <>
            <article className='productos'>
                <h3>
                    {product.nombre} - {product.id}
                </h3>
                <img src="{product.img}" alt="{product.nombre}" />
                <p>${product.precio}</p>
                <button>Detalles</button>
            </article>
        </>
    )
}