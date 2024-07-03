import ScrollToTop from '@/hook/ScrollToTop';
import { Outlet } from 'react-router-dom';

function Information() {
  return (
    <>
    <ScrollToTop/>
      <Outlet />
    </>
  );
}

export default Information;
