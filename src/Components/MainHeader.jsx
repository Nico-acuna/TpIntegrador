import Logo from "../assets/logo_1.svg"
import "../styles/mainHeader.css";
import { Link } from "react-router-dom";

export function MainHeader({title1, title2, btnHandler1, btnHandler2, showButton=true}){

    return (
      <div className="MainHeader">
        <div>
          <Link to="/">
            <img src={Logo} alt="icon" />
          </Link>
          <h4 className="slogan">Sentite como en tu hogar</h4>
        </div>
        <div className="buttons">
            {showButton && (
                <button id="btn-1" onClick={btnHandler1}>
                {title1}
                </button>
            )}
            <button id="btn-2" onClick={btnHandler2}>
                {title2}
            </button>
        </div>
      </div>
    );
}