import styled, { css, keyframes } from 'styled-components';

const expandMenu = keyframes`
  from {
    height: 0;
    padding: 0;
    }
  to {
    height: 16.5rem;
    padding: 1.75rem 0;
  }
`;

const collapseMenu = keyframes`
  from {
    height: 16.5rem;
    padding: 1.75rem 0;
    }
  to {
    height: 0;
    padding: 0;
  }
`;

type DropdownMenuNavContainerProps = {
  isClicked: boolean;
  isAnimated: boolean;
};

export const DropdownMenuNavContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isClicked', 'isAnimated'].includes(prop),
})<DropdownMenuNavContainerProps>`
  display: flex;
  gap: 9.375rem;
  flex-wrap: nowrap;
  white-space: nowrap;
  background: linear-gradient(270deg, #f6f6f6 7.99%, rgba(255, 255, 255, 0.86) 96.23%);
  width: 100%;
  justify-content: center;
  height: 0;
  overflow: hidden;
  ${(props) =>
    props.isClicked && props.isAnimated
      ? css`
          animation: ${expandMenu} 0.2s forwards;
        `
      : props.isAnimated
        ? css`
            animation: ${collapseMenu} 0.2s forwards;
          `
        : ''}
`;
