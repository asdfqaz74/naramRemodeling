import styled from 'styled-components';

//type
interface JoinInputProps {
  type: string;
  isRequired?: boolean;
  id: string;
  [key: string]: any;
}

const StyledJoinInput = styled.input`
  padding: 15px 10px;
  background: ${(props) => props.theme.colors.Gray100};
  border: none;
  ${(props) => props.theme.fontStyles.textInput};
  color: ${(props) => props.theme.colors.TextBlack};
`;

function JoinInput({ id, type, isRequired = false, ...restProps }: JoinInputProps) {
  return <StyledJoinInput id={id} type={type} required={isRequired} {...restProps} />;
}

export default JoinInput;
