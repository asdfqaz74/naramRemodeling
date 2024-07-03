import MobileMenuHeader from '@/components/moleclues/MobileMenu/MobileMenuHeader';
import MobileMenuTitleText from '@/components/moleclues/MobileMenu/MobileMenuTitleText';
import {
  MobileMenuBackground,
  MobileMenuButtonContainer,
  MobileMenuContainer,
} from '@/styles/components/MobileMenu/MobileMenu';

import useClick from '../../../hook/useClick';
import { useAtom } from 'jotai';
import { loginCheck } from '@/store/store';

const INTRODUCTION = {
  '1': {
    route: '/Introduction',
    text: 'CEO인사말',
  },
  '2': {
    route: '/Introduction/#year',
    text: '연혁',
  },
  '3': {
    route: '/Introduction/#idle',
    text: '경영이념',
  },
  '4': {
    route: '/Introduction/Location',
    text: '찾아오시는 길',
  },
};

const INFORMATION = {
  '1': {
    route: '/Information/Notice',
    text: '공지사항',
  },
  '2': {
    route: '/Information/Promotion',
    text: '나람 홍보 게시물',
  },
};

const PRODUCT = {
  '1': {
    route: '/Product/pork',
    text: '양돈',
  },
  '2': {
    route: '/Product/chicken',
    text: '계육',
  },
  '3': {
    route: '/Product/duck',
    text: '오리',
  },
};

const RECRUITMENT = {
  '1': {
    route: '/Recruitment/#Info',
    text: '채용정보',
  },
};

const CUSTOMER_CENTER = {
  '1': {
    route: '/CustomerCenter/QnA',
    text: 'Q&A',
  },
};

export default function MobileMenu({ isClicked }: { isClicked: boolean }) {
  const { isClick } = useClick();
  const [isLogin] = useAtom(loginCheck);

  return (
    <MobileMenuBackground isClick={isClick}>
      <MobileMenuButtonContainer isClick={isClicked}>
        <MobileMenuContainer>
          <MobileMenuHeader isLogin={isLogin} />
          <MobileMenuTitleText title="회사소개" items={INTRODUCTION} />
          <MobileMenuTitleText title="정보센터" items={INFORMATION} />
          <MobileMenuTitleText title="제품정보" items={PRODUCT} />
          <MobileMenuTitleText title="인재채용" items={RECRUITMENT} />
          <MobileMenuTitleText title="고객센터" items={CUSTOMER_CENTER} />
        </MobileMenuContainer>
      </MobileMenuButtonContainer>
    </MobileMenuBackground>
  );
}
