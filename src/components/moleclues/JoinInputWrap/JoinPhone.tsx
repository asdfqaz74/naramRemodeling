import JoinInput from '../../atoms/Input/JoinInput';
import styled from 'styled-components';
import { useId } from 'react';

//type
interface JoinAddressProps {
  type: string;
  isRequired?: boolean;
}

//styled component
const StyledJoinAddress = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 5px;
  & .value {
    color: ${(props) => props.theme.colors.TextBlack};
    ${(props) => props.theme.fontStyles.textBase};
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  & .inner {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  & input {
    flex-grow: 1;
  }
`;

function JoinAddress({ type = 'email', isRequired = false }: JoinAddressProps) {
  const id = useId();

  return (
    <StyledJoinAddress>
      <label className="value" htmlFor={id}>
        핸드폰
      </label>
      <div className="inner">
        <JoinInput id={id} type={type} isRequired={isRequired} maxLength="4" />-
        <JoinInput id={id} type={type} isRequired={isRequired} maxLength="4" />-
        <JoinInput id={id} type={type} isRequired={isRequired} maxLength="4" />
      </div>
    </StyledJoinAddress>
  );
}

export default JoinAddress;
