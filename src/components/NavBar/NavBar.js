import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav >
            <ul>
                <li>
                    <NavLink to='/' className="nav-link">Inicio</NavLink>
                </li>

                <li>
                    <NavLink to='/categoria/nuevo' className="nav-link">Productos Nuevos</NavLink>
                </li>
                <li>
                    <NavLink to='/categoria/viejo' className="nav-link">Productos Viejos</NavLink>
                </li>
                <li>
                    <NavLink to='/cart'><CartWidget /></NavLink>
                </li>
            </ul>

            <h1>Entre Hilos y Pinceles</h1>
        </nav>
    )
}
export default NavBar