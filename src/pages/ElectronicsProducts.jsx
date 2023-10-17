import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneCategory } from "../redux/apiCalls/categoryApiCall";
import Rating from "../utility/Rating";
import { Link } from "react-router-dom";
import HeaderTitleComponent from "../utility/HeaderTitleComponent";
import { Container } from "react-bootstrap";
import LoaderComponent from "../utility/LoaderComponent";

const ElectronicsProducts = () => {
  const dispatch = useDispatch();
  const { oneCategory } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getOneCategory("electronics"));
  }, []);

  return (
    <div className="category-electronics my-5 min-vh-100">
      <HeaderTitleComponent title="Electronics" />
      <Container className="d-flex flex-wrap align-item-center justify-content-center container mb-5">
        {oneCategory.length > 0 ? (
          oneCategory
            .map((item) => (
              <Link
                style={{ textDecoration: "none" }}
                to={`/products/${item.id}`}
                key={item.id}
                className="product-item mt-4"
              >
                <div className="product-item-img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="product-item-title">{item.title}</div>
                <div className="product-item-price">price : ${item.price}</div>
                <Rating rating={item.rating.rate} count={item.rating.count} />
              </Link>
            ))
            .slice(0, 8)
        ) : (
          <LoaderComponent />
        )}
      </Container>
    </div>
  );
};

export default ElectronicsProducts;
