import { MainBoxImgContainer } from '@/styles';
import { ImageInfo } from './MainBoxImgTypes';

export default function MainBoxImg({ img, alt }: ImageInfo) {
  return (
    <MainBoxImgContainer>
      <img src={img} alt={alt} />
    </MainBoxImgContainer>
  );
}
