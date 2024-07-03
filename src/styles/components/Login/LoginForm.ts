import styled from 'styled-components';

export const StyledLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 747px;
  /* gap: 5.43rem; */
  margin: 7.75rem auto;

  & .pGroup {
    color: #000;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: 3.125rem; /* 208.333% */
    letter-spacing: -0.0075rem;
    margin-top: 2.8125rem;
  }

  & .titleForm {
    text-align: center;
    margin-bottom: 87px;

    & p {
      margin-top: 10px;
      color: #999999;
    }
  }
  & .logo {
    height: 0%;
    display: block;
    margin: 0 auto; /* 이미지를 가운데로 정렬합니다. */
  }

  & .Find {
    margin-left: auto;
    display: flex;
    gap: 15px;
    white-space: nowrap;
    align-items: center;

    & .link {
      display: flex;
      align-items: center;
    }
  }

  & .ButtonGap {
    display: flex;
    flex-direction: column;
    gap: 3.37rem;
    margin: 20px 0;
  }

  & .divider {
    width: 100%;
    border: 1px solid black;
    opacity: 0.5;
  }

  & .dangerText {
    display: flex;
    gap: 18px;
    margin-right: auto;
    & p span {
      color: red;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 1.25rem;

    & .Find {
      margin-right: auto;
      gap: 3rem;
    }
  }
`;

export const StytledLoginInput = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 1.56rem;
  text-align: left;

  & input {
    color: black;
    border-radius: 4px;
    border: 1px solid var(--gray-300, #d1d1d1);
    width: 100%;
    background: var(--white, #fff);
    padding: 20px;
  }

  & .error {
    color: red;
    gap: 0rem;
  }

  & .input-container {
    position: relative;
  }

  & .HideIcon {
    position: absolute;
    right: 10px;
    bottom: 15px;
    cursor: pointer;
  }
`;
