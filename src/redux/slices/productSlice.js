import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  product: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,

  reducers: {
    setProduct: (state, action) => {
      state.products = action.payload;
    },

    setOneProduct: (state, action) => {
      window.scrollTo(0, 0);
      state.product = action.payload;
    },

    removeOneProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

const productActions = productSlice.actions;
const productReducer = productSlice.reducer;

export { productActions, productReducer };
