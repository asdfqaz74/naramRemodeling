import JoinInput from '../../atoms/Input/JoinInput';
import styled from 'styled-components';
import JoinButton from '@/components/atoms/JoinButton/JoinButton';
import { useId } from 'react';

//type
interface JoinInputWrapProps {
  title: string;
  type: string;
  button?: boolean;
  valid?: boolean;
  validText?: 'id' | 'password' | 'pwConfirm' | 'birth' | 'birth';
  isRequired?: boolean;
}

//styled component
const StyledJoinInputWrap = styled.div`
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
  & .warning {
    ${(props) => props.theme.fontStyles.mobileBase};
    color: ${(props) => props.theme.colors.Red};
  }
  & .inner {
    display: flex;
    gap: 10px;
  }
  & input {
    flex-grow: 1;
  }
`;

function JoinInputWrap({
  title = 'test',
  type = 'email',
  button = false,
  valid = false,
  validText = 'id',
  isRequired = false,
}: JoinInputWrapProps) {
  const warning: { [key: string]: string } = {
    id: '아이디는 6자 이상의 소문자 알파벳으로 작성해주세요',
    password: '비밀번호 항목은 4 ~ 20자 이내로 입력해 주세요',
    pwConfirm: '비밀번호와 동일한 값을 입력해 주세요',
    number: '생년월일은 6자리로 입력해주세요',
    valid: '사용가능',
  };
  const id = useId();

  return (
    <StyledJoinInputWrap>
      <label className="value" htmlFor={id}>
        {title}
        {valid ? <span className="warning">{warning[validText]}</span> : ''}
      </label>
      <div className="inner">
        <JoinInput id={id} type={type} isRequired={isRequired} />
        {button ? <JoinButton>검사하기</JoinButton> : ''}
      </div>
    </StyledJoinInputWrap>
  );
}

export default JoinInputWrap;
