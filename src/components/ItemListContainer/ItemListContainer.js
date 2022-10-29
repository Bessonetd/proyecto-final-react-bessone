import { useEffect, useState } from "react"

import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import "./ItemListContainer.css"

const ItemListContainer = ({ greeting }) => {
    const [data, setData] = useState([])
    const { categoriaId } = useParams()

    useEffect(() => {
        const querydb = getFirestore()
        const queryCollection = collection(querydb, 'productos')
        if (categoriaId) {
            const queryFilter = query(queryCollection, where('category', '==', categoriaId))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        } else {
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        }

    }, [categoriaId])

    return (
        <div className="itemListContainer">
            <p>{greeting}</p>
            <ItemList data={data} />
        </div>

    )
}

export default ItemListContainer