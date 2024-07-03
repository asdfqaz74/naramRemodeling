import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProductTitleA = styled(Link)`
  font-size: 1.3333333333333333rem;
`;

// molcules/ProductCollection.tsx
export const ProductTitleUl = styled.ul`
  display: flex;
  flex-direction: column;
`;
type ProductTitleLiProps = {
  productType?: string;
};

export const ProductTitleLi = styled.li<ProductTitleLiProps>`
  ${({ productType }) => {
    switch (productType) {
      case 'pork':
        return `
      color: #333;
      font-weight: 700;
      line-height: normal;
      background: #EDF3FB;
    `;
      case 'chicken':
        return `
      color: #333;
      font-weight: 700;
      line-height: normal;
      background: #EDF3FB;
    `;
      case 'duck':
        return `
      color: #333;
      font-weight: 700;
      line-height: normal;
      background: #EDF3FB;
    `;
      default:
        return `
      color: #666;
      font-weight: 400;
      line-height: normal;
      background: transparent;
    `;
    }
  }};
  padding: 0.8125rem 11.5625rem 0.8125rem 2.4375rem;
  border-bottom: 1px solid #d1d1d1;
`;

// atoms/ProductTitleHead.tsx
export const ProductTitleHeadDiv = styled.div`
  font-size: 30px;
  font-weight: 700;
  background: #3974cc;
  border-radius: 0px 20px 0px 0px;
  border-bottom: 3px solid #333333;
  color: #ffffff;
  padding: 39px 151px 39px 18px;
`;
