import React from 'react';
import ReactPaginate from 'react-paginate';
import { constants } from '../../../constants/constants';

import './Pagination.scss';

export const Pagination = (props) => {
  const {repos} = props;
  const pages = Math.ceil(repos / constants.reposOnThePage);

  return (
    <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel=" >"
        previousLabel="< "
        onPageChange={e => props.onPage(e.selected + 1)}
        pageRangeDisplayed={constants.reposOnThePage}
        pageCount={pages}
        renderOnZeroPageCount={null}
    />
  )
}
