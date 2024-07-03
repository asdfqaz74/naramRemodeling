import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface GNBTitleProps {
  color: string;
}

export const GNBTitle = styled.p<GNBTitleProps>`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${(prpos) => prpos.color};
  line-height: normal;
  font-style: normal;
  text-decoration: none;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const GNBContainer = styled.ul`
  display: flex;
  gap: 3rem;
  white-space: nowrap;
  padding: 1.5625rem 0;
  justify-content: end;
  align-items: center;

  & > button {
    display: none;
  }

  @media (max-width: 1200px) {
    & li {
      display: none;
    }

    & button {
      display: flex;
    }
  }
`;

interface GNBButtonProps extends GNBTitleProps {
  isClick: boolean;
}

export const GNBButton = styled.button<GNBButtonProps>`
  color: ${(props) => props.color};
  display: ${(props) => (props.isClick ? 'none' : 'block')};
`;

export const GNBLi = styled.li`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

export const NaviImageLink = styled(Link)`
  display: flex;
  gap: 0.375rem;
  align-items: center;
`;

type ImageContainerProps = {
  color: string;
};

export const ImageContainer = styled.div<ImageContainerProps>`
  color: ${(props) => props.color};
`;

export const LogoLinkContainer = styled(Link)`
  min-width: 14.375rem;
`;
