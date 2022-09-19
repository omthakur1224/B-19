import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function CartItems() {
    const token=useReducer((store)=>store.auth.token);
    const {loading,data}=useSelector((store)=>store.cart)
    const [cartItems,setCartItems]=useState([]);
    const dispatch=useDispatch();
    
    const getCartData=async()=>{
        let res=await axios.get('url',{
            headers:{
                token:token,
            }
        });
        return res.data
    }
    useEffect(()=>{
        getCartData().then((d)=>{
            setCartItems(d);
        })
    },[])
  return (
    <div>
        {cartItems.map((e)=> <div>{e.title}</div>)}
    </div>
  )
}

export default CartItems