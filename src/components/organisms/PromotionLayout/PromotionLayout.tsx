import { StyledContent } from '@/styles/components/PageSubTitle/PageSubTitle';
import Search from '@/components/moleclues/Search/Search';
import PromotionList from '@/components/moleclues/PromotionList/PromotionList';

function PromotionLayout() {
  return (
    <StyledContent>
      <Search />
      <PromotionList to={'/PromotionWrite'} />
    </StyledContent>
  );
}

export default PromotionLayout;
