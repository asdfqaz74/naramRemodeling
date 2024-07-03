import styled from 'styled-components';
import { Link } from 'react-router-dom';

// 제목
export const StyledPageTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .EngTitle {
    width: 100%;
    color: #999;
    text-align: center;
    font-family: 'Noto Sans';
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 18.2px;
    margin-left: 18.2px;
  }

  & .KorTitle {
    color: #000;
    text-align: center;
    font-family: 'Noto Sans';
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0;
  }
`;

// 총?건
export const StyledTotalBoard = styled.p`
  color: #999;
  font-family: 'Noto Sans';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 50px;
`;

// 드롭다운
export interface DropDownProps {
  $width?: string;
  $height?: string;
}

export const StyledDropDown = styled.div<DropDownProps>`
  width: ${(props) => props.$width || '118px'};
  height: ${(props) => props.$height || '40px'};

  & .DropDownButton {
    width: ${(props) => props.$width || '118px'};
    height: ${(props) => props.$height || '40px'};
    position: relative;
    border-bottom: 1px solid #d1d1d1;
    border-radius: 0%;
    background: rgba(217, 217, 217, 0);
  }
  & .DropDownSvg {
    position: relative;
    left: 100px;
  }
  & .DropDownList {
    position: relative;
    width: ${(props) => props.$width || '40px'};
    top: -40px;
  }
  & .DropDownOption {
    width: 40px;
    height: 40px;
    color: #999;
    text-align: center;
    line-height: 20px;
  }
`;

// 서치바
export const StyledSearchBar = styled.div`
  width: 240px;
  height: 40px;
  display: flex;
  flex-direction: row;

  & .SearchInput {
    width: 240px;
    height: 40px;
    border: 0px;
    border-bottom: 1px solid #d1d1d1;
    background: rgba(217, 217, 217, 0);
  }

  .SaerchInput::focus {
    outline: none;
  }

  .SearchInput::-webkit-search-cancel-button {
    display: none;
  }

  & .SearchImg {
    width: 18px;
    height: 20px;
    position: relative;
    bottom: 30px;
    left: 100px;
  }
`;

export const StyledTopBoard = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 2px;
  margin-top: 80px;
`;

export const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const StyledBoardTable = styled.table<{ isQnAPage: boolean }>`
  width: 100%;
  padding: 0;
  border-spacing: 0;
  border-bottom: 2px solid #000;

  & .BoardTableTitle {
    height: 70px;
    background-color: #e7e7e7;
    display: flex;
    justify-content: space-around;
    /* display: grid; */
    line-height: 70px;
    text-align: center;
    /* grid-template-columns: ${({ isQnAPage }) => (isQnAPage ? '1fr 5fr 1fr 1fr 1fr 1fr' : '1fr 6fr 1fr 1fr 1fr')}; */
    /* QnA 페이지에서는 그리드 칸을 하나 더 추가 */
  }

  & .BoardTableList {
    text-align: center;
    border-bottom: 1px solid #d1d1d1;
    word-break: break-all;
    padding: 20px 10px;
    overflow: hidden;
    height: 70px;
  }
`;

/* grid-template-columns: ${({ $isQnAPage }) =>
  $isQnAPage ? '1fr 5fr 1fr 1fr 1fr 1fr' : '1fr 6fr 1fr 1fr 1fr'}; */
/* QnA 페이지에서는 그리드 칸을 하나 더 추가 */
// 링크(글쓰기) 버튼
interface ButtonProps {
  padding?: string;
  fontSize?: string;
  fontWeight?: string;
  background?: string;
  color?: string;
  borderColor?: string;
}

export const StyledBasicButton = styled(Link)<ButtonProps>`
  padding: ${(props) => props.padding || '10px 15px'};
  font-size: ${(props) => props.fontSize || '16px'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  background: ${(props) => props.background || '#e7e7e7'};
  color: ${(props) => props.color || 'black'};
  border: 1px solid;
  border-color: ${(props) => props.borderColor || '#e7e7e7'};
`;

// 폼(제출하기) 버튼
interface ButtonProps {
  padding?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
}

export const StyleFormButton = styled.button<ButtonProps>`
  padding: ${(props) => props.padding || '20px 107px'};
  font-size: ${(props) => props.fontSize || '18px'};
  font-weight: ${(props) => props.fontWeight || '700'};
  color: ${(props) => props.color || 'white'};
  background: #3974cc;
`;

// 버튼 wrapper
export const StyledButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
`;

// 페이지네이션바
export const StyledPaginationBar = styled.div`
  display: grid;
  grid-template-columns: 15fr 1fr;
  /* margin-top: 20px; */
  padding: 20px 0px 40px 0px;
`;

// 보드레이아웃
export const StyledBoardLayout = styled.div`
  width: 81.25rem;
  position: absolute;
  top: 400px;
  left: 50%;
  transform: translate(-50%);
`;
