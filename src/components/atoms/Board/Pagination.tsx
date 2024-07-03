import { StyledPagination } from '@/styles/components/Board/Pagination';

type pagination = {
  handlePageClick: any;
  pageCount: number;
};

const Pagination = ({ handlePageClick, pageCount }: pagination) => {
  return (
    <StyledPagination
      pageCount={pageCount}
      pageRangeDisplayed={3}
      breakLabel="..."
      previousLabel={'<'}
      nextLabel={'>'}
      onPageChange={handlePageClick}
      containerClassName={'pagination-ul'}
      activeClassName={'currentPage'}
      previousClassName={'pageLabel-btn'}
      nextClassName={'pageLabel-btn'}
    />
  );
};

export default Pagination;
