import { MainMapContainer, MainMapFlexBox, MainMapLine, MainMapLineFlexBox, MainMapText, MainMapTitle } from '@/styles';
import MapPin from '/mapPin.svg';

export default function MainMap() {
  return (
    <MainMapContainer>
      <MainMapTitle>주식회사 나람</MainMapTitle>
      <MainMapLine />
      <MainMapLineFlexBox>
        <MainMapFlexBox>
          <img src={MapPin} alt="" />
          <MainMapText>주소</MainMapText>
        </MainMapFlexBox>
        <MainMapText>
          충북 음성군 대소면 소석로 154
          <br /> (소석리 51-2)
        </MainMapText>
      </MainMapLineFlexBox>
      <MainMapLineFlexBox>
        <MainMapFlexBox>
          <img src={MapPin} alt="" />
          <MainMapText>연락처</MainMapText>
        </MainMapFlexBox>
        <MainMapText>043-881-5401</MainMapText>
      </MainMapLineFlexBox>
    </MainMapContainer>
  );
}
