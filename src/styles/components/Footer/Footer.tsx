import styled from 'styled-components';

export const StyledContainer = styled.div`
  border-top: 1px solid #d1d1d1;
  padding: 2.36rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: end;
  background-color: white;
  width: 100%;
  gap: 2rem;

  & .address {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
    white-space: nowrap;
  }

  & .address_sub {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  & .divider {
    border-left: 1px solid #333;
  }

  @media (max-width: 768px) {
    padding: 2.125rem 0.625rem;
    flex-direction: column;
    align-items: flex-start;

    & .address {
      align-items: flex-start;
      text-align: start;
      white-space: wrap;
    }

    & .address_sub {
      flex-direction: column;
      gap: 0.5rem;
    }

    & .divider {
      display: none;
    }

    & img {
      align-self: end;
    }
  }
`;
