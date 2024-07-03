import { MainBoxTitleContainer } from '@/styles';

export default function MainBoxTitle({ title, color, isBox }: { title: string; color: string; isBox: boolean }) {
  return (
    <MainBoxTitleContainer color={color} isBox={isBox}>
      {title}
    </MainBoxTitleContainer>
  );
}
