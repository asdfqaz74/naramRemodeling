import { useNavigate } from 'react-router-dom';
import Logo from '/logo.png';
import { useAtom } from 'jotai';
import { animate, isClicked } from '@/store/store';
import { LogoLinkContainer } from '@/styles/components/naviButton/naviButton';

export default function LogoLink() {
  const navigate = useNavigate();
  const [, setIsClick] = useAtom(isClicked);
  const [, setIsAnimated] = useAtom(animate);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    setIsClick((prev) => {
      if (prev) {
        return false;
      }
      return prev;
    });
    setIsAnimated((prev) => {
      if (prev) {
        return false;
      }
      return prev;
    });

    navigate('/');
    window.scrollTo(0, 0);
  };
  return (
    <LogoLinkContainer to="/" onClick={handleClick}>
      <img src={Logo} alt="주식회사 나람" />
    </LogoLinkContainer>
  );
}
