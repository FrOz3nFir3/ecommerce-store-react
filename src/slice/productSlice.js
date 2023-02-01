import { createSlice } from "@reduxjs/toolkit";

const productSlicer = createSlice({
  name: "products",
  initialState: { products: [] },
  reducers: {
    initializeProducts(state, action){
      const products = action.payload;
      state.products = products;
    },
  },
})
export const { initializeProducts } = productSlicer.actions;
export const selectCurrentProducts = (state) => state.products.products;

export default productSlicer;
