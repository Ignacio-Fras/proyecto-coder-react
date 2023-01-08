import "./Item.css"
import { Link } from "react-router-dom"

export const Item = ({name, image, price, id}) =>{
    return(
        <div className="caja col-4">
        <div key={id} className="#">
        <h5 className="nombre">{name}</h5>
        <img src={image} alt="#"/>
        <p><b>${price}</b></p>
        <Link to={`/detail/${id}`} className="Btn">Ver mas</Link>
        <hr></hr>
        </div>
        </div>
    )
}