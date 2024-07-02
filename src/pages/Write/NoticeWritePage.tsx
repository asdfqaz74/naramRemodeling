import Editor from '@/components/moleclues/Editor/Editor';
import { StyledContent } from '@/styles/components/PageSubTitle/PageSubTitle';
import WritePageLayout from '@/components/organisms/PageLayout/WritePageLayout';
import mainImage from '/Notice_main.jpg';

function NoticeWritePage() {
  return (
    <WritePageLayout alt={'게시글 작성 페이지'} mainImage={mainImage}>
      <p>NoticeWritePage</p>
      <StyledContent>
        <Editor
          title="공지사항 작성하기"
          formText="작성하기"
          text="돌아가기"
          to="/Information/notice"
          padding="20px 107px"
          fontSize="18px"
          fontWeight="700"
          label="중요공지"
        />
      </StyledContent>
    </WritePageLayout>
  );
}

export default NoticeWritePage;

// title과 text 각각 store에 객체로 관리
// 꺼내와서 상태 변수의 값에 따라 text와 title에 들어갈 값을 설정
