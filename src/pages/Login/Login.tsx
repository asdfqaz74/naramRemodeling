import ScrollToTop from '@/hook/ScrollToTop';
import { Outlet } from 'react-router-dom';

//로그인 페이지 > 아이디 찾기, 비밀번호 찾기
function Login() {
  return (
    <>
      {/* 글로벌 네브  */}
      <ScrollToTop />
      <Outlet />
    </>
  );
}

export default Login;
