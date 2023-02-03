import { useContext } from "react"
import { CartContext } from "../../context/cart-context"
import { FaTrash } from "react-icons/fa"
import { Link } from "react-router-dom"
import './cart.css'

export const Cart = () => {

    const { cart, carritoVacio, valorTotal, deleteItem } = useContext(CartContext)


    if (cart.length === 0) {
        return (
            <div className="carritoVacio">
                <div className="carritoContenido">
                    <h2>Tu carrito está vacío</h2>
                <br/>
                <h2>Es tu momento de llenarlo!</h2>
                <hr/>
                <Link to="/productos" className="btn btn-primary">Ir a productos</Link>
                <h3>Recorda que para comprar productos tenes que estar logueado en Pegasus gaming!</h3>
                <h4>Si no lo estas aun, podes hacerlo desde el sector login o te dejamos un link a continuacion</h4>
                <br/><br/>
                <Link to="/register" className="btn btn-primary">Unite a Pegasus!</Link>
                </div>
            </div>
        )
    }
    
    return (
        <div className="divCart">
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