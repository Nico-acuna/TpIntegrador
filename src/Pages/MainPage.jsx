import { MainHeader } from "../components/MainHeader";
import { MainFooter } from "../components/MainFooter";
import { BloqueBuscador } from "../components/BloqueBuscador";
import { BloqueCategorias } from "../components/BloqueCategorias";
import { BloqueListado } from "../components/BloqueListado";
import { useNavigate } from "react-router-dom";

export function MainPage(){

    const navigate = useNavigate();

    const goToLogIn = ()=>{
        navigate("/login");
    }
     const goToRegister = () => {
       navigate("/signup");
     };

    return (
      <>
        <MainHeader
          title1="Iniciar Sesión"
          btnHandler1={goToLogIn}
          title2="Crear Cuenta"
          btnHandler2={goToRegister}
        />
        <BloqueBuscador />
        <div>
          <BloqueCategorias />
          <BloqueListado />
        </div>
        <MainFooter />
      </>
    );
}
