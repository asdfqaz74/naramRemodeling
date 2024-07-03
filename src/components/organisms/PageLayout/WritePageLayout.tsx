import PageMainImage from '@/components/atoms/PageMainImage/PageMainImage';
import { Wrapper } from '@/styles/components/IntroductionPage/Introduction';
import { StyledPageMainImageWrapper } from '@/styles/components/PageMainImageWrapper/PageMainImageWrapper';
import { ReactNode } from 'react';

type PageLayoutProps = {
  alt: string;
  children: ReactNode;
  mainImage: string;
};

function WritePageLayout({ alt, children, mainImage }: PageLayoutProps) {
  return (
    <>
      <Wrapper>
        <StyledPageMainImageWrapper>
          <PageMainImage image={mainImage} alt={alt} />
          {children}
        </StyledPageMainImageWrapper>
      </Wrapper>
    </>
  );
}

export default WritePageLayout;
