import { Routes, Route } from "react-router-dom"
import './App.css';
import Signup from "./Pages/Auth/signup/Signup";
import Login from "./Pages/Auth/login/Login";
import Forgot from "./Pages/Auth/forgot/Forgot";
import ResetPass from "./Pages/Auth/forgot/Resetpass";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Natural from "./Pages/Auth/Walletuser/Natural";
import Legaluser from "./Pages/Auth/Walletuser/Legaluser";

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Login/>} />
        <Route path="/registration" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/forgot-password" element={<Forgot/>} />
        <Route path="/reset-password" element={<ResetPass/>} />
        <Route path="/natural-user" element={<Natural/>} />
        <Route path="/legal-user" element={<Legaluser/>} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
