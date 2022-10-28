import { Routes, Route } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./Pages/LoginPage";
import { SignUpPage } from "./Pages/SignUpPage";
import { MainPage } from "./Pages/MainPage";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/main" element={<MainPage/>} />
      </Routes>
    </div>
  );
}

export default App;
