import { MainBoxLinkTextContainer, MainBoxTextContainer } from '@/styles';

export default function MainBoardText({ text, route }: { text: string; route?: string }) {
  return (
    <>
      {route ? (
        <MainBoxLinkTextContainer to={route}>{text}</MainBoxLinkTextContainer>
      ) : (
        <MainBoxTextContainer> {text} </MainBoxTextContainer>
      )}
    </>
  );
}
