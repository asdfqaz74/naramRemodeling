import styled from 'styled-components';

export const StyledButton = styled.div`
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.12px;
  width: 100%;
  border-radius: 30px;
  font-size: 1.5rem;

  & .login {
    border-radius: 1.87rem;
    background-color: #6091ff;
    color: white;
    width: 100%;
    height: 5.5rem;
  }

  & .signUp {
    border-radius: 1.87rem;
    background-color: white;
    color: #5b86e5;
    border: 2px solid #5b86e5;
    width: 100%;
    height: 5.5rem;
  }

  @media (max-width: 768px) {
    & .login {
      height: 4.5rem;
    }

    & .signUp {
      height: 4.5rem;
    }
  }
`;
