import React from 'react'
import Sidebar from '../Pages/components/Sidebar'
import Header from '../Pages/components/Header'

const Private = ({children}) => {
  return (
    <div>
       <div className="d-flex">
        <div style={{width:"20%"}}>
          <Sidebar />
        </div>
        <div style={{width:"80%"}}>
          <Header />
          {children}
        </div>
      </div>
    </div>
  )
}

export default Private
