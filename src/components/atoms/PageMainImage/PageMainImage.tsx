import styled from 'styled-components';

type PageMainImageProps = {
  image: string;
  alt: string;
};

const StyledPageMainImage = styled.div<{ bgURL: string; alt: string }>`
  inline-size: 100%;
  height: 500px;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.bgURL});
  transition: 0.3s;

  @media (max-width: 1200px) {
    height: 300px;
  }

  @media (max-width: 768px) {
    height: 160px;
  }
`;

//ex) 회사 소개 페이지 또는 Q&A 페이지의 상단 메인 이미지
function PageMainImage({ image, alt }: PageMainImageProps) {
  return <StyledPageMainImage bgURL={image} alt={alt}></StyledPageMainImage>;
}

export default PageMainImage;
