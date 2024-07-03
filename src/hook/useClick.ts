import { mobileClick } from '@/store/store';
import { useAtom } from 'jotai';

export default function useClick() {
  const [isClick, setIsClick] = useAtom(mobileClick);

  const handleToggle = (e) => {
    e.stopPropagation();
    setIsClick((prev) => !prev);
  };

  const handleLogout = async () => {
    localStorage.removeItem('isAuth');
    window.location.reload();
  };

  return {
    isClick,
    handleToggle,
    handleLogout,
  };
}
