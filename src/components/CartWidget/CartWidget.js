import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './CartWidget.css'
import { CartContext } from '../../context/cart-context'
import { useContext } from 'react'

export const CartWidget = () => {

    const { totalCarrito} = useContext(CartContext)

    return (
        <Link to="/cart" className='img valor'>
            <FaShoppingCart />
            <span>{totalCarrito()}</span>
        </Link>
    )
}
