import { store } from "..";
import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from "./Product.types";

let initState={
    loading:false,
    error:false,
    data:[],
};
export const ProductReducer=(state=initState,{type,payload})=>{
    switch(type){
        case GET_PRODUCTS_LOADING:
            return {
                ...state,
                loading:false,
                error:true,
            }
            case GET_PRODUCTS_ERROR:
                return {
                    ...state,
                    loading:false,
                    error:true,
                }
                case GET_PRODUCTS_SUCCESS:
                    return {
                        ...state,
                        loading:false,
                        data:payload,
                    }
        default:
            return state;
    }
}