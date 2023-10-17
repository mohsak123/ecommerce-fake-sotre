import React, { useState } from "react";
import "./utility-css/pagination.css";

const Pagination = ({ number, currentPage, setCurrentPage }) => {
  const pages = [];

  for (let i = 1; i <= number; i++) {
    pages.push(i);
  }

  const setPage = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 240);
  };

  return (
    <div className="pagination">
      <button
        onClick={() => setPage((e) => e - 1)}
        disabled={currentPage === 1}
        className="arrow-left"
      >
        <i class="bi bi-arrow-left"></i>
      </button>
      {pages.map((page) => (
        <div
          onClick={() => setPage(page)}
          className={currentPage === page ? "page active" : "page"}
          key={page}
        >
          {page}
        </div>
      ))}
      <button
        onClick={() => setPage((e) => e + 1)}
        disabled={currentPage === number}
        className="arrow-right"
      >
        <i class="bi bi-arrow-right"></i>
      </button>
    </div>
  );
};

export default Pagination;
