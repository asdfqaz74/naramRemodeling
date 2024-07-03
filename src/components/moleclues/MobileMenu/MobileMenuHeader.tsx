import { Link } from 'react-router-dom';
import Logo from '/mobileLogo.png';
import MobileMenuSignIn from '@/components/atoms/MobileMenu/MobileMenuSignIn';
import { MobileMenuHeaderContainer } from '@/styles/components/MobileMenu/MobileMenu';
import useClick from '@/hook/useClick';

export default function MobileMenuHeader({ isLogin }: { isLogin: boolean }) {
  const { handleToggle } = useClick();
  return (
    <MobileMenuHeaderContainer>
      <Link to="/" onClick={handleToggle}>
        <img src={Logo} alt="나람 주식회사" />
      </Link>
      <MobileMenuSignIn isLogin={isLogin} />
    </MobileMenuHeaderContainer>
  );
}
