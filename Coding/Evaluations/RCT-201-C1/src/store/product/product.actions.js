// Product actions here
// Product actions here

import axios from "axios"
import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from "./product.types"


export const ProductsApi=()=>(dispatch)=>{
    dispatch({type:GET_PRODUCTS_LOADING})
    axios.get("http://localhost:8080/products").then(r=>{
        console.log(r.data)
        dispatch({type:GET_PRODUCTS_SUCCESS,payload:r.data})
     
       
    }).catch(()=>{
        dispatch({type:GET_PRODUCTS_ERROR})
    })
}