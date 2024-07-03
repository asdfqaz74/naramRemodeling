import PageLayout from '@/components/organisms/PageLayout/PageLayout';
import mainImage from '/Notice_main.jpg';
import PromotionLayout from '@/components/organisms/PromotionLayout/PromotionLayout';

function Promotion() {
  return (
    <div>
      <PageLayout
        alt="홍보게시판 페이지"
        mainImage={mainImage}
        firstTitle="Promotion"
        secondTitle="나람 홍보 게시물"
        thirdTitle="고객을 위해 항상 노력하는 나람이 되겠습니다."
      >
        <PromotionLayout />
      </PageLayout>
    </div>
  );
}

export default Promotion;
