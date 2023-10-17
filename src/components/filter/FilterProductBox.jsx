import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "./../../redux/apiCalls/categoryApiCall";
import "./filter.css";

const FilterProductBox = ({ setFilterItem, setCurrentPage }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const onClickHandler = (ID) => {
    setFilterItem(ID);
    setCurrentPage(1);
  };

  return (
    <div className="filter-product">
      <h3 className="filter-product-title">Sort By Category</h3>
      <div className="filter-group">
        <input
          onClick={(e) => onClickHandler(e.target.id)}
          type="radio"
          name="filter"
          id="all"
        />
        <label htmlFor="all" className="filter-label">
          No Filter
        </label>
      </div>
      {categories && categories.length > 0
        ? categories.map((category) => (
            <div className="filter-group">
              <input
                onClick={(e) => onClickHandler(e.target.id)}
                type="radio"
                name="filter"
                id={category}
              />
              <label htmlFor={category} className="filter-label">
                {category}
              </label>
            </div>
          ))
        : null}
    </div>
  );
};

export default FilterProductBox;
