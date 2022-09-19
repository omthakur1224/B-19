import axios from "axios";
import { GET_CART_ERROR, GET_CART_lOADING, GET_CART_SUCCESS } from "./Product.types"

const getCart=(token)=>async(dispatch)=>{

    dispatch({type:GET_CART_lOADING});
    try{
        let res=await axios.get('',{
            headers:{
                token:token
            }
        });
        dispatch({type:GET_CART_SUCCESS, payload:res.data});
        return res.data;
    }
    catch(e){
        dispatch({type:GET_CART_ERROR})
    }
}
export const addItemToCart=(token)=>(dispatch)=>{
    
}