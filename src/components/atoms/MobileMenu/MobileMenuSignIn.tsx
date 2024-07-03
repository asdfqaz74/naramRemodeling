import Login from '@/../public/mobileLogin.svg?react';
import useClick from '@/hook/useClick';
import { MobileMenuSignInContainer } from '@/styles/components/MobileMenu/MobileMenu';

export default function MobileMenuSignIn({ isLogin }: { isLogin: boolean }) {
  const { handleToggle, handleLogout } = useClick();
  const handleClick = (e) => {
    if (isLogin) {
      handleLogout();
    }
    handleToggle(e);
  };

  const linkDestination = isLogin ? '/' : '/Login';

  return (
    <MobileMenuSignInContainer isLogin={isLogin} to={linkDestination} onClick={handleClick}>
      <span style={{ color: '#333333', fontSize: '1rem', fontWeight: '600' }}>{isLogin ? '로그아웃' : '로그인'}</span>
      <Login />
    </MobileMenuSignInContainer>
  );
}
