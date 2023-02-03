import './footer.css'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Footer = () =>{
    
    return(
        <div className="footer">
            <div className="footerNav">
                <Link to="/" className="btnFooter">Inicio</Link>
                <Link to="/PreguntasFrecuentes" className="btnFooter">Preguntas Frecuentes</Link>
                <br/>
                <p>Pegasus Gaming 2023 <br/> Todos los derechos reservados</p>
            </div>
            <div className="redes">
            <li className="textFooter">
                <a href="https://twitter.com/home"><FaTwitter/></a>
            </li>
            <li className="textFooter">
                <a href="https://www.facebook.com"><FaFacebook/></a>
            </li>
            <li className="textFooter">
                <a href="https://www.instagram.com"><FaInstagram/></a>
            </li>
            </div>
        </div>
    )
}