import axios from "axios";
import { GET_PRODUCTS_ERROR, GET_PRODUCTS_lOADING, GET_PRODUCTS_SUCCESS } from "./Product.types"

const getProducts=()=>async(dispatch)=>{
    dispatch({type:GET_PRODUCTS_lOADING});
    try{
        let res=await axios.get('');
        dispatch({type:GET_PRODUCTS_SUCCESS, payload:res.data});
        return res.data;
    }
    catch(e){
        dispatch({type:GET_PRODUCTS_ERROR})
    }
}