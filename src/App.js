import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar/navbar';
import { Footer } from './components/Footer/footer';
import { Productos } from './components/Productos/Productos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetallesItem from './components/DetallesItem/DetallesItem';
import { PaginaInicio } from './components/body/paginaInicio';


function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<PaginaInicio/>}> </Route>
          <Route path="/Productos" element={<Productos/>}></Route>
          <Route path="/Productos/:categoryId" element={<Productos/>}> </Route>
          <Route path="/detail/:itemId" element={<DetallesItem/>}></Route>
        </Routes>
        
        <Footer />
    </BrowserRouter>
  );
}

export default App;
