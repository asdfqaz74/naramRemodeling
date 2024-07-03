import CheckBox from '@/components/atoms/CheckBox/CheckBox';
import PasswordInput from '@/components/atoms/PasswordInput/PasswordInput';
import { StyledPrivateCheck } from '@/styles/components/Editor/Editor';

type QnACheckBoxProps = {
  label: string;
};

function QnACheckBox({ label }: QnACheckBoxProps) {
  return (
    <StyledPrivateCheck>
      <CheckBox label={label} />
      <PasswordInput />
    </StyledPrivateCheck>
  );
}

export default QnACheckBox;
