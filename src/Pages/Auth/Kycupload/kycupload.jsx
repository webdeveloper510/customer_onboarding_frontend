import React, { useEffect, useState } from 'react'
import { userNaturalKyc } from '../../utils/api'

const Kycupload = () => {

    const [data, setData] = useState([])

    useEffect(()=>{
        userNaturalKyc().then((res)=>{
            console.log("userNaturalKyc-----------", res)
            if(res.status == 200){
             setData(res?.data)
            }
        }).catch((error)=>{
            console.log(error)
        })
    },[])
  return (
    <div className='w-75 m-auto'>
      {/* <h3 className='text-center'>Natural Kyc</h3> */}
      <iframe src="https://integration.unnax.com/widget/fullidvideo?sid=s_70dbbd122461489b82323f7145ce5d5b" height="600px" width="95%"/> 
    </div>
  )
}

export default Kycupload
