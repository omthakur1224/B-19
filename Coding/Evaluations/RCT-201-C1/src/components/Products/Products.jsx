import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductsApi } from "../../store/product/product.actions";
import Product from "./Product/Product"
const Products = () => {
  const {data,loading,error}=useSelector((state)=>state.product)
  console.log(DataTransferItem)

  console.log(data)
  const dispatch=useDispatch()

  useEffect(()=>{
    if(data.length==0)
    dispatch(ProductsApi())
  },[dispatch])
     return (
      
     loading?<div>...Loading</div>
     :error?<div>Error</div>:<div>
      {
        data.map(e=>(<Product key={e.id} {...e}/>))
   
    }
     </div>

     )
  
};

export default Products;