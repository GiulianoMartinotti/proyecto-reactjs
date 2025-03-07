import { Link } from "react-router-dom";
import Logo from "./LogoMarca";
import './NavBar.css';
import CartWidget from "./CartWidget";

export default function NavBar() {
    return (
        <nav>
            <div className="navegacion">
                <button>
                    <Link to="/">
                    <Logo />
                    </Link>
                </button>
                <button>
                    <Link to="/category/Ray-Ban">Ray-Ban</Link>
                </button>
                <button>
                    <Link to="/category/Rusty">Rusty</Link>
                </button>
                <button>
                    <Link to="/category/Vulk">Vulk</Link>
                </button>
                <button>
                    <Link to="/category/Kipling">Kipling</Link>
                </button>
            </div>
            <div className="carrito-de-compras">
                <CartWidget />
            </div>
        </nav>
    )
}