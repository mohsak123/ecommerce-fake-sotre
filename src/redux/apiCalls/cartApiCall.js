import notify from "../../utility/Notify";
import { cartActions } from "../slices/cartSlice";

// Add A Product To Cart Page
export function addProductToCart(item) {
  return async (dispatch, getState) => {
    try {
      await dispatch(cartActions.addItemToCart(item));
      notify("The product has been added successfully", "success");
      const { cart } = getState();
      localStorage.setItem("cartItems", JSON.stringify(cart.cartItems));
    } catch (error) {
      console.log(error);
    }
  };
}

// Delete A Product To Cart Page
export function deleteProductToCart(id) {
  return async (dispatch, getState) => {
    try {
      await dispatch(cartActions.removeItemFromCart(id));
      notify("The product has been deleted successfully", "success");
      const { cart } = getState();
      localStorage.setItem("cartItems", JSON.stringify(cart.cartItems));
    } catch (error) {
      console.log(error);
    }
  };
}
