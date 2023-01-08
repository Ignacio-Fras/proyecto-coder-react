import "./ItemDetail.css"
import { useNavigate } from "react-router-dom"
import { Carrito } from "../Session/Carrito"

const ItemDetail = ( {name, category, image, description, price} ) => {

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    return (
        <div className="itemDetail">
            <h2>{name}</h2>
            <img src={image} alt={image}/>
            <br/>
            <small>Categoría: {category}</small>
            <p>{description}</p>
            <p>Precio: <b>${price}</b></p>
            <Carrito/>
            <button className="btn btn-primary" onClick={handleVolver}>Volver</button>
        </div>
    )
}

export default ItemDetail