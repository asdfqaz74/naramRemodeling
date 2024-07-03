import PageLayout from '@/components/organisms/PageLayout/PageLayout';
import mainImage from '/Notice_main.jpg';
import BoardLayout from '@/components/organisms/BoardLayout/BoardLayout';

function Recruitment() {
  return (
    <div>
      <PageLayout
        alt="인재채용 페이지"
        mainImage={mainImage}
        firstTitle="Recruitment"
        secondTitle="인재채용"
        thirdTitle="나람과 함께 성장할 인재를 찾습니다."
      >
        <BoardLayout to="/RecruitmentWrite" />
      </PageLayout>
    </div>
  );
}

export default Recruitment;
