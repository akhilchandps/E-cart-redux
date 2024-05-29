import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice =  createSlice({

    name:"wishlist",
    initialState:[],
    reducers:{

        //action define
        //1. Add to wishlist -array of data added to wishlist component

        addTowishlist:(state,action)=>{

            state.push(action.payload)
            alert( "product added" )
        },
        deleteFromWishlist:(state,action)=>{

          return state.filter((item)=>item.id!=action.payload)
        }
    }
})

export const {addTowishlist,deleteFromWishlist} = wishlistSlice.actions

export default wishlistSlice.reducer