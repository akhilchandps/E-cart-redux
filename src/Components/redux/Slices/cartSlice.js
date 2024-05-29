import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({

    name:"cart",
    initialState:[],
    reducers:{
       //actions
       addCartlist:(state,action)=>{
        
        state.push(action.payload)
        alert("cart added")
 
       } ,

       deleteFromCart:(state,action)=>{

        return state.filter((items)=>items.id!=action.payload)

       },
       emptyCart:(state)=>{

        return state=[]
       }
    }
})

export const {addCartlist,deleteFromCart,emptyCart} =cartSlice.actions

export default cartSlice.reducer