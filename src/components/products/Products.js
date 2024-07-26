import React, { useEffect, useState } from 'react'
import { Container, Row } from 'reactstrap';
import Product from "../product/Product";
import axios from "axios"

export default function Products() {

  const [data,setData]=useState([])
  useEffect(()=>{
    fetchData();
  },[])
  const url="https://66a07bab7053166bcabb8e1a.mockapi.io/students"
  const fetchData =()=>{
    axios.get(url)
    .then(function(res){
        setData(res.data)
    })
    .catch(function(error){
      console.log(error)
    })
  }
    return (
      <div>
        Products
        <Container>
        <Row>
         {
            data.map((item,index)=>(
              <Product key={index} product={item} />
            ))
         }
          </Row>
          </Container>
      </div>
    )
}