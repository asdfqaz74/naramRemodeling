import CheckBox from '@/components/atoms/CheckBox/CheckBox';
import { StyledCheckBoxP, StyledCheckBoxWrapper, StyledNormalCheckBox } from '@/styles/components/Editor/Editor';

type NormalCheckBoxProps = {
  label: string;
};

function NormalCheckBox({ label }: NormalCheckBoxProps) {
  return (
    <StyledNormalCheckBox>
      <StyledCheckBoxWrapper>
        <CheckBox label={label} />
        <StyledCheckBoxP>체크 시 공지사항 상단에 글이 표시됩니다.</StyledCheckBoxP>
      </StyledCheckBoxWrapper>
      <StyledCheckBoxWrapper>
        <CheckBox label="채용정보" />
        <StyledCheckBoxP>체크 시 인재채용란에 글이 따로 표기됩니다.</StyledCheckBoxP>
      </StyledCheckBoxWrapper>
    </StyledNormalCheckBox>
  );
}

export default NormalCheckBox;
