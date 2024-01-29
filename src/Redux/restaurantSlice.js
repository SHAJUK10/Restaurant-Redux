import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//For calling Apis in redux/slice we use Thunk
//Thunk method provided by reddux tp make api calls
//Api calls are asynchorounous function so it makes use of concept of promise

//function to call Api
 export const fetchRestaurant= createAsyncThunk('restaurantList/fetchRestaurant' ,()=>{
  const result =  axios.get("/restaurant.json").then(response=>response.data);
  console.log("inside slice",result);
  return result

})

const restaurantSlice = createSlice({
    name:"restaurantList",
    initialState:{
        loading:false, //pending,
        allRestaurant:[],//resolve
        err:"",//reject
        searchResturant:[],
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchRestaurant.pending,(state)=>{
            state.loading =  true;
        })
        builder.addCase(fetchRestaurant.fulfilled,(state,action)=>{
            state.loading = false
            state.allRestaurant= action.payload
            state.searchResturant =action.payload
            state.err =""

        })
        builder.addCase(fetchRestaurant.rejected,(state,action)=>{
            state.loading=false;
            state.allRestaurant=[];
            state.err=action.error.message
        })
    },
    //for searching hotel
    reducers:{
        search:(state,action)=>{
            state.allRestaurant.restaurants = state.searchResturant.restaurants.filter(
                item=>item.neighborhood.toLowerCase().includes(action.payload)
            )
        }
    }
})

export default restaurantSlice.reducer;
export const {search}=restaurantSlice.actions