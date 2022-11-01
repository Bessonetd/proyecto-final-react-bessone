import { useCartContext } from "../../Context/CartContext"
import "./ItemCart.css"



const ItemCart = ({ product }) => {
    const { removeItem } = useCartContext()
    return (
        <div className="itemCart">
            <img src={product.imagen} alt={product.nombre} />
            <div>
                <p>Producto: {product.nombre}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio: {product.precio}</p>
                <p>Subtotal: ${product.quantity * product.precio} </p>
                <button onClick={() => removeItem(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart