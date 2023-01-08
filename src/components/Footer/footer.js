import './footer.css'
import { Link } from 'react-router-dom'

export const Footer = () =>{
    
    return(
        <div className="footer">
            <li>
                <Link to="/" className="textFooter">Facebook</Link>
            </li>
            <li>
                <Link to="/" className="textFooter">Twitter</Link>
            </li>
            <li>
                <Link to="/" className="textFooter">Instagram</Link>
            </li>
        </div>
    )
}