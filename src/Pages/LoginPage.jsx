import { LoginForm } from "../components/LoginForm";
import { MainHeader } from "../components/MainHeader";
import {MainFooter} from "../components/MainFooter";
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
