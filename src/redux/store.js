import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./slices/productSlice";
import { categoryReducer } from "./slices/categorySlice";
import { cartReducer } from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
    cart: cartReducer,
  },
});

export default store;
