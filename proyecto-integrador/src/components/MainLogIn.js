import React from 'react';
import '../components/styles/MainLogIn.css';

export default function MainLogIn() {

    return (
        <body>
            <div className="bodyLogIn">
                <h2 className="crearCuenta">Crear cuenta</h2>
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
        </body>
    )
}