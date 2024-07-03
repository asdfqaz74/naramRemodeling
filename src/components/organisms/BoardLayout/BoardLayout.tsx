import Search from '@/components/moleclues/Search/Search';
import BoardTable from '@/components/moleclues/BoardTable/BoardTable';
import { StyledContent } from '@/styles/components/PageSubTitle/PageSubTitle';

type BoardLayoutProps = {
  to: string;
};

function BoardLayout({ to }: BoardLayoutProps) {
  return (
    <StyledContent>
      <Search />
      <BoardTable to={to} />
    </StyledContent>
  );
}

export default BoardLayout;
