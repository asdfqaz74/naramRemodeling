import { isClicked, mobileClick } from '@/store/store';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';

export default function useBackground(isMain: boolean) {
  const [changeColor, setChangeColor] = useState<string>('transparent');
  const [textColor, setTextColor] = useState<string>('#333333');
  const [iconColor, setIconColor] = useState<string>('#3974CC');
  const [isScroll, setIsScroll] = useState(false);
  const [isClick] = useAtom(isClicked);
  const [isFirstMount, setIsFirstMount] = useState(true);
  const [isMobile] = useAtom(mobileClick);

  useEffect(() => {
    setIsFirstMount(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isClick || isScroll || isMobile) {
      setChangeColor('#ffffff');
    } else {
      if (isFirstMount) {
        setChangeColor('transparent');
      } else {
        const timeoutId = setTimeout(() => {
          setChangeColor('transparent');
        }, 200);
        return () => clearTimeout(timeoutId);
      }
    }
  }, [isClick, isFirstMount, isScroll, isMobile]);

  useEffect(() => {
    if (isClick || isScroll || isMobile) {
      setTextColor('#333333');
      setIconColor('#3974CC');
    } else {
      if (isMain) {
        const timeoutId = setTimeout(() => {
          setTextColor('#ffffff');
          setIconColor('#ffffff');
        }, 200);
        return () => clearTimeout(timeoutId);
      } else {
        setTextColor('#333333');
        setIconColor('#3974CC');
      }
    }
  }, [isClick, isScroll, isMain, isMobile]);

  return { changeColor, isScroll, isClick, textColor, iconColor };
}
