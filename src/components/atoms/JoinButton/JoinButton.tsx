import styled from 'styled-components';
import { ReactNode } from 'react';

//type
interface StyledJoinButtonProps {
  children: string | ReactNode;
}

const StyledJoinButton = styled.button`
  border: none;
  background: ${(props) => props.theme.colors.GrayFill};
  ${(props) => props.theme.fontStyles.textBase};
  padding: 14px 20px;
`;

function JoinButton({ children = '버튼' }: StyledJoinButtonProps) {
  return <StyledJoinButton type="button">{children}</StyledJoinButton>;
}

export default JoinButton;
