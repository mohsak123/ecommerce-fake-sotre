import React from "react";
import "./filter.css";

const SortProductBox = ({ setSortItem, setCurrentPage }) => {
  const sortHandler = (ID) => {
    setSortItem(ID);
    setCurrentPage(1);
  };

  return (
    <div className="price-product">
      <h3 className="price-product-title">Sort By Price</h3>
      <div className="price-group">
        <input
          onClick={(e) => sortHandler(e.target.id)}
          type="radio"
          name="sort"
          id="noSort"
        />
        <label htmlFor="noSort" className="sort-label">
          No Sort
        </label>
      </div>
      <div className="price-group">
        <input
          onClick={(e) => sortHandler(e.target.id)}
          type="radio"
          name="sort"
          id="low"
        />
        <label htmlFor="low" className="sort-label">
          From Low TO High
        </label>
      </div>
      <div className="price-group">
        <input
          onClick={(e) => sortHandler(e.target.id)}
          type="radio"
          name="sort"
          id="high"
        />
        <label htmlFor="high" className="sort-label">
          From High TO Low
        </label>
      </div>
    </div>
  );
};

export default SortProductBox;
