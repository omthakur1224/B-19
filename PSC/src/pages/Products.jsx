import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';

const getProducts=async(req,response)=>{
    let resp=await axios.get('http://localhost:8080/products')
    return resp.data;
}
function Products() {

    const {loading,data}=useSelector((store)=>store.products);

    const dispatch=useDispatch();

    const [products,setProducts]=useState([]);

    useEffect(()=>{
        getProducts().then((d)=>{
            setProducts(d);
        })
    })
  return (
    <div>
       Products
       {products.map((e)=>
        <div>
            {e.title}
            </div>
       )}
    </div>
  )
}

export default Products
