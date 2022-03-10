
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Cartpage } from '../Cartpage/Cartpage'
import { Checkoutpage } from '../Checkoutpage/Checkoutpage'
import { Homepage } from '../Homepage'
import { Navbar } from '../Navbar'

export const Router = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Homepage />} ></Route>
            <Route path="/cartpage" element={<Cartpage />} ></Route>
            <Route path="/checkoutpage" element={<Checkoutpage />} ></Route>
        </Routes>
    </div>
  )
}

