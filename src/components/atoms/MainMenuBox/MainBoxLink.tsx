import { MainBoxLinkContainer } from '@/styles';

export default function MainBoxLink({ path, color, isBox }: { path: string; color: string; isBox: boolean }) {
  return (
    <MainBoxLinkContainer to={path} color={color} isBox={isBox}>
      더보기 +
    </MainBoxLinkContainer>
  );
}
