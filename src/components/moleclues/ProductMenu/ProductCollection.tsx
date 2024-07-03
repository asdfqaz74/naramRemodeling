import ProductTitle from '@/components/atoms/ProductMenu/ProductTitle';
import { ProductTitleLi, ProductTitleUl } from '@/styles/components/Product/Product';
import { useParams } from 'react-router-dom';

export default function ProductCollection() {
  const { productType } = useParams<{ productType: string }>();

  return (
    <nav>
      <ProductTitleUl>
        <ProductTitleLi productType={productType === 'pork' ? 'pork' : undefined}>
          <ProductTitle title="양돈" route="/Product/pork" />
        </ProductTitleLi>
        <ProductTitleLi productType={productType === 'chicken' ? 'chicken' : undefined}>
          <ProductTitle title="계육" route="/Product/chicken" />
        </ProductTitleLi>
        <ProductTitleLi productType={productType === 'duck' ? 'duck' : undefined}>
          <ProductTitle title="오리" route="/Product/duck" />
        </ProductTitleLi>
      </ProductTitleUl>
    </nav>
  );
}
