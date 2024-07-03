import { StyledTotalBoard } from '@/styles/components/Board/Board';

function ShowTotalBoard(): React.ReactNode {
  // const BoardList = axios로 데이터 불러오기
  // const BoardListLength = BoardList.length;

  const Lists = [
    {
      number: '0',
      title: '날씨가 좋네요',
      date: '2024.04.01',
      id: '지인',
      view: '122',
    },
    {
      number: '1',
      title: '이불괴물아 살려줘',
      date: '2024.04.01',
      id: '태욱',
      view: '5',
    },
    {
      number: '3',
      title: '경화야 벚꽃보러갈래?',
      date: '2024.04.01',
      id: '진성',
      view: '72',
    },
    {
      number: '2',
      title: '누나한테 까불지말라했지',
      date: '2024.04.01',
      id: '경화',
      view: '35',
    },
  ];

  const BoardListLength = Lists.length;
  console.log(BoardListLength);

  return (
    <>
      <StyledTotalBoard>총 {BoardListLength}건</StyledTotalBoard>
    </>
  );
}

export default ShowTotalBoard;
