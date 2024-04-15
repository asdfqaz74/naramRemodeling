import styled from 'styled-components';

type HeaderContainerProps = {
  backgroundColor: string;
};

export const HeaderContainer = styled.header.withConfig({
  shouldForwardProp: (prop) => !['backgroundColor'].includes(prop),
})<HeaderContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: ${(props) => props.backgroundColor};
`;

export const HeaderFlexContainer = styled.div`
  padding: 0 4.0625rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
