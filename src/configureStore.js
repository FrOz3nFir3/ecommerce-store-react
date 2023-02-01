import { configureStore } from "@reduxjs/toolkit";
import cartSlicer from "./slice/cartSlice";
import productSlicer from "./slice/productSlice";

const reducer = {
  cart:cartSlicer.reducer,
  products:productSlicer.reducer
};
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
});

export default store;
