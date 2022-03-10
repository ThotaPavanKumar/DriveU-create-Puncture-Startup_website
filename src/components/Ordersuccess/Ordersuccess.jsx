import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Navbar } from '../Navbar'

export const Ordersuccess = () => {
  const [flag,setFlag] = useState(false);

  const handleSubmit = () => {
    alert("order successful");
    setFlag(true);
  }

  return (
    <>
      <Navbar />
      <h1 style={{color:"brown",textAlign: "center"}}>Order is successful</h1>
      <img style={{marginLeft : "25%"}} src={"./success.jpeg"} alt="successorder"/>
      <button onClick={(e) => handleSubmit(e)}>
          Homepage
        </button>
        {flag ? <Navigate to="/main" /> : ""}
    </>
   
  )
}

