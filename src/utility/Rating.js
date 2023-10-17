import React from "react";
import "./utility-css/rating.css";

const Rating = ({ rating, count }) => {
  return (
    <div className="rating">
      <div className="rate">
        {rating}
        <i class="bi bi-star-fill"></i>
      </div>
      <div className="count">count: {count}</div>
    </div>
  );
};

export default Rating;
