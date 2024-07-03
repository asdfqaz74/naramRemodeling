import { StyledPageTitle } from '@/styles/components/Board/Board';

type PageTitle = {
  EngTitle: string;
  KorTitle: string;
};

function PageTitle({ EngTitle, KorTitle }: PageTitle) {
  return (
    <StyledPageTitle>
      <span className="EngTitle">{EngTitle}</span>
      <h2 className="KorTitle">{KorTitle}</h2>
    </StyledPageTitle>
  );
}

export default PageTitle;
