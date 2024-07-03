import AddressIcon from '@/components/atoms/AddressIcon/AddressIcon';
import { StyledAddressGroup } from '@/styles/components/AddressGroup/AddressGroup';
import address from '/address_icon.svg';
import phone from '/phonNumber_icon.svg';
import fex from '/fex_icon.svg';
import email from '/email_icon.svg';

const ADDRESS = '충북 음성군 대소면 소석로 154';
const ADDRESS_SUB = '(소석리 51-2)';
const PHONE_NUMBER = '043-881-5401';
const FEX_NUMBER = '043-883-4600';
const EMAIL = 'evcompany@evcompany.co.kr';

const DESKTOP = 'desktop';
const MOBILE = 'mobile';

type AddressProps = {
  type: string; // 수정: boolean으로 변경
};

function AddressGroup({ type }: AddressProps) {
  return (
    <StyledAddressGroup>
      {type === DESKTOP ? (
        <div className={DESKTOP}>
          <AddressIcon
            first_content={ADDRESS}
            second_content={ADDRESS_SUB}
            image_src={address}
            image_alt={'주소 아이콘'}
          />
          <div className="Wrapper">
            <div className="divider" />
            <AddressIcon first_content={PHONE_NUMBER} image_src={phone} image_alt={'핸드폰번호 아이콘'} />
          </div>
          <div className="Wrapper">
            <div className="divider" />
            <AddressIcon first_content={FEX_NUMBER} image_src={fex} image_alt={'팩스번호 아이콘'} />
          </div>
          <div className="Wrapper">
            <div className="divider" />
            <AddressIcon first_content={EMAIL} image_src={email} image_alt={'이메일 아이콘'} />
          </div>
        </div>
      ) : (
        <div className={MOBILE}>
          <AddressIcon
            first_content={ADDRESS}
            second_content={ADDRESS_SUB}
            image_src={address}
            image_alt={'주소 아이콘'}
          />
          <AddressIcon first_content={PHONE_NUMBER} image_src={phone} image_alt={'핸드폰번호 아이콘'} />
          <AddressIcon first_content={FEX_NUMBER} image_src={fex} image_alt={'팩스번호 아이콘'} />
          <AddressIcon first_content={EMAIL} image_src={email} image_alt={'이메일 아이콘'} />
        </div>
      )}
    </StyledAddressGroup>
  );
}

export default AddressGroup;
