import styled from 'styled-components';

interface TextfontProps {
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: string;
  fontColor?: string;
  textPosition?: string;
}

type TextfontProps2 = {
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: string;
  fontColor?: string;
  textPosition?: string;
};

export const StyledImageFromTop = styled.div`
  width: 100%;
`;

// Q&A, 회사소개, Notice 등 페이지에 쓰이는 PageLayout 위치 또는 스타일 조절
//  PageLayout 전체 가로 넓이는 styles > PageSubTitle.ts 에 위치
export const StyledFlexCenter = styled.div`
  inline-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  padding-top: 4.99rem;
  background-color: white;
  /* border: 1px solid black; */
`;
/* margin-top: ${(props) => parseInt(props.margin || '-168') / 16}rem; */

export const StyledDivFlex = styled.div<{ gap?: string; paddingBottom?: string }>`
  display: flex;
  justify-content: space-between;
  gap: ${(props) => parseInt(props.gap || '20') / 16}rem;
  padding-bottom: ${(props) => parseInt(props.paddingBottom || '16') / 16}rem;

  & .flexColumn {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${(props) => parseInt(props.gap || '16') / 16}rem;
    padding-top: 4.81rem;
  }

  & .flexColumn02 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3.37rem;
  }
`;

export const StyledTextfont = styled.p<TextfontProps>`
  color: ${(props) => (props.fontColor ? props.fontColor : 'black')};
  font-family: 'Noto Sans';
  font-size: ${(props) => parseInt(props.fontSize || '16') / 16}rem;
  font-style: normal;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '700')};
  line-height: ${(props) => parseInt(props.fontSize || '16') / 16}rem;
  margin: 0;
  padding: 0;
`;

export const StyledDiscription = styled.div<TextfontProps2>`
  display: flex;
  flex-direction: column;
  gap: 60px;
  text-align: ${(props) => (props.textPosition ? props.textPosition : 'left')};

  & .mainText {
    color: ${(props) => (props.fontColor ? props.fontColor : '#333')};
    font-family: 'Noto Sans';
    font-size: ${(props) => parseInt(props.fontSize || '30') / 16}rem;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    margin: 0;
    padding: 0;
    letter-spacing: -0.15px;
  }

  & .ceoName {
    color: #333;
    text-align: right;
    font-family: 'Noto Sans';
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px;
  }

  & .firstText {
    color: ${(props) => (props.fontColor ? props.fontColor : '#333')};
    font-family: 'Noto Sans';
    font-size: ${(props) => parseInt(props.fontSize || '18') / 16}rem;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    margin: 0;
    padding: 0;
  }

  & .secondText {
    color: ${(props) => (props.fontColor ? props.fontColor : '#666')};
    font-family: 'Noto Sans';
    font-size: ${(props) => parseInt(props.fontSize || '18') / 16}rem;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: -0.09px;
    margin: 0;
    padding: 0;
  }
`;

export const StyledText = styled.p<TextfontProps>`
  color: ${(props) => (props.fontColor ? props.fontColor : 'black')};
  font-family: 'Noto Sans';
  font-size: ${(props) => parseInt(props.fontSize || '16') / 16}rem;
  font-style: normal;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '700')};
  line-height: 40px;
  margin: 0;
  padding: 0;
`;

export const StyledSpanText = styled.span<TextfontProps>`
  color: ${(props) => (props.fontColor ? props.fontColor : '#3974CC')};
  font-family: 'Noto Sans';
  font-size: ${(props) => parseInt(props.fontSize || '16') / 16}rem;
  font-style: normal;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '600')};
  line-height: ${(props) => parseInt(props.lineHeight || '16') / 16}rem;
  margin: 0;
  padding: 0;
`;

export const StyledBar = styled.div`
  width: 79px;
  flex-shrink: 0;

  border: 1px solid ${(props) => (props.color ? 'black' : 'white')};
`;

export const StyledTextDiv = styled.div<TextfontProps>`
  display: flex;
  flex-direction: column;
  gap: 60px;
  text-align: ${(props) => (props.textPosition ? props.textPosition : 'left')};
`;

export const Wrapper = styled.div`
  position: relative;
  padding-top: 76px;
  & .mainMenuPosition {
    display: flex;
    justify-content: center;
    padding-bottom: 4.5rem;
  }
`;
