import styled from 'styled-components';

export const PromotionLink = styled.li`
  width: 420px;
  height: 350px;
  border-bottom: 1px solid #d1d1d1;
  margin-bottom: 60px;
`;

export const PromotionDate = styled.div`
  font-family: 'Noto Sans';
  color: #999;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: start;
`;

export const PromotionTitle = styled.p`
  font-family: 'Noto Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: start;
  padding-top: 5px;
`;

export const PromotionTitleWrapper = styled.dd`
  width: 420px;
  padding-top: 10px;
`;

export const PromotionIamge = styled.dt`
  width: 420px;
  height: 235px;
`;

export const StyledPromotionList = styled.ul`
  width: 1280px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10px;
  border-bottom: 2px solid black;
`;
