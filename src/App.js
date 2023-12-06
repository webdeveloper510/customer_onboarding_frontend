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
import DocumentUser from "./Pages/Auth/Walletuser/Document";
import Kycupload from "./Pages/Auth/Kycupload/kycupload";
import Legalkyc from "./Pages/Auth/Kycupload/Legalkyc";
import Private from "./routes/Private";
import Dashboard from "./Pages/dashboard/Dashboard";
import Naturaluser from "./Pages/Auth/Naturalform/Naturaluser";

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Login/>} />
        <Route path="/registration" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/forgot-password" element={<Forgot/>} />
        <Route path="/reset-password" element={<ResetPass/>} />
        {/* <Route path="/natural-user" element={<Natural/>}  /> */}
        <Route path="/dashboard" element={<Private children={<Dashboard/>}/>}  />
        <Route path="/natural-user" element={<Private children={<Naturaluser/>}/>}  />
        <Route path="/legal-user" element={<Private children={<Legaluser/>}/>} />
        <Route path="/document-upload" element={<Private children={<DocumentUser/>}/>} />
        <Route path="/natural-kyc" element={<Private children={<Kycupload/>}/>} />
        <Route path="/legal-kyc" element={<Private children={<Legalkyc/>}/>} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
