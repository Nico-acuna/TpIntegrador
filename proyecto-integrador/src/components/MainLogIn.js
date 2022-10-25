import React from 'react';
import '../components/styles/MainLogIn.css';

export default function MainLogIn() {

    return (
        
            <div className="bodylogin">
                    <h2 className="h2login">Crear cuenta</h2>
                <div>
                    <p>Nombre</p>
                    <input type="text"></input>
                </div>
                <div>
                    <p>Apellido</p>
                    <input type="text"></input>
                </div>
                <div>
                    <p>Email</p>
                    <input type="email"></input>
                </div>
                <div>
                    <p>Contraseña</p>
                    <input type="password"></input>
                </div>
                <div>
                    <p>Confirmar contraseña</p>
                    <input type="password"></input>
                </div>
            </div>
        
    )
}