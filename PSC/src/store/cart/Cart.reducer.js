import { store } from "..";

let initState={
    loading:false,
    error:false,
    data:[],
};
export const CartReducer=(state=initState,{type,payload})=>{
    switch(type){
        default:
            return state;
    }
}