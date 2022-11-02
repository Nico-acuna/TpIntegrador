import { RegistrationForm } from "../components/RegistrationForm";
import { MainHeader } from "../components/MainHeader";
import { MainFooter } from "../components/MainFooter";
import { useNavigate } from "react-router-dom";
import "../styles/registration.css";

export function SignUpPage() {

    const navigate = useNavigate();
    const goToLogin = ()=>{
        navigate("/login");
    }

  return (
    <>
      <MainHeader title2="Iniciar Sesión" btnHandler2={goToLogin} showButton={false}/>
      <RegistrationForm />
      <MainFooter />
    </>
  );
}
