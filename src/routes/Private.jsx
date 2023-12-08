import React, { useEffect } from 'react'
import Sidebar from '../Pages/components/Sidebar'
import Header from '../Pages/components/Header'
import Login from '../Pages/Auth/login/Login'
import { useNavigate } from 'react-router'

const Private = ({children}) => {
 
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  useEffect(()=>{
    if(!token){
     navigate("/")
    }
  },[])
  return (
    <div>
       {token ?
       <div className="d-flex">
       <div style={{width:"20%"}}>
         <Sidebar />
       </div>
       <div style={{width:"80%"}}>
         <Header />
         {children}
       </div>
     </div>
     :
     <Login/>
       }
    </div>
  )
}

export default Private
