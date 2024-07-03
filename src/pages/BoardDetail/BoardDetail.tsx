import BoardDetailLayout from '@/components/organisms/BoardDetailLayout/BoardDetailLayout';
import PageLayout from '@/components/organisms/PageLayout/PageLayout';
import mainImage from '/Notice_main.jpg';
import ScrollToTop from '@/hook/ScrollToTop.ts';

function BoardDetail() {
  return (
    <div>
      <ScrollToTop />
      <PageLayout
        alt="문의사항 페이지"
        mainImage={mainImage}
        firstTitle="Q&A"
        secondTitle="문의사항"
        thirdTitle="나람에 궁금한 점을 알려주세요."
      >
        <BoardDetailLayout />
      </PageLayout>
    </div>
  );
}

export default BoardDetail;
