import { StyledBasicButton } from '@/styles/components/Board/Board';

type ButtonProps = {
  text: string;
  to: string;
  padding?: string;
  fontSize?: string;
  fontWeight?: string;
  background?: string;
  color?: string;
  borderColor?: string;
};

function BasicButton({ text, to, padding, fontSize, fontWeight, background, color, borderColor }: ButtonProps) {
  return (
    <>
      <StyledBasicButton
        to={to}
        padding={padding}
        fontSize={fontSize}
        fontWeight={fontWeight}
        background={background}
        color={color}
        borderColor={borderColor}
      >
        {text}
      </StyledBasicButton>
    </>
  );
}

export default BasicButton;
