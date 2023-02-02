import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./user.css"


export const User = () => {
    return(
        <div>
            <Link to ="/login" className="img valor"><FaUser/></Link>
        </div>
    )
}