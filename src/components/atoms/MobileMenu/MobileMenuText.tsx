import useClick from '@/hook/useClick';
import { MobileMenuTextContainer } from '@/styles/components/MobileMenu/MobileMenu';

type MobileMenuTextProps = {
  route: string;
  text: string;
};

export default function MobileMenuText({ route, text }: MobileMenuTextProps) {
  const { handleToggle } = useClick();
  return (
    <MobileMenuTextContainer to={route} onClick={handleToggle}>
      {text}
    </MobileMenuTextContainer>
  );
}
