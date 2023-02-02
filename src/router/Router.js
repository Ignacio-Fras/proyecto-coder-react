import { Navbar } from '../components/Navbar/navbar';
import { Footer } from '../components/Footer/footer';
import { Productos } from '../components/Productos/Productos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetallesItem from '../components/DetallesItem/DetallesItem';
import { PaginaInicio } from '../components/body/paginaInicio';
import {PreguntasFrecuentes} from '../components/PreguntasFrecuentes/PreguntasFrecuentes'
import { Cart } from '../components/Cart/Cart';
import { Login } from '../components/Login/login';
import { Checkout } from '../components/Checkout/checkout';

export const Router = () => {

    return(
        
        <BrowserRouter>
         <Navbar/>

         <Routes>
           <Route path="/" element={<PaginaInicio/>}> </Route>
            <Route path="/Productos/:categoryId" element={<Productos/>}> </Route>
            <Route path="/detail/:itemId" element={<DetallesItem/>}></Route>
            <Route path="/Cart" element={<Cart/>}></Route>
            <Route path ="/login" element={<Login/>}></Route>
            <Route path="/checkout" element={<Checkout/>}></Route>  
            <Route path="/PreguntasFrecuentes" element={<PreguntasFrecuentes/>}></Route>
          </Routes>

          <Footer />

    </BrowserRouter>
    )
}