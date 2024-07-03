import PageSubTitle from '@/components/atoms/PageTitle/PageSubTitle';
import { StyledFlexCenter } from '@/styles/components/IntroductionPage/Introduction';
import { ReactNode } from 'react';

type PageLayout = {
  firstTitle?: string;
  firstSubTitle?: string;
  secondTitle?: string;
  thirdTitle?: string;
  thirdSubTitle?: string;
  children: ReactNode;
};

function PageSubTitleLayout({
  firstTitle,
  firstSubTitle,
  secondTitle,
  thirdTitle,
  thirdSubTitle,
  children,
}: PageLayout) {
  return (
    <div>
      <StyledFlexCenter>
        {/* // Q&A, 회사소개, Notice 등 페이지에 쓰이는 PageLayout 전체 가로 넓이  PageSubTitle > StyledContent */}
        <PageSubTitle
          firstTitle={firstTitle}
          firstSubTitle={firstSubTitle}
          secondTitle={secondTitle}
          thirdTitle={thirdTitle}
          thirdSubTitle={thirdSubTitle}
        ></PageSubTitle>
        {children}
      </StyledFlexCenter>
    </div>
  );
}

export default PageSubTitleLayout;
