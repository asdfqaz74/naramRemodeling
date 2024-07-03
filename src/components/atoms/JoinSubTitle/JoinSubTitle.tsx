import { StyledBar } from '@/styles/components/PageSubTitle/PageSubTitle';
import { ReactNode } from 'react';
import styled from 'styled-components';

//type
interface JoinSubTitleProps {
  children: string | ReactNode;
  isRequired?: boolean;
}

const StyledJoinSubTitle = styled.div`
  & h2 {
    ${(props) => props.theme.fontStyles.headingMedium};
    color: ${(props) => props.theme.colors.TextBlack};
  }
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 50px;
`;

function JoinSubTitle({ children, isRequired = false }: JoinSubTitleProps) {
  return (
    <StyledJoinSubTitle>
      <h2>{children}</h2>
      <StyledBar />
      {isRequired ? <p className="description">필수 입력란입니다</p> : ''}
    </StyledJoinSubTitle>
  );
}

export default JoinSubTitle;
