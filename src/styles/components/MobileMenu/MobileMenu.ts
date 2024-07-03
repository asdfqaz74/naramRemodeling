import { Link } from 'react-router-dom';
import styled from 'styled-components';

// MobileMenuTitle.tsx

type MobileMenuTitleProps = {
  isClicked: boolean;
};

export const MobileMenuTitleContainer = styled.button.withConfig({
  shouldForwardProp: (prop) => !['isClicked'].includes(prop),
})<MobileMenuTitleProps>`
  padding: 0.625rem;
  border-bottom: 1px solid #d1d1d1;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;

  & img {
    transform: ${(props) => (props.isClicked ? 'rotate(0deg)' : 'rotate(180deg)')};
  }
`;

// MobileMenuText.tsx

export const MobileMenuTextContainer = styled(Link)`
  font-size: 0.875rem;
  color: #666666;
  font-weight: 400;
`;

// MobileMenuTextContainer.tsx
export const MobileMenuTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  background-color: #f6f6f6;
  padding: 0.625rem 0.9375rem;
  align-items: start;
  width: 100%;
`;

// MobileMenuSignIn.tsx
type MobileMenuSignInProps = {
  isLogin: boolean;
};

export const MobileMenuSignInContainer = styled(Link).withConfig({
  shouldForwardProp: (prop) => !['isLogin'].includes(prop),
})<MobileMenuSignInProps>`
  display: flex;
  gap: 0.5625rem;
  align-items: center;
  color: ${(props) => (props.isLogin ? '#F44646' : '#3974CC')};
`;

// MobileMenuHeader.tsx

export const MobileMenuHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem;
  background-color: #f6f6f6;
  width: 100%;
`;

// MobileTitleText.tsx

export const AnimatedContainer = styled.div<{ isOpen: boolean }>`
  max-height: ${(props) => (props.isOpen ? '15vh' : '0')};
  overflow: hidden;
  transition: max-height 0.2s ease-in-out;
  border-bottom: ${(props) => (props.isOpen ? '1px solid #d1d1d1' : 'none')};
`;

// MobileMenu.tsx
export const MobileMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #fff;
`;

export const MobileMenuButtonContainer = styled.div<{ isClick: boolean }>`
  display: block;
  width: 30%;
  z-index: 100;
  position: fixed;
  right: 0;
  top: 4.75rem;
  transform: translateX(${(props) => (props.isClick ? '0%' : '100%')});
  transition: transform 0.2s ease-out;

  & > button {
    align-self: left;
  }

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const MobileMenuButton = styled.button`
  align-self: start;
`;

export const MobileMenuBackground = styled.div<{ isClick: boolean }>`
  ${(props) =>
    props.isClick &&
    ` 
  position: fixed;
  inset: 0;
  background-color: #3c3c43b3;
  backdrop-filter: blur(3px);
  z - index: 50; 
  `}

  @media (min-width: 1200px) {
    display: none;
  }
`;
