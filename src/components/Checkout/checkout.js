import { useState } from "react"
import { useCartContext } from "../../context/cart-context"
import { Navigate } from "react-router-dom"
import { collection, addDoc, documentId, writeBatch, where,  getDocs, query} from "firebase/firestore"
import { db } from "../../firebase/config"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import './checkout.css'

export const Checkout = () => {

    const { cart, valorTotal, carritoVacio } = useCartContext()

    const [ordenId, setOrdenId] = useState(null)

    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })
    const InputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    
    const Submit = async (e) => {
        e.preventDefault()

         if(values.nombre.length < 2){
             alert("El nombre no es valido")
             return
         }
         if(values.direccion.length < 2){
             alert("La direccion no es valido")
             return
         }
         if(values.email.length < 5){
             alert("El email no es valido")
             return
         }
        const pedido = {
            cliente: values,
            objetos: cart,
            total: valorTotal(),
        }
        
         const batch = writeBatch(db)
         const orders = collection(db, 'orders')
         const productosRef = collection(db, 'productos')

         
         const sinStock = []

         const items = query(productosRef, where( documentId(), 'in', cart.map(prod => prod.id) ))

        const productos = await getDocs(items)

            productos.docs.forEach(doc =>{

            const item = cart.find(item => item.id === doc.id)
            if (doc.data().stock >= item.counter){
                batch.update(doc.ref, {
                    stock: doc.data().stock - item.counter
                }) 
            } else {
                sinStock.push(item)
            }
        })

        if (sinStock.length === 0){
            batch.commit()
            .then(() => {
                addDoc(orders, pedido)
                   .then((doc) => {
                      setOrdenId(doc.id)
                      carritoVacio()
        })
        .catch((error) => console.log(error))
            })
        } else {
            Swal.fire(
                'No hay stock disponible',
                '',
                'error'
              )
        }

        }

        if(ordenId) {
            return(
                <div className="finish">
                    <h2>¡Felicitaciones! Tu compra se realizo con exito.</h2>
                    <h3>Tu orden de compra es : {ordenId}</h3>
                    <p>Toda la informacion de la compra debe llegarte a tu <b>Email</b> registrado</p>
                    <h2>No dudes en consultarnos en nuestras redes sociales!</h2>

                    <Link to="/" className="button">Volver al Inicio</Link>
                </div>
            )
        }

    if (cart.length === 0){
        return <Navigate to="/"></Navigate>
    }

    return(
        <div className="checkout">
            <div className="CheckText">
                <h2>¡Estas a un paso de terminar la compra!</h2>
                <p>Te solicitamos unos datos personales para el envio de tus productos. </p>
            </div>
                 <form onSubmit={Submit} className="form">
                    <input className="form-control my-3"
                       onChange={InputChange}
                       type="text"
                       name="nombre"
                       value={values.nombre}
                       placeholder="Nombre y Apellido"></input>

                    <input className="form-control my-3"
                       onChange={InputChange}
                       type="email"
                       name="email"
                       value={values.email}
                       placeholder="email"></input>
                    <input className="form-control my-3"
                       onChange={InputChange}
                       type="text"
                       name="direccion"
                       value={values.direccion}
                       placeholder="Direccion"></input>
                </form>
                    <button onClick={Submit} className="button">Enviar</button>
        </div>
    )}