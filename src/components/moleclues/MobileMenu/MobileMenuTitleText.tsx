import MobileMenuTitle from '@/components/atoms/MobileMenu/MobileMenuTitle';
import MobileMenuTextContainer, { MobileMenuTextContainerProps } from './MobileMenuTextContainer';
import { useState } from 'react';
import { AnimatedContainer } from '@/styles/components/MobileMenu/MobileMenu';

interface MenuTitleTextProps extends MobileMenuTextContainerProps {
  title: string;
}

export default function MobileMenuTitleText({ title, items }: MenuTitleTextProps) {
  const [isClick, setIsClick] = useState(false);

  const handleToggle = () => {
    setIsClick((prev) => !prev);
  };

  return (
    <>
      <MobileMenuTitle title={title} isClicked={isClick} onClick={handleToggle} />
      <AnimatedContainer isOpen={isClick}>
        <MobileMenuTextContainer items={items} />
      </AnimatedContainer>
    </>
  );
}
