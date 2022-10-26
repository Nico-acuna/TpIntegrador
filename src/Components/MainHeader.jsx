import Logo from "../assets/logo_1.svg"
import "../styles/mainHeader.css";

export function MainHeader({title, btnHandler}){

    return (
        <div className="MainHeader">
            <div>
                <img src={Logo} alt="icon" />
                <h4 className="slogan">Sentite como en tu hogar</h4>
            </div>
            <button onClick={btnHandler}>{title}</button>
        </div>
    )
}