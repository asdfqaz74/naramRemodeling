import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainBannerContainer = styled.div`
  position: relative;
  & img {
    width: 100%;
    height: 60rem;
    object-fit: cover;
  }

  & > div {
    position: absolute;
    top: 33%;
    left: 9%;
    text-align: center;
    white-space: nowrap;
    text-shadow: 2px 2px 6px #000000;
  }

  & > div :nth-child(1),
  & > div :nth-child(3) {
    color: #fff;
    font-size: 5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.16px;
    margin-bottom: 0.875rem;
    position: relative;
  }

  & > div .dot::after {
    content: '•';
    position: absolute;
    top: 0;
    left: 40%;
    transform: translate(-50%, -65%);
  }

  & > div :nth-child(2) {
    color: #fff;
    font-size: 3.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.12px;
  }

  & > div :nth-child(4),
  & > div :nth-child(5) {
    color: #fff;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.08px;
    text-align: left;
  }

  @media (max-width: 768px) {
    background-color: #898989;

    & img {
      mix-blend-mode: multiply;
    }

    & > div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      white-space: nowrap;
    }

    & > div :nth-child(1),
    & > div :nth-child(2),
    & > div :nth-child(3) {
      color: #fff;
      font-size: 1.875rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.06px;
      margin-bottom: 0.4375rem;
    }

    & > div .dot::after {
      display: none;
    }

    & > div :nth-child(4),
    & > div :nth-child(5) {
      color: #fff;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.036px;
      text-align: center;
    }
  }
`;

export const HeaderContainer = styled.header`
  position: relative;
  z-index: 1;
`;

export const MainBoxContainer = styled.main`
  position: relative;
`;

export const MainBoxFlexBox = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;

  @media (max-width: 1200px) {
    width: 100%;
    justify-content: space-between;
  }
`;

type MainBoxTitleProps = {
  color: string;
  isBox: boolean;
};

export const MainBoxTitleContainer = styled.span.withConfig({
  shouldForwardProp: (prop) => !['isBox'].includes(prop),
})<MainBoxTitleProps>`
  font-size: 1.875rem;
  color: ${(props) => props.color};
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.00375rem;
  white-space: nowrap;

  ${(props) =>
    props.isBox &&
    `
    position: absolute;
    bottom: 10%;
    left: 13%;
  `}

  @media (max-width: 500px) {
    font-size: 1.125rem;

    ${(props) =>
      props.isBox &&
      `
    position: absolute;
    bottom: 10%;
    left: 13%;
    font-size: 1.125rem;
  `}
  }
`;

export const MainBoxImgContainer = styled.div`
  width: 23.5625rem;
  height: 18.75rem;

  background-color: #7b7b7b;
  border-radius: 1rem;
  & img {
    mix-blend-mode: multiply;
    object-fit: cover;
    border-radius: 1rem;
  }

  @media (max-width: 1200px) {
    width: 100%;
    height: 100%;
  }
`;

export const MainBoxLinkContainer = styled(Link).withConfig({
  shouldForwardProp: (prop) => !['isBox'].includes(prop),
})<MainBoxTitleProps>`
  font-size: 1.25rem;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.00375rem;

  color: ${(props) => props.color};
  white-space: nowrap;
  ${(props) =>
    props.isBox &&
    `
  position: absolute; 
  top: 10%; 
  right: 13%;
  
  `}

  @media (max-width: 500px) {
    font-size: 0.75rem;

    ${(props) =>
      props.isBox &&
      `
    position: absolute;
    top: 10%
    right: 13%;
    font-size: 1rem;
  `}
  }
`;

export const MainBoxLinkTextContainer = styled(Link)`
  color: #666666;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: -0.003rem;
  line-height: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 29.25rem;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const MainBoxTextContainer = styled.p`
  color: #666666;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: -0.003rem;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

// MainBoard

export const MainBoardContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: #ededed;
  padding: 2.4375rem 2.9375rem;
  width: 100%;
  gap: 1.875rem;
  border-radius: 1rem;
  min-width: 23.125rem;

  @media (max-width: 768px) {
    padding: 1.25rem;
    min-width: 18.75rem;
  }
`;

export const MainBoardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.625rem;
`;

export const MainBoardTextContainer = styled.div`
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  justify-content: space-between;
`;

export const MainBoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

// 메인페이지 컨텐츠 박스
export const MainContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0) 80.83%);
  padding: 8rem 3.6875rem;

  @media (max-width: 500px) {
    padding: 4rem 1.5rem;
  }
`;

export const MainContentsOneFlexBox = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
    gap: 3.5rem;
    align-items: center;
  }
`;

export const MainContentsTwoFlexBox = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 3.5rem;
    align-items: center;
  }
`;

// 오시는 길

export const MainPathContainer = styled.div`
  background-color: rgba(9, 9, 9, 0.5);
  height: 60rem;
  position: relative;
  width: 100%;
  & > img {
    mix-blend-mode: multiply;
    width: 100%;
    object-fit: cover;
    height: 60rem;
  }

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const MainKakaoMapContainer = styled.div`
  width: 80%;
  position: absolute;
  bottom: 6.375rem;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    width: 90%;
    top: 15%;
  }
`;

export const MainPathSpan = styled.span`
  font-size: 2.5rem;
  color: #fff;
  font-weight: 700;
  line-height: normal;
  transform: translateX(-50%);
  letter-spacing: -0.005rem;
  position: absolute;
  top: 15%;
  left: 50%;

  @media (max-width: 768px) {
    top: 5%;
    left: 15%;
    transform: translateX(0);
  }
`;

// 오시는 길 위치 상자
export const MainMapContainer = styled.div`
  background: rgba(21, 21, 21, 0.9);
  color: #fff;
  padding: 4.3125rem 2.75rem;
  height: 31.25rem;
  position: absolute;
  bottom: 15%;
  left: 15%;
  text-align: left;

  @media (max-width: 768px) {
    position: static;
    display: block;
    height: auto;
  }
`;

export const MainMapTitle = styled.span`
  font-size: 2.5rem;
  font-weight: 600;
`;

export const MainMapLine = styled.div`
  width: 100%;
  border-bottom: 2px solid #fff;
  line-height: 0.1rem;
  margin: 2.0625rem 0;
`;

export const MainMapFlexBox = styled.div`
  display: flex;
  gap: 0.875rem;
  align-items: flex-start;
  min-width: 6.875rem;

  > img {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (max-width: 768px) {
    min-width: 5rem;
  }
`;

export const MainMapLineFlexBox = styled.div`
  display: flex;
  margin-bottom: 1rem;
  gap: 1rem;
`;

export const MainMapText = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    white-space: normal;
  }
`;
