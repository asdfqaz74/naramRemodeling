import Editor from '@/components/moleclues/Editor/Editor';
import { StyledContent } from '@/styles/components/PageSubTitle/PageSubTitle';
import WritePageLayout from '@/components/organisms/PageLayout/WritePageLayout';
import mainImage from '/Notice_main.jpg';

function QnAWritePage() {
  return (
    <WritePageLayout alt={'문의하기 작성 페이지'} mainImage={mainImage}>
      <p>QnAWritePage</p>
      <StyledContent>
        <Editor
          title="Q&A 작성하기"
          formText="문의하기"
          text="돌아가기"
          to="/CustomerCenter/QnA"
          padding="20px 107px"
          fontSize="18px"
          fontWeight="700"
          label="비공개"
        />
      </StyledContent>
    </WritePageLayout>
  );
}

export default QnAWritePage;
