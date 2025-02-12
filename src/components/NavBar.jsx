import { Link } from "react-router-dom";
import Botones from "./Botones";
import Carrito from "./Carrito";
import Logo from "./LogoMarca";
import './NavBar.css';

export default function NavBar() {
    return (
        <nav>
            <div>
                <Logo />
            </div>
            <div className="navegacion">
                <button>
                    <Link to="/">Home</Link>
                </button>
                <button>
                    <Link to="/category/productos">Productos</Link>
                </button>
                <button>
                    <Link to="/contact">Contacto</Link>
                </button>
            </div>
            <div className="carritoDeCompras">
                <Carrito />
            </div>
        </nav>
    )
}