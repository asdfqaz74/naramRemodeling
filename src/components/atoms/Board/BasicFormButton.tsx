import { StyleFormButton } from '@/styles/components/Board/Board';

type FormButtonProps = {
  formText: string;
  padding?: string;
  fontSize?: string;
  color?: string;
};

function BasicFormButton({ formText, padding, fontSize, color }: FormButtonProps) {
  return (
    <>
      <StyleFormButton type="submit" padding={padding} fontSize={fontSize} color={color}>
        {formText}
      </StyleFormButton>
    </>
  );
}

export default BasicFormButton;
