import React from 'react';
import ReactPaginate from 'react-paginate';

import { constants } from '../constants/constants';

import './Pagination.scss';

export const Pagination = ({pageCount}) => {
  console.log(pageCount)
  return (
    <ReactPaginate
      className="pagination"
      breakLabel="..."
      nextLabel=" >"
      onPageChange={e => console.log(e.selected)}
      pageRangeDisplayed={constants.maxRepos}
      pageCount={pageCount}
      previousLabel="< "
      renderOnZeroPageCount={null}
    />
  )
}
