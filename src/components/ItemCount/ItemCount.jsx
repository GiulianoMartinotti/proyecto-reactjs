
import './ItemCount.css';


export default function productCount({cantidad, handleRestar,handleSumar, handleAgregar, showAddButton = true, showQuantity = true}) {

    return (
        <div>
            <div className="item-count">
                <button onClick={handleRestar} className="btn-restar">-</button>
                {showQuantity && <p>{cantidad}</p>}
                <button onClick={handleSumar} className="btn-sumar">+</button>
            </div>
            {showAddButton && (
                <button onClick={handleAgregar} className="btn-agregar-carrito">
                    Agregar al carrito
                </button>
            )}
        </div>
    )
}


