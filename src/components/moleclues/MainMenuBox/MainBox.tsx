import { MainBoxContainer } from '@/styles';
import MainBoxTitle from '../../atoms/MainMenuBox/MainBoxTitle';
import MainBoxImg from '@/components/atoms/MainMenuBox/MainBoxImg';
import MainBoxLink from '@/components/atoms/MainMenuBox/MainBoxLink';
import { ImageInfo } from '@/components/atoms/MainMenuBox/MainBoxImgTypes';

interface MainBoxProps extends ImageInfo {
  path: string;
}

export default function MainBox({ img, alt, path }: MainBoxProps) {
  return (
    <MainBoxContainer>
      <MainBoxImg img={img} alt={alt} />
      <MainBoxTitle title={alt} color="#ffffff" isBox />
      <MainBoxLink path={path} color="#ffffff" isBox />
    </MainBoxContainer>
  );
}
