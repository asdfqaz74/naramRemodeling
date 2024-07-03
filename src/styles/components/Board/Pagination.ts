import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const StyledPagination = styled(ReactPaginate).attrs({
  containerClassName: 'pagination-ul',
  activeClassName: 'currentPage',
  previousClassName: 'pageLabel-btn',
  nextClassName: 'pageLabel-btn',
})`
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  color: gray;

  & .currentPage {
    font-weight: 900;
    color: black;
    font-size: 18px;
    line-height: 18px;
    border-bottom: 2px solid black;
  }
`;
