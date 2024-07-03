import NaviButton from '@/components/atoms/naviButton/NaviButton';
import { GNBButton, GNBContainer, GNBLi } from '@/styles/components/naviButton/naviButton';
import Menu from '@/../public/menu.svg?react';
import useBackground from '@/hook/useBackground';
import useClick from '@/hook/useClick';
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { loginCheck } from '@/store/store';

type NaviBarProps = {
  isMain: boolean;
};

export default function NaviBar({ isMain }: NaviBarProps) {
  const { iconColor } = useBackground(isMain);
  const { isClick, handleToggle } = useClick();
  const [isLogin, setIsLogin] = useAtom(loginCheck);

  const handleLogoutButton = () => {
    localStorage.removeItem('isAuth');
    window.location.reload();
  };

  // 로그인 상태 확인
  useEffect(() => {
    const isAuth = localStorage.getItem('isAuth');
    if (isAuth === 'true') {
      setIsLogin(true);
    }
  }, [setIsLogin]);

  return (
    <>
      <GNBContainer>
        <li>
          <NaviButton text="회사소개" isMain={isMain} route="/Introduction" />
        </li>
        <li>
          <NaviButton text="정보센터" isMain={isMain} route="/Information" />
        </li>
        <li>
          <NaviButton text="제품정보" isMain={isMain} route="/Product/pork" />
        </li>
        <li>
          <NaviButton text="인재채용" isMain={isMain} route="/Recruitment" />
        </li>
        <li>
          <NaviButton text="고객센터" isMain={isMain} route="/CustomerCenter/QnA" />
        </li>
        {isLogin ? (
          <GNBLi>
            <NaviButton
              text="로그아웃"
              route="/"
              isMain={isMain}
              isLogoutButton
              hasImage
              onClick={handleLogoutButton}
            />
            <NaviButton text="/ 마이페이지" route="/MyPage" isMain={isMain} />
          </GNBLi>
        ) : (
          <li>
            <NaviButton text="로그인" route="/Login" isMain={isMain} isLoginButton hasImage />
          </li>
        )}
        <GNBButton color={iconColor} onClick={handleToggle} isClick={isClick}>
          <Menu width={'30'} height={'26'} />
        </GNBButton>
      </GNBContainer>
    </>
  );
}
