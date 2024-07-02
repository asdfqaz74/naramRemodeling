import PageLayout from '@/components/organisms/PageLayout/PageLayout';
import mainImage from '/Notice_main.jpg';
import BoardLayout from '@/components/organisms/BoardLayout/BoardLayout';

function QnA() {
  return (
    <div>
      <PageLayout
        alt="문의사항 페이지"
        mainImage={mainImage}
        firstTitle="Q&A"
        secondTitle="문의사항"
        thirdTitle="나람에 궁금한 점을 알려주세요."
      >
        <BoardLayout to="/QnAWrite" />
      </PageLayout>
    </div>
  );
}

export default QnA;
