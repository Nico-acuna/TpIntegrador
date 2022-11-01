import Logo from "../assets/logo_1.svg"
import "../styles/mainHeader.css";
import { Link } from "react-router-dom";

export function MainHeader({title, btnHandler}){

    return (
        <div className="MainHeader">
            <div>
                <Link to="/"> 
                <img src={Logo} alt="icon"  />
                </Link>
                <h4 className="slogan">Sentite como en tu hogar</h4>
            </div>
            <button onClick={btnHandler}>{title}</button>
            
        </div>
    )
}