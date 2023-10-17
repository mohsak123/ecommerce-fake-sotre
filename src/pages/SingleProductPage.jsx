import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../redux/apiCalls/productApiCall";
import HeaderTitleComponent from "../utility/HeaderTitleComponent";
import "./style/singleproductpage.css";
import { Container } from "react-bootstrap";
import { addProductToCart } from "../redux/apiCalls/cartApiCall";
import { ToastContainer } from "react-toastify";
import LoaderComponent from "../utility/LoaderComponent";

const SingleProductPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getOneProduct(id));
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const addToCartHandler = () => {
    dispatch(
      addProductToCart({
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
      })
    );
  };

  return (
    <div className="single-product-page">
      {product !== null ? (
        <div>
          <div className="single-product-page-main-title">
            <HeaderTitleComponent title={product?.category} />
          </div>
          <Container>
            <div className="single-product-page-contain">
              <div className="single-product-img">
                <img src={product?.image} alt={product?.title} />
              </div>
              <div className="single-product-info">
                <h1 className="single-product-info-title">{product?.title}</h1>
                <div className="single-product-info-description">
                  {product?.description}
                </div>
                <div className="single-product-info-price">
                  Price : ${product?.price}
                </div>
                <div className="single-product-info-rating">
                  <div className="single-product-info-rate">
                    {product?.rating?.rate}
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <div className="single-product-info-counts">
                    count: {product?.rating?.count}
                  </div>
                </div>
                <button onClick={addToCartHandler} className="add-to-cart">
                  Add To Cart
                </button>
              </div>
            </div>
          </Container>
        </div>
      ) : (
        <LoaderComponent />
      )}
      <ToastContainer />
    </div>
  );
};

export default SingleProductPage;
