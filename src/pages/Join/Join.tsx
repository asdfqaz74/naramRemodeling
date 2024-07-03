import styled from 'styled-components';
import JoinInputWrap from '@/components/moleclues/JoinInputWrap/JoinInputWrap';
import JoinSubTitle from '@/components/atoms/JoinSubTitle/JoinSubTitle';
import JoinAddress from '@/components/moleclues/JoinInputWrap/JoinAddress';
import JoinPhone from '@/components/moleclues/JoinInputWrap/JoinPhone';

const StyledJoin = styled.div`
  &.wrapper {
    padding: 176px 60px;
    text-align: left;
    & > .inner {
      padding-inline-start: 3.125rem;
      display: flex;
      flex-direction: column;
      gap: 2.1875rem;
      margin-bottom: 6.25rem;
    }
  }
`;

function Join() {
  return (
    <StyledJoin className="wrapper">
      <JoinSubTitle isRequired={true}>필수정보 입력란</JoinSubTitle>
      <div className="inner">
        <JoinInputWrap isRequired={true} title="아이디" type="text" button={true} valid={true} validText="id" />
        <JoinInputWrap isRequired={true} title="비밀번호" type="password" valid={true} validText="password" />
        <JoinInputWrap isRequired={true} title="비밀번호 확인" type="password" valid={true} validText="pwConfirm" />
        <JoinInputWrap isRequired={true} title="이름" type="text" />
        <JoinInputWrap isRequired={true} title="이메일" type="이메일" />
        <JoinInputWrap isRequired={true} title="생년월일" type="number" valid={true} validText="pwConfirm" />
      </div>
      <JoinSubTitle>추가정보 입력</JoinSubTitle>
      <div className="inner">
        <JoinAddress type="address" button={true} />
        <JoinPhone type="number" />
        <JoinInputWrap title="별명" type="text" />
      </div>
    </StyledJoin>
  );
}

export default Join;
