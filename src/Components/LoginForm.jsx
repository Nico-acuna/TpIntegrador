import { useState } from "react";
import { Link } from "react-router-dom";


export function LoginForm(){
    
    const testUser = {
      email: "dh@gmail.com",
      pass:"grupo1"
    }

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        

    }

    return (
      <>
        <h3>Iniciar Sesión</h3>
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="">Contraseña</label>
          <input type="password" name="password" id="password" minLength="6"/>
          <button type="submit">Ingresar</button>
          <h6>¿Aún no tienes cuenta? <Link to="signup">Regístrate</Link></h6>
        </form>
      </>
    );
}