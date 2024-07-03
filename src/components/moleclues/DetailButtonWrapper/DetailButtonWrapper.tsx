import BasicButton from '@/components/atoms/Board/BasicButton';
import DeleteButton from '@/components/atoms/DeleteButton/DeleteButton';
import { StyledDetailButtonWrapper, StyledDetailButtonSubWrapper } from '@/styles/components/Board/BoardDetail';

function DetailButtonWrapper() {
  return (
    <StyledDetailButtonWrapper>
      <StyledDetailButtonSubWrapper>
        <BasicButton text="목록으로" to="/" padding="10px 20px" />
        <BasicButton
          text="수정하기"
          to="/"
          padding="10px 20px"
          background="white"
          borderColor="#D1D1D1"
          color="black"
        />
      </StyledDetailButtonSubWrapper>
      <DeleteButton />
    </StyledDetailButtonWrapper>
  );
}

export default DetailButtonWrapper;
