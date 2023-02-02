import "./ItemDetail.css"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { CartContext } from "../../context/cart-context"
import {ItemCount} from '../ItemCount/ItemCount'

const ItemDetail = ( {id, name, image, description, price, category,stock} ) => {

    const {agregarCarrito, isInCart} = useContext(CartContext)

    const [counter, setCounter] = useState(1)

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }
    const handleAgregar = () =>{
        const item = {
            id,
            name,
            image,
            description,
            price,
            category,
            stock,
            counter   
        }

        agregarCarrito(item)
          
    }

    return (
        <div className="itemDetail">
            <h2>{name}</h2>
            <img src={image} alt={image}/>
            <br/>
            <small>Categoría: {category}</small>
            <p>{description}</p>
            <p>Precio: <b>${price}</b></p>

            {
                !isInCart(id)
                   ? <ItemCount
                      counter ={counter}
                      setCounter = {setCounter}
                      max={stock}
                      onAdd={handleAgregar} />
                   : <Link to ="/cart" className="btnFinish">Finalizar compra</Link>
            }

            <button className="btn btn-primary" onClick={handleVolver}>Volver</button>

        </div>
    )
}

export default ItemDetail