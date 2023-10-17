import { categoryActions } from "../slices/categorySlice";

// Get All Categories From Backend
export function getAllCategories() {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const result = await response.json();
      dispatch(categoryActions.setCategory(result));
    } catch (error) {
      console.log(error);
    }
  };
}

// Get One Category From Backend
export function getOneCategory(cat) {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${cat}`
      );
      const result = await response.json();
      dispatch(categoryActions.setOneCategory(result));
    } catch (error) {
      console.log(error);
    }
  };
}
