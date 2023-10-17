import { productActions } from "../slices/productSlice";

// Get All Product From Backend
export function getAllProducts() {
  return async (dispatch) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      dispatch(productActions.setProduct(result));
    } catch (error) {
      console.log(error);
    }
  };
}

// Get One Product From Backend
export function getOneProduct(id) {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const result = await response.json();
      dispatch(productActions.setOneProduct(result));
    } catch (error) {
      console.log(error);
    }
  };
}
