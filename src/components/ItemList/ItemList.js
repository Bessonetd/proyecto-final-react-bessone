import Item from "../Item/Item"

const ItemList = ({data = []}) => {
    return(
        data.map(productos => <Item key={productos.id} info={productos}/>)
    )
    
}

export default ItemList