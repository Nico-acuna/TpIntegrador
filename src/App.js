<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./Pages/LoginPage";
import { SignUpPage } from "./Pages/SignUpPage";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
      </Routes>
    </div>
=======
// import logo from './logo.svg';
import './App.css';
import { BloqueBuscador } from './BloqueBuscador'
import { BloqueCategorias } from './BloqueCategorias';
import { BloqueListado } from './BloqueListado';

function App() {
  return (
    <>
      <BloqueBuscador />
      <div>
        <BloqueCategorias />
        <BloqueListado />
      </div>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
>>>>>>> 548765b223614e42cfe9b3f90455ae74c1e2be14
  );
}

export default App;
