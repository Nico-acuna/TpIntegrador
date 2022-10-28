import { MainHeader } from "../components/MainHeader";
import { MainFooter } from "../components/MainFooter";
import { BloqueBuscador } from "../components/BloqueBuscador";
import { BloqueCategorias } from "../components/BloqueCategorias";
import { BloqueListado } from "../components/BloqueListado";
import { useNavigate } from "react-router-dom";

export function MainPage(){

    const navigate = useNavigate();

    const goToRegister = ()=>{
        navigate("/signup");
    }

    return (
      <>
        <MainHeader title="Crear Cuenta" btnHandler={goToRegister}/>
        <BloqueBuscador/>
        <div>
          <BloqueCategorias/>
          <BloqueListado/>
        </div>
        <MainFooter/>
      </>
    );
}
