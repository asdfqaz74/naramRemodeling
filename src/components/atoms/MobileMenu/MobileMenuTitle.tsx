import { MobileMenuTitleContainer } from '@/styles/components/MobileMenu/MobileMenu';
import arrow from '/arrow.svg';

type MobileMenuTitleProps = {
  title: string;
  isClicked: boolean;
  onClick: () => void;
};

export default function MobileMenuTitle({ title, isClicked, onClick }: MobileMenuTitleProps) {
  return (
    <MobileMenuTitleContainer isClicked={isClicked} onClick={onClick}>
      {title}
      <img src={arrow} alt="" />
    </MobileMenuTitleContainer>
  );
}
