import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css"


export function LoginForm(){
    
    const testUser = {
      name: "Lionel Messi",
      email: "dh@gmail.com",
      pass:"grupo1"
    }

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [login, setLogin] =  useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(email===testUser.email && pass === testUser.pass){
          setLogin(true);
        } else {
          setError(true);
        }

    }

    return (
      <>
        {!login && (
          <div className="login-container">
            <h3 className="title">Iniciar Sesión</h3>
            <form className="login-form" onSubmit={handleSubmit}>
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={e => {
                  setEmail(e.target.value);
                }}
              />
              <label htmlFor="">Contraseña</label>
              <input
                type="password"
                name="password"
                id="password"
                minLength="6"
                value={pass}
                onChange={e => {
                  setPass(e.target.value);
                }}
              />
              <div>
                <button className="submit" type="submit">
                  Ingresar
                </button>
                {error && (
                  <h6 className="error">Ingrese un correo y contraseña válidos</h6>
                )}
                <h6>
                  ¿Aún no tienes cuenta? <Link to="signup">Regístrate</Link>
                </h6>
              </div>
            </form>
          </div>
        )}
        {login && <h2>Bienvenido, {testUser.name}</h2>}
      </>
    );
}