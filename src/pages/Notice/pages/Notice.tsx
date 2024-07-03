import PageLayout from '@/components/organisms/PageLayout/PageLayout';
import mainImage from '/Notice_main.jpg';
import BoardLayout from '@/components/organisms/BoardLayout/BoardLayout';

function Notice() {
  return (
    <div>
      <PageLayout
        alt="공지사항 페이지"
        mainImage={mainImage}
        firstTitle="NOTICE"
        secondTitle="공지사항"
        thirdTitle="고객을 위해 항상 노력하는 나람이 되겠습니다."
      >
        <BoardLayout to="/NoticeWrite" />
      </PageLayout>
    </div>
  );
}

export default Notice;
