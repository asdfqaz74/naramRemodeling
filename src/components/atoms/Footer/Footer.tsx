import { StyledContainer } from '@/styles/components/Footer/Footer';
import FooterLogo from '/logo_mark.svg';

function Footer() {
  return (
    <StyledContainer>
      <div className="address">
        <p>(주) 나람</p>
        <p>대표자 : 이범호</p>
        <p>사업자 등록번호 : 303-81-38781</p>
        <p>주소 : 충북 음성군 대소면 소석로 154 (소석리 51-2)</p>
        <div className="address_sub">
          <span>
            Tel: <a href="tel: 043-881-5401">043-881-5401</a>
          </span>
          <span className="divider" />
          <span>
            Fax: <a href="fax: 043-883-4600">043-883-4600</a>
          </span>
          <span className="divider" />
          <span>
            E-mail: <a href="mailto: asdfqaz1996@naver.com">asdfqaz1996@naver.com</a>
          </span>
        </div>
      </div>
      <img src={FooterLogo} alt="푸터에 위치한  회사 아이콘" />
    </StyledContainer>
  );
}

export default Footer;
