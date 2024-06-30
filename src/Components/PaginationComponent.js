import React from 'react'
import ReactPaginate from 'react-paginate';

const PaginationComponent = ({ currentPaginationProp, pagesCountProp }) => {

    const handlePageClick = (data) => {
        currentPaginationProp(data.selected + 1)
    }

  return (
    <ReactPaginate
    breakLabel="..."
    nextLabel="التالي"
    onPageChange={handlePageClick}
    pageRangeDisplayed={2}
    marginPagesDisplayed={2}
    pageCount={pagesCountProp}
    previousLabel="السابق"
    containerClassName={'pagination justify-content-center p-3'}
    pageClassName='page-item'
    pageLinkClassName='page-link'
    previousClassName='page-item'
    previousLinkClassName='page-link'
    nextClassName='page-item'
    nextLinkClassName='page-link'
    breakClassName='page-item'
    breakLinkClassName='page-link'
    activeClassName='active'
/>
  )
}

export default PaginationComponent
