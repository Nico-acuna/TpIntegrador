import React from 'react';
import logo from '../assets/componentLogo.png';
import '../components/styles/Header.css';

export default function Header() {

    return (
            <div class="headerLogIn">
                <img src={logo} alt="logo" class="logoHeader"/>
                <button class="buttonHeader">Iniciar sesión</button>
            </div>
    )
}