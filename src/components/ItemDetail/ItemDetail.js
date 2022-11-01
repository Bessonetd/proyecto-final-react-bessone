import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useCartContext } from "../../Context/CartContext"
import "./ItemDetail.css"


const ItemDetail = ({ data }) => {
    const [goToCart, setGoToCart] = useState(false)
    const { addItem } = useCartContext()

    const onAdd = (quantity) => {
        setGoToCart(true)
        addItem(data, quantity)
    }


    return (
        <div className="contenedor">
            <img src={data.imagen} alt={data.nombre} />
            <p>{data.nombre}</p>
            {
                goToCart
                    ? <Link to='/cart' className="terminarCompra">Terminar Compra</Link>
                    : <ItemCount initial={0} stock={10} onAdd={onAdd} />
            }
        </div>
    )
}

export default ItemDetail