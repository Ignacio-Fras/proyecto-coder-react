import "./Navbar.css";
import { CartWidget } from '../CartWidget/CartWidget.js';
import { Link } from 'react-router-dom';
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";

export const Navbar = () => {
  return (
    <header>
      <nav className="nav">
      <Link to="/" className="Titulo">PEGASUS GAMING</Link>
        <div>
          <ul className="lista">
            <li className="BtnNav">
              <Link  to="/">Inicio</Link>
            </li>
            <li className="BtnNav">
              <Link to="/Productos">Productos</Link>
            </li>
            <li className="BtnNav">
              <Link to="/PreguntasFrecuentes">Preguntas Frecuentes</Link>
            </li>
            <li className="BtnNav">
              <Link to="/Sponsors">Sponsors</Link>
            </li>
            <CartWidget/>
          </ul>
        </div>
        <ItemListContainer/>
      </nav>
    </header>
  );
};
