import './CartWidget.css'

export const CartWidget = ({children}) =>{
    return(
        <div>
            <img alt="Carrito"></img>
            <span className="valor">5</span>
        </div>
    )
}