import { useState } from "react"
import { Link } from "react-router-dom"
import "./Carrito.css"

export const Carrito = () => {
    let [counter, setCounter] = useState(0)

const sumar = () => {
    setCounter (counter + 1)
}
const restar = () => {
    if (counter > 0){
        setCounter (counter - 1)
    }
}

return(
    <div className="Session">
        <Link to="#" className="carrito">Agregar al carrito</Link>
        <button className="btn-carrito" onClick={restar}>-</button>
        <button className="btn-carrito" onClick={sumar}>+</button>
        <p className="contador">{counter}</p>
    </div>
)
}