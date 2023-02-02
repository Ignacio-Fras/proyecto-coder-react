import './footer.css'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

export const Footer = () =>{
    
    return(
        <div className="footer">
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
    )
}