import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const {id}=useParams()
    const [data,setData]=useState({})
    useEffect(()=>{
      fetchData();
    },[])
    const url="https://66a07bab7053166bcabb8e1a.mockapi.io/students"
    const fetchData = ()=>{
      axios.get(url+"/"+id)
      .then(function(res){
          setData(res.data)
          console.log(res)
      })
      .catch(function(error){
        console.log("Err: " + error)
      })
    }
  return (
    <div>
      <h1>Product detail: {id}</h1>
      <p>name: {data.name}</p>
    </div>
  )
}
