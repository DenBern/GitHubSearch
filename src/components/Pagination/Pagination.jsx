import React from 'react';
import ReactPaginate from 'react-paginate';

import './Pagination.scss';

export const Pagination = () => {
  return (
    <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel=" >"
        previousLabel="< "
        onPageChange={e => console.log(e.selected)}
        pageRangeDisplayed={4}
        pageCount={5}
        renderOnZeroPageCount={null}
    />
  )
}
