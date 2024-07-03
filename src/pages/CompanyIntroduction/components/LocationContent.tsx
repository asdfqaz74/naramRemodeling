import KakaoMap from '@/components/atoms/KakaoMap/KakaoMap';
import AddressGroup from '@/components/moleclues/AddressGrop/AddressGrop';
import { StyledContainer } from '@/styles/components/Location/Location';

function LocationContent() {
  return (
    <StyledContainer>
      <KakaoMap firstContent="(주) 나람사료" />
      <AddressGroup type={'desktop'} />
    </StyledContainer>
  );
}

export default LocationContent;
