import { ProductTitleA } from '@/styles/components/Product/Product';

type ProductTitleProps = {
  title: string;
  route: string;
};

export default function ProductTitle({ title, route }: ProductTitleProps) {
  return <ProductTitleA to={route}>{title}</ProductTitleA>;
}
