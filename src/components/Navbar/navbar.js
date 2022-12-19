import "./Navbar.css";
import { CartWidget } from '../CartWidget/CartWidget.js';

export const Navbar = () => {
  return (
    <header>
      <nav className="nav">
      <h1 className="#">PEGASUS GAMING</h1>
        <div>
          <ul className="lista">
            <li className="BtnNav">
              <a  href="#">Inicio</a>
            </li>
            <li className="BtnNav">
              <a href="#">Productos</a>
            </li>
            <li className="BtnNav">
              <a href="#">Preguntas Frecuentes</a>
            </li>
            <li className="BtnNav">
              <a href="#">Sponsors</a>
            </li>
            <CartWidget/>
          </ul>
        </div>
      </nav>
    </header>
  );
};
