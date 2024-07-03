import { DropDown } from '@/components/atoms/Board/DropDown';
import SearchBar from '@/components/atoms/Board/SearchBar';
import { StyledSearch, StyledTopBoard } from '@/styles/components/Board/Board';
import ShowTotalBoard from '@/components/atoms/Board/ShowTotalBoard';

function Search() {
  return (
    <StyledTopBoard>
      <ShowTotalBoard />
      <StyledSearch>
        <DropDown options={['제목', '내용']} />
        <SearchBar />
      </StyledSearch>
    </StyledTopBoard>
  );
}

export default Search;
