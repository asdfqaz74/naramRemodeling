import {
  PromotionLink,
  PromotionDate,
  PromotionTitle,
  PromotionTitleWrapper,
  PromotionIamge,
} from '@/styles/Promotion/Promotion';
import { Link } from 'react-router-dom';

type PromotionProps = {
  data: {
    id: number;
    img: string;
    date: string;
    title: string;
  };
};

function PromotionContainer({ data }: PromotionProps) {
  return (
    <PromotionLink>
      <Link to="/">
        <dl>
          <PromotionIamge>
            <img src={data.img} alt="홍보 이미지"></img>
          </PromotionIamge>
          <PromotionTitleWrapper>
            <PromotionDate>{data.date}</PromotionDate>
            <PromotionTitle>{data.title}</PromotionTitle>
          </PromotionTitleWrapper>
        </dl>
      </Link>
    </PromotionLink>
  );
}

export default PromotionContainer;
