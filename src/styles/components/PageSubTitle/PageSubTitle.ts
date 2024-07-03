import styled from 'styled-components';

interface TextfontProps {
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: string;
  fontColor?: string;
  textPosition?: string;
  gap?: string;
  paddingTop?: string;
}

// Q&A, 회사소개, Notice 등 페이지에 쓰이는 PageLayout 전체 가로 넓이
export const StyledContent = styled.div<TextfontProps>`
  width: 100%;
  height: auto;
  display: flex;
  padding-left: 1.25rem;

  flex-direction: column;
  gap: ${(props) => parseInt(props.gap || '16') / 16}rem;
  background-color: ${(props) => props.color};
  position: relative;

  & .firstTitle {
    color: ${(props) => (props.fontColor ? props.fontColor : 'black')};
    font-family: 'Noto Sans';
    font-size: ${(props) => parseInt(props.fontSize || '80') / 16}rem;
    font-style: normal;
    text-align: left;
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '700')};
    line-height: 80px;
    margin: 0;
    padding: 0;
  }

  & .secondTitle {
    color: ${(props) => (props.fontColor ? props.fontColor : 'black')};
    font-family: 'Noto Sans';
    font-size: ${(props) => parseInt(props.fontSize || '40') / 16}rem;
    font-style: normal;
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '700')};
    line-height: 50px;
    margin: 0;
    padding: 0;
  }
  & .thirdTitle {
    color: ${(props) => (props.fontColor ? props.fontColor : 'black')};
    font-family: 'Noto Sans';
    font-size: ${(props) => parseInt(props.fontSize || '20') / 16}rem;
    font-style: normal;
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '500')};
    line-height: 30px;
    margin: 0;
    padding: 0;
  }

  & span {
    color: ${(props) => (props.fontColor ? props.fontColor : '#3974CC')};
    font-family: 'Noto Sans';
    font-size: ${(props) => parseInt(props.fontSize || '20') / 16}rem;
    font-style: normal;
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '500')};
    line-height: ${(props) => parseInt(props.lineHeight || '30') / 16}rem;
    margin: 0;
    padding: 0;
  }

  & .flex-column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${(props) => parseInt(props.gap || '16') / 16}rem;
    padding-top: ${(props) => parseInt(props.paddingTop || '16') / 16}rem;
  }
`;

export const StyledBar = styled.div`
  width: 79px;
  flex-shrink: 0;

  border: 1px solid ${(props) => (props.color ? props.color : 'black')};
`;
