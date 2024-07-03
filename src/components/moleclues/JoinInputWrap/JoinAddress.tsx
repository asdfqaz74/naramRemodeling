import JoinInput from '../../atoms/Input/JoinInput';
import styled from 'styled-components';
import JoinButton from '@/components/atoms/JoinButton/JoinButton';
import { useId } from 'react';

//type
interface JoinAddressProps {
  type: string;
  button?: boolean;
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
  }
  & input {
    flex-grow: 1;
  }
`;

function JoinAddress({ type = 'email', button = false, isRequired = false }: JoinAddressProps) {
  const id = useId();

  return (
    <StyledJoinAddress>
      <label className="value" htmlFor={id}>
        주소
      </label>
      <div className="inner">
        <JoinInput id={id} type={type} isRequired={isRequired} />
        {button ? <JoinButton>검색하기</JoinButton> : ''}
      </div>
      <label className="value sr-only" htmlFor={id}>
        상세주소
      </label>
      <div className="inner">
        <JoinInput id={id} type={type} isRequired={isRequired} />
      </div>
    </StyledJoinAddress>
  );
}

export default JoinAddress;
