import { useCartContext } from "../../Context/CartContext"
import { Link } from 'react-router-dom'
import ItemCart from "../ItemCart/ItemCart"
import { addDoc, collection, getFirestore } from "firebase/firestore"

const Cart = () => {
    const { cart, totalPrice } = useCartContext()

    const order = {
        buyer: {
            name: 'Tomas',
            email: 'Tomas@hotmail.com',
            phone: '15502348'
        },
        items: cart.map(product => ({ id: product.id, title: product.nombre, price: product.precio, quantity: product.quantity })),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore()
        const ordersCollection = collection(db, 'orders')
        addDoc(ordersCollection,order)
        .then(({id}) => console.log(id))
    }

    if (cart.length === 0) {
        return (
            <>
                <p>No hay productos en el carrito</p>
                <Link to='/'>Hacer compra</Link>
            </>
        )
    }
    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p>Total: {totalPrice()}</p>
            <button onClick={handleClick}>Emitir Compra</button>
        </>
    )
}

export default Cart