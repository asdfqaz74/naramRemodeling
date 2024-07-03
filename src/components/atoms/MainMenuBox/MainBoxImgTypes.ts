export interface ImageInfo {
  img: string;
  alt: string;
}

export type MainBoxImgProps = {
  [key: string]: ImageInfo;
};

export const images: MainBoxImgProps = {
  CS: {
    img: '/cs.png',
    alt: '고객센터',
  },
  path: {
    img: '/path.png',
    alt: '오시는길',
  },
  product: {
    img: '/product.png',
    alt: '제품정보',
  },
  recruit: {
    img: '/recruit.png',
    alt: '인재채용',
  },
};
