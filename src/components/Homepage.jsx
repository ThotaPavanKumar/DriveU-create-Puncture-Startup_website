import React, { useEffect, useState } from 'react'
import {array} from "../data/data" 
import {AiFillStar} from "react-icons/ai"
import {Select,Button} from "antd"
const {Option} = Select;

export const  Homepage = () =>  {
    const [state,setState] = useState();
    const [data,setData] = useState([]);
    const [rating,setRating] = useState([]);
    const [discount,setDiscount] = useState([]);
    
    const handleSubmit = (value) => {
        let radiusArr;
            if(value === "500m") {
                 radiusArr = array.filter((ele) => ele.radius === 500);
            } else  if(value === "1000m") {
                radiusArr = array.filter((ele) => ele.radius === 1000);
            } else  if(value === "1500m") {
                 radiusArr = array.filter((ele) => ele.radius === 1500);
            } 
      setState(radiusArr);
      console.log(radiusArr);
    }

    const handleRating = (value) => {
        let ratingArr;
            if(value === "5") {
                 ratingArr = array.filter((ele) => ele.ratings === 5);
            } else  if(value === "8") {
                ratingArr = array.filter((ele) => ele.ratings === 8);
            } 
      setRating(ratingArr);
      console.log(ratingArr);
    }
    const handleDiscount = (value) => {
        let discountArr;
            if(value === "5") {
                 discountArr = array.filter((ele) => ele.discount === 5);
            } else  if(value === "8") {
                discountArr = array.filter((ele) => ele.discount === 8);
            } 
      setDiscount(discountArr);
      console.log(discountArr);
    }

    useEffect (() => {
        setData(state?.length > 0 ?rating?.length > 0 ? rating :state : array ); 
       }
    ,[state,rating])


  return (
      <div>
      <div className='filter'>
        <div>
            <Select placeholder="Filter By Radius" onChange={handleSubmit}>
                <Option value="500m">Around 500m</Option>
                <Option value="1000m">Around 1000m</Option>
                <Option value="1500m">Around 1500m</Option>
            </Select>
        </div>
        <div>
            <Select placeholder="Filter By Rating" onChange={handleRating}>
                <Option value="5">greater than 5</Option>
                <Option value="8">greater than 8</Option>
            </Select>
        </div>
        <div>
            <Select placeholder="Filter By Discount" onChange={handleDiscount}>
                <Option value="10">10%</Option>
                <Option value="12">12%</Option>
                <Option value="15">15%</Option>
                <Option value="18">18%</Option>
            </Select>
        </div>
      </div>

    <div className='container'>
    {
    
        data.map((ele) => {
            return (
                <div className='box'>
                        <img src={ele.image} alt={ele.shopName}/>
                        <p >{ele.shopName}</p>
                        <p>Location : {ele.location} </p>
                        <p>Ratings : {ele.ratings} <AiFillStar /> </p>
                        <Button >Add To Cart</Button>
                </div>
            )
        })
    }
    </div>
      </div>
  )
}

