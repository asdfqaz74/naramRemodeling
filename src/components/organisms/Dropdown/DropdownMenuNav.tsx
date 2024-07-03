import DropdownMenu from '@/components/moleclues/Dropdown/DropdownMenu';
import { animate } from '@/store/store';
import { DropdownMenuNavContainer } from '@/styles/components/DropdownMenu/Dropdown';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const INTRODUCE = [
  { content: 'CEO인사말', route: '/Introduction' },
  { content: '연혁', route: '/Introduction/#year' },
  { content: '경영이념', route: '/Introduction/#idle' },
  { content: '찾아오시는 길', route: '/Introduction/Location' },
];

const INFORMATION = [
  { content: '공지사항', route: '/Information/Notice' },
  { content: '나람 홍보 게시물', route: '/Information/Promotion' },
];

const PRODUCT = [
  { content: '양돈', route: '/Product/pork' },
  { content: '계육', route: '/Product/chicken' },
  { content: '오리', route: '/Product/duck' },
];

const RECRUITMENT = [{ content: '채용정보', route: '/Recruitment/#Info' }];

const CUSTOMER_CENTER = [
  {
    content: 'Q&A',
    route: '/CustomerCenter/QnA',
  },
];

type DropdownMenuNavProps = {
  isClicked: boolean;
};

export default function DropdownMenuNav({ isClicked }: DropdownMenuNavProps) {
  const [isAnimated] = useAtom(animate);

  const location = useLocation();

  useEffect(() => {
    // 스크롤 초기화 페이지목록, 스크롤 이동할 페이지목록
    const { pathname, hash } = location;

    // 스크롤 초기화 페이지목록 작업
    const resetScrollPages = ['/Introduction', '/Introduction/notice', '/Introduction/ad', '/Introduction/Location'];

    // pathname이 초기화 페이지목록에 포함되어있으면 스크롤을 초기화
    if (resetScrollPages.includes(pathname)) {
      window.scrollTo(0, 0);

      // hash가 존재하면 해당 id로 스크롤 이동
    } else if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition - offset + window.scrollY;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  }, [location]);
  return (
    <DropdownMenuNavContainer isClicked={isClicked} isAnimated={isAnimated}>
      <DropdownMenu title="회사소개" items={INTRODUCE} />
      <DropdownMenu title="정보센터" items={INFORMATION} />
      <DropdownMenu title="제품정보" items={PRODUCT} />
      <DropdownMenu title="인재채용" items={RECRUITMENT} />
      <DropdownMenu title="고객센터" items={CUSTOMER_CENTER} />
    </DropdownMenuNavContainer>
  );
}
