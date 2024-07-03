import styled from 'styled-components';

type GNBTitleProps = {
  fontSize?: string;
  fontWeight?: string;
  isHeader?: boolean;
};

export const GNBTitle = styled.p<GNBTitleProps>`
  font-size: ${(props) => (props.isHeader ? '1rem' : '1.25rem')};
  font-weight: ${(props) => (props.isHeader ? '700' : '500')};
  color: #333;
  line-height: normal;
  font-style: normal;
  text-decoration: none;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const MenuButtonContainer = styled.div`
  display: flex;
  gap: 3.93rem;
  white-space: nowrap;
  padding: 0.96rem;

  & .divider {
    border-left: 1px solid #d1d1d1;
  }
`;
