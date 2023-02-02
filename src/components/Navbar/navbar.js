import "./Navbar.css";
import { CartWidget } from '../CartWidget/CartWidget.js';
import { Link, useNavigate } from 'react-router-dom';
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";
import { User } from "../user/user";
import { useLoginContext } from "../../context/LoginContext";
import { useState } from "react";


export const Navbar = () => {
  const { user, logout } = useLoginContext()

  const navigate = useNavigate()
  const [searchInput, setSearchInput] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchInput}`);
    setSearchInput("");
  }

  return (
    <header>
      <nav className="nav">
      <Link to="/" className="Titulo">PEGASUS GAMING</Link>
      <div className="navbar-2">
        <User/>
        <CartWidget/>
        <div className="sesion">
        <p>{user.email}</p>
        <button to="/" onClick={logout}>Cerrar sesion</button>
        </div>
      </div>
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
      </nav>
    </header>
  );
};
