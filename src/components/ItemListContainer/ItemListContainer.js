import './ItemListContainer.css'
import { Link } from 'react-router-dom'

export const ItemListContainer = () =>{
    return(
            <div className="box">
                <div className="box-2"><Link to="/Productos/Motherboards" className="linkText">Motherboards</Link></div>
             
              
                 <div className="box-2"><Link to="/Productos/Rams" className="linkText">Memorias Ram</Link></div>
               
               
                 <div className="box-2"><Link to="/Productos/GPU Nvidia" className="linkText">GPU Nvidia</Link></div>
               
             
                 <div className="box-2"> <Link to="/Productos/GPU AMD" className="linkText">GPU AMD</Link></div>
               
              
               <div className="box-2"> <Link to="/Productos/CPU Intel" className="linkText">CPU Intel</Link></div>
               
               <div className="box-2">  <Link to="/Productos/CPU AMD" className="linkText">CPU AMD</Link></div>
              
               
               <div className="box-2">  <Link to="/Productos/Fuentes" className="linkText">Fuentes</Link></div>
               
               
               <div className="box-2"> <Link to="/Productos/Almacenamiento" className="linkText">Almacenamiento</Link></div>
              
               
               <div className="box-2"> <Link to="/Productos/Auriculares" className="linkText">Auriculares</Link></div>
            </div>
            
    )
}