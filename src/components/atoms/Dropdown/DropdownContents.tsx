import { animate, isClicked } from '@/store/store';
import { useAtom } from 'jotai';
import { Link } from 'react-router-dom';

export type DropdownContentsProps = {
  content: string;
  route: string;
};

export default function DropdownContents({ content, route }: DropdownContentsProps) {
  const [, setIsClick] = useAtom(isClicked);
  const [, setIsAnimated] = useAtom(animate);

  const handleClick = () => {
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
  };

  return (
    <li
      style={{
        color: '#666',
        fontWeight: 500,
      }}
    >
      <Link to={route} onClick={handleClick}>
        {content}
      </Link>
    </li>
  );
}
