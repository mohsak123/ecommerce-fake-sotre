import React, { useEffect, useState } from "react";
import HeaderTitleComponent from "../utility/HeaderTitleComponent";
import { Container } from "react-bootstrap";
import Rating from "../utility/Rating";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/apiCalls/productApiCall";
import Pagination from "../utility/Pagination";
import "./style/productPage.css";
import FilterProductBox from "../components/filter/FilterProductBox";
import SortProductBox from "../components/filter/SortProductBox";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const [sortItem, setSortItem] = useState("low");
  const [filterItem, setFilterItem] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  // Filter Product
  const filteredProduct = products.filter((p) =>
    filterItem === "electronics"
      ? p.category === "electronics"
      : filterItem === "jewelery"
      ? p.category === "jewelery"
      : filterItem === "men's clothing"
      ? p.category === "men's clothing"
      : filterItem === "women's clothing"
      ? p.category === "women's clothing"
      : p
  );

  // Sort Product
  const sortedProductList =
    sortItem === "low"
      ? filteredProduct.sort((a, b) => a.price - b.price)
      : sortItem === "high"
      ? filteredProduct.sort((a, b) => b.price - a.price)
      : filteredProduct.sort((a, b) => (a.title > b.title ? 1 : -1));

  // Pagination
  const PRODUCT_PER_PAGE = 3;
  const pages = Math.ceil(sortedProductList.length / PRODUCT_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCT_PER_PAGE;
  const finishIndex = currentPage * PRODUCT_PER_PAGE;

  const orderedProducts = sortedProductList.slice(startIndex, finishIndex);

  return (
    <div className="product-page">
      <HeaderTitleComponent title="Our Products" />
      <Container className="d-flex align-item-center justify-content-between container-product-page">
        <div className="product-page-items">
          {orderedProducts.length > 0
            ? orderedProducts.map((item) => (
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/products/${item.id}`}
                  key={item.id}
                  className="product-page-item mt-5"
                >
                  <div className="product-item-img">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="product-item-title">{item.title}</div>
                  <div className="product-item-price">
                    price : ${item.price}
                  </div>
                  <Rating rating={item.rating.rate} count={item.rating.count} />
                </Link>
              ))
            : null}
        </div>
        <div className="filter">
          <FilterProductBox
            setFilterItem={setFilterItem}
            setCurrentPage={setCurrentPage}
          />
          <SortProductBox
            setCurrentPage={setCurrentPage}
            setSortItem={setSortItem}
          />
        </div>
      </Container>
      <Container className="d-flex flex-wrap align-item-center justify-content-center">
        <Pagination
          number={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Container>
    </div>
  );
};

export default ProductsPage;
