import "./Item.css"
import {Link} from "react-router-dom" 

const Item = ({info}) => {

    return (
        <Link to={`/detalle/${info.id}`}className="item">
            <img src= {info.imagen} alt={info.nombre}/>
            <p>{info.nombre}</p>
            <p>Precio: ${info.precio}</p>
            
        </Link>
    )
}

export default Item