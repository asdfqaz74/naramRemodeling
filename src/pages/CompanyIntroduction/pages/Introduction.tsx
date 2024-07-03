import PageLayout from '@/components/organisms/PageLayout/PageLayout';
import mainImage from '/introduction_main.jpg';
import IntroductionContent from '../components/IntroductionContent';

//회사소개 첫 페이지 - CEO, 연혁 등등
function Introduction() {
  return (
    <>
      <PageLayout
        alt="회사소개 페이지"
        mainImage={mainImage}
        firstTitle="COMPANY"
        secondTitle="회사소개"
        thirdTitle="고객의 만족은 우리의 기쁨 "
        thirdSubTitle="나람사료"
      >
        <IntroductionContent />
      </PageLayout>
    </>
  );
}

export default Introduction;
