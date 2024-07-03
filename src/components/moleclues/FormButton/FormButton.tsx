import { StyledButtonWrapper } from '@/styles/components/Board/Board';
import BasicButton from '@/components/atoms/Board/BasicButton';
import BasicFormButton from '@/components/atoms/Board/BasicFormButton';

type FormButtonProps = {
  formText: string;
  padding?: string;
  fontSize?: string;
  color?: string;
  text: string;
  to: string;
  fontWeight?: string;
};

function FormButton({ formText, text, to, padding, fontSize, fontWeight }: FormButtonProps) {
  return (
    <StyledButtonWrapper>
      <BasicFormButton formText={formText} />
      <BasicButton text={text} to={to} padding={padding} fontSize={fontSize} fontWeight={fontWeight} />
    </StyledButtonWrapper>
  );
}

export default FormButton;
