import "./Navbar.css";
import { CartWidget } from '../CartWidget/CartWidget.js';
import { Link } from 'react-router-dom';
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";
import { User } from "../user/user";
import { useLoginContext } from "../../context/LoginContext";


export const Navbar = () => {
  const { user, logout } = useLoginContext()


  return (
    <header>
      <nav className="nav">
      <Link to="/" className="Titulo">PEGASUS GAMING</Link>
        <div>
          <ul className="lista">
            <li className="BtnNav">
              <Link  to="/">Inicio</Link>
            </li>
            <li><ItemListContainer/></li>
            <li className="BtnNav">
              <Link to="/PreguntasFrecuentes">Preguntas Frecuentes</Link>
            </li>
          </ul>
          </div>
          <div className="navbar-2"> 
          <User/>
        <CartWidget/>
        <div className="loginNav"> 
          <p>{user.email}</p>
          <button to="/login" onClick={logout} className="navBtn">Cerrar sesion</button>
        </div>
          </div>
      </nav>
    </header>
  );
};
