import { LoginForm } from "../Components/LoginForm";
import { MainHeader } from "../Components/MainHeader";
import {MainFooter} from "../Components/MainFooter";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

export function LoginPage(){

    const navigate = useNavigate();

    const goToRegister = ()=>{
        navigate("/signup");
    }

    return (
      <>
        <MainHeader title="Crear Cuenta" btnHandler={goToRegister}/>
        <LoginForm/>
        <MainFooter/>
      </>
    );
}
