import React, { useState } from "react";
import "./style/cartPage.css";
import { Col, Container, Row } from "react-bootstrap";
import CartPayment from "../components/cart/CartPayment";
import CartProducts from "../components/cart/CartProducts";
import HeaderTitleComponent from "./../utility/HeaderTitleComponent";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="cart-page">
      <HeaderTitleComponent title="Shopping Cart" />
      {cartItems.length > 0 ? (
        <Container style={{ marginTop: "70px" }}>
          <Row>
            <Col lg="7" sm="12">
              <CartProducts />
            </Col>
            <Col lg="5" sm="12">
              <CartPayment />
            </Col>
          </Row>
        </Container>
      ) : (
        <div className="cart-empty">There Are No Products For Display</div>
      )}

      <ToastContainer />
    </div>
  );
};

export default CartPage;
