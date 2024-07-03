import ScrollToTop from '@/hook/ScrollToTop';
import { Outlet } from 'react-router-dom';

//회사소개 첫 페이지 - CEO, 연혁 등등
function Introduction() {
  return (
    <>
      {/* 글로벌 네브  */}
      <ScrollToTop/>
      <Outlet />
    </>
  );
}

export default Introduction;
