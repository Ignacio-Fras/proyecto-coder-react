import { useContext } from "react"
import { CartContext } from "../../context/cart-context"
import { FaTrash } from "react-icons/fa"
import { Link } from "react-router-dom"
import './cart.css'

export const Cart = () => {

    const { cart, carritoVacio, valorTotal, deleteItem } = useContext(CartContext)


    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2>Tu carrito está vacío</h2>
                <br/>
                <Link to="/" className="btn btn-primary">Volver</Link>
            </div>
        )
    }
     
    return (
        <div className="container my-5">
            <h2>Tu compra</h2>
                <hr/>
                {
                    cart.map(item => (
                        <div className="cart" key={item.id}>
                            <img className="imagenCart" src={item.image} alt={item.image}></img>
                            <h4>{item.name}</h4>
                            <p>Cantidad: {item.counter}</p>
                            <p>Precio: ${item.price * item.counter}</p>
                            <button onClick={ () => deleteItem(item.id)} className="btnTrash"><FaTrash/></button>
                        </div>
                    ))
                }
                <hr/>
            <h3>Valor total: ${valorTotal()}</h3>
            <button className="btnCart" onClick={carritoVacio}>Vaciar carrito</button>
            <Link to="/Checkout" className="btnCart">Finalizar compra</Link>
        </div>
    )
}

export default Cart