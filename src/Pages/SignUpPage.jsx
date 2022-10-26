import { RegistrationForm } from "../Components/RegistrationForm";
import { MainHeader } from "../Components/MainHeader";
import { MainFooter } from "../Components/MainFooter";
import { useNavigate } from "react-router-dom";
import "../styles/registration.css";

export function SignUpPage() {

    const navigate = useNavigate();
    const goToLogin = ()=>{
        navigate("/");
    }

  return (
    <>
      <MainHeader title="Iniciar Sesión" btnHandler={goToLogin} />
      <RegistrationForm />
      <MainFooter />
    </>
  );
}
