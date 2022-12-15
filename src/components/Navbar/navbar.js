import "./Navbar.css";

export const Navbar = ({children}) => {
  return (
    <header>
      <nav className="nav">
      <h1 className="#">PEGASUS GAMING</h1>
        <div>
          <ul className="lista">
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Productos</a>
            </li>
            <li>
              <a href="#">Preguntas Frecuentes</a>
            </li>
            <li>
              <a href="#">Sponsors</a>
            </li>
            {children}
          </ul>
        </div>
      </nav>
    </header>
  );
};
