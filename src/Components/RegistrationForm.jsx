import { useState } from "react";
import { Link } from "react-router-dom";

export function RegistrationForm (){
 
   const [name, setName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [pass, setPass] = useState("");
    


    const handleSubmit = (e)=>{
      e.preventDefault();
    }

    return (
      <>
        <h3>Crear Cuenta</h3>
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" id="name" />

          <label htmlFor="lastName">Apellido</label>
          <input type="text" name="lastName" id="lastName" />

          <label htmlFor="email">Correo electrónico</label>
          <input type="email" name="email" id="email" />

          <label htmlFor="">Contraseña</label>
          <input type="password" name="pass" id="pass" />
          <label htmlFor="">Confirmar Contraseña</label>
          <input
            type="password"
            name="passwordC"
            id="passwordC"
            minLength="6"
          />
          <button type="submit">Crear cuenta</button>
          <h6>
            ¿Ya tienes una cuenta? <Link to="/">Ir a Login</Link>
          </h6>
        </form>
      </>
    );
}
