import React, { useEffect, useState } from 'react'
import { userNaturalKyc, userlegalKyc } from '../../utils/api'

const Legalkyc = () => {

    const [data, setData] = useState([])

    useEffect(()=>{
        userlegalKyc().then((res)=>{
            console.log("userNaturalKyc-----------", res)
            if(res.status == 200){
             setData(res?.data)
            }
        }).catch((error)=>{
            console.log(error)
        })
    },[])
  return (
    <div className='w-75 m-auto py-3'>
      <h3 className='text-center'>Legal Kyc</h3>
      <iframe src={data?.client_widget_url} width="95%"/> 
    </div>
  )
}

export default Legalkyc
