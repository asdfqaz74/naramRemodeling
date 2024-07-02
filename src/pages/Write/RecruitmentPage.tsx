import Editor from '@/components/moleclues/Editor/Editor';
import { StyledContent } from '@/styles/components/PageSubTitle/PageSubTitle';
import WritePageLayout from '@/components/organisms/PageLayout/WritePageLayout';
import mainImage from '/Notice_main.jpg';

function RecruitementWritePage() {
  return (
    <WritePageLayout alt={'채용하기 작성 페이지'} mainImage={mainImage}>
      <p>RecritmentWritePage</p>
      <StyledContent>
        <Editor
          title="인재채용 작성하기"
          formText="작성하기"
          text="돌아가기"
          to="/Recruitment/#info"
          padding="20px 107px"
          fontSize="18px"
          fontWeight="700"
          label="중요공지"
        />
      </StyledContent>
    </WritePageLayout>
  );
}

export default RecruitementWritePage;
