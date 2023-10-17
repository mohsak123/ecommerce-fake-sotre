import React from "react";
import { useSelector } from "react-redux";
import notify from "../../utility/Notify";
import { ToastContainer } from "react-toastify";

const CartPayment = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const payment = () => {
    notify("The payment was completed successfully", "success");
    setTimeout(() => {
      window.location.reload(false);
      localStorage.clear();
    }, 1800);
  };

  return (
    <div className="cart-payment">
      <div className="cart-payment-title">Total Cart</div>
      <div className="cart-payment-total-price">
        Total Price:{" "}
        <span>
          ${cartItems.reduce((acc, cur) => acc + cur.price, 0).toFixed(2)}
        </span>
      </div>
      <div className="cart-payment-num-products">
        Total Products: <span>{cartItems.length}</span>
      </div>
      <div className="cart-payment-complete" onClick={() => payment()}>
        Complete the payment
      </div>
      <ToastContainer />
    </div>
  );
};

export default CartPayment;
