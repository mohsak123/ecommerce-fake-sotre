import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductToCart } from "../../redux/apiCalls/cartApiCall";
// import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";

const CartProducts = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // const [show, setShow] = useState(false);

  const handleDelete = (ID) => {
    dispatch(deleteProductToCart(ID));
    // setShow(false);
  };

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <div className="cart-products">
      {cartItems.map((product) => (
        <div key={product.id} className="cart-product">
          <div className="cart-product-img">
            <img src={product.image} />
          </div>
          <div className="cart-product-info">
            <div className="cart-product-info-title">{product.title}</div>
            <div className="cart-product-footer">
              <div className="cart-product-footer-price">${product.price}</div>
              <div className="cart-product-footer-delete">
                <i
                  onClick={() => handleDelete(product.id)}
                  class="bi bi-trash"
                ></i>
              </div>
            </div>
          </div>
          {/* <Modal
            show={show}
            onHide={handleClose}
            backdrop="true"
            keyboard={false}
            className="font"
          >
            <Modal.Header closeButton>
              <Modal.Title>Delete Product</Modal.Title>
            </Modal.Header>
            <Modal.Body className="fs-5">
              Are You Sure From Deleting The Product
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Ignore
              </Button>
              <Button
                style={{ backgroundColor: "purple", borderColor: "purple" }}
              >
                Confirm
              </Button>
            </Modal.Footer>
          </Modal> */}
        </div>
      ))}
    </div>
  );
};

export default CartProducts;
