import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./utility-css/navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "./../redux/apiCalls/categoryApiCall";
import { Link } from "react-router-dom";

const NavbarCom = () => {
  const [toggle, setToggle] = useState(false);

  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const func = () => {
    setToggle(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="navbar">
      <Container className="px-4">
        <div className="navbar-user">
          <Link to="/cart" class="bi bi-cart shop-icon">
            {cartItems.length > 0 && cartItems !== null ? (
              <span className="count-product">{cartItems.length}</span>
            ) : null}
          </Link>
          <Link to="/register" class="bi bi-person user-icon"></Link>
        </div>
        <div className="navbar-list">
          <i
            onClick={() => setToggle(true)}
            class="bi bi-list navbar-list-icon"
          ></i>
        </div>
        <ul
          className="navbar-links"
          style={{
            right: toggle === true ? "0%" : "-100%",
          }}
        >
          <Link
            to="/"
            style={{ textDecoration: "none", width: "fit-content" }}
            className="navbar-link"
            onClick={func}
          >
            Home
          </Link>
          <Link
            to="/products"
            style={{ textDecoration: "none", width: "fit-content" }}
            className="navbar-link"
            onClick={func}
          >
            Products
          </Link>
          {categories && categories.length > 0
            ? categories.map((cat, index) => (
                <Link
                  to={`/products/category${index + 1}/${cat}`}
                  style={{ textDecoration: "none", width: "fit-content" }}
                  key={index}
                  className="navbar-link"
                  onClick={func}
                >
                  {cat}
                </Link>
              ))
            : null}
          <div className="navbar-close">
            <i onClick={func} class="bi bi-x-lg navbar-close-icon"></i>
          </div>
        </ul>
      </Container>
    </div>
  );
};

export default NavbarCom;
