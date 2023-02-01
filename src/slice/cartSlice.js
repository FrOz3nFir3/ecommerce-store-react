import { createSlice } from "@reduxjs/toolkit";

const cartSlicer = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
     addProduct(state, action){
      const product = action.payload;
      state.cart.push(product)
      },
    
      removeProduct(state, action){
        const id = action.payload.id;
        state.cart = state.cart.filter((product) => product.id != id);
      },

     checkoutProduct(state, action){
       state.cart = [];
     }
    },
  })
export const { addProduct, removeProduct, checkoutProduct } = cartSlicer.actions

export const selectCurrentCart = (state) => state.cart.cart;

export default cartSlicer;
