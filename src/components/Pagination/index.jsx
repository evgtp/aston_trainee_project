import React from "react";
import ReactPaginate from "react-paginate";

import "./Pagination.css";

function Pagination({ size, onChangePage }) {
  return (
    <ReactPaginate
      className="pagination"
      breakLabel=""
      nextLabel=""
      previousLabel=""
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={5}
      pageCount={size}
      renderOnZeroPageCount={null}
      marginPagesDisplayed={0}
      previousClassName="previous"
      previousLinkClassName="link_previous"
      nextClassName="next"
      nextLinkClassName="link_next"
      activeClassName="active"
    />
  );
}

export default Pagination;
