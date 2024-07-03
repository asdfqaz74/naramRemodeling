import styled from 'styled-components';

type StyledAddressProps = {
  direction?: string;
  fontSize?: string;
};

export const StyledAddress = styled.div<StyledAddressProps>`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : 'flex')};
  font-size: ${(props) => parseInt(props.fontSize || '16') / 16}rem;
  align-items: center;
  text-align: start;
  gap: 1rem;
  white-space: nowrap;

  & .content {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
`;

export const StyledAddressGroup = styled.div`
  padding: 3.12rem 1.25rem;

  & .desktop {
    display: flex;
    flex-direction: 'flex';

    gap: 120px;
  }

  & .mobile {
    display: flex;
    flex-direction: column;
    gap: 1.31rem;
  }

  & .Wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  & .divider {
    border-left: 1px solid #d1d1d1;
    height: 100%;
  }
`;
