import { Routes, Route } from "react-router-dom"
import './App.css';
import Signup from "./Pages/Auth/signup/Signup";
import Login from "./Pages/Auth/login/Login";
import Forgot from "./Pages/Auth/forgot/Forgot";
import ResetPass from "./Pages/Auth/forgot/Resetpass";

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Login/>} />
        <Route path="/registration" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/forgot-password" element={<Forgot/>} />
        <Route path="/reset-password" element={<ResetPass/>} />
      </Routes>
    </div>
  );
}

export default App;
