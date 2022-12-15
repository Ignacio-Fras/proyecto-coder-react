import './CartWidget.css'

export const CartWidget = ({children}) =>{
    return(
        <div>
            <img className="img" alt="Carrito" src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"></img>
            <span className="valor">5</span>
        </div>
    )
}