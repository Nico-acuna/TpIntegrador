import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/registration.css";

export function RegistrationForm (){
 
   const [name, setName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [pass, setPass] = useState("");
   const [error, setError] = useState(false);
 

    const handleSubmit = (e)=>{
      e.preventDefault();
      if(pass===""){
        setError(true);
      }

    }

    return (
      <div className="registration-container">
        <h3 className="title">Crear Cuenta</h3>
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="fullname">
            <div className="registered-name">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={e => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="registered-name">
              <label htmlFor="lastName">Apellido</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={lastName}
                onChange={e => {
                  setLastName(e.target.value);
                }}
              />
            </div>
          </div>

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
            name="pass"
            id="pass"
            value={pass}
            onChange={e => {
              setPass(e.target.value);
            }}
          />
          <label htmlFor="">Confirmar Contraseña</label>
          <input
            className={error? "errorInput":null}
            type="password"
            name="passwordC"
            id="passwordC"
            minLength="6"
            onChange={e => {
              setPass(e.target.value);
            }}
          />
          {error && <h6 className="errorMessage">Este campo es obligatorio</h6>}
          <div className="register-div">
            <button className="submit" type="submit">
              Crear cuenta
            </button>
            <h6>
              ¿Ya tienes una cuenta? <Link to="/">Ir a Login</Link>
            </h6>
          </div>
        </form>
      </div>
    );
}
