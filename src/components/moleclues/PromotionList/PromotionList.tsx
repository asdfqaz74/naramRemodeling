import { useState } from 'react';
import { StyledPromotionList } from '@/styles/Promotion/Promotion';
import PromotionContainer from '@/components/atoms/PromotionImage/PromotionContainer';
import Pagination from '@/components/atoms/Board/Pagination';
import BasicButton from '@/components/atoms/Board/BasicButton';
import { StyledPaginationBar } from '@/styles/components/Board/Board';

const promotion = [
  {
    id: 1,
    img: '../../../../public/Promotion.svg',
    date: '2023.12.11',
    title: '나람사료 귀하의 성공 파트너 입니다!',
  },
  { id: 2, img: '../../../../public/Promotion.svg', date: '2023.12.12', title: '또 다른 프로모션입니다!' },
  { id: 3, img: '../../../../public/Promotion.svg', date: '2023.12.13', title: '또 다른 프로모션입니다람쥐!' },
  { id: 4, img: '../../../../public/Promotion.svg', date: '2023.12.14', title: '또 다른 프로모션입니다슬기!!' },
  { id: 5, img: '../../../../public/Promotion.svg', date: '2023.12.15', title: '또 다른 프로모션일까요 아닐까요?' },
  {
    id: 6,
    img: '../../../../public/Promotion.svg',
    date: '2023.12.16',
    title: '또 다른 프로모션은 언제 나오는걸까요???',
  },
  {
    id: 7,
    img: '../../../../public/Promotion.svg',
    date: '2023.12.16',
    title: '또 다른 프로모션은 언제 나오는걸까요???',
  },
  {
    id: 8,
    img: '../../../../public/Promotion.svg',
    date: '2023.12.16',
    title: '또 다른 프로모션은 언제 나오는걸까요???',
  },
  {
    id: 9,
    img: '../../../../public/Promotion.svg',
    date: '2023.12.16',
    title: '또 다른 프로모션은 언제 나오는걸까요???',
  },
  {
    id: 10,
    img: '../../../../public/Promotion.svg',
    date: '2023.12.16',
    title: '또 다른 프로모션은 언제 나오는걸까요???',
  },
  {
    id: 11,
    img: '../../../../public/Promotion.svg',
    date: '2023.12.16',
    title: '또 다른 프로모션은 언제 나오는걸까요???',
  },
  {
    id: 12,
    img: '../../../../public/Promotion.svg',
    date: '2023.12.16',
    title: '또 다른 프로모션은 언제 나오는걸까요???',
  },
  {
    id: 13,
    img: '../../../../public/Promotion.svg',
    date: '2023.12.16',
    title: '또 다른 프로모션은 언제 나오는걸까요???',
  },
  {
    id: 14,
    img: '../../../../public/Promotion.svg',
    date: '2023.12.16',
    title: '또 다른 프로모션은 언제 나오는걸까요???',
  },
];

type PromotionListProps = {
  to: string;
};

function PromotionList({ to }: PromotionListProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6; // 페이지당 아이템 개수
  const pageCount = Math.ceil(promotion.length / itemsPerPage); // 전체 페이지 수

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const renderData = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, promotion.length);
    return promotion.slice(startIndex, endIndex).map((item) => <PromotionContainer key={item.id} data={item} />);
  };

  return (
    <>
      <StyledPromotionList>{renderData()}</StyledPromotionList>
      <StyledPaginationBar>
        <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
        <BasicButton text="글쓰기" to={to} />
      </StyledPaginationBar>
    </>
  );
}

export default PromotionList;
