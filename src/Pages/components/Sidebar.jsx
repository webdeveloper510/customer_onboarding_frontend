import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { usertoken } from '../utils/api';
// import nexopayLogo from "../../../public/nexopay-logo.gif"
import nexopayLogo from "../../assets/image/nexopay-logo.gif"


const Sidebar = () => {
    const [activeItem, setActiveItem] = useState(null);
    const [data, setData] = useState([])
    useEffect(()=>{
      getusertoken()
    },[])

    const getusertoken = ()=>{
      usertoken().then((res)=>{
        console.log("get user token", res)
        if(res?.status == 200){
          setData(res?.data?.result)
        }
      }).catch((error)=>{
        console.log(error)
      })
    }

    const handleItemClick = (index) => {
        setActiveItem(index);
      };


  return (
    <div style={{height:"100vh",background:"#0090B0", borderRadius:"20px", margin:"10px"}}>
       <div className="sidebar text-white p-3" style={{fontFamily: "auto"}} >
      <div className='text-center py-2 mt-5 main_icon' >
      <img
          src={nexopayLogo}
          alt="img"
          className="sidebar_pic"
          width={150}
        />
        <h1 >Welcome 
          
        </h1>
        <h3 className='d-block' >
          {` ${data?.firstName ? data?.firstName : ""} ${data?.lastName ? data?.lastName : ""} ${data?.lastName2 ? data?.lastName2 :""}`}
          </h3>
       {/* <Link to="/">
      
       </Link> */}
      </div>

      {/* <ul className='py-4 my-3 mt-4 pb-4 bg-white '> */}
      {/* <li className={2 === activeItem ? 'active' : ''}
          onClick={() => handleItemClick(2)}>
          <Link to="/super-admin/blog" className='a_link' style={{color: 2 === activeItem ? "white" : ''}}><h5 className='px-4'> Blog </h5></Link>
        </li>
        <li className={1 === activeItem ? 'active' : ''}
          onClick={() => handleItemClick(1)}>
          <Link to="/super-admin/newsletter" className='a_link' style={{color: 1 === activeItem ? "white" : ''}} > <h5 className='px-4'>News Letter</h5></Link>
        </li>
        
        <li className={3 === activeItem ? 'active' : ''}
          onClick={() => handleItemClick(3)}>
          <Link to="/super-admin/subscribe" className='a_link' style={{color: 3 === activeItem ? "white" : ''}}><h5 className='px-4'> Subscribe Email </h5></Link>
        </li> */}
      {/* </ul> */}
    </div>
    </div>
  )
}

export default Sidebar
