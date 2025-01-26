import Botones from "./Botones";
import Carrito from "./Carrito";
import Logo from "./LogoMarca";
import './NavBar.css';

export default function NavBar (){
    return(
        <nav>
            <Logo/>
            <Botones texto='Inicio' color='#343434'/>
            <Botones texto='Productos' color='#343434'/>
            <Botones texto='Ofertas' color='#343434'/>
            <Botones texto='Contacto' color='#343434'/>
            <div className="carritoDeCompras">
                <Carrito/>
            </div>
        </nav>
    )
}