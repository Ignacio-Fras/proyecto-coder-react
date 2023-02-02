
import "./Carrito.css"

export const ItemCount = ({counter, setCounter, onAdd,max}) => {
    // const [counter, setCounter] = useState(1)

const sumar = () => {
    counter < max && setCounter(counter + 1)
}
const restar = () => {
    counter > 1 && setCounter(counter - 1)
}

return(
    <div className="Session">
        <button className="carrito" onClick={onAdd}>Agregar al carrito</button>

        <button 
        className="btn-carrito" 
        onClick={restar}
        disabled={counter === 0}
        > -
        </button>

        <p className="contador">{counter}</p>

        <button 
        className="btn-carrito" 
        onClick={sumar}
        disabled={counter === max}>+</button>
    </div>
)
}