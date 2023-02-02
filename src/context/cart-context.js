import { createContext, useContext, useState } from "react";

export const CartContext = createContext()

export const useCartContext = () => {
  return useContext(CartContext)
}

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

   const agregarCarrito = (item) => {
    setCart([...cart,item])
   }

   const deleteItem = (id) => {
       setCart(cart.filter(item => item.id !== id))
   }

  const isInCart = (id) => {
    return cart.some(item => item.id === id)
  }
  const carritoVacio = () => {
    setCart([])
  }
  const valorTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.counter, 0)
  }

  const totalCarrito = () => {
    return cart.reduce((acc, item) => acc + item.counter, 0)
  }

  return(
    
    <CartContext.Provider value={{
        cart, 
        agregarCarrito, 
        isInCart, 
        carritoVacio, 
        valorTotal, 
        deleteItem,
        totalCarrito}}>
            {children}

    </CartContext.Provider>
)
}

export default CartContext;
