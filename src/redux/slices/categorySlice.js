import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  oneCategory: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,

  reducers: {
    setCategory: (state, action) => {
      state.categories = action.payload;
    },

    setOneCategory: (state, action) => {
      state.oneCategory = action.payload;
    },
  },
});

const categoryActions = categorySlice.actions;
const categoryReducer = categorySlice.reducer;

export { categoryActions, categoryReducer };
