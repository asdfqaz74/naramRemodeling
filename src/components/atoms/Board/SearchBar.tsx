import { StyledSearchBar } from '@/styles/components/Board/Board';

function SearchBar(): React.ReactNode {
  return (
    <>
      <StyledSearchBar>
        <label htmlFor="search">
          <input className="SearchInput" id="search" placeholder="검색어를 입력하세요" type="search"></input>
          <button className="SearchImg">
            <img src="./../public/search.svg" alt="찾기"></img>
          </button>
        </label>
      </StyledSearchBar>
    </>
  );
}

export default SearchBar;
